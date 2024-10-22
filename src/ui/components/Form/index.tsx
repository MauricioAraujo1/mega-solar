import { IframeContainer } from "./styles";

export function Form() {
  return (
    <IframeContainer>
      <iframe 
        src="https://azume.com.br/simulador/642e0666fc0e9800142edf9b" 
        width="100%" 
        height="600" 
        style={{ border: 'none' }} 
        allow="fullscreen">
      </iframe>
    </IframeContainer>
  );
};