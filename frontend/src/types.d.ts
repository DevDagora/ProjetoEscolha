export type Resposta = {
    texto: string;
    ID_Caminho: string;
  };
  
  export type Quest = {
    ID_Quest: string;
    PlanoDeFundo: string;
    TextoQuest: string;
    Respostas: Record<string, Resposta>;
  };
  
  export type QuestData = {
    quest: Record<string, Quest>;
  };
  