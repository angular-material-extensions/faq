import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FaqItem} from '../../faq.item';

@Component({
  selector: 'mat-faq-admin',
  templateUrl: './mat-faq-admin.component.html',
  styleUrls: ['./mat-faq-admin.component.scss']
})
export class MatFaqAdminComponent {

  @Input()
  title = 'Admin';

  @Output()
  onFAQItemAdded: EventEmitter<FaqItem> = new EventEmitter<FaqItem>();

  question: string;
  answer: string;

  reset() {
    this.question = this.answer = undefined;
  }

  add(): void {
    const faqItem: FaqItem = {
      question: this.question,
      answer: this.answer
    }
    this.onFAQItemAdded.emit(faqItem);
    this.reset();
  }

}
