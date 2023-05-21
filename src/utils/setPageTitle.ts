import { windowScrollToTop } from './windowScrollToTop';

export default function setPageTitle(title: string): void {
  document.title = title;
  windowScrollToTop();
}
