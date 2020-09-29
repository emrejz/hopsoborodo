import styled, { StyledComponent } from "styled-components";
interface Props {
  flex?: string;
  shr?: string;
  col?: boolean;
  wrp?: boolean;
  jc?: string;
  ai?: string;
  bc?: string;
  size?: string;
  font?: string;
  clr?: string;
  wei?: string;
  hei?: string;
  wid?: string;
  mar?: string;
  pad?: string;
  pl?: string;
  pr?: string;
  pt?: string;
  pb?: string;
  ml?: string;
  mr?: string;
  mt?: string;
  mb?: string;
}
const Block: StyledComponent<"div", any, Props, never> = styled.div<Props>(
  (props) =>
    `
    display: flex;
    flex-basis: auto;
    ${props.flex ? `flex:${props.flex}` : ""}; 
    ${props.shr ? `flex-shrink:${props.shr}` : ""}; 
    ${props.col ? `flex-direction: column` : ""}; 
    ${props.wrp ? `flex-wrap: wrap` : ""}; 
    ${props.jc ? `justify-content:${props.jc}` : ""}; 
    ${props.ai ? `align-items:${props.ai}` : ""}; 
    ${props.bc ? `background-color:var(${props.bc})` : ""}; 
    ${props.hei ? `height:${props.hei}` : ""}; 
    ${props.wid ? `width:${props.wid}` : ""};  
    ${props.size ? `font-size:var(${props.size})` : ""};    
    ${props.font ? `font-family:var(${props.font})` : ""};    
    ${props.clr ? `color:var(${props.clr})` : ""};    
    ${props.wei ? `font-weight:var(${props.wei})` : ""};    
    ${props.mar ? `margin:${props.mar}` : ""}; 
    ${props.pad ? `padding:${props.pad}` : ""};
    ${props.pl ? `padding-left:${props.pl}` : ""};
    ${props.pr ? `padding-right:${props.pr}` : ""};  
    ${props.pt ? `padding-top:${props.pt}` : ""};  
    ${props.pb ? `padding-bottom:${props.pb}` : ""};  
    ${props.ml ? `margin-left:${props.ml}` : ""};  
    ${props.mr ? `margin-right:${props.mr}` : ""};  
    ${props.mt ? `margin-top:${props.mt}` : ""};  
    ${props.mb ? `margin-bottom:${props.mb}` : ""}; 
`
);
export default Block;
