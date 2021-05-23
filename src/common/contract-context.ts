import { JsonFragment } from '@ethersproject/abi';

export class ContractContext {
  /**
   * The pancakeswap router address
   */
  public static routerAddress = '0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607';

  /**
   * The pancakeswap factory address
   */
  public static factoryAddress = '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9';

  /**
   * The pancakeswap pair address
   */
  public static pairAddress = '0x40cf96943E17142Ca87aD5040fb8fF2934E1B5aB';

  /**
   * Uniswap v2 router
   */
  public static routerAbi: JsonFragment[] = require('../ABI/pancakeswap-router-v2.json');

  /**
   * Uniswap v2 factory
   */
  public static factoryAbi: JsonFragment[] = require('../ABI/pancakeswap-factory-v2.json');

  /**
   * Uniswap v2 pair
   */
  public static pairAbi: JsonFragment[] = require('../ABI/pancakeswap-pair-v2.json');

  /**
   * ERC20 abi
   */
  public static erc20Abi: JsonFragment[] = require('../ABI/erc-20-abi.json');
}
