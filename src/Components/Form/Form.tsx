import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "./FormStyled";
import search from "../../icons/search.svg";
interface Props {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setInput2: React.Dispatch<React.SetStateAction<string | null>>;
  input: string;
}

export const Form: React.FC<Props> = ({ setInput, setInput2, input }) => {
  return (
    <Container>
      <form>
        <label htmlFor="city-name">Podaj miejscowość: </label>
        <input
          placeholder="Wpisz nazwę"
          id="city-name"
          name="city-name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
          }}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            setInput2(input);
          }}
        >
          <img src={search} alt="Search icon" />
        </button>
      </form>
    </Container>
  );
};
