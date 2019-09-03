import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './article';

@Pipe({
  name: 'filterArticle'
})
export class FilterArticlePipe implements PipeTransform {
  transform(value: Article[], keyword: string): any {
    if (keyword !== '') {
      return value.filter(item => item.title.indexOf(keyword) !== -1);
    }

    return value;
  }
}
