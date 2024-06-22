import { BitcoinWalletChooserContext } from "@components/modals/BitcoinWalletChooser/BitcoinWalletChooser";
import { WalletContext } from "@contexts/WalletContext";
import { Button } from "@mui/material";
import { useBitcoinAddressSupported } from "@services/btc/hooks/useBitcoinAddressSupported";
import { useBitcoinWalletCanSignData } from "@services/btc/hooks/useBitcoinWalletCanSignData";
import { getChainConfigById } from "@services/chains/chains";
import { useActiveEVMChainConfig } from "@services/chains/hooks/useActiveEVMChainConfig";
import { useEVMWallet } from "@services/evm/hooks/useEVMWallet";
import { useSnackbar } from "notistack";
import { FC, ReactNode, useCallback, useContext } from "react";
import { PreStepButton } from "./PreStepButton/PreStepButton";

/**
 * Component that shows the given children if all required conditions are met (wallets connected,
 * right network). Otherwise,
 * shows wallet connect prompts.
 */
export const EnsureWalletNetwork: FC<{
  /** THE EVM account address must be known, at least in local storage */
  evmAccountNeeded?: boolean;
  /** The EVM wallet connector must be active, ready for calls/transactions  */
  evmConnectedNeeded?: boolean;
  btcAccountNeeded?: boolean;
  supportedNetworkNeeded?: boolean;
  bitcoinSignDataNeeded?: boolean; // App must be connected to a wallet that supposrt bitcoin's signData(), such as Unisat or Essentials in app browser
  continuesTo: string; // Title telling user what is expected after connecting wallets/switching network.
  children: ReactNode;
  fullWidth?: boolean;
}> = ({ continuesTo, evmAccountNeeded = true, evmConnectedNeeded = false, btcAccountNeeded = false, supportedNetworkNeeded = true, bitcoinSignDataNeeded = false, children, fullWidth = false }) => {
  const { account: evmAccount, connectorIsActive, handleConnect: handleConnectEVM, switchNetworkOrAddDefault } = useEVMWallet();
  const { bitcoinAccount, networkMode } = useContext(WalletContext);
  const activeChain = useActiveEVMChainConfig(false);
  const chainConfig = getChainConfigById(activeChain?.chainId);
  const supportedNetwork = !!chainConfig && chainConfig.networkMode === networkMode;
  const { promptBitcoinWallet } = useContext(BitcoinWalletChooserContext);
  const { enqueueSnackbar } = useSnackbar();
  const isBitcoinAddressSupported = useBitcoinAddressSupported(bitcoinAccount);
  const bitcoinWalletCanSignData = useBitcoinWalletCanSignData();

  const handleInstallMetaMask = useCallback(() => {
    window.open(
      "https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?pli=1",
      "_blank"
    );
  }, []);

  const handleUnsupportedNetwork = useCallback(async () => {
    handleConnectEVM().then(switchNetworkOrAddDefault);
  }, [handleConnectEVM, switchNetworkOrAddDefault]);

  const handleConnectBitcoinWallet = useCallback(() => {
    promptBitcoinWallet();
  }, [promptBitcoinWallet]);

  const handleUseBitcoinSignData = useCallback(() => {
    enqueueSnackbar({
      variant: "info",
      message: `This operation can only be executed by the Unisat chrome plugin (enable "signData" in advanced settings) or by the Essentials mobile wallet (in app browser). Please use one of those wallets.`,
      autoHideDuration: 7000
    })
  }, [enqueueSnackbar]);

  if (!window.ethereum) {
    return <Button variant="contained" onClick={handleInstallMetaMask} fullWidth={fullWidth}>
      Install MetaMask
    </Button>
  }

  if (bitcoinSignDataNeeded && !bitcoinWalletCanSignData) {
    return <PreStepButton
      title="Use Essentials or Unisat"
      continuesTo={continuesTo}
      onClick={handleUseBitcoinSignData}
      fullWidth={fullWidth} />
  }

  if (evmAccountNeeded && !evmAccount) {
    return <PreStepButton
      title="Connect EVM Wallet"
      continuesTo={continuesTo}
      onClick={handleConnectEVM}
      fullWidth={fullWidth} />
  }

  if (evmConnectedNeeded && !connectorIsActive) {
    return <PreStepButton
      title="Connect EVM Wallet"
      continuesTo={continuesTo}
      onClick={handleConnectEVM}
      fullWidth={fullWidth} />
  }

  if (btcAccountNeeded) {
    if (!bitcoinAccount) {
      return <PreStepButton
        title="Connect Bitcoin Wallet"
        continuesTo={continuesTo}
        onClick={handleConnectBitcoinWallet}
        fullWidth={fullWidth} />
    }
    else {
      if (!isBitcoinAddressSupported) {
        return <PreStepButton
          title="Unsupported BTC address"
          continuesTo={continuesTo}
          onClick={promptBitcoinWallet}
          fullWidth={fullWidth} />
      }
    }
  }

  if (supportedNetworkNeeded && !supportedNetwork) {
    return <PreStepButton
      title="Switch network"
      continuesTo={continuesTo}
      onClick={handleUnsupportedNetwork}
      fullWidth={fullWidth} />
  }

  /*
  <Button variant="contained" onClick={handleInstallMetaMask} size="small">
    INSTALL METAMASK
  </Button> */

  return (
    <>{children}</>
  )
}