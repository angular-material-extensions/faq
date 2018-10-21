import {Component, Input} from '@angular/core';
import {FaqItem} from '../../../module/faq.item';

@Component({
  selector: 'mat-faq',
  templateUrl: './mat-faq.component.html',
  styleUrls: ['./mat-faq.component.scss']
})
export class MatFaqComponent {

  @Input()
  title = 'FAQ';

  @Input()
  multi = false;

  @Input()
  displayMode = 'default'; // or flat

  @Input()
  faqList: FaqItem[] = [];

}
