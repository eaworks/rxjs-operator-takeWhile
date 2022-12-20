import { of, takeWhile } from 'rxjs';

// kosul icindeki deger dogru ise bastan veri almaya devam eder
const source = of(1, 2, 3, 4, 5);

source.pipe(takeWhile((val) => val < 3)).subscribe((val) => console.log(val));
