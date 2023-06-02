import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  articlesContent = [
    {
      id: 1,
      photo:
        'https://catrinatattoo.com/wp-content/uploads/2021/04/tatuagem-feminina-no-ombro-catrinatattoo-estudio-de-tatuagem-zona-leste-rosas-delicadas-1024x585.jpg',
      title: "FLORAL TATTOO IDEAS",
      description: "Floral tattoos have long been revered for their timeless elegance and symbolism. Each delicate petal and intricate detail tells a unique story, making floral designs a popular choice for tattoo enthusiasts worldwide. These enchanting tattoos not only capture the essence of nature's beauty but also serve as a powerful means of self-expression.",
    },
    {
      id: 2,
      photo:
        'https://fcs.mg.gov.br/wp-content/uploads/2021/10/Imagem-para-o-site-2-Tentacao-de-Santo-Antonio-Gilvan-Samico.jpg',
      title: 'BRAZILIAN ARTWORK: WOODCUT',
      description: 'Woodcut is a relief printing technique that originated in China over a thousand years ago. In Brazil, this technique became popular in the Northeast, where it was used to illustrate cordel booklets. Woodcut involves carving an image into wood and then applying ink to the carved surface, which is then transferred to paper. The technique is highly valued for its beauty and simplicity, and is still widely used by Brazilian artists for illustrations and prints.'
    },
    {
      id: "3",
      photo: "https://blog.pajaris.com.br/wp-content/uploads/2020/02/tatuagem-feminina-2020.jpg",
      title: "YOUR NEXT TATTOO",
      description: "Floral tattoos also offer an opportunity to incorporate various elements, such as butterflies, hummingbirds, or vines, creating a harmonious composition that enhances the overall design. The choice of color palette adds another layer of artistry, allowing the tattooist to breathe life into the petals with subtle shades or bold hues that reflect the wearer's personality and style. Beyond their aesthetic appeal, floral tattoos can carry deep emotional meaning."
    },
    {
      id: "4",
      photo: "https://classic.exame.com/wp-content/uploads/2021/10/JEQUITINHONHA-DIVULGACAO.jpg?quality=70&strip=info&w=1024",
      title: "VALE DO JEQUITINHONHA AND CERAMICS TRADITION",
      description: "The ceramics of Vale do Jequitinhonha are a unique expression of Brazilian craftmanship. Located in the state of Minas Gerais, the region has a long tradition of pottery-making, dating back to the indigenous cultures that inhabited the area. Today, the ceramics of Vale do Jequitinhonha are known for their intricate designs and vibrant colors, which are inspired by the local flora and fauna."
    },
    {
      id: "5",
      photo: "https://www.boredpanda.com/blog/wp-content/uploads/2023/01/small-minimalist-tattoos-cover_800.png",
      title: "THE RISE OF MINIMALIST TATTOOS",
      description: "Minimalist tattoos have gained immense popularity among enthusiasts in recent years. These designs, with clean lines, subtle shading, and minimalistic motifs, create a lasting impression without overwhelming the senses. Whether it's a delicate single-line illustration, a tiny geometric symbol, or a minimalist floral design, these tattoos offer a fresh and contemporary approach to body art."
    },
    {
      id: "6",
      photo: "https://www.thisiscolossal.com/wp-content/uploads/2022/09/velco-2.jpg",
      title: "UNVEILING THE ART OF DOTWORK TATTOOS",
      description: "Dotwork tattoos, a mesmerizing style within the realm of body art, showcase the astonishing precision and intricacy of tattooing. This technique involves creating intricate designs using tiny dots, meticulously placed to form intricate patterns, shading, and textures. From mandalas to sacred geometry, dotwork tattoos draw inspiration from various cultural and spiritual traditions, resulting in visually stunning and deeply meaningful creations."
    }
  ];
}
