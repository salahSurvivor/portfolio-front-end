import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { MessageService } from 'primeng/api';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  file: File;
  pdfSrc!:SafeResourceUrl;

  constructor(private readonly cv: DashboardService,
              private messageService: MessageService,
              private sanitizer: DomSanitizer){}
  
  ngOnInit(): void{
    this.cv.readCv().subscribe((vl) => {
      let url = 'assets/uploads/'+ vl[0].name + '#toolbar=0'
      this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    });
  }
  //#toolbar=0
  onFileSelected(event): void{
    this.file = event.currentFiles;
  }

  uploadCv(): void{
    const formData = new FormData();
    let spliExt = this.file[0].name.split('.');
    let ext = spliExt[spliExt.length - 1];
    let randomName = 'naji' + Math.floor(Math.random() * 5000)  + '.' + ext;
    formData.append('images', this.file[0], randomName);

    this.cv.upload(formData).subscribe();

    const data = {
      _id: '648b26d1a42e19bebe5ea9a5',
      name: randomName
    }

    this.cv.updateCv(data).subscribe(
      (res) => {
        this.ngOnInit();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Uploaded With Success!!' })
      },
      (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message })
    );
  }

  openPdf() {
    const pdfUrl = 'assets/uploads/naji1750.pdf';
    window.open(pdfUrl, '_blank');
  }
}
