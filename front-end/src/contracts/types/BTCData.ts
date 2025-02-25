/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace BtcBlockHeaders {
  export type BlockHeaderStruct = {
    version: BigNumberish;
    prevBlockHash: BytesLike;
    merkleRoot: BytesLike;
    timestamp: BigNumberish;
    bits: BigNumberish;
    nonce: BigNumberish;
    blockHash: BytesLike;
    height: BigNumberish;
  };

  export type BlockHeaderStructOutput = [
    number,
    string,
    string,
    number,
    number,
    number,
    string,
    number
  ] & {
    version: number;
    prevBlockHash: string;
    merkleRoot: string;
    timestamp: number;
    bits: number;
    nonce: number;
    blockHash: string;
    height: number;
  };
}

export interface BTCDataInterface extends utils.Interface {
  functions: {
    "addBlock(uint32,bytes32,bytes32,uint32,uint32,uint32)": FunctionFragment;
    "addBlocks(uint32[],bytes32[],bytes32[],uint32[],uint32[],uint32[])": FunctionFragment;
    "blocks(bytes32)": FunctionFragment;
    "getBlockByHeight(uint32)": FunctionFragment;
    "heights(uint32,uint256)": FunctionFragment;
    "lastHeight()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addBlock"
      | "addBlocks"
      | "blocks"
      | "getBlockByHeight"
      | "heights"
      | "lastHeight"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addBlock",
    values: [
      BigNumberish,
      BytesLike,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addBlocks",
    values: [
      BigNumberish[],
      BytesLike[],
      BytesLike[],
      BigNumberish[],
      BigNumberish[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "blocks", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getBlockByHeight",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "heights",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastHeight",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "addBlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addBlocks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "blocks", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBlockByHeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "heights", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lastHeight", data: BytesLike): Result;

  events: {
    "NewBlockAdded(uint32,bytes32,bytes32,uint32,uint32,uint32,uint32,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewBlockAdded"): EventFragment;
}

export interface NewBlockAddedEventObject {
  _version: number;
  _prevBlockHash: string;
  _merkleRoot: string;
  _timestamp: number;
  _bits: number;
  _nonce: number;
  _height: number;
  _blockHash: string;
}
export type NewBlockAddedEvent = TypedEvent<
  [number, string, string, number, number, number, number, string],
  NewBlockAddedEventObject
>;

export type NewBlockAddedEventFilter = TypedEventFilter<NewBlockAddedEvent>;

export interface BTCData extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BTCDataInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addBlock(
      _version: BigNumberish,
      _prevBlockHash: BytesLike,
      _merkleRoot: BytesLike,
      _timestamp: BigNumberish,
      _bits: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    addBlocks(
      _version: BigNumberish[],
      _prevBlockHash: BytesLike[],
      _merkleRoot: BytesLike[],
      _timestamp: BigNumberish[],
      _bits: BigNumberish[],
      _nonce: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    blocks(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [number, string, string, number, number, number, string, number] & {
        version: number;
        prevBlockHash: string;
        merkleRoot: string;
        timestamp: number;
        bits: number;
        nonce: number;
        blockHash: string;
        height: number;
      }
    >;

    getBlockByHeight(
      _height: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BtcBlockHeaders.BlockHeaderStructOutput]>;

    heights(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    lastHeight(overrides?: CallOverrides): Promise<[number]>;
  };

  addBlock(
    _version: BigNumberish,
    _prevBlockHash: BytesLike,
    _merkleRoot: BytesLike,
    _timestamp: BigNumberish,
    _bits: BigNumberish,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  addBlocks(
    _version: BigNumberish[],
    _prevBlockHash: BytesLike[],
    _merkleRoot: BytesLike[],
    _timestamp: BigNumberish[],
    _bits: BigNumberish[],
    _nonce: BigNumberish[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  blocks(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [number, string, string, number, number, number, string, number] & {
      version: number;
      prevBlockHash: string;
      merkleRoot: string;
      timestamp: number;
      bits: number;
      nonce: number;
      blockHash: string;
      height: number;
    }
  >;

  getBlockByHeight(
    _height: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BtcBlockHeaders.BlockHeaderStructOutput>;

  heights(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  lastHeight(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    addBlock(
      _version: BigNumberish,
      _prevBlockHash: BytesLike,
      _merkleRoot: BytesLike,
      _timestamp: BigNumberish,
      _bits: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addBlocks(
      _version: BigNumberish[],
      _prevBlockHash: BytesLike[],
      _merkleRoot: BytesLike[],
      _timestamp: BigNumberish[],
      _bits: BigNumberish[],
      _nonce: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    blocks(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [number, string, string, number, number, number, string, number] & {
        version: number;
        prevBlockHash: string;
        merkleRoot: string;
        timestamp: number;
        bits: number;
        nonce: number;
        blockHash: string;
        height: number;
      }
    >;

    getBlockByHeight(
      _height: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BtcBlockHeaders.BlockHeaderStructOutput>;

    heights(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    lastHeight(overrides?: CallOverrides): Promise<number>;
  };

  filters: {
    "NewBlockAdded(uint32,bytes32,bytes32,uint32,uint32,uint32,uint32,bytes32)"(
      _version?: null,
      _prevBlockHash?: null,
      _merkleRoot?: null,
      _timestamp?: null,
      _bits?: null,
      _nonce?: null,
      _height?: null,
      _blockHash?: null
    ): NewBlockAddedEventFilter;
    NewBlockAdded(
      _version?: null,
      _prevBlockHash?: null,
      _merkleRoot?: null,
      _timestamp?: null,
      _bits?: null,
      _nonce?: null,
      _height?: null,
      _blockHash?: null
    ): NewBlockAddedEventFilter;
  };

  estimateGas: {
    addBlock(
      _version: BigNumberish,
      _prevBlockHash: BytesLike,
      _merkleRoot: BytesLike,
      _timestamp: BigNumberish,
      _bits: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    addBlocks(
      _version: BigNumberish[],
      _prevBlockHash: BytesLike[],
      _merkleRoot: BytesLike[],
      _timestamp: BigNumberish[],
      _bits: BigNumberish[],
      _nonce: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    blocks(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getBlockByHeight(
      _height: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    heights(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastHeight(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addBlock(
      _version: BigNumberish,
      _prevBlockHash: BytesLike,
      _merkleRoot: BytesLike,
      _timestamp: BigNumberish,
      _bits: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    addBlocks(
      _version: BigNumberish[],
      _prevBlockHash: BytesLike[],
      _merkleRoot: BytesLike[],
      _timestamp: BigNumberish[],
      _bits: BigNumberish[],
      _nonce: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    blocks(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBlockByHeight(
      _height: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    heights(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastHeight(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
