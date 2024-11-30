import { createGlobalStyle } from 'styled-components';
/*
Mobile-Small           0-320 PX 
Mobile-Medium        320-375 PX 
Mobile-Large         375-428 PX 
Tablet               428-768 PX
Laptop-Small        768-1024 PX 
Laptop-Medium      1024-1280 PX 
Laptop-Large       1280-1440 PX 
Desktop-HD         1440-1920 PX
Desktop-2K         1920PX+

*/

const Global = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html {
  font-size: 62.5%; /* 1 rem = 10px 10px/16px =62.5% */

  @include responsive(laptop-medium) {
    /* width<1200? */
    font-size: 56.25%; /* 1 rem = 9px 9px/16px =56.25% */
  }

  @include responsive(big-desktop) {
    /* width<1800+? */
    font-size: 75%; /* 1 rem = 12px 12px/16px =75% */
  }
}

body {
  box-sizing: border-box;
}
::selection {
  color: $color-white;
}
img {
  max-width: 100%;

}
ul {
  list-style: none;
}
a{
  text-decoration: none;
}  
  
`;
export default Global;
