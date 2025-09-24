  const snippets = {
	  izquierda: [
	     `public class Hola {
  public static void main(String[] args) {
  System.out.println("Hola Mundo");
   }
}`,
	     `let x = 10;
let y = 20;
console.log(x + y);`,
	     `SELECT * FROM usuarios WHERE activo = 1;`,
	     `ls -la
cd /home/user
pwd`
	     ],
	  derecha: [
	     `function suma(a, b) {
	  return a + b;
      }`,
	     `for(int i=0; i<5; i++) {
          System.out.println(i);
      }`,
	     `INSERT INTO productos(nombre, precio)
VALUES ('Laptop', 15000);`,
	     `sudo apt update && sudo apt upgrade`
	  ]
  };

  function typeCode(elementId, texts) {
	  let index = 0;
	  let charIndex = 0;
	  let currentText = texts[index];
	  const el = document.getElementById(elementId);

	  function type() {
		  if (charIndex < currentText.length) {
			  el.textContent += currentText.charAt(charIndex);
			  charIndex++;
			  setTimeout(type, 50);
	          } else {
			  setTimeout(() => {
				  el.textContent ="";
				  index = (index + 1) % texts.length;
				  currentText = texts[index];
				  charIndex = 0;
				  type();
		  }, 2000);
	  }
  }
  type();
}

typeCode("code-left", snippets.izquierda);
typeCode("code-right", snippets.derecha);
