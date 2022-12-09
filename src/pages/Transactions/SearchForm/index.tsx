import { MagnifyingGlass } from "phosphor-react";
import { SearchContainer } from "./styles";

export function SearchForm(){
  return(
    <SearchContainer>
      <input type="text" placeholder="Transactions Search" />
      <button type="submit">
        <MagnifyingGlass size={20}/>
      </button>
    </SearchContainer>
  )
}