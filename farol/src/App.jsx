import { useState } from 'react'
import './App.css' 

const faqData = [
  {
    question: "O que é React?",
    answer: "React é uma biblioteca JavaScript de código aberto para construir interfaces de usuário ou componentes de interface."
  },
  {
    question: "O que é Vite?",
    answer: "Vite é uma ferramenta de build moderna que oferece um servidor de desenvolvimento rápido e otimiza o build para produção, funcionando muito bem com React."
  },
  {
    question: "Como este 'acordeão' funciona?",
    answer: "Ele usa o hook 'useState' do React para rastrear o índice (a posição) da pergunta que está atualmente aberta. Clicar em uma pergunta atualiza esse estado, e o JSX usa renderização condicional para mostrar ou esconder a resposta."
  }
];

function FaqItem({ faq, index, openIndex, onToggle }) {
  const isOpen = index === openIndex;

  return (
    <div className="faq-item">
      {}
      <div 
        className="faq-question" 
        onClick={() => onToggle(index)}
      >
        <span>{faq.question}</span>
        {}
        <span>{isOpen ? '−' : '+'}</span>
      </div>
      
      {}
      {isOpen && (
        <div className="faq-answer">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Perguntas Frequentes</h1>
      {faqData.map((faq, index) => (
        <FaqItem
          key={index}
          faq={faq}
          index={index}
          openIndex={openIndex}
          onToggle={handleToggle}
        />
      ))}
    </div>
  )
}

export default App