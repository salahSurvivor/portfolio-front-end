import { Component, ViewChild  } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Portfolio } from 'src/app/models/portfolio';
import { Category } from 'src/app/models/category';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

/**Add Page***/
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent{
  portfolios: Portfolio[];
  cats: Category[];

  /***Toggle vars**/
  onList: boolean = true;
  onAdd: boolean = false;
  onUpdate: boolean = false;

  constructor(private portfolio: DashboardService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,){}

  ngOnInit(): void{
    this.portfolio.readPortfolio().subscribe((vl) => this.portfolios = vl);
    this.portfolio.readCategory().subscribe((vl) => this.cats = vl);
  }

  deletePortfolio(data): void{
    this.portfolio.deletePortfolio(data).subscribe(
      (res) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted With Success!!' });
        this.ngOnInit();
      },
      (err) =>  this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message })
    );
  }

  confirm1(data) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to Delete This?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.deletePortfolio(data);
        },
        reject: (type) => {
            switch (type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                    break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                    break;
            }
        }
    });
  }
  
  /*****Toggle Functions******/
  togglePages(): void{
    this.onAdd = !this.onAdd;
    this.onList = !this.onList;
    this.nullVars();
  }

  toggleUpdate(): void{
    this.onList = true;
    this.onAdd = false;
    this.onUpdate = false;
  }

  /*****************************Add Page**********************************/
  @ViewChild('fileUploadComponent', { static: false })
  fileUploadComponent!: FileUpload;
  @ViewChild('fileUploadComponent2', { static: false })
  fileUploadComponent2!: FileUpload;

  updateId: String;
  title: string;
  desc: string;
  github: string;
  category: string;
  picture: string;
  resume: string;
  hashtags: string[];
  selectedCat: Category;
  covers: any[] = [];
  images: any[] = [];
  coversName: String[] = [];
  imagesName: String[] = [];
  imagesN: any[] = [];
  coversN: any[] = [];

  addCat(): void{
    this.portfolio.createCategory({name: this.category}).subscribe(
      (res) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Added With Success!!' });
        this.nullVars();
        this.ngOnInit();
      },
      (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message })
    )
  }

  onFileSelected(event: any): void{
    for(let file of event.files){
      this.covers.push(file);
    } 
  }

  onImageSelected(event): void{
    for(let file of event.files){
      this.images.push(file);
    }
  }

  onRemoveCovers(event): void{
    this.covers = this.covers.filter((vl) => vl.name !== event.file.name);
    this.coversN = this.coversN.filter((vl) => vl !== event.file.name);
  }

  onRemoveImages(event): void{
    this.images = this.images.filter((vl) => vl.name !== event.file.name);
    this.imagesN = this.imagesN.filter((vl) => vl !== event.file.name);
  }

  onRemoveImagesName(name): void{
    this.imagesName = this.imagesName.filter((vl) => vl !== name)
  }

  onRemoveCoversName(name): void{
    this.coversName = this.coversName.filter((vl) => vl !== name)
  }

  addPortfolio(): void{
    const formData = new FormData();
    const formData2 = new FormData();

    for(let file of this.covers){
      let spliExt = file.name.split('.');
      let ext = spliExt[spliExt.length - 1];
      let randomName = 'naji' + Math.floor(Math.random() * 5000)  + '.' + ext;
      formData2.append('images', file, randomName);
      this.coversName.push(randomName);
    }

    for(let file of this.images){
      let spliExt = file.name.split('.');
      let ext = spliExt[spliExt.length - 1];
      let randomName = 'naji' + Math.floor(Math.random() * 5000)  + '.' + ext;
      formData2.append('images', file, randomName);
      this.imagesName.push(randomName);
    }

    this.portfolio.upload(formData).subscribe();
    this.portfolio.upload(formData2).subscribe();

    const data: Portfolio = {
      title: this.title,
      cover: this.coversName,
      category: this.selectedCat,
      hashtags: this.hashtags,
      github: this.github,
      resume: this.resume,
      description: this.desc,
      images: this.imagesName
    }

    this.portfolio.createPortfolio(data).subscribe(
      res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Added With Success' });
        this.nullVars();
        this.onUpdate = false;
        this.togglePages();
        this.ngOnInit();
      },
      err => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message })
    );
  }

  nullVars(): void{
    this.covers = [];
    this.images = [];
    this.coversName = [];
    this.imagesName = [];
    this.imagesN = [];
    this.coversN = [];
    this.hashtags = [];
    this.title = '';
    this.github = '';
    this.category = '';
    this.desc = '';
    if(this.fileUploadComponent)
      this.fileUploadComponent.clear();
    if(this.fileUploadComponent2)  
      this.fileUploadComponent2.clear();
  }

  /*****************************Update Page**********************************/
  setUpdatePort(portfolios): void{
    this.onUpdate = true;
    this.onList = false;
    this.onAdd = false;

    this.updateId = portfolios._id;
    this.title = portfolios.title;
    this.github = portfolios.github;
    this.desc = portfolios.description;
    this.hashtags = portfolios.hashtags;
    this.resume = portfolios.resume;
    this.selectedCat = this.cats.find((vl) => vl._id === portfolios.category);

    //this for show images in the page
    this.coversName = portfolios.cover;
    this.imagesName = portfolios.images;
  }
  
  updatePort(): void{
    const formData = new FormData();
    const formData2 = new FormData();

    for(let file of this.covers){
      let spliExt = file.name.split('.');
      let ext = spliExt[spliExt.length - 1];
      let randomName = 'naji' + Math.floor(Math.random() * 5000)  + '.' + ext;
      formData.append('images', file, randomName);
      this.coversN.push(randomName);
    }

    for(let file of this.images){
      let spliExt = file.name.split('.');
      let ext = spliExt[spliExt.length - 1];
      let randomName = 'naji' + Math.floor(Math.random() * 5000)  + '.' + ext;
      formData2.append('images', file, randomName);
      this.imagesN.push(randomName);
    }

    let imagesN = [...this.imagesName, ...this.imagesN];
    let coversN = [...this.coversName, ...this.coversN];

    this.portfolio.upload(formData).subscribe();
    this.portfolio.upload(formData2).subscribe();

    const data: Portfolio = {
      _id: this.updateId,
      title: this.title,
      cover: coversN,
      category: this.selectedCat,
      hashtags: this.hashtags,
      github: this.github,
      resume: this.resume,
      description: this.desc,
      images: imagesN
    }

    this.portfolio.updatePortfolio(data).subscribe(
      (res) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Update With Success!!' });
        this.nullVars();
        this.toggleUpdate();
        this.ngOnInit();
      },
      (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message })
    );

  }
}