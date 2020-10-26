
import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../sharing/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dsService : DataStorageService , private router : Router,private route : ActivatedRoute){}

  onSave(){
    this.dsService.storeRecipes();
  }

  onFetch(){
    this.dsService.fetchRecipes().subscribe();
    this.router.navigate(['../'],{relativeTo: this.route})

  }

}
