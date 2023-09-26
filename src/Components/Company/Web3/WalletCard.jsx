import React, { useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import Sidebar from '../Sidebar';
import {ImNotification} from 'react-icons/im'
export const formatBalance = (rawBalance) => {
    const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2)
    return balance
  }
  
  export const formatChainAsNum = (chainIdHex) => {
    const chainIdNum = parseInt(chainIdHex)
    return chainIdNum
  }
  
  
function WalletCard() {
  const [hasProvider, setHasProvider] = useState(null);
  const initialState = { accounts: [] };
  const [wallet, setWallet] = useState(initialState);

  useEffect(() => {
    const refreshAccounts = (accounts) => {
      if (accounts.length > 0) {
        updateWallet(accounts);
      } else {
        setWallet(initialState);
      }
    };

    const refreshChain = (chainId) => {
      setWallet((wallet) => ({ ...wallet, chainId }));
    };

    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));

      if (provider) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        refreshAccounts(accounts);
        window.ethereum.on('accountsChanged', refreshAccounts);
        window.ethereum.on('chainChanged', refreshChain);
      }
    };

    getProvider();

    return () => {
      window.ethereum?.removeListener('accountsChanged', refreshAccounts);
      window.ethereum?.removeListener('chainChanged', refreshChain);
    };
  }, []);

  const updateWallet = async (accounts) => {
    const balance = formatBalance(await window.ethereum.request({
      method: 'eth_getBalance',
      params: [accounts[0], 'latest'],
    }));
    const chainId = await window.ethereum.request({
      method: 'eth_chainId',
    });
    setWallet({ accounts, balance, chainId });
  };

  const handleConnect = async () => {
    let accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    updateWallet(accounts);
  };

  return (
    <div className='flex justify-start gap-5'>
      <Sidebar />
      <div className='p-4 sm:ml-64 w-full mt-20'>
        <div className='App'>
        <div className='container p-5 w-full bg-blue-50 rounded-lg shadow-md'>
        <div className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
        <div>Injected Provider {hasProvider ? 'METAMASK DOES' : 'METAMASK DOES NOT'} Exist</div>
        </div>
        
         

          {window.ethereum?.isMetaMask && wallet.accounts.length < 1 && (
            <button onClick={handleConnect} className='flex item-center gap-2 font-bold px-3 py-2 border-2 shadow-xl border-orange-300 rounded-xl'>
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/metamask-icon.png" className='w-7 h-7' />
            
            <span>        Connect MetaMask
            </span>
            
            </button>
          )}

  </div>
          {wallet.accounts.length > 0 && (
            <>
              <div>Wallet Accounts: {wallet.accounts[0]}</div>
              <div>Wallet Balance: {wallet.balance}</div>
              <div>Hex ChainId: {wallet.chainId}</div>
              <div>Numeric ChainId: {formatChainAsNum(wallet.chainId)}</div>
            </>
          )}
        </div>
      </div>
    </div>

        
        
  );
}

export default WalletCard;
