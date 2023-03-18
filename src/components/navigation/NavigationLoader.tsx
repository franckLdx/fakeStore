import { FC } from "react";
import { Loader } from "../loader/Loader";

export const NavigationLoader: FC = () => (
  <div style={{
    marginLeft: '20%',
    marginRight: '20%'
  }}>
    <Loader />
  </div>
)