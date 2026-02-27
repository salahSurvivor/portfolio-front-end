import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORY_DATA, PORTFOLIO_DATA } from 'src/app/data';
import { Category } from 'src/app/models/category';
import { Portfolio } from 'src/app/models/portfolio';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  cat = 'All';
  value = '';
  home = '';
  portfolios = 'active';

  port: Portfolio[] = [];
  portAll: Portfolio[] = [];
  category: Category[] = [];
  selectCat = '';

  selectedProject: Portfolio | null = null;
  safeDemoUrl: SafeResourceUrl | null = null;
  images: any[] = [];
  showProjectList = true;

  readonly portfolio = PORTFOLIO_DATA;
  readonly catPortfolio = CATEGORY_DATA;

  responsiveOptions: any[] = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 1 }
  ];

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.category = [...this.catPortfolio];
    this.portAll = [...this.portfolio];
    this.port = [...this.portfolio];

    this.route.queryParamMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) {
        this.showProjects();
        return;
      }

      const project = this.portAll.find((p) => p._id === id);
      if (project) {
        this.setPostDet(project, false);
      } else {
        this.showProjects();
      }
    });
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  goProjects(): void {
    this.showProjects();
    this.router.navigate(['/projects']);
  }

  showProjects(): void {
    this.showProjectList = true;
    this.selectedProject = null;
    this.safeDemoUrl = null;
    this.images = [];
  }

  setPostDet(data: Portfolio, updateUrl = true): void {
    this.showProjectList = false;
    this.images = [];
    this.selectedProject = data;
    this.safeDemoUrl = data.liveDemo?.includes('youtube')
      ? this.sanitizer.bypassSecurityTrustResourceUrl(data.liveDemo)
      : null;

    for (const img of data.images || []) {
      this.images.push({
        itemImageSrc: `assets/uploads/${img}`,
        thumbnailImageSrc: `assets/uploads/${img}`,
        alt: `${data.title} screenshot`,
        title: data.title
      });
    }

    if (updateUrl && data._id) {
      this.router.navigate(['/projects'], { queryParams: { id: data._id } });
    }
  }

  filterCat(cat: Category | ''): void {
    if (cat && typeof cat !== 'string') {
      this.selectCat = cat._id?.toString() || '';
    }
    if (this.cat === 'All') {
      this.selectCat = '';
    }

    const keyword = this.value.toLowerCase().trim();
    this.port = this.portAll.filter((project) => {
      const categoryId = typeof project.category === 'string'
        ? project.category
        : project.category?._id?.toString() || '';

      const categoryMatch = !this.selectCat || categoryId.includes(this.selectCat);
      const titleMatch = project.title.toLowerCase().includes(keyword);
      return categoryMatch && titleMatch;
    });
  }

  openExternal(url: string, event?: Event): void {
    event?.stopPropagation();
    if (!url) {
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
