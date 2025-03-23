import { ReactComponent as ApiGatewayIcon } from "./aws_api_gateway.svg";
import { ReactComponent as LambdaIcon } from "./aws_lambda.svg";

const icons = {
  aws_api_gateway: ApiGatewayIcon,
  aws_lambda: LambdaIcon,
};

export function getIcon(name) {
  return icons[name];
}
