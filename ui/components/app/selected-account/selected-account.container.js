import { connect } from 'react-redux';
import {
  getSelectedIdentity,
  ///: BEGIN:ONLY_INCLUDE_IN(build-mmi)
  getAccountType,
  ///: END:ONLY_INCLUDE_IN
} from '../../../selectors';
///: BEGIN:ONLY_INCLUDE_IN(build-mmi)
import {
  getCustodyAccountDetails,
  getIsCustodianSupportedChain,
} from '../../../selectors/institutional/selectors';
import { getProviderConfig } from '../../../ducks/metamask/metamask';
///: END:ONLY_INCLUDE_IN
import SelectedAccount from './selected-account.component';

const mapStateToProps = (state) => {
  return {
    selectedIdentity: getSelectedIdentity(state),
    ///: BEGIN:ONLY_INCLUDE_IN(build-mmi)
    accountType: getAccountType(state),
    accountDetails: getCustodyAccountDetails(state),
    provider: getProviderConfig(state),
    isCustodianSupportedChain: getIsCustodianSupportedChain(state),
    ///: END:ONLY_INCLUDE_IN
  };
};

export default connect(mapStateToProps)(SelectedAccount);
