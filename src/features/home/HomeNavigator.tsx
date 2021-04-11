import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import { RootState } from 'src/app/rootReducer'
import { SignerType } from 'src/blockchain/signer'
import { ScreenFrame } from 'src/components/layout/nana_ScreenFrame'
import { config } from 'src/config'
import { LedgerUnlockScreen } from 'src/features/ledger/LedgerUnlockScreen'
import { EnterPincodeScreen } from 'src/features/pincode/EnterPincodeScreen'
import { isAccountUnlocked } from 'src/features/pincode/pincode'
import { isWalletInStorage } from 'src/features/wallet/storage'

export function HomeNavigator() {
  const { address, type, isUnlocked } = useSelector((s: RootState) => s.wallet)

  // TODO necessary until auto-timeout unlock is fully implemented
  useSelector((s: RootState) => s.saga.pincode.status)

  // If pin has been entered already
  // NOTE: isAccountUnlocked is for security reasons (so they can't just change a persisted value in the local storage)
  // and isUnlocked is for flow reasons - so the pincode monitored saga gets reset after authenticating
  const unlocked =
    (isUnlocked && (isAccountUnlocked() || type === SignerType.Ledger)) || !!config.defaultAccount
  if (address && unlocked) {
    return (
      <ScreenFrame>
        <Outlet />
      </ScreenFrame>
    )
  }

  // Else, if wallet exists in storage but is not unlocked yet
  if (isWalletInStorage()) {
    return <EnterPincodeScreen />
  }

  if (address && type === SignerType.Ledger) {
    return <LedgerUnlockScreen />
  }

  // Otherwise, account must not be set up yet
  return <Navigate to="/setup" replace={true} />
}
