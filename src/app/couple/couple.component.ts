import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-couple',
  templateUrl: './couple.component.html',
  styleUrls: ['./couple.component.scss']
})
export class CoupleComponent {
  
  events = [
    {
      id: 0,
      title: 'My last travel',
      content: '相遇、相识、相知...',
      date: '2018',
      icon: ''
    },
    {
      id: 1,
      title: 'My Job',
      content: '相爱、相恋',
      date: '2019',
      icon: ''
    },
    {
      id: 2,
      title: 'My Education',
      content: '我们决定携手共度余生',
      date: '2022',
      icon: ''
    },
    {
      id: 3,
      title: 'My Education',
      content: '求婚',
      date: '01/04/22',
      icon: ''
    },
    {
      id: 4,
      title: 'My Education',
      content: '领证',
      date: '31/08/22',
      icon: ''
    },
    {
      id: 3,
      title: 'My Education',
      content: '婚礼',
      date: '17/12/22',
      icon: ''
    },
    {
      id: 5,
      title: 'My Education',
      content: '婚礼',
      date: '25/12/22',
      icon: ''
    }
  ];

}

