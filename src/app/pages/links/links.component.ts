import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartyDetails } from '../../models/users';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css',
})
export class LinksComponent {
  partyDetails!: PartyDetails;
  ngOnInit() {
    let data = location.search.slice(9);
    console.log('url', data);
    try {
      let decodedString = JSON.parse(window.atob(data));
      this.partyDetails = decodedString;
    } catch (error) {
      console.log('error', error);
    }
  }
}
// http://localhost:4200/links?details=eyJidWRnZXQiOjUsImRhdGUiOiIyMDIzLTExLTIzIiwibmFtZSI6IkNocmlzIENvbm5lciIsImdpZnRUbyI6IkFsbGlzb24gQnJ1aW5zIn0=
//      eyJidWRnZXQiOjUsImRhdGUiOiIyMDIzLTExLTIzIiwibmFtZSI6IkNocmlzIENvbm5lciIsImdpZnRUbyI6IkFsbGlzb24gQnJ1aW5zIn0
