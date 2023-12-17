import * as React from "react";
import { Appbar } from "react-native-paper";

const Header = (props: any) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => props.onBack()} />
      <Appbar.Content title="Finds Register:" />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
    </Appbar.Header>
  );
};

export default Header;
