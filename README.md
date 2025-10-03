Esse GitHub é o repositório do Projeto Lagarta de Web Mobile.

Nosso site foi desenvolvido para oferecer uma navegação fluida e intuitiva, garantindo que você encontre tudo o que precisa de forma rápida e clara. Desde a busca até a visualização dos produtos, pensamos em cada detalhe para facilitar sua jornada e tornar sua experiência agradável.

Na página principal, você encontra todos os nossos produtos organizados de maneira prática e objetiva, para que a escolha seja fácil e sem complicações. Navegue com conforto e encontre exatamente o que procura, sem perder tempo.

Além disso, nosso site é totalmente responsivo, adaptando-se perfeitamente a qualquer dispositivo — seja desktop, tablet ou smartphone — para que você tenha acesso total, a qualquer hora e em qualquer lugar.

Atendemos tanto empresas (B2B) quanto consumidores finais (B2C), oferecendo soluções personalizadas para cada público. Se você é empresário, encontrará opções pensadas para otimizar seu negócio. Se é consumidor, encontrará produtos e serviços que atendem às suas necessidades do dia a dia.


Estrutura do site:

•	MenuCompra: Seção com formulário para solicitar orçamento, onde o usuário preenche nome, e-mail, empresa, escolhe o serviço desejado e deixa uma mensagem. Inclui botões para enviar o formulário e fechar o menu. Após o envio, exibe mensagem de sucesso sem recarregar a página.
•	Checkout: Seção oculta que exibe o carrinho de compras com itens adicionados e subtotal atualizado. Contém formulário para finalizar a compra, coletando dados do cliente e forma de pagamento. Possui botão para fechar o checkout e mostra mensagem de sucesso após confirmação.
•	Header: Utilizamos a tag <nav> para criar a barra superior com botões que direcionam para diferentes seções do site, incluindo Comunicação Visual, Copiadora, Impressão Digital, Sobre Nós e Contato.
•	Primeira seção do <main>: Apresentamos as soluções gráficas da empresa, com um botão para solicitar orçamento voltado para empresas, além do acesso à visualização dos produtos.
•	Segunda seção: Destinada às soluções para o público B2B. Incluímos imagens ilustrativas e criamos uma div chamada "grade de serviços" para organizar ícones em formato de quadrados, tornando a apresentação mais visual e atraente.
•	Terceira seção: Focada nos produtos para o público B2C, estruturada em uma div chamada "grade de produtos" para facilitar a estilização via CSS e melhorar a organização visual.
•	Quarta seção: Apresenta um resumo da história da gráfica, reforçando nossa trajetória e valores.
•	Footer: Contém links úteis para contato e navegação para outras partes do site.

Na página “Sobre Nós”:

•	Mantivemos o <nav> do header para navegação consistente.
•	Criamos um container dedicado a contar a história completa da gráfica.
•	Em uma lista não ordenada (ul com classe lista-sobre), desenvolvemos balões de texto estilizados com CSS para destacar informações importantes.
•	Nos títulos (h2), adicionamos uma linha lateral decorativa usando CSS para dar um toque visual diferenciado.

No Javascript: 

Funcionalidade Orçamento: 

•	abrirOrca(): Torna visível o menu de orçamento (chamado de menuCompra), permitindo que o usuário veja as opções de envio do orçamento.
•	fecharOrca(): Fecha o menu de orçamento, ocultando o menuCompra da interface.
•	enviarOrcamento(): Coleta o nome do usuário do formulário e exibe uma mensagem de sucesso personalizada, agradecendo pelo envio do orçamento. Reseta o formulário de orçamento, limpando os campos. Após 3 segundos, fecha o menu de orçamento e oculta a mensagem de sucesso. Retorna false para evitar que a página seja recarregada.

Funcionalidade Menu Sanduiche: 

•	menuSan(): Alterna a visibilidade do menu "sandwich" (ícone de hambúrguer) para dispositivos móveis. Ao ser acionada, ela adiciona ou remove a classe active, tornando o menu visível ou oculto, conforme o estado atual.
Funcionalidade Comprar: 
•	abrirCheckout(): Torna visível a área do checkout (carrinho de compras), exibindo os itens que foram adicionados ao carrinho.
•	fecharCheckout(): Oculta a área do checkout, removendo a visualização do carrinho de compras.
•	adicionarAoCheckout(nome, preco): Adiciona um item ao carrinho de compras (checkout), armazenando o nome e o preço do item no array subtotal. Chama a função atualizarCheckout() para atualizar a lista de itens no checkout e recalcular o subtotal.
•	removerDoCheckout(indice): Remove um item do carrinho de compras, baseado no índice do item no array subtotal. Chama a função atualizarCheckout() para atualizar a lista de itens e recalcular o subtotal após a remoção.
•	atualizarCheckout(): Atualiza a visualização dos itens no checkout, exibindo o nome e o preço de cada item. Calcula o valor total (subtotal) de todos os itens no carrinho e o exibe na interface.


Wireframe Desktop:

<img src="./Frame.png" />

Wireframe Mobile:

<img src="./Screenshot 2025-08-27 at 23-54-13 GR Soluções Gráficas.png" />

Os wireframes foram criados no Figma.

Na construção da página, desenvolvemos uma experiência fluida para o cliente, com foco na simplicidade. Além disso, garantimos a responsividade do site em dispositivos móveis e contamos a história da gráfica por meio da página "Sobre".

<img width="1915" height="902" alt="image" src="https://github.com/user-attachments/assets/8b66e96a-876d-47e1-b3a8-f99914bfbca7" />
<img width="1886" height="661" alt="image" src="https://github.com/user-attachments/assets/1175ef74-a4b0-4a96-b137-ce9b3ea5466e" />
<img width="1893" height="883" alt="image" src="https://github.com/user-attachments/assets/4125d598-7909-4151-aeb4-9f1a6f712bc5" />

<img width="1918" height="912" alt="image" src="https://github.com/user-attachments/assets/be869bd5-9774-4d6c-92fc-c6f075a011fe" />
<img width="1895" height="907" alt="image" src="https://github.com/user-attachments/assets/bc2d493b-fc2b-45a2-81d4-c25b84019edf" />
<img width="1898" height="907" alt="image" src="https://github.com/user-attachments/assets/4f51b95e-66aa-4d5a-80b0-29ae607d89c6" />


