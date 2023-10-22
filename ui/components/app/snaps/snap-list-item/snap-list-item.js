import React from 'react';
import PropTypes from 'prop-types';

import {
  Color,
  AlignItems,
  JustifyContent,
  Display,
  BlockSize,
  TextVariant,
} from '../../../../helpers/constants/design-system';
import { Text, Box } from '../../../component-library';
import SnapAvatar from '../snap-avatar';

const SnapListItem = ({ name, packageName, onClick, snapId }) => {
  return (
    <Box
      className="snap-list-item"
      data-testid={snapId}
      display={Display.Flex}
      alignItems={AlignItems.center}
      justifyContent={JustifyContent.spaceBetween}
      width={BlockSize.Full}
      padding={4}
      onClick={onClick}
    >
      <Box
        className="snap-list-item__inner-wrapper"
        display={Display.Flex}
        alignItems={AlignItems.center}
        justifyContent={JustifyContent.flexStart}
        width={BlockSize.Full}
      >
        <Box>
          <SnapAvatar snapId={snapId} />
        </Box>
        <Box paddingLeft={4} paddingRight={4} width={BlockSize.Full}>
          <Text
            className="snap-list-item__title"
            color={Color.textDefault}
            variant={TextVariant.bodyMd}
          >
            {name}
          </Text>
          <Text
            className="snap-list-item__url"
            color={Color.textAlternative}
            variant={TextVariant.bodySm}
          >
            {packageName}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

SnapListItem.propTypes = {
  /**
   * Name of the snap
   */
  name: PropTypes.string,
  /**
   * Name of a snap package
   */
  packageName: PropTypes.string,
  /**
   * onClick event handler
   */
  onClick: PropTypes.func,
  /**
   * ID of a snap.
   */
  snapId: PropTypes.string.isRequired,
};
export default SnapListItem;
