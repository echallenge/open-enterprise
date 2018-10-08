pragma solidity ^0.4.18;

// TODO: Move ExecutionTarget to a shared location

import "@aragon/os/contracts/factory/EVMScriptRegistryFactory.sol";
import "@aragon/os/contracts/factory/DAOFactory.sol";
import "@aragon/os/contracts/acl/ACL.sol";
import "@aragon/os/contracts/lib/minime/MiniMeToken.sol";


contract ExecutionTarget {
    uint[] public signal;

    function setSignal(address[] _addr, uint256[] _signal) public {
        for(uint i =0; i < _signal.length; i++){
            signal.push(_signal[i]);
        }
        Executed(_signal.length);
    }

    function autoThrow(uint256[] /*_signal*/) public pure {
        require(false);
    }

    function getSignal(uint256 sigIndex) public view returns (uint) {
        return signal[sigIndex];
    }

    event Executed(uint length);
}
