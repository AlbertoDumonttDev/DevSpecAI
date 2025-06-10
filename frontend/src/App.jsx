import { useState } from 'react';
import './App.css';

function App() {
  const [technologiesError, setTechnologiesError] = useState(false);
  const [levelError, setLevelError] = useState(false);
  const [goalError, setGoalError] = useState(false);
  const [technologies, setTechnologies] = useState('');
  const [level, setLevel] = useState('');
  const [goal, setGoal] = useState('');
  const [spec, setSpec] = useState('');

  const generateSpec = () => {
    
    if (!technologies) {
      setTechnologiesError(true);
      setSpec('');
      return;
    }

    if (!goal) {
      setGoalError(true);
      setSpec('');
      return;
    }

    if (!level) {
      setLevelError(true);
      setSpec('');
      return;
    }

    setTechnologiesError(false);
    setLevelError(false);
    setGoalError(false);

    const text = `Com base nas tecnologias indicadas, no seu nível profissional atual e no seu objetivo de conquistar uma vaga como desenvolvedor Java Júnior em uma fintech, o projeto ideal foi estruturado para refletir os conhecimentos exigidos e te preparar com uma experiência prática relevante.\n\n\n\nNome do projeto: FinCache - Sistema de Cache para Transações Financeiras\n\nDescrição: Um sistema de cache para armazenar e gerenciar transações financeiras em tempo real, utilizando Java para a lógica de negócios e Redis para armazenamento de dados em cache.\n\nTecnologias: Java, Redis\n\nObjetivos técnicos:\n\n- Implementar uma API RESTful em Java para gerenciar transações financeiras\n\n- Integrar o Redis como cache para armazenar transações recentes e melhorar o desempenho\n\n- Desenvolver um mecanismo de expiração de cache para garantir a consistência dos dados\n\n- Implementar um sistema de logging para monitorar transações e erros\n\n- Criar testes unitários e de integração para garantir a qualidade do código`;
    setSpec(text);
  };

  return (
    <>
      <div className="header-container">
        <h1>DevSpec.AI</h1>
        <div className="line"></div>
      </div>

      <div className="container">
        <label className={technologiesError ? 'error' : ''}>Tecnologias a aplicar</label>
        <input
          type="text"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
          placeholder="Ex: API com Java e Redis"
        />

        <label className={goalError ? 'error' : ''}>Objetivo profissional</label>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Ex: Vaga para dev Java Júnior em fintech"
        />

        <label className={levelError ? 'error' : ''}>Nível profissional</label>
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="">Selecione</option>
          <option value="1">Júnior</option>
          <option value="2">Pleno</option>
          <option value="3">Sênior</option>
        </select>

        <button onClick={generateSpec}>Gerar Especificações de projeto</button>

        {spec && (
          <div className="result">
            <h2>Especificação</h2>
            <p>{spec}</p>
          </div>
        )}

        <footer>
          <p>⚠️ Projeto estudantil — este serviço pode estar indisponível em alguns momentos.</p>
        </footer>
      </div>
    </>
  );
}

export default App;