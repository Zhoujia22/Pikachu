const string = `
.skin * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.skin *::after,
.skin *::before {
  box-sizing: border-box;
}
.skin {
  background-color: rgb(254, 219, 0);
  min-height: 50vh;
  position: relative;
}
.nose {
  border: 10px solid black;
  border-color: black transparent transparent;
  border-bottom: none;
  width: 0px;
  height: 0px;
  position: absolute;
  left: 50%;
  top: 145px;
  margin-left: -10px;
  z-index: 10;
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  transform-origin: 50% 100%;
  animation: wave 200ms infinite linear;
}
.yuan {
  position: absolute;
  height: 6px;
  width: 20px;
  top: -16px;
  left: -10px;
  background-color: black;
  border-radius: 10px 10px 0 0;
}
.eye {
  border: 2px solid black;
  background-color: rgb(45, 45, 45);
  border-radius: 50%;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
}
.eye::after {
  content: "";
  display: block;
  border: 3px solid black;
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 50%;
  position: relative;
  left: 8px;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}
.mouth {
  position: absolute;
  width: 200px;
  height: 200px;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}
.mouth .up {
  position: relative;
  top: -20px;
}
.mouth .up .lip {
  border: 3px solid black;
  height: 30px;
  width: 100px;
  border-top-color: transparent;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  z-index: 1;
  background-color: rgb(254, 219, 0);
}
.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  transform: rotate(-15deg) translateX(-53px);
}
.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  transform: rotate(15deg) translateX(53px);
}
.mouth .up .lip::before {
  content: "";
  display: block;
  height: 30px;
  width: 7px;
  position: absolute;
  bottom: 0;
  background-color: rgb(254, 219, 0);
}
.mouth .up .lip.left::before {
  right: -6px;
}
.mouth .up .lip.lip.right::before {
  left: -6px;
}
.mouth .down {
  height: 179px;
  width: 100%;
  position: absolute;
  top: 5px;
  overflow: hidden;
}
.mouth .down .yuan1 {
  border: 4px solid black;
  height: 1000px;
  width: 150px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background-color: rgb(166, 17, 8);
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
  height: 300px;
  width: 200px;
  position: absolute;
  bottom: -155px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
  background-color: rgb(255, 91, 93);
}
.face {
  border: 3px solid black;
  width: 88px;
  height: 88px;
  z-index: 2;
  position: absolute;
  left: 50%;
  margin-left: -44px;
  top: 220px;
  border-radius: 50%;
  background-color: rgb(254, 24, 0);
}
.face.left {
  transform: translateX(-170px);
}
.face.right {
  transform: translateX(170px);
}
`;
export default string;
