import { Header } from "./header";
import { BackButton } from "./back-btn";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CardWrapper } from "./card-wrapper";
import {IconExclamationCircle} from "@tabler/icons-react";

const ErrorCard = () => {
  return (
    <CardWrapper
    headerHeading="Error"
    headerLabel="Ops! Something went wrong"
    backButtonLabel="Back to signin"
    backButtonHref="/auth/signin"
    showSocial={false}
    >
        <IconExclamationCircle className="mx-auto text-destructive"/>
    </CardWrapper>
  );
};

export default ErrorCard;
