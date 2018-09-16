import {animate, group, query, style, transition, trigger} from '@angular/animations';

export const inOutAnim = trigger('inOut',[
  transition(':enter',[
    style({opacity:0}),
    animate('500ms',style({opacity:1}))
  ]),
  transition(':leave',
    animate('500ms', style({opacity:0}))
  )
]);

export const routerTransition = trigger('routerInOut',[
  transition('* => *', [
    query(':enter', [
        style({ opacity: 0 })
      ], { optional: true }
    ),
    group([
      query(':leave', [
          animate(300, style({ opacity: 0 }))
        ],
        { optional: true }
      ),
      query(':enter', [
          style({ opacity: 0 }),
          animate(300, style({ opacity: 1 }))
        ],
        { optional: true }
      )
    ])
  ])
]);
