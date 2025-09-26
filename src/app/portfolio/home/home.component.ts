import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { MessageService } from 'primeng/api';
import { Portfolio } from 'src/app/models/portfolio';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  /******Toggle Variables******/
  onHome: boolean = true;
  onPortfolio: boolean = false;
  onPortfolioDetails: boolean = false;

  /******Home Variables******/
  cat: string = 'All';
  value: string = '';

  home: string = 'active';
  portfolios: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  postId: String;

  /*****Portfolio Info*****/
  port: Portfolio[];
  portAll: Portfolio[];
  cv: Category[];
  category: Category[];
  selectCat: any;
  title: string;
  chips: String[];
  cover: string[];
  desc: string;
  images: any[] = [];
  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
  ];

  constructor(private readonly msg: DashboardService,
              private messageService: MessageService){}

  ngOnInit():void{
    this.msg.readCategory().subscribe((vl) => this.category = vl);
    this.msg.readPortfolio().subscribe((vl) => this.port = vl);
    this.msg.readPortfolio().subscribe((vl) => this.portAll = vl)
    this.msg.readCv().subscribe((vl) => this.cv = vl);
  }

  /*****Toggle Functions*****/
  switchOnHome(): void{
    this.ngOnInit();
    this.nullvars();

    this.home = 'active';
    this.portfolios = '';
    this.onHome = true;
    this.onPortfolio = false;
    this.onPortfolioDetails = false;
  }
  
  switchPorftolio(): void{
    this.ngOnInit();
    this.nullvars();

    this.home = '';
    this.portfolios = 'active';
    this.onHome = false;
    this.onPortfolio = true;
    this.onPortfolioDetails = false;
  }

  switchPortfolioDetails(): void{
    this.ngOnInit();
    this.nullvars();

    this.home = '';
    this.portfolios = '';
    this.onHome = false;
    this.onPortfolio = false;
    this.onPortfolioDetails = true;
  }

  nullvars(): void{
    this.cat = 'All';
    this.value = '';
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }

  addMessage(): void{
    const data = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    }

    this.msg.createMessage(data).subscribe(
      (res) => {
        this.msg.sendEmail(data).subscribe();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Added With Success!!' });
        this.ngOnInit();
        this.nullvars();
      },
      (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message });
      }
    )
  }

  setPostDet(data): void{
    this.switchPortfolioDetails();
    this.images = [];

    this.title = data.title;
    this.cover = data.cover;
    this.desc = data.description;

    for(let img of data.images){
      const dt = {
        itemImageSrc: 'assets/uploads/'+ img,
        thumbnailImageSrc: 'assets/uploads/'+ img,
        alt: 'Description for Image 1',
        title: 'Title 1'
      }

      this.images.push(dt);
    }
  }

  filterCat(cat): void{
    //console.log(this.chips);
    if(cat)
      this.selectCat = cat._id;
    if(this.cat === 'All')
      this.selectCat = '';

    this.msg.readPortfolio()
      .subscribe((value) => this.port = value.filter((vl) =>(
        vl.category.toString().includes(this.selectCat) &&
        vl.title.includes(this.value)
      )));
  }

  downloadPdf(){
    const pdfUrl = 'assets/uploads/'+ this.cv[0].name; // Replace with the path to your PDF file
    const pdfName = this.cv[0].name; // Replace with your desired PDF file name

    //console.log(this.port);
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfName.toString();
    link.click();
  }
}
