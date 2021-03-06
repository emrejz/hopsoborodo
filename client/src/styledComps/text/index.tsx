import styled, { StyledComponent } from "styled-components";

interface Props {
  block?: boolean;
  ta?: string;
  wid?: string;
  bc?: string;
  clr?: string;
  size?: string;
  font?: string;
  wei?: string;
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
export const Text: StyledComponent<"span", any, Props, never> = styled.span<
  Props
>(
  (props) =>
    `
    display:${props.block ? "block" : ""};
   ${props.ta ? ` text-align:${props.ta}` : ""};  
   ${props.wid ? `width:${props.wid}` : ""};  
   ${props.bc ? `background-color:var(${props.bc})` : ""};  
   ${props.clr ? `color:var(${props.clr})` : "color:inherit"};  
   ${props.size ? `font-size:${props.size}` : "font-size:inherit"};  
   ${props.font ? `font-family:var(${props.font})` : "font-family:inherit"};  
   ${props.wei ? `font-weight:var(${props.wei})` : "font-weight:inherit"};  
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
export default Text;
