
const { assertRevert } = require('../test-helpers/assertThrow')
const getBlockNumber = require('../test-helpers/blockNumber')(web3)
const timeTravel = require('../test-helpers/timeTravel')(web3)
const { encodeCallScript, EMPTY_SCRIPT } = require('../test-helpers/evmScript')
const ExecutionTarget = artifacts.require('ExecutionTarget')

const PayoutEngine = artifacts.require('PayoutEngine')
const DAOFactory = artifacts.require('@aragon/os/contracts/factory/DAOFactory')
const EVMScriptRegistryFactory = artifacts.require('@aragon/os/contracts/factory/EVMScriptRegistryFactory')
const ACL = artifacts.require('@aragon/os/contracts/acl/ACL')
const Kernel = artifacts.require('@aragon/os/contracts/kernel/Kernel')

const getContract = name => artifacts.require(name)
const createdPayoutId = receipt => receipt.logs.filter(x => x.event == 'StartPayout')[0].args.voteId

const ANY_ADDR = ' 0xffffffffffffffffffffffffffffffffffffffff'


contract('PayoutEngine App', accounts => {
    let daoFact, app, token, executionTarget = {}

    const root = accounts[0]

    before(async () => {
        const kernelBase = await getContract('Kernel').new()
        const aclBase = await getContract('ACL').new()
        const regFact = await EVMScriptRegistryFactory.new()
        daoFact = await DAOFactory.new(kernelBase.address, aclBase.address, regFact.address)
    })

    beforeEach(async () => {
        const r = await daoFact.newDAO(root)
        const dao = Kernel.at(r.logs.filter(l => l.event == 'DeployDAO')[0].args.dao)
        const acl = ACL.at(await dao.acl())

        await acl.createPermission(root, dao.address, await dao.APP_MANAGER_ROLE(), root, { from: root })

        const receipt = await dao.newAppInstance('0x1234', (await PayoutEngine.new()).address, { from: root })
        app = PayoutEngine.at(receipt.logs.filter(l => l.event == 'NewAppProxy')[0].args.proxy)

        await acl.createPermission(ANY_ADDR, app.address, await app.START_PAYOUT_ROLE(), root, { from: root })
        await acl.createPermission(ANY_ADDR, app.address, await app.SET_DISTRIBUTION_ROLE(), root, { from: root })
    })

    context('main context', () => {
        let empire = accounts[0]
        let bobafett = accounts[1]
        let dengar = accounts[2]
        let bossk = accounts[3]

        before(async () => {
        })

        beforeEach(async () => {
        })

        it('initialize, set distribution, and run payout', async () => {

            // const imperialunderfundedBudget = await web3.eth.getBalance(empire)
            // console.log(imperialunderfundedBudget.toNumber())

            // var send = await web3.eth.sendTransaction({from:web3.eth.coinbase, to:empire, value:web3.toWei(0.05, "ether")});

            const imperialInitialBudget = await web3.eth.getBalance(empire)
            const bobafettInitialBalance = await web3.eth.getBalance(bobafett)
            const dengarInitialBalance = await web3.eth.getBalance(dengar)
            const bosskInitialBalance = await web3.eth.getBalance(bossk)

            console.log(imperialInitialBudget.toNumber())
            console.log(bobafettInitialBalance.toNumber())

            candidateKeys = ["0x1", "0x2", "0x3"]
            candidateAddresses = [bobafett, dengar, bossk]
            app.initializePayout(candidateKeys, candidateAddresses, '', { from: empire})

            supports = [300, 200, 100]
            totalsupport = 600
            app.setDistribution(candidateKeys, supports, { from: empire})

            // app.runPayout()
            app.runPayout({from: empire, value: web3.toWei(0.05, "ether")})

            const imperialBudget = await web3.eth.getBalance(empire)
            const bobafettBalance = await web3.eth.getBalance(bobafett)
            const dengarBalance = await web3.eth.getBalance(dengar)
            const bosskBalance = await web3.eth.getBalance(bossk)

            console.log(imperialBudget.toNumber())
            console.log(bobafettBalance.toNumber())

            // assert.equal(bobafettBalance.toNumber() - bobafettInitialBalance.toNumber(), imperialBudget.toNumber()*supports[0]/totalsupport, 'bounty hunter expense')
            // assert.equal(dengarBalance.toNumber() - dengarInitialBalance.toNumber(), imperialBudget.toNumber()*supports[1]/totalsupport, 'bounty hunter expense')
            // assert.equal(bosskBalance.toNumber() - bosskInitialBalance.toNumber(), imperialBudget.toNumber()*supports[2]/totalsupport, 'bounty hunter expense')

        })

    })

})
