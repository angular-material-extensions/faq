import {Component, Input} from '@angular/core';
import {FaqItem} from '../../faq.item';

@Component({
  selector: 'ngx-material-faq',
  templateUrl: './ngx-material-faq.component.html',
  styleUrls: ['./ngx-material-faq.component.scss']
})
export class NgxMaterialFaqComponent {

  @Input()
  title = 'FAQ';

  @Input()
  multi = false;

  @Input()
  displayMode = 'default'; // or flat

  @Input()
  faqList: FaqItem[] = [];

}
