import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CATEGORY_DATA, CV_FILE_NAME, PORTFOLIO_DATA } from 'src/app/data';
import { Category } from 'src/app/models/category';
import { Portfolio } from 'src/app/models/portfolio';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = '';
  email = '';
  subject = '';
  message = '';

  portAll: Portfolio[] = [];
  category: Category[] = [];
  readonly portfolio = PORTFOLIO_DATA;
  readonly catPortfolio = CATEGORY_DATA;
  readonly cvFileName = CV_FILE_NAME;

  constructor(
    private readonly messageService: MessageService,
    private readonly titleService: Title,
    private readonly metaService: Meta,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.category = [...this.catPortfolio];
    this.portAll = [...this.portfolio];
    this.setHomeMeta();
  }

  switchOnHome(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  switchPorftolio(): void {
    this.router.navigate(['/projects']);
  }

  openProject(project: Portfolio): void {
    this.router.navigate(['/projects'], { queryParams: { id: project._id } });
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  openExternal(url: string, event?: Event): void {
    event?.stopPropagation();
    if (!url) {
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  async addMessage(): Promise<void> {
    const data = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    };

    const result = await this.sendEmailWithEmailJs(data);
    if (result.ok) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message sent successfully.' });
      this.resetContactForm();
      return;
    }

    const missing = this.getMissingEmailJsConfig();
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: missing.length
        ? `EmailJS not configured: missing ${missing.join(', ')}`
        : `Email delivery failed: ${result.error || 'Check template variables and allowed domains.'}`
    });
  }

  private async sendEmailWithEmailJs(data: { name: string; email: string; subject: string; message: string; }): Promise<{ ok: boolean; error?: string; }> {
    const { serviceId, templateId, publicKey } = environment.emailjs;
    if (!serviceId || !templateId || !publicKey) {
      return { ok: false, error: 'Missing service/template/public key' };
    }

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: 'contactsalaheddinenaji@gmail.com',
        reply_to: data.email
      }, {
        publicKey
      });
      return { ok: true };
    } catch (err: any) {
      console.error('EmailJS error:', err);
      const status = err?.status ? `status ${err.status}` : '';
      const text = err?.text || err?.message || 'Unknown EmailJS error';
      return { ok: false, error: [status, text].filter(Boolean).join(' - ') };
    }
  }

  private getMissingEmailJsConfig(): string[] {
    const missing: string[] = [];
    if (!environment.emailjs.serviceId) missing.push('serviceId');
    if (!environment.emailjs.templateId) missing.push('templateId');
    if (!environment.emailjs.publicKey) missing.push('publicKey');
    return missing;
  }

  private resetContactForm(): void {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }

  getCategoryName(project: Portfolio): string {
    const categoryId = typeof project.category === 'string'
      ? project.category
      : project.category?._id || '';
    return this.category.find((cat) => cat._id === categoryId)?.name || 'Project';
  }

  downloadPdf(): void {
    const link = document.createElement('a');
    link.href = `assets/uploads/${this.cvFileName}`;
    link.download = this.cvFileName;
    link.click();
  }

  private setHomeMeta(): void {
    this.titleService.setTitle('Salaheddine Naji | Full-Stack Developer');
    this.metaService.updateTag({
      name: 'description',
      content: 'Full-Stack Developer specialized in Angular and Node.js, building business-focused web apps, dashboards, APIs, and ERP modules.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'Salaheddine Naji | Full-Stack Developer' });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Professional portfolio featuring Angular and Node.js projects, case studies, and freelance services.'
    });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:image', content: 'assets/img/cover.jpg' });
  }
}
