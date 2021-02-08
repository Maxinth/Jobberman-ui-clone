import {
  IconContainer,
  SignContainer,
  SignatureContainer,
  Contact,
} from "./styled";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Signature = () => {
  return (
    <SignatureContainer>
      <SignContainer>
        CLONED with
        <IconContainer color="red">
          <FavoriteIcon />
        </IconContainer>
        in Lagos, Nigeria.
      </SignContainer>
      <Contact>+234 902 428 2995</Contact>
    </SignatureContainer>
  );
};

export default Signature;
