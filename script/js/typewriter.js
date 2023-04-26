let Content = document.getElementsByClassName("write_onLoad");
let textContent;
let charIndex;
let value;
let count;

function checkSectionActive() {
	if ((document.documentElement.scrollTop >= document.getElementById("sec2").clientHeight) && document.getElementById("sec2").getAttribute("data-scroll") == "true") {
		Content = document.getElementsByClassName("write_onScroll");
		typeWriterContainer();
		document.getElementById("sec2").setAttribute("data-scroll", "false");
	}
	else if ((document.documentElement.scrollTop >= (document.getElementById("sec4").clientHeight + 800)) && document.getElementById("sec4").getAttribute("data-scroll") == "true") {
		document.getElementById("sec4").setAttribute("data-scroll", "false");
		let Content1 = document.querySelectorAll("[data-value]");

		for (let index = 0; index < Content1.length; index++) {
			function incrementNumber(value, element, count = -1) {
				if (count == -1) {
					count++;
					element = Content1[index];
					value = Number(Content1[index].getAttribute("data-value"));

					incrementNumber(value, element, count);
				}
				else if (count <= value) {
					element.innerHTML = count;
					count++;

					setTimeout(incrementNumber, 30, value, element, count);
				}
			}

			incrementNumber()
		}
	}
}

function typeWriterContainer() {
	for (let index = 0; index < Content.length; index++) {
		function typeWriter(text, element, charIndex = -1, speed = 50) {
			if (charIndex == -1) {
				charIndex++;
				element = Content[index];
				textContent = element.innerHTML;
				element.innerHTML = "";
				element.classList.add("active");

				for (i = 0; i < textContent.length; i++) {
					speed = (1500 / i);
				}

				typeWriter(textContent, element, charIndex, speed);
			}
			else if (charIndex < text.length) {
				element.innerHTML += text.charAt(charIndex);
				charIndex++;

				setTimeout(typeWriter, speed, text, element, charIndex, speed);
			}
		}

		typeWriter()
	}












  // function typeWriter (text, element, charIndex = -1) {
  //   if (charIndex == -1) {
  //     charIndex++;
  //     element = Content[0];
  //     textContent = element.innerHTML;
  //     element.innerHTML = "";
  //     element.classList.add("active");
  //     typeWriter(textContent, element, charIndex);
  //     console.log(charIndex);
  //   }
  //   else if (charIndex < text.length) {
  //     element.innerHTML += text.charAt(charIndex);
  //     charIndex++;
  //     setTimeout(typeWriter, 50, text, element, charIndex);
  //   }
  //   // else if (charIndex == text.length) {
  //   //   textIndex++;
  //   //   charIndex = 0;
  //   //   textContent = element.innerHTML;
  //   //   element.innerHTML = "";
  //   //   element.classList.add("active");
  //   //   typeWriter(textContent, element);
  //   // }
  // }
}