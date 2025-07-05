"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState,
  useMemo = _React.useMemo,
  useEffect = _React.useEffect;

// Define simple icon components as fallbacks
var IconComponent = function IconComponent(_ref) {
  var className = _ref.className,
    children = _ref.children;
  return React.createElement('span', {
    className: className
  }, children || '•');
};
var Search = function Search(_ref2) {
  var className = _ref2.className;
  return IconComponent({
    className: className,
    children: '🔍'
  });
};
var BookOpen = function BookOpen(_ref3) {
  var className = _ref3.className;
  return IconComponent({
    className: className,
    children: '📖'
  });
};
var Users = function Users(_ref4) {
  var className = _ref4.className;
  return IconComponent({
    className: className,
    children: '👥'
  });
};
var Zap = function Zap(_ref5) {
  var className = _ref5.className;
  return IconComponent({
    className: className,
    children: '⚡'
  });
};
var Shield = function Shield(_ref6) {
  var className = _ref6.className;
  return IconComponent({
    className: className,
    children: '🛡️'
  });
};
var Coins = function Coins(_ref7) {
  var className = _ref7.className;
  return IconComponent({
    className: className,
    children: '🪙'
  });
};
var Database = function Database(_ref8) {
  var className = _ref8.className;
  return IconComponent({
    className: className,
    children: '💾'
  });
};
var Globe = function Globe(_ref9) {
  var className = _ref9.className;
  return IconComponent({
    className: className,
    children: '🌐'
  });
};
var Moon = function Moon(_ref0) {
  var className = _ref0.className;
  return IconComponent({
    className: className,
    children: '🌙'
  });
};
var Sun = function Sun(_ref1) {
  var className = _ref1.className;
  return IconComponent({
    className: className,
    children: '☀️'
  });
};
var Heart = function Heart(_ref10) {
  var className = _ref10.className;
  return IconComponent({
    className: className,
    children: '❤️'
  });
};
var Brain = function Brain(_ref11) {
  var className = _ref11.className;
  return IconComponent({
    className: className,
    children: '🧠'
  });
};
var Trophy = function Trophy(_ref12) {
  var className = _ref12.className;
  return IconComponent({
    className: className,
    children: '🏆'
  });
};
var Target = function Target(_ref13) {
  var className = _ref13.className;
  return IconComponent({
    className: className,
    children: '🎯'
  });
};
var Download = function Download(_ref14) {
  var className = _ref14.className;
  return IconComponent({
    className: className,
    children: '📥'
  });
};
var Upload = function Upload(_ref15) {
  var className = _ref15.className;
  return IconComponent({
    className: className,
    children: '📤'
  });
};
var Share = function Share(_ref16) {
  var className = _ref16.className;
  return IconComponent({
    className: className,
    children: '🔗'
  });
};
var Shuffle = function Shuffle(_ref17) {
  var className = _ref17.className;
  return IconComponent({
    className: className,
    children: '🔀'
  });
};
var Star = function Star(_ref18) {
  var className = _ref18.className;
  return IconComponent({
    className: className,
    children: '⭐'
  });
};
var TrendingUp = function TrendingUp(_ref19) {
  var className = _ref19.className;
  return IconComponent({
    className: className,
    children: '📈'
  });
};
var ChevronRight = function ChevronRight(_ref20) {
  var className = _ref20.className;
  return IconComponent({
    className: className,
    children: '▶️'
  });
};
var ChevronLeft = function ChevronLeft(_ref21) {
  var className = _ref21.className;
  return IconComponent({
    className: className,
    children: '◀️'
  });
};
var Check = function Check(_ref22) {
  var className = _ref22.className;
  return IconComponent({
    className: className,
    children: '✅'
  });
};
var X = function X(_ref23) {
  var className = _ref23.className;
  return IconComponent({
    className: className,
    children: '❌'
  });
};
var Clock = function Clock(_ref24) {
  var className = _ref24.className;
  return IconComponent({
    className: className,
    children: '⏰'
  });
};
var Award = function Award(_ref25) {
  var className = _ref25.className;
  return IconComponent({
    className: className,
    children: '🏅'
  });
};

// Three.js Background Animation Component
var ThreeJSBackground = function ThreeJSBackground(_ref26) {
  var darkMode = _ref26.darkMode;
  var canvasRef = React.useRef();
  var sceneRef = React.useRef();
  var rendererRef = React.useRef();
  var particlesRef = React.useRef([]);
  var cubesRef = React.useRef([]);
  React.useEffect(function () {
    if (!window.THREE || !canvasRef.current) return;

    // Scene setup
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create floating particles
    var particleGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    var particleMaterial = new THREE.MeshBasicMaterial({
      color: darkMode ? 0x64ffda : 0x6366f1,
      transparent: true,
      opacity: 0.6
    });
    var particles = [];
    for (var i = 0; i < 100; i++) {
      var particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.x = (Math.random() - 0.5) * 20;
      particle.position.y = (Math.random() - 0.5) * 20;
      particle.position.z = (Math.random() - 0.5) * 20;
      particle.velocity = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      };
      particles.push(particle);
      scene.add(particle);
    }
    particlesRef.current = particles;

    // Create floating cubes
    var cubeGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    var cubeMaterial = new THREE.MeshBasicMaterial({
      color: darkMode ? 0x9c27b0 : 0xf59e0b,
      transparent: true,
      opacity: 0.3,
      wireframe: true
    });
    var cubes = [];
    for (var _i = 0; _i < 15; _i++) {
      var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.x = (Math.random() - 0.5) * 25;
      cube.position.y = (Math.random() - 0.5) * 25;
      cube.position.z = (Math.random() - 0.5) * 25;
      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;
      cube.rotationSpeed = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      };
      cubes.push(cube);
      scene.add(cube);
    }
    cubesRef.current = cubes;
    camera.position.z = 10;

    // Animation loop
    var _animate = function animate() {
      requestAnimationFrame(_animate);

      // Animate particles
      particles.forEach(function (particle) {
        particle.position.x += particle.velocity.x;
        particle.position.y += particle.velocity.y;
        particle.position.z += particle.velocity.z;

        // Boundary check
        if (Math.abs(particle.position.x) > 10) particle.velocity.x *= -1;
        if (Math.abs(particle.position.y) > 10) particle.velocity.y *= -1;
        if (Math.abs(particle.position.z) > 10) particle.velocity.z *= -1;

        // Pulsing effect
        var scale = 1 + Math.sin(Date.now() * 0.005 + particle.position.x) * 0.3;
        particle.scale.setScalar(scale);
      });

      // Animate cubes
      cubes.forEach(function (cube) {
        cube.rotation.x += cube.rotationSpeed.x;
        cube.rotation.y += cube.rotationSpeed.y;
        cube.rotation.z += cube.rotationSpeed.z;

        // Floating motion
        cube.position.y += Math.sin(Date.now() * 0.001 + cube.position.x) * 0.01;
      });

      // Gentle camera movement
      camera.position.x = Math.sin(Date.now() * 0.0005) * 2;
      camera.position.y = Math.cos(Date.now() * 0.0003) * 1;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    _animate();

    // Handle resize
    var handleResize = function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
      // Cleanup
      particles.forEach(function (particle) {
        return scene.remove(particle);
      });
      cubes.forEach(function (cube) {
        return scene.remove(cube);
      });
      renderer.dispose();
    };
  }, []);

  // Update colors when dark mode changes
  React.useEffect(function () {
    if (particlesRef.current.length > 0) {
      particlesRef.current.forEach(function (particle) {
        particle.material.color.setHex(darkMode ? 0x64ffda : 0x6366f1);
      });
    }
    if (cubesRef.current.length > 0) {
      cubesRef.current.forEach(function (cube) {
        cube.material.color.setHex(darkMode ? 0x9c27b0 : 0xf59e0b);
      });
    }
  }, [darkMode]);
  return React.createElement('canvas', {
    ref: canvasRef,
    className: 'fixed inset-0 w-full h-full pointer-events-none z-0',
    style: {
      background: 'transparent'
    }
  });
};
var Web3Glossary = function Web3Glossary() {
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchTerm = _useState2[0],
    setSearchTerm = _useState2[1];
  var _useState3 = useState('all'),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedCategory = _useState4[0],
    setSelectedCategory = _useState4[1];
  var _useState5 = useState('technical'),
    _useState6 = _slicedToArray(_useState5, 2),
    viewMode = _useState6[0],
    setViewMode = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    expandedTerm = _useState8[0],
    setExpandedTerm = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    darkMode = _useState0[0],
    setDarkMode = _useState0[1];

  // New awesome features state
  var _useState1 = useState(new Set()),
    _useState10 = _slicedToArray(_useState1, 2),
    bookmarks = _useState10[0],
    setBookmarks = _useState10[1];
  var _useState11 = useState('browse'),
    _useState12 = _slicedToArray(_useState11, 2),
    currentMode = _useState12[0],
    setCurrentMode = _useState12[1]; // browse, quiz, stats
  var _useState13 = useState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      showResult: false,
      questions: []
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    quizState = _useState14[0],
    setQuizState = _useState14[1];
  var _useState15 = useState({
      viewedTerms: new Set(),
      streak: 0,
      lastVisit: null,
      totalQuizzesTaken: 0,
      averageScore: 0
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    learningStats = _useState16[0],
    setLearningStats = _useState16[1];
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    showRandomTerm = _useState18[0],
    setShowRandomTerm = _useState18[1];
  var _useState19 = useState('all'),
    _useState20 = _slicedToArray(_useState19, 2),
    difficultyFilter = _useState20[0],
    setDifficultyFilter = _useState20[1];
  var glossaryData = [{
    term: "Blockchain",
    category: "infrastructure",
    difficulty: "beginner",
    technical: "A distributed ledger technology that maintains a continuously growing list of records (blocks) linked and secured using cryptographic hash functions. Each block contains a cryptographic hash of the previous block, timestamp, and transaction data.",
    grandma: "Think of it like a special notebook that everyone in a group shares. When someone writes something new, everyone gets a copy, and no one can erase or change what's already written. This makes it super trustworthy because everyone can see everything.",
    examples: "Bitcoin, Ethereum, Solana",
    tags: ["distributed", "ledger", "cryptocurrency", "security"]
  }, {
    term: "Smart Contract",
    category: "infrastructure",
    difficulty: "intermediate",
    technical: "Self-executing contracts with terms directly written into code. They automatically execute, control, or document legally relevant events according to the terms of a contract without intermediaries.",
    grandma: "Like a vending machine for agreements. You put in what you promised (like money), and when certain conditions are met, it automatically gives the other person what they were promised. No need for a middleman!",
    examples: "Uniswap DEX, NFT marketplaces, lending protocols",
    tags: ["automation", "contracts", "code", "defi"]
  }, {
    term: "DeFi",
    category: "finance",
    difficulty: "intermediate",
    technical: "Decentralized Finance - a blockchain-based form of finance that uses smart contracts on blockchains to provide financial services without traditional intermediaries like banks or brokers.",
    grandma: "Banking without banks. Instead of going to a bank to save, borrow, or trade money, you use apps that connect directly to other people. It's like having a global ATM that's always open.",
    examples: "Compound, Aave, Uniswap",
    tags: ["finance", "decentralized", "lending", "trading"]
  }, {
    term: "NFT",
    category: "digital-assets",
    difficulty: "beginner",
    technical: "Non-Fungible Token - a unique digital identifier recorded on a blockchain that certifies ownership and authenticity of a specific digital or physical asset. Unlike cryptocurrencies, NFTs are not interchangeable.",
    grandma: "Like a digital certificate of ownership for unique items. If you buy a piece of digital art, the NFT is like having a receipt that proves you own that specific artwork, even though others can still see it.",
    examples: "CryptoPunks, Bored Ape Yacht Club, digital art",
    tags: ["digital", "ownership", "art", "collectibles"]
  }, {
    term: "DAO",
    category: "governance",
    difficulty: "advanced",
    technical: "Decentralized Autonomous Organization - an organization represented by rules encoded as smart contracts, controlled by shareholders rather than a central authority. Decision-making is distributed across token holders.",
    grandma: "Like a club where everyone who owns special tokens gets to vote on important decisions. No single boss - instead, the group decides together what to do, and the rules are automatically enforced.",
    examples: "MakerDAO, Compound Governance, Uniswap DAO",
    tags: ["governance", "voting", "decentralized", "organization"]
  }, {
    term: "Wallet",
    category: "infrastructure",
    difficulty: "beginner",
    technical: "A software program or hardware device that stores private keys and allows users to send, receive, and monitor their cryptocurrency balance. The wallet doesn't actually store coins but manages access to them on the blockchain.",
    grandma: "Like a digital purse that holds your crypto money and special keys. Just like you need keys to open your house, you need these special keys to access and spend your digital money.",
    examples: "MetaMask, Coinbase Wallet, Hardware wallets",
    tags: ["storage", "keys", "security", "access"]
  }, {
    term: "Gas Fee",
    category: "infrastructure",
    difficulty: "intermediate",
    technical: "The fee required to successfully conduct a transaction or execute a smart contract on blockchain networks. Gas fees compensate miners/validators for the computational energy required to process transactions.",
    grandma: "Like paying for gas when you drive your car. Every time you want to do something on the blockchain (send money, buy something), you need to pay a small fee to the people who keep the network running.",
    examples: "Ethereum transaction fees, Polygon fees",
    tags: ["fees", "transactions", "network", "cost"]
  }, {
    term: "Staking",
    category: "finance",
    difficulty: "intermediate",
    technical: "The process of actively participating in transaction validation on a proof-of-stake blockchain by locking up a certain amount of cryptocurrency as collateral to support network operations and earn rewards.",
    grandma: "Like putting your money in a special savings account that helps keep the blockchain network secure. In return for locking up your money for a while, you earn extra crypto as a reward.",
    examples: "Ethereum 2.0 staking, Cardano staking",
    tags: ["rewards", "validation", "lock", "earnings"]
  }, {
    term: "Yield Farming",
    category: "finance",
    difficulty: "advanced",
    technical: "A DeFi strategy where users provide liquidity to protocols in exchange for rewards, typically in the form of additional tokens. Users 'farm' yield by moving funds between different protocols to maximize returns.",
    grandma: "Like being a farmer, but instead of growing vegetables, you're growing your money. You lend your crypto to different apps and they pay you extra tokens as a 'thank you' for helping them work.",
    examples: "Compound lending, Curve LP tokens",
    tags: ["farming", "liquidity", "rewards", "strategy"]
  }, {
    term: "Liquidity Pool",
    category: "finance",
    difficulty: "advanced",
    technical: "A collection of funds locked in a smart contract that facilitates trading by providing liquidity for decentralized exchanges. Users deposit equal values of two tokens to create a market for those tokens.",
    grandma: "Like a big pot where people put in pairs of different cryptocurrencies. This pot helps other people trade between those cryptos easily. People who add to the pot get a small fee every time someone trades.",
    examples: "Uniswap pools, SushiSwap pools",
    tags: ["trading", "liquidity", "pools", "dex"]
  }, {
    term: "Layer 2",
    category: "infrastructure",
    difficulty: "advanced",
    technical: "Secondary blockchain protocols built on top of existing blockchains (Layer 1) to improve scalability and reduce transaction costs while maintaining security through the underlying blockchain.",
    grandma: "Like building a faster highway on top of an existing road. The main road (Layer 1) is secure but slow, so we build a faster route (Layer 2) on top that still connects to the main road for safety.",
    examples: "Polygon, Arbitrum, Optimism",
    tags: ["scaling", "speed", "layer", "efficiency"]
  }, {
    term: "Minting",
    category: "digital-assets",
    difficulty: "beginner",
    technical: "The process of creating new tokens or NFTs on a blockchain. For NFTs, minting involves uploading digital content to the blockchain and creating a unique token that represents ownership of that content.",
    grandma: "Like creating a brand new coin or certificate. When you mint an NFT, you're making a brand new digital item that didn't exist before and putting it on the blockchain for the first time.",
    examples: "Creating new NFTs, issuing new tokens",
    tags: ["creation", "new", "tokens", "nfts"]
  }, {
    term: "HODL",
    category: "culture",
    difficulty: "beginner",
    technical: "A misspelling of 'hold' that became a cryptocurrency investment strategy and meme, referring to buying and holding cryptocurrencies for long periods regardless of price volatility.",
    grandma: "A funny way of saying 'hold onto your crypto no matter what.' Even if the price goes up and down like a rollercoaster, you keep holding because you believe it will be worth more later.",
    examples: "Bitcoin HODLers, long-term investing",
    tags: ["strategy", "hold", "investment", "meme"]
  }, {
    term: "Rugpull",
    category: "security",
    difficulty: "intermediate",
    technical: "A malicious maneuver where developers abandon a project and run away with investors' funds, typically by removing all liquidity from a project's liquidity pool or selling a large amount of tokens.",
    grandma: "Like a scam where someone promises to build something amazing, takes everyone's money, and then disappears. It's called 'rugpull' because they literally pull the rug out from under you.",
    examples: "Abandoned DeFi projects, exit scams",
    tags: ["scam", "fraud", "security", "risk"]
  }, {
    term: "Whitelist",
    category: "governance",
    difficulty: "beginner",
    technical: "A list of pre-approved addresses or individuals who have priority access to participate in token sales, NFT drops, or other exclusive events before the general public.",
    grandma: "Like a VIP list for a special event. If you're on the whitelist, you get early access to buy something new before everyone else gets a chance.",
    examples: "NFT presales, token launches",
    tags: ["access", "priority", "exclusive", "early"]
  }, {
    term: "Airdrop",
    category: "distribution",
    difficulty: "beginner",
    technical: "The distribution of free tokens or NFTs to multiple wallet addresses, typically used for marketing purposes, rewarding early users, or distributing governance tokens to decentralize ownership.",
    grandma: "Like getting free samples at a store, but for crypto. Companies give away free tokens to people to try their product or reward loyal users.",
    examples: "Uniswap UNI airdrop, governance token distributions",
    tags: ["free", "distribution", "marketing", "rewards"]
  }, {
    term: "Bridge",
    category: "infrastructure",
    difficulty: "intermediate",
    technical: "A protocol that connects two separate blockchains, allowing tokens and data to be transferred between them. Bridges enable interoperability between different blockchain networks.",
    grandma: "Like a bridge between two islands. If you have crypto on one blockchain but want to use it on another, a bridge helps you move it across safely.",
    examples: "Polygon Bridge, Arbitrum Bridge",
    tags: ["connection", "transfer", "interoperability", "cross-chain"]
  }, {
    term: "Validator",
    category: "infrastructure",
    difficulty: "intermediate",
    technical: "A network participant responsible for verifying transactions and maintaining the blockchain's integrity in proof-of-stake systems. Validators are chosen to create new blocks based on their stake and other factors.",
    grandma: "Like a security guard who checks that everything is correct before allowing transactions to go through. They help keep the blockchain safe and honest.",
    examples: "Ethereum 2.0 validators, Cosmos validators",
    tags: ["validation", "security", "verification", "network"]
  }, {
    term: "Slippage",
    category: "trading",
    difficulty: "intermediate",
    technical: "The difference between the expected price of a trade and the actual executed price, typically occurring in volatile markets or when trading large amounts relative to available liquidity.",
    grandma: "When you try to buy something for $100 but by the time your order goes through, the price changed to $102. The $2 difference is slippage - like trying to catch a slippery fish!",
    examples: "DEX trading, large order impacts",
    tags: ["trading", "price", "volatility", "execution"]
  }, {
    term: "Metaverse",
    category: "virtual-worlds",
    difficulty: "beginner",
    technical: "A collective virtual shared space created by the convergence of virtually enhanced physical reality and physically persistent virtual space, often involving blockchain-based ownership of digital assets.",
    grandma: "Like a video game world where you can own land, items, and experiences for real. You can hang out with friends, play games, and even make money, all in a virtual world.",
    examples: "Decentraland, The Sandbox, Axie Infinity",
    tags: ["virtual", "gaming", "digital", "ownership"]
  }];
  var categories = [{
    id: 'all',
    label: 'All Categories',
    icon: Globe
  }, {
    id: 'infrastructure',
    label: 'Infrastructure',
    icon: Database
  }, {
    id: 'finance',
    label: 'Finance',
    icon: Coins
  }, {
    id: 'digital-assets',
    label: 'Digital Assets',
    icon: Zap
  }, {
    id: 'governance',
    label: 'Governance',
    icon: Users
  }, {
    id: 'security',
    label: 'Security',
    icon: Shield
  }, {
    id: 'culture',
    label: 'Culture',
    icon: BookOpen
  }, {
    id: 'distribution',
    label: 'Distribution',
    icon: Zap
  }, {
    id: 'trading',
    label: 'Trading',
    icon: Coins
  }, {
    id: 'virtual-worlds',
    label: 'Virtual Worlds',
    icon: Globe
  }];
  var difficulties = [{
    id: 'all',
    label: 'All Levels',
    color: 'gray'
  }, {
    id: 'beginner',
    label: 'Beginner',
    color: 'green'
  }, {
    id: 'intermediate',
    label: 'Intermediate',
    color: 'yellow'
  }, {
    id: 'advanced',
    label: 'Advanced',
    color: 'red'
  }];

  // Load saved data on component mount
  useEffect(function () {
    try {
      var savedBookmarks = localStorage.getItem('web3-bookmarks');
      var savedStats = localStorage.getItem('web3-stats');
      var savedDarkMode = localStorage.getItem('web3-darkmode');
      if (savedBookmarks) {
        setBookmarks(new Set(JSON.parse(savedBookmarks)));
      }
      if (savedStats) {
        var stats = JSON.parse(savedStats);
        setLearningStats(_objectSpread(_objectSpread({}, stats), {}, {
          viewedTerms: new Set(stats.viewedTerms || [])
        }));
      }
      if (savedDarkMode !== null) {
        setDarkMode(JSON.parse(savedDarkMode));
      }
    } catch (error) {
      console.error('Error loading saved data:', error);
    }
  }, []);

  // Save data to localStorage whenever state changes
  useEffect(function () {
    localStorage.setItem('web3-bookmarks', JSON.stringify(_toConsumableArray(bookmarks)));
  }, [bookmarks]);
  useEffect(function () {
    localStorage.setItem('web3-stats', JSON.stringify(_objectSpread(_objectSpread({}, learningStats), {}, {
      viewedTerms: _toConsumableArray(learningStats.viewedTerms)
    })));
  }, [learningStats]);
  useEffect(function () {
    localStorage.setItem('web3-darkmode', JSON.stringify(darkMode));
    // Add/remove dark class from document for CSS targeting
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  var filteredTerms = useMemo(function () {
    return glossaryData.filter(function (term) {
      var matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) || term.technical.toLowerCase().includes(searchTerm.toLowerCase()) || term.grandma.toLowerCase().includes(searchTerm.toLowerCase()) || term.tags.some(function (tag) {
        return tag.toLowerCase().includes(searchTerm.toLowerCase());
      });
      var matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
      var matchesDifficulty = difficultyFilter === 'all' || term.difficulty === difficultyFilter;
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchTerm, selectedCategory, difficultyFilter]);
  var toggleBookmark = function toggleBookmark(term) {
    var newBookmarks = new Set(bookmarks);
    if (newBookmarks.has(term)) {
      newBookmarks["delete"](term);
    } else {
      newBookmarks.add(term);
    }
    setBookmarks(newBookmarks);
  };
  var markTermAsViewed = function markTermAsViewed(term) {
    setLearningStats(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        viewedTerms: new Set([].concat(_toConsumableArray(prev.viewedTerms), [term]))
      });
    });
  };
  var toggleExpanded = function toggleExpanded(term) {
    setExpandedTerm(expandedTerm === term ? null : term);
    markTermAsViewed(term);
  };
  var generateQuiz = function generateQuiz() {
    var shuffled = [].concat(glossaryData).sort(function () {
      return 0.5 - Math.random();
    });
    var questions = shuffled.slice(0, 5).map(function (term) {
      var wrongAnswers = glossaryData.filter(function (t) {
        return t.term !== term.term;
      }).sort(function () {
        return 0.5 - Math.random();
      }).slice(0, 3).map(function (t) {
        return t.term;
      });
      var options = [term.term].concat(_toConsumableArray(wrongAnswers)).sort(function () {
        return 0.5 - Math.random();
      });
      return {
        question: viewMode === 'technical' ? term.technical : term.grandma,
        correctAnswer: term.term,
        options: options,
        category: term.category,
        difficulty: term.difficulty
      };
    });
    setQuizState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      showResult: false,
      questions: questions
    });
    setCurrentMode('quiz');
  };
  var answerQuestion = function answerQuestion(selectedAnswer) {
    var currentQ = quizState.questions[quizState.currentQuestion];
    var isCorrect = selectedAnswer === currentQ.correctAnswer;
    var newAnswers = [].concat(_toConsumableArray(quizState.answers), [{
      question: currentQ.question,
      selected: selectedAnswer,
      correct: currentQ.correctAnswer,
      isCorrect: isCorrect
    }]);
    if (quizState.currentQuestion === quizState.questions.length - 1) {
      var finalScore = newAnswers.filter(function (a) {
        return a.isCorrect;
      }).length;
      setQuizState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          answers: newAnswers,
          score: finalScore,
          showResult: true
        });
      });

      // Update learning stats
      setLearningStats(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          totalQuizzesTaken: prev.totalQuizzesTaken + 1,
          averageScore: (prev.averageScore * prev.totalQuizzesTaken + finalScore) / (prev.totalQuizzesTaken + 1)
        });
      });
    } else {
      setQuizState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          currentQuestion: prev.currentQuestion + 1,
          answers: newAnswers,
          score: prev.score + (isCorrect ? 1 : 0)
        });
      });
    }
  };
  var getRandomTerm = function getRandomTerm() {
    var randomIndex = Math.floor(Math.random() * glossaryData.length);
    setShowRandomTerm(glossaryData[randomIndex]);
  };
  var shareContent = function shareContent(term, definition) {
    if (navigator.share) {
      navigator.share({
        title: "Web3 Term: ".concat(term),
        text: definition,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText("".concat(term, ": ").concat(definition));
      alert('Copied to clipboard!');
    }
  };
  var exportBookmarks = function exportBookmarks() {
    var bookmarkedTerms = glossaryData.filter(function (term) {
      return bookmarks.has(term.term);
    });
    var exportData = {
      bookmarks: bookmarkedTerms,
      exportDate: new Date().toISOString(),
      stats: learningStats
    };
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "web3-glossary-bookmarks.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };
  var importBookmarks = function importBookmarks(event) {
    var file = event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        try {
          var importData = JSON.parse(e.target.result);
          if (importData.bookmarks) {
            var importedBookmarks = new Set(importData.bookmarks.map(function (term) {
              return term.term;
            }));
            setBookmarks(importedBookmarks);
            alert('Bookmarks imported successfully!');
          }
        } catch (error) {
          alert('Error importing bookmarks. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
  };
  var highlightText = function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    var regex = new RegExp("(".concat(searchTerm, ")"), 'gi');
    return text.replace(regex, '<mark class="bg-yellow-300 dark:bg-yellow-600">$1</mark>');
  };
  var getDifficultyColor = function getDifficultyColor(difficulty) {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  // Quiz Component
  var QuizComponent = function QuizComponent() {
    if (quizState.questions.length === 0) {
      return React.createElement('div', {
        className: 'text-center py-12'
      }, React.createElement('h2', {
        className: "text-2xl font-bold mb-4 ".concat(darkMode ? 'text-white' : 'text-gray-900')
      }, 'Test Your Web3 Knowledge! 🧠'), React.createElement('p', {
        className: "mb-6 ".concat(darkMode ? 'text-gray-300' : 'text-gray-600')
      }, 'Take a quick 5-question quiz to test what you\'ve learned'), React.createElement('button', {
        onClick: generateQuiz,
        className: 'px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors'
      }, 'Start Quiz'));
    }
    if (quizState.showResult) {
      var percentage = Math.round(quizState.score / quizState.questions.length * 100);
      return React.createElement('div', {
        className: 'max-w-2xl mx-auto text-center py-12'
      }, React.createElement('h2', {
        className: "text-3xl font-bold mb-4 ".concat(darkMode ? 'text-white' : 'text-gray-900')
      }, 'Quiz Complete! 🎉'), React.createElement('div', {
        className: "text-6xl mb-4"
      }, percentage >= 80 ? '🏆' : percentage >= 60 ? '👍' : '📚'), React.createElement('p', {
        className: "text-2xl mb-6 ".concat(darkMode ? 'text-gray-300' : 'text-gray-600')
      }, "You scored ".concat(quizState.score, "/").concat(quizState.questions.length, " (").concat(percentage, "%)")), React.createElement('div', {
        className: 'flex gap-4 justify-center mb-8'
      }, React.createElement('button', {
        onClick: generateQuiz,
        className: 'px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors'
      }, 'Try Again'), React.createElement('button', {
        onClick: function onClick() {
          return setCurrentMode('browse');
        },
        className: 'px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors'
      }, 'Back to Browse')),
      // Quiz Results
      React.createElement('div', {
        className: 'text-left space-y-4'
      }, quizState.answers.map(function (answer, index) {
        return React.createElement('div', {
          key: index,
          className: "p-4 rounded-lg border ".concat(answer.isCorrect ? 'bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-700' : 'bg-red-50 border-red-200 dark:bg-red-900 dark:border-red-700')
        }, React.createElement('p', {
          className: 'font-medium mb-2'
        }, "Q".concat(index + 1, ": ").concat(answer.question.slice(0, 80), "...")), React.createElement('p', {
          className: 'text-sm'
        }, "Your answer: ".concat(answer.selected, " ").concat(answer.isCorrect ? '✅' : '❌')), !answer.isCorrect && React.createElement('p', {
          className: 'text-sm font-medium'
        }, "Correct answer: ".concat(answer.correct, " \u2705")));
      })));
    }
    var currentQ = quizState.questions[quizState.currentQuestion];
    return React.createElement('div', {
      className: 'max-w-2xl mx-auto py-12'
    }, React.createElement('div', {
      className: 'mb-6'
    }, React.createElement('div', {
      className: 'flex justify-between items-center mb-4'
    }, React.createElement('span', {
      className: "text-sm ".concat(darkMode ? 'text-gray-400' : 'text-gray-600')
    }, "Question ".concat(quizState.currentQuestion + 1, " of ").concat(quizState.questions.length)), React.createElement('span', {
      className: "text-sm ".concat(darkMode ? 'text-gray-400' : 'text-gray-600')
    }, "Score: ".concat(quizState.score, "/").concat(quizState.currentQuestion))), React.createElement('div', {
      className: 'w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700'
    }, React.createElement('div', {
      className: 'bg-purple-600 h-2 rounded-full transition-all duration-300',
      style: {
        width: "".concat((quizState.currentQuestion + 1) / quizState.questions.length * 100, "%")
      }
    }))), React.createElement('div', {
      className: "p-6 rounded-lg mb-6 ".concat(darkMode ? 'bg-gray-800' : 'bg-gray-50')
    }, React.createElement('h3', {
      className: "text-lg font-medium mb-4 ".concat(darkMode ? 'text-white' : 'text-gray-900')
    }, 'What term does this definition describe?'), React.createElement('p', {
      className: "text-base leading-relaxed ".concat(darkMode ? 'text-gray-300' : 'text-gray-700')
    }, currentQ.question)), React.createElement('div', {
      className: 'space-y-3'
    }, currentQ.options.map(function (option, index) {
      return React.createElement('button', {
        key: index,
        onClick: function onClick() {
          return answerQuestion(option);
        },
        className: "w-full p-4 text-left rounded-lg border transition-all duration-200 ".concat(darkMode ? 'bg-gray-800 border-gray-600 hover:bg-gray-700 text-white' : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-900', " hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500")
      }, option);
    })));
  };

  // Stats Component
  var StatsComponent = function StatsComponent() {
    var progressPercentage = Math.round(learningStats.viewedTerms.size / glossaryData.length * 100);
    return React.createElement('div', {
      className: 'max-w-4xl mx-auto py-12'
    }, React.createElement('h2', {
      className: "text-3xl font-bold text-center mb-8 ".concat(darkMode ? 'text-white' : 'text-gray-900')
    }, 'Your Learning Progress 📊'),
    // Progress Cards
    React.createElement('div', {
      className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'
    },
    // Terms Viewed
    React.createElement('div', {
      className: "p-6 rounded-lg ".concat(darkMode ? 'bg-gray-800' : 'bg-white', " shadow-lg")
    }, React.createElement('div', {
      className: 'flex items-center gap-3 mb-2'
    }, React.createElement(BookOpen, {
      className: "h-6 w-6 text-blue-500"
    }), React.createElement('h3', {
      className: "font-semibold ".concat(darkMode ? 'text-white' : 'text-gray-900')
    }, 'Terms Viewed')), React.createElement('p', {
      className: "text-2xl font-bold ".concat(darkMode ? 'text-white' : 'text-gray-900')
    }, "".concat(learningStats.viewedTerms.size, "/").concat(glossaryData.length)), React.createElement('div', {
      className: 'w-full bg-gray-200 rounded-full h-2 mt-2 dark:bg-gray-700'
    }, React.createElement('div', {
      className: 'bg-blue-600 h-2 rounded-full transition-all duration-300',
      style: {
        width: "".concat(progressPercentage, "%")
      }
    }))),
    // Bookmarks
    React.createElement('div', {
      className: "p-6 rounded-lg ".concat(darkMode ? 'bg-gray-800' : 'bg-white', " shadow-lg")
    }, React.createElement('div', {
      className: 'flex items-center gap-3 mb-2'
    }, React.createElement(Heart, {
      className: "h-6 w-6 text-red-500"
    }), React.createElement('h3', {
      className: "font-semibold ".concat(darkMode ? 'text-white' : 'text-gray-900')
    }, 'Bookmarks')), React.createElement('p', {
      className: "text-2xl font-bold ".concat(darkMode ? 'text-white' : 'text-gray-900')
    }, bookmarks.size)),
    // Quizzes Taken
    React.createElement('div', {
      className: "p-6 rounded-lg ".concat(darkMode ? 'bg-gray-800' : 'bg-white', " shadow-lg")
    }, React.createElement('div', {
      className: 'flex items-center gap-3 mb-2'
    }, React.createElement(Brain, {
      className: "h-6 w-6 text-purple-500"
    }), React.createElement('h3', {
      className: "font-semibold ".concat(darkMode ? 'text-white' : 'text-gray-900')
    }, 'Quizzes')), React.createElement('p', {
      className: "text-2xl font-bold ".concat(darkMode ? 'text-white' : 'text-gray-900')
    }, learningStats.totalQuizzesTaken)),
    // Average Score
    React.createElement('div', {
      className: "p-6 rounded-lg ".concat(darkMode ? 'bg-gray-800' : 'bg-white', " shadow-lg")
    }, React.createElement('div', {
      className: 'flex items-center gap-3 mb-2'
    }, React.createElement(Trophy, {
      className: "h-6 w-6 text-yellow-500"
    }), React.createElement('h3', {
      className: "font-semibold ".concat(darkMode ? 'text-white' : 'text-gray-900')
    }, 'Avg Score')), React.createElement('p', {
      className: "text-2xl font-bold ".concat(darkMode ? 'text-white' : 'text-gray-900')
    }, learningStats.totalQuizzesTaken > 0 ? "".concat(Math.round(learningStats.averageScore * 20), "%") : '0%'))),
    // Progress by Category
    React.createElement('div', {
      className: "p-6 rounded-lg ".concat(darkMode ? 'bg-gray-800' : 'bg-white', " shadow-lg")
    }, React.createElement('h3', {
      className: "text-xl font-bold mb-4 ".concat(darkMode ? 'text-white' : 'text-gray-900')
    }, 'Progress by Category'), React.createElement('div', {
      className: 'space-y-4'
    }, categories.filter(function (cat) {
      return cat.id !== 'all';
    }).map(function (category) {
      var categoryTerms = glossaryData.filter(function (term) {
        return term.category === category.id;
      });
      var viewedInCategory = _toConsumableArray(learningStats.viewedTerms).filter(function (term) {
        return glossaryData.find(function (t) {
          return t.term === term && t.category === category.id;
        });
      }).length;
      var categoryProgress = categoryTerms.length > 0 ? Math.round(viewedInCategory / categoryTerms.length * 100) : 0;
      return React.createElement('div', {
        key: category.id
      }, React.createElement('div', {
        className: 'flex justify-between items-center mb-2'
      }, React.createElement('span', {
        className: "".concat(darkMode ? 'text-gray-300' : 'text-gray-700')
      }, category.label), React.createElement('span', {
        className: "text-sm ".concat(darkMode ? 'text-gray-400' : 'text-gray-500')
      }, "".concat(viewedInCategory, "/").concat(categoryTerms.length, " (").concat(categoryProgress, "%)"))), React.createElement('div', {
        className: 'w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700'
      }, React.createElement('div', {
        className: 'bg-green-600 h-2 rounded-full transition-all duration-300',
        style: {
          width: "".concat(categoryProgress, "%")
        }
      })));
    }))));
  };

  // Random Term Modal
  var RandomTermModal = function RandomTermModal() {
    if (!showRandomTerm) return null;
    return React.createElement('div', {
      className: 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50',
      onClick: function onClick() {
        return setShowRandomTerm(null);
      }
    }, React.createElement('div', {
      className: "max-w-lg w-full rounded-lg shadow-xl ".concat(darkMode ? 'bg-gray-800' : 'bg-white'),
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, React.createElement('div', {
      className: 'p-6'
    }, React.createElement('div', {
      className: 'flex justify-between items-center mb-4'
    }, React.createElement('h3', {
      className: "text-xl font-bold ".concat(darkMode ? 'text-white' : 'text-gray-900')
    }, '🎲 Random Term'), React.createElement('button', {
      onClick: function onClick() {
        return setShowRandomTerm(null);
      },
      className: "text-gray-500 hover:text-gray-700 ".concat(darkMode ? 'hover:text-gray-300' : '')
    }, '✕')), React.createElement('h4', {
      className: "text-2xl font-bold mb-2 ".concat(darkMode ? 'text-white' : 'text-gray-900')
    }, showRandomTerm.term), React.createElement('span', {
      className: "inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ".concat(getDifficultyColor(showRandomTerm.difficulty))
    }, showRandomTerm.difficulty), React.createElement('p', {
      className: "mb-4 ".concat(darkMode ? 'text-gray-300' : 'text-gray-700')
    }, viewMode === 'technical' ? showRandomTerm.technical : showRandomTerm.grandma), React.createElement('div', {
      className: 'flex gap-2'
    }, React.createElement('button', {
      onClick: function onClick() {
        return toggleBookmark(showRandomTerm.term);
      },
      className: "px-4 py-2 rounded-lg text-sm font-medium ".concat(bookmarks.has(showRandomTerm.term) ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200' : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300')
    }, bookmarks.has(showRandomTerm.term) ? '💔 Remove' : '❤️ Bookmark'), React.createElement('button', {
      onClick: getRandomTerm,
      className: 'px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600'
    }, '🔄 Another')))));
  };
  return React.createElement('div', {
    className: "min-h-screen transition-colors duration-300 p-4 relative overflow-hidden ".concat(darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-purple-50 to-blue-50')
  },
  // Three.js animated background
  React.createElement(ThreeJSBackground, {
    darkMode: darkMode
  }), React.createElement('div', {
    className: 'max-w-6xl mx-auto relative z-10'
  },
  // Header
  React.createElement('div', {
    className: 'text-center mb-8'
  }, React.createElement('div', {
    className: 'flex items-center justify-center gap-4 mb-4 fade-in-scale'
  }, React.createElement('img', {
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xXzIpIj4KPHBhdGggZD0iTTUwIDEwMEM3Ny42MTQyIDEwMCAxMDAgNzcuNjE0MiAxMDAgNTBDMTAwIDIyLjM4NTggNzcuNjE0MiAwIDUwIDBDMjIuMzg1OCAwIDAgMjIuMzg1OCAwIDUwQzAgNzcuNjE0MiAyMi4zODU4IDEwMCA1MCAxMDBaIiBmaWxsPSIjMDBENDk1Ii8+CjxwYXRoIGQ9Ik0yMCA1MEwyMCAzMEw0MCAzMEw0MCA1MEw2MCA1MEw2MCA3MEw0MCA3MEw0MCA1MEwyMCA1MFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02MCA1MEw2MCAzMEw4MCAzMEw4MCA1MEw2MCA1MFoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMV8yIj4KPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
    alt: "Web3 Glossary",
    className: "w-12 h-12 pulse-btn"
  }), React.createElement('h1', {
    className: "text-4xl font-bold mb-2 ".concat(darkMode ? 'text-white neon-glow' : 'text-black')
  }, 'Web3 Glossary Pro')), React.createElement('p', {
    className: "text-lg ".concat(darkMode ? 'text-gray-300' : 'text-gray-600')
  }, 'Learn, Quiz, Track Progress & Master Web3!')),
  // Main Navigation
  React.createElement('div', {
    className: 'flex justify-center items-center gap-2 mb-8 flex-wrap'
  }, React.createElement('button', {
    onClick: function onClick() {
      return setCurrentMode('browse');
    },
    className: "px-4 py-2 rounded-lg font-medium transition-all duration-200 ".concat(currentMode === 'browse' ? 'bg-blue-500 text-white shadow-md' : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200')
  }, '📚 Browse'), React.createElement('button', {
    onClick: function onClick() {
      return setCurrentMode('quiz');
    },
    className: "px-4 py-2 rounded-lg font-medium transition-all duration-200 ".concat(currentMode === 'quiz' ? 'bg-purple-500 text-white shadow-md' : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200')
  }, '🧠 Quiz'), React.createElement('button', {
    onClick: function onClick() {
      return setCurrentMode('stats');
    },
    className: "px-4 py-2 rounded-lg font-medium transition-all duration-200 ".concat(currentMode === 'stats' ? 'bg-green-500 text-white shadow-md' : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200')
  }, '📊 Stats'), React.createElement('button', {
    onClick: getRandomTerm,
    className: "px-4 py-2 rounded-lg font-medium transition-all duration-200 ".concat(darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200')
  }, '🎲 Random'),
  // Dark Mode Toggle
  React.createElement('button', {
    onClick: function onClick() {
      return setDarkMode(!darkMode);
    },
    className: "p-2 rounded-lg transition-all duration-300 ".concat(darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200')
  }, React.createElement(darkMode ? Sun : Moon, {
    className: "h-5 w-5"
  }))),
  // Browse Mode Content
  currentMode === 'browse' && React.createElement('div', {},
  // View Mode Toggle
  React.createElement('div', {
    className: 'flex justify-center items-center gap-4 mb-6'
  }, React.createElement('div', {
    className: "rounded-full p-1 shadow-lg border-2 ".concat(darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200')
  }, React.createElement('button', {
    onClick: function onClick() {
      return setViewMode('technical');
    },
    className: "px-6 py-3 rounded-full font-semibold transition-all duration-300 ".concat(viewMode === 'technical' ? 'bg-blue-500 text-white shadow-md' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900')
  }, '🔧 Technical Mode'), React.createElement('button', {
    onClick: function onClick() {
      return setViewMode('grandma');
    },
    className: "px-6 py-3 rounded-full font-semibold transition-all duration-300 ".concat(viewMode === 'grandma' ? 'bg-pink-500 text-white shadow-md' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900')
  }, '👵 Grandma Mode'))),
  // Enhanced Search Bar
  React.createElement('div', {
    className: 'relative mb-6'
  }, React.createElement(Search, {
    className: "absolute left-3 top-3 h-5 w-5 ".concat(darkMode ? 'text-gray-400' : 'text-gray-400')
  }), React.createElement('input', {
    type: 'text',
    placeholder: 'Search terms, definitions, examples, or tags...',
    value: searchTerm,
    onChange: function onChange(e) {
      return setSearchTerm(e.target.value);
    },
    className: "w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg transition-colors ".concat(darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500')
  })),
  // Filters Row
  React.createElement('div', {
    className: 'flex flex-wrap gap-4 mb-6'
  },
  // Category Filter
  React.createElement('div', {
    className: 'flex flex-wrap gap-2'
  }, categories.map(function (category) {
    var Icon = category.icon;
    return React.createElement('button', {
      key: category.id,
      onClick: function onClick() {
        return setSelectedCategory(category.id);
      },
      className: "flex items-center gap-2 px-3 py-1 text-sm rounded-full font-medium transition-all duration-200 ".concat(selectedCategory === category.id ? 'bg-blue-500 text-white shadow-md' : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200')
    }, React.createElement(Icon, {
      className: "h-3 w-3"
    }), category.label);
  })),
  // Difficulty Filter
  React.createElement('div', {
    className: 'flex gap-2'
  }, difficulties.map(function (difficulty) {
    return React.createElement('button', {
      key: difficulty.id,
      onClick: function onClick() {
        return setDifficultyFilter(difficulty.id);
      },
      className: "px-3 py-1 text-sm rounded-full font-medium transition-all duration-200 ".concat(difficultyFilter === difficulty.id ? 'bg-indigo-500 text-white shadow-md' : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200')
    }, difficulty.label);
  }))),
  // Bookmarks and Export/Import
  React.createElement('div', {
    className: 'flex justify-between items-center mb-6'
  }, React.createElement('div', {
    className: 'flex items-center gap-4'
  }, React.createElement('p', {
    className: darkMode ? 'text-gray-400' : 'text-gray-600'
  }, "Showing ".concat(filteredTerms.length, " of ").concat(glossaryData.length, " terms")), bookmarks.size > 0 && React.createElement('span', {
    className: 'px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium dark:bg-red-900 dark:text-red-200'
  }, "\u2764\uFE0F ".concat(bookmarks.size, " bookmarked"))), React.createElement('div', {
    className: 'flex gap-2'
  }, React.createElement('button', {
    onClick: exportBookmarks,
    disabled: bookmarks.size === 0,
    className: "px-3 py-1 text-sm rounded-lg font-medium transition-colors ".concat(bookmarks.size === 0 ? 'opacity-50 cursor-not-allowed' : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200')
  }, '📥 Export'), React.createElement('label', {
    className: "px-3 py-1 text-sm rounded-lg font-medium cursor-pointer transition-colors ".concat(darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200')
  }, '📤 Import', React.createElement('input', {
    type: 'file',
    accept: '.json',
    onChange: importBookmarks,
    className: 'hidden'
  })))),
  // Glossary Grid
  React.createElement('div', {
    className: 'grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative z-10'
  }, filteredTerms.map(function (item, index) {
    return React.createElement('div', {
      key: index,
      className: "floating-card hover-lift rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border overflow-hidden slide-in stagger-".concat(index % 6 + 1, " ").concat(darkMode ? 'bg-gray-800/90 border-gray-700 hover:bg-gray-750/90 glass-effect dark' : 'bg-white/90 border-gray-100 glass-effect', " ").concat(bookmarks.has(item.term) ? 'glow-effect' : '')
    }, React.createElement('div', {
      className: 'p-6'
    }, React.createElement('div', {
      className: 'flex items-center justify-between mb-4'
    }, React.createElement('h3', {
      className: "text-xl font-bold ".concat(darkMode ? 'text-white' : 'text-gray-900')
    }, item.term), React.createElement('div', {
      className: 'flex gap-2'
    }, React.createElement('button', {
      onClick: function onClick() {
        return toggleBookmark(item.term);
      },
      className: "p-1 rounded transition-colors ".concat(bookmarks.has(item.term) ? 'text-red-500 hover:text-red-600' : darkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-400 hover:text-red-500')
    }, React.createElement(Heart, {
      className: "h-5 w-5"
    })), React.createElement('button', {
      onClick: function onClick() {
        return shareContent(item.term, viewMode === 'technical' ? item.technical : item.grandma);
      },
      className: "p-1 rounded transition-colors ".concat(darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-400 hover:text-blue-500')
    }, React.createElement(Share, {
      className: "h-5 w-5"
    })))), React.createElement('div', {
      className: 'flex gap-2 mb-4'
    }, React.createElement('span', {
      className: "px-2 py-1 rounded-full text-xs font-medium ".concat(viewMode === 'technical' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200')
    }, item.category.replace('-', ' ')), React.createElement('span', {
      className: "px-2 py-1 rounded-full text-xs font-medium ".concat(getDifficultyColor(item.difficulty))
    }, item.difficulty), learningStats.viewedTerms.has(item.term) && React.createElement('span', {
      className: 'px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    }, '✓ viewed')), React.createElement('div', {
      className: 'mb-4'
    }, React.createElement('p', {
      className: "leading-relaxed ".concat(darkMode ? 'text-gray-300' : 'text-gray-700'),
      dangerouslySetInnerHTML: {
        __html: highlightText(viewMode === 'technical' ? item.technical : item.grandma, searchTerm)
      }
    })), item.examples && React.createElement('div', {
      className: "border-t pt-4 ".concat(darkMode ? 'border-gray-700' : 'border-gray-200')
    }, React.createElement('p', {
      className: "text-sm mb-2 ".concat(darkMode ? 'text-gray-400' : 'text-gray-500')
    }, 'Examples:'), React.createElement('p', {
      className: "text-sm italic ".concat(darkMode ? 'text-gray-300' : 'text-gray-700')
    }, item.examples)), React.createElement('button', {
      onClick: function onClick() {
        return toggleExpanded(item.term);
      },
      className: "mt-4 w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ".concat(expandedTerm === item.term ? darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700' : viewMode === 'technical' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-200' : 'bg-pink-50 text-pink-700 hover:bg-pink-100 dark:bg-pink-900 dark:text-pink-200')
    }, expandedTerm === item.term ? 'Show Less' : 'Switch View'), expandedTerm === item.term && React.createElement('div', {
      className: "mt-4 p-4 rounded-lg ".concat(darkMode ? 'bg-gray-700' : 'bg-gray-50')
    }, React.createElement('p', {
      className: "text-sm font-medium mb-2 ".concat(darkMode ? 'text-gray-400' : 'text-gray-600')
    }, viewMode === 'technical' ? '👵 Grandma Mode:' : '🔧 Technical Mode:'), React.createElement('p', {
      className: "text-sm leading-relaxed ".concat(darkMode ? 'text-gray-300' : 'text-gray-700')
    }, viewMode === 'technical' ? item.grandma : item.technical))));
  })), filteredTerms.length === 0 && React.createElement('div', {
    className: 'text-center py-12'
  }, React.createElement('p', {
    className: "text-lg ".concat(darkMode ? 'text-gray-400' : 'text-gray-500')
  }, 'No terms found matching your search and filters.'))),
  // Quiz Mode
  currentMode === 'quiz' && QuizComponent(),
  // Stats Mode  
  currentMode === 'stats' && StatsComponent(),
  // Random Term Modal
  RandomTermModal(),
  // Footer
  React.createElement('div', {
    className: 'mt-12 text-center'
  }, React.createElement('p', {
    className: darkMode ? 'text-gray-400' : 'text-gray-500'
  }, 'Web3 Glossary Pro - Your complete Web3 learning companion 🚀'))));
};

// Use createRoot for React 18+
var root = ReactDOM.createRoot ? ReactDOM.createRoot(document.getElementById('root')) : {
  render: function render(element) {
    return ReactDOM.render(element, document.getElementById('root'));
  }
};
root.render(React.createElement(Web3Glossary));
