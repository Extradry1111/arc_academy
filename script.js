/**
 * Arc Academy Script - Economic OS for the Internet Education
 * Features: Interactive lessons, quizzes, transaction simulator, progress tracking
 */

const LESSONS = [
    { id: 1, title: "Introduction to Arc: The Economic OS for the Internet" },
    { id: 2, title: "Blockchain Fundamentals and Cryptographic Security" },
    { id: 3, title: "Arc Architecture: Decentralized Transaction Processing" },
    { id: 4, title: "Smart Contracts and Economic Mechanisms" },
    { id: 5, title: "Peer-to-Peer Networks and Distributed Consensus" },
    { id: 6, title: "Building Applications on Arc: Real-World Use Cases" }
];

const LESSON_CONTENT = {
    1: `<h4>What is Arc?</h4><p>Arc is the Economic OS for the internet—a decentralized infrastructure protocol enabling peer-to-peer value transfer, smart contracts, and economic applications with institutional-grade security and transparency.</p><h4>The Problem Arc Solves</h4><p>Traditional internet systems rely on centralized intermediaries (banks, payment processors, cloud providers) that create: single points of failure, counterparty risk, opaque fee structures, censorship potential, and geographic restrictions on access.</p><h4>Arc's Vision</h4><p>Reimagine the internet's economic layer. Arc provides:</p><ul><li><strong>Decentralization:</strong> No single authority controls value transfer</li><li><strong>Transparency:</strong> All transactions auditable and immutable</li><li><strong>Security:</strong> Cryptographic finality, impossible to reverse or forge</li><li><strong>Accessibility:</strong> Global, permissionless, available 24/7</li><li><strong>Efficiency:</strong> Sub-second settlement, minimal transaction costs</li></ul><h4>Core Technology Stack</h4><p><strong>Blockchain:</strong> Distributed ledger recording all transactions</p><p><strong>Cryptography:</strong> ECDSA signatures ensuring authenticity</p><p><strong>Consensus:</strong> Network validators verify and finalize transactions</p><p><strong>Smart Contracts:</strong> Programs executing automatically on Arc network</p><h4>Use Cases</h4><p><strong>P2P Payments:</strong> Send value to anyone globally without intermediaries</p><p><strong>Supply Chain:</strong> Track goods from manufacturer to consumer with immutable records</p><p><strong>DeFi:</strong> Decentralized finance protocols enabling lending, trading, derivatives</p><p><strong>Digital Identity:</strong> Self-sovereign identity managed personally</p><p><strong>Governance:</strong> Decentralized decision-making via token voting</p>`,
    2: `<h4>Hash Functions: Cryptographic Anchors</h4><p>Hash functions convert any data into fixed-length cryptographic fingerprints. SHA-256 produces 256-bit hashes; even tiny data changes produce completely different hashes. Impossible to reverse-engineer original data from hash.</p><h4>Digital Signatures: Proving Ownership</h4><p>ECDSA (Elliptic Curve Digital Signature Algorithm) allows proving you authorized a transaction without revealing your private key. Every Arc transaction is cryptographically signed, proving the sender intended the action.</p><p><strong>Process:</strong> (1) Hash transaction data, (2) Sign hash with private key, (3) Publish public key + signature, (4) Anyone can verify signature matches transaction</p><h4>Public-Private Key Pairs</h4><p>Your private key (256 bits) is your secret. Mathematically, your public key derives from it but never reveals the private key. Send transactions signed with private key; network verifies with public key.</p><h4>Merkle Trees: Data Integrity</h4><p>Arc uses Merkle trees to prove data integrity. Each block contains transactions hashed into a tree structure. Root hash represents entire block. Modifying one transaction would break the entire tree—tampering is obvious.</p><h4>Consensus Security</h4><p>Attacking Arc requires controlling 51%+ of validator stake simultaneously. Cost: billions of dollars. Incentive: corrupt a few transactions worth thousands. Economics make attacks irrational.</p><h4>Quantum Resistance</h4><p>Arc is designed with future quantum computing in mind. Research into post-quantum cryptography ensures Arc remains secure even if quantum computers emerge.</p>`,
    3: `<h4>Arc Node Architecture</h4><p>Arc nodes are distributed across the globe. Each node: (1) Receives transactions from users, (2) Validates transaction signatures and rules, (3) Broadcasts valid transactions to peers, (4) Participates in consensus to finalize blocks.</p><h4>Transaction Lifecycle</h4><p><strong>Submission:</strong> User submits signed transaction to any Arc node</p><p><strong>Validation:</strong> Node checks signature, sender has sufficient balance, nonce is correct</p><p><strong>Propagation:</strong> Valid transaction broadcast to peer nodes via P2P gossip protocol</p><p><strong>Mempool:</strong> Transaction waits in mempool (memory pool) until included in block</p><p><strong>Consensus:</strong> Validators reach agreement on transaction ordering via PoS consensus</p><p><strong>Finality:</strong> Transaction recorded in immutable block. Final. Irreversible.</p><h4>Block Structure</h4><p>Each Arc block contains:</p><ul><li>Block header (timestamp, parent hash, Merkle root, validator signature)</li><li>Transaction list (all transactions in block)</li><li>State root (cryptographic summary of account balances after executing block)</li></ul><h4>Validator Selection</h4><p>Arc uses Proof-of-Stake: validators with more staked ARC have higher probability of being selected to propose next block. Economic incentive: validators earn fees for honest behavior, lose stake for dishonest behavior.</p><h4>Latency Optimization</h4><p>Arc's architecture achieves sub-second finality by: (1) Efficient block propagation, (2) Parallel transaction validation, (3) Optimized consensus algorithm, (4) Geographic validator distribution reducing network latency</p>`,
    4: `<h4>What Are Smart Contracts?</h4><p>Smart contracts are programs that execute automatically on Arc network. Triggered by transactions, they execute business logic deterministically. Everyone runs same code, produces same result. No single entity can change execution.</p><h4>Contract Language</h4><p>Arc smart contracts typically written in Rust or Solidity-like languages. Code compiles to bytecode executed in Arc Virtual Machine. Deterministic execution guarantees same result across all validators.</p><h4>Economic Mechanisms</h4><p><strong>Token Incentives:</strong> Applications reward users for desired behavior via token emissions</p><p><strong>Staking:</strong> Users lock tokens to earn rewards or participate in governance</p><p><strong>Governance:</strong> Decentralized decision-making via token holder voting on protocol changes</p><p><strong>Fee Markets:</strong> Supply/demand dynamics for block space. During congestion, users bid higher fees for priority.</p><h4>DeFi Primitives</h4><p><strong>Decentralized Exchanges:</strong> Trustless trading via liquidity pools (Automated Market Makers)</p><p><strong>Lending Protocols:</strong> Users deposit tokens earning interest; borrowers pay interest; bad debt socialized across depositors</p><p><strong>Derivatives:</strong> Perpetual futures, options, prediction markets all enabled by Arc smart contracts</p><h4>Contract Security</h4><p>Smart contract bugs can be catastrophic—stolen funds worth millions. Best practices:</p><ul><li>Formal verification proving code correctness</li><li>Multiple independent security audits</li><li>Gradual deployment with monitoring</li><li>Insurance mechanisms protecting users</li></ul><h4>Gas and Resource Limits</h4><p>Each operation consumes "gas"—computational cost. Prevents infinite loops and spam. Users pay gas fees proportional to computation used. Markets dynamically adjust fees based on network congestion.</p>`,
    5: `<h4>Peer-to-Peer Networking</h4><p>Arc nodes form a P2P network with no central server. Each node connects to multiple peers, receiving transactions and blocks from neighbors, forwarding to their neighbors. Information propagates via gossip protocol—efficient, resilient, censorship-resistant.</p><h4>Network Topology</h4><p>Arc nodes self-organize into a distributed network. Each node maintains connections to ~100 peers. If node goes offline, network continues functioning. If entire datacenter disconnects, network partitions but recovers when partition heals.</p><h4>Transaction Broadcasting</h4><p>When user submits transaction: (1) Local node validates, (2) Broadcasts to peers, (3) Peers validate and rebroadcast, (4) Within seconds, entire Arc network knows about transaction. Propagation time: <5 seconds globally.</p><h4>Block Propagation</h4><p>Validators produce blocks, broadcast to network. Peers validate block (check all transactions valid, block format correct, validator signature valid), then rebroadcast. After receiving sufficient signatures from peers, block becomes finalized.</p><h4>Consensus Algorithm</h4><p>Arc uses Proof-of-Stake consensus: (1) Randomly select validator weighted by stake, (2) Validator proposes block, (3) Other validators attest block is valid, (4) When ≥2/3 stake attests, block finalized, (5) Next slot begins</p><h4>Sybil Resistance</h4><p>Attackers creating fake identities to gain voting power are prevented by: (1) Stake requirement (costs real capital), (2) Slashing (misbehaving validators lose stake), (3) Difficulty creating accounts (requires solving puzzle or real-world identity verification)</p><h4>Partition Tolerance</h4><p>If network partitions into two groups unable to communicate, Arc continues operating in both partitions. Upon partition healing, one partition "reorgs"—rolls back to common ancestor, applies other partition's blocks. Users see consistent view of network.</p>`,
    6: `<h4>Building on Arc: Developer Experience</h4><p>Arc provides SDKs in JavaScript, Python, Rust, Go enabling developers to: (1) Create wallets, (2) Sign transactions, (3) Query blockchain state, (4) Deploy smart contracts, (5) Listen for events</p><h4>Real-World Application: Supply Chain</h4><p><strong>Problem:</strong> Counterfeit goods plague global trade. Buyers can't verify product authenticity.</p><p><strong>Arc Solution:</strong> Manufacturer mints NFT for each item linked to Arc blockchain. QR code on product links to immutable Arc record. Buyers scan to verify authenticity, see full supply chain history (who manufactured, who transported, who stored).</p><h4>Real-World Application: Remittances</h4><p><strong>Problem:</strong> Sending money internationally costs 5-10% in fees, takes 3-5 days</p><p><strong>Arc Solution:</strong> Sender converts local currency to stablecoin on Arc (instant, 0.5% fee), transfers stablecoin to recipient address (instant, negligible fee), recipient converts to local currency (instant, 0.5% fee). Total: 1% in minutes.</p><h4>Real-World Application: Creator Economy</h4><p><strong>Problem:</strong> Creators dependent on platforms taking 30% cut, can be censored, lose access to audiences</p><p><strong>Arc Solution:</strong> Creator launches token, sells to fans, earns revenue per token held. Fans stake tokens in liquidity pools earning rewards. Creator owns audience directly, can't be deplatformed.</p><h4>Real-World Application: IoT & Smart Devices</h4><p><strong>Problem:</strong> Millions of sensors generating data, no standardized way to monetize</p><p><strong>Arc Solution:</strong> Devices run Arc nodes, sell sensor data for ARC tokens. Buyers access data from device smart contracts. Incentivizes honest reporting (stake slashed for false data).</p><h4>Future Possibilities</h4><p>Arc's decentralized infrastructure enables countless applications: prediction markets, decentralized science funding, global identity systems, digital asset registries, autonomous organizations managed entirely by smart contracts.</p>`
};

const QUIZZES = {
    1: [
        { q: "What does Arc stand for?", options: ["Automated Resource Computing", "The Economic OS for the Internet", "Advanced Relay Computing", "Algebraic Ring Cryptography"], answer: 1, hint: "Review Arc's core purpose" },
        { q: "What problem does Arc solve?", options: ["Centralized intermediary risks", "Internet speed", "Cloud storage", "Email encryption"], answer: 0, hint: "Check the problem statement" },
        { q: "Which of these is NOT a benefit of Arc?", options: ["Decentralization", "Transparency", "Centralized censorship control", "Accessibility"], answer: 2, hint: "Review benefits section" },
        { q: "What is Arc primarily designed for?", options: ["Gaming", "P2P value transfer and economic applications", "Social media", "Video streaming"], answer: 1, hint: "Study Arc's vision" },
        { q: "Which technology enables Arc's security?", options: ["Firewalls", "Cryptography", "Antivirus", "Routers"], answer: 1, hint: "Check core technology stack" }
    ],
    2: [
        { q: "What is a hash function's output called?", options: ["Encryption", "Fingerprint", "Signature", "Token"], answer: 1, hint: "Review hash function section" },
        { q: "Which algorithm does Arc use for digital signatures?", options: ["RSA", "AES", "ECDSA", "MD5"], answer: 2, hint: "Check cryptographic basics" },
        { q: "What is a private key used for?", options: ["Receiving funds", "Signing transactions", "Broadcasting messages", "Storing data"], answer: 1, hint: "Study key pairs" },
        { q: "What is a Merkle tree's purpose?", options: ["Storing passwords", "Proving data integrity", "Encrypting files", "Compressing data"], answer: 1, hint: "Review Merkle trees" },
        { q: "How much validator stake is needed to attack Arc?", options: ["1%", "10%", "51%+", "99%"], answer: 2, hint: "Check consensus security" }
    ],
    3: [
        { q: "What is the first step in Arc's transaction lifecycle?", options: ["Consensus", "Submission", "Validation", "Finality"], answer: 1, hint: "Review transaction steps" },
        { q: "Where do transactions wait before inclusion in a block?", options: ["Blockchain", "Database", "Mempool", "Cache"], answer: 2, hint: "Study transaction flow" },
        { q: "What is a validator's role?", options: ["Storing data", "Creating blocks and verifying transactions", "Managing websites", "Encrypting messages"], answer: 1, hint: "Check validator selection" },
        { q: "What does 'finality' mean in Arc?", options: ["Transaction is uncertain", "Transaction is irreversible", "Transaction is expensive", "Transaction failed"], answer: 1, hint: "Review finality concept" },
        { q: "What does a block header contain?", options: ["User data only", "Timestamp, parent hash, Merkle root, validator signature", "Transaction amounts only", "Just transaction IDs"], answer: 1, hint: "Study block structure" }
    ],
    4: [
        { q: "What are smart contracts?", options: ["Insurance contracts", "Automatically executing programs on Arc", "Legal documents", "Database queries"], answer: 1, hint: "Review smart contracts definition" },
        { q: "Which language is commonly used to write Arc smart contracts?", options: ["Java", "Rust or Solidity-like", "C++", "Python only"], answer: 1, hint: "Check contract language" },
        { q: "What is an Automated Market Maker?", options: ["Market monitor", "Decentralized exchange primitive", "Trading bot", "Price calculator"], answer: 1, hint: "Study DeFi primitives" },
        { q: "What is 'gas' in Arc?", options: ["Fuel", "Computational cost of operations", "Storage space", "Network bandwidth"], answer: 1, hint: "Review gas concept" },
        { q: "What prevents infinite loops in smart contracts?", options: ["Validators", "Firewalls", "Gas limits", "Time limits"], answer: 2, hint: "Study gas and resources" }
    ],
    5: [
        { q: "How many peers does each Arc node typically connect to?", options: ["1", "10", "~100", "1000"], answer: 2, hint: "Review network topology" },
        { q: "How long does transaction propagation take?", options: ["Hours", "Minutes", "Seconds", "Never"], answer: 2, hint: "Check transaction broadcasting" },
        { q: "What is Proof-of-Stake?", options: ["Proof of work algorithm", "Consensus using stake as voting power", "Staking coins in banks", "Proof of purchase"], answer: 1, hint: "Study consensus algorithm" },
        { q: "What happens when the Arc network partitions?", options: ["Network stops", "Both partitions continue operating", "All funds frozen", "Automatic shutdown"], answer: 1, hint: "Review partition tolerance" },
        { q: "What prevents Sybil attacks?", options: ["Firewalls", "Passwords", "Stake requirement + slashing", "IP banning"], answer: 2, hint: "Check Sybil resistance" }
    ],
    6: [
        { q: "What is an NFT in supply chain?", options: ["Not fungible token", "Digital certificate tied to physical item", "Network file transfer", "Non-functional token"], answer: 1, hint: "Review supply chain application" },
        { q: "How much do international remittances cost via Arc?", options: ["10-15%", "1% vs 5-10% traditional", "0%", "Unknown"], answer: 1, hint: "Study remittance example" },
        { q: "What enables creators to own their audience on Arc?", options: ["Centralized platform", "Creator tokens", "Arc takes 30%", "Social media integration"], answer: 1, hint: "Check creator economy" },
        { q: "How can IoT devices monetize data on Arc?", options: ["Sell data for ARC tokens", "Only researchers can access", "Data is worthless", "Centralized database"], answer: 0, hint: "Review IoT application" },
        { q: "What is a prediction market?", options: ["Stock exchange", "Betting on future events outcomes", "Weather forecasting", "Algorithm for predictions"], answer: 1, hint: "Study future possibilities" }
    ]
};

const FLASHCARDS = [
    { term: "Blockchain", definition: "Distributed ledger of transactions chained together cryptographically. Each block references previous block, creating immutable history." },
    { term: "Smart Contract", definition: "Self-executing program on Arc that runs deterministically. Triggered by transactions, executes business logic automatically." },
    { term: "Private Key", definition: "Secret 256-bit number used to sign transactions. Proves you authorized a transaction without revealing the key." },
    { term: "Public Key", definition: "Derived from private key mathematically. Shared openly; others use it to verify your signatures." },
    { term: "Hash", definition: "Cryptographic fingerprint of data. Any change to data produces completely different hash." },
    { term: "Merkle Tree", definition: "Tree of hashed transactions proving data integrity. Modifying one transaction breaks entire tree structure." },
    { term: "Consensus", definition: "Process validators use to agree on transaction ordering and finality. Arc uses Proof-of-Stake consensus." },
    { term: "Proof-of-Stake", definition: "Consensus mechanism where validators' voting power equals their staked tokens. Economically secure." },
    { term: "Finality", definition: "Transaction is permanent, irreversible, recorded on blockchain. Cannot be undone." },
    { term: "Mempool", definition: "Memory pool where transactions wait before inclusion in blocks. First-in-first-out or fee-based ordering." },
    { term: "Gas", definition: "Computational cost of blockchain operations. Users pay gas fees proportional to computation used." },
    { term: "DeFi", definition: "Decentralized Finance. Financial protocols (lending, trading, derivatives) running on blockchain without intermediaries." },
    { term: "AMM", definition: "Automated Market Maker. Decentralized exchange using liquidity pools for trading instead of order books." },
    { term: "Token", definition: "Digital asset on blockchain. Can represent currency, voting rights, ownership, or utility." },
    { term: "Staking", definition: "Locking tokens to earn rewards or participate in governance. Validators stake tokens as security deposit." },
    { term: "Slashing", definition: "Economic penalty. Validators misbehaving lose (slash) portion of staked tokens." },
    { term: "Decentralization", definition: "Distributing power across many participants. No single entity controls Arc." },
    { term: "ECDSA", definition: "Elliptic Curve Digital Signature Algorithm. Cryptographic scheme Arc uses for transaction signatures." },
    { term: "P2P Network", definition: "Peer-to-peer network where nodes communicate directly. No central server. Arc nodes gossip transactions." },
    { term: "Fork", definition: "Software upgrade where nodes agree on new rules. Hard fork requires all nodes upgrade. Soft fork backward compatible." }
];

const LIBRARY_ENTRIES = [
    { title: "Arc Protocol Overview", content: "Arc is a decentralized economic OS enabling peer-to-peer transactions, smart contracts, and economic applications. Built on cryptographic security, consensus-based finality, and globally distributed nodes." },
    { title: "Cryptographic Security Model", content: "Arc uses ECDSA signatures, SHA-256 hashing, and Merkle trees ensuring data integrity. 256-bit private keys mathematically secure against brute-force attacks. Quantum-resistant upgrades in roadmap." },
    { title: "Consensus and Finality", content: "Arc employs Proof-of-Stake consensus. Validators stake tokens, proposers create blocks, attesters verify blocks. ≥2/3 stake must attest for finality. Economic incentives ensure honest behavior. Slashing penalizes misbehavior." },
    { title: "Transaction Processing", content: "Transactions submitted → validated (signature, balance, nonce) → propagated via P2P gossip → enter mempool → included in block → finalized via consensus. Entire process: <10 seconds." },
    { title: "Smart Contract Execution", content: "Smart contracts written in Rust/Solidity run deterministically on Arc VMs. All validators execute identically, producing consistent state. Gas metering prevents infinite loops. Bytecode compiled from human-readable source." },
    { title: "DeFi Primitives on Arc", content: "AMMs enable trustless trading. Lending protocols match borrowers/lenders automatically. Derivatives markets enable perpetuals, options, prediction markets. All composable via smart contract calls." },
    { title: "Economic Incentives", content: "Validators earn transaction fees for honest behavior. Token emissions reward staking. Slashing penalizes attacks. Fee markets dynamically adjust during congestion. Network becomes more secure as more value flows through it." },
    { title: "Network Resilience", content: "Arc nodes distributed globally. P2P gossip protocol efficient and resilient. Network partitions auto-heal. Validator diversity prevents single points of failure. Continued operation even if >33% of nodes offline." },
    { title: "Scalability Roadmap", content: "Arc Layer 1 handles thousands of transactions per second. Layer 2 rollups and sidechains enable millions of TPS. Cross-chain bridges connect Arc to other blockchains." },
    { title: "Privacy Considerations", content: "Arc transactions public by default (transparent accounting). Privacy-preserving techniques (ZK proofs, mixers) available for applications requiring confidentiality. Always trade-off between privacy and transparency." },
    { title: "Supply Chain Applications", content: "Immutable records on Arc prove product authenticity. NFTs linked to physical items. QR codes scan blockchain. Buyers verify entire supply chain. Counterfeiters deterred by immutable records." },
    { title: "Creator Economy", content: "Creators issue tokens, fans purchase/stake tokens. Creator earns revenue per token held. Fans earn staking rewards. Creators own audiences directly, not dependent on platforms." },
    { title: "IoT and Data Markets", content: "Sensors run Arc nodes, sell data for tokens. Data buyers pay for access via smart contracts. Sensors stake tokens, earn rewards for accurate data. False data reports slash stake." },
    { title: "Global Remittances", content: "Traditional remittances cost 5-10%, take 3-5 days. Arc remittances: convert to stablecoin (0.5%), transfer (negligible), convert back (0.5%). Total: 1%, instant." },
    { title: "Developer Ecosystem", content: "SDKs available in JavaScript, Python, Rust, Go. Comprehensive documentation, tutorials, examples. Active developer community. Grants and incentives for building applications." },
    { title: "Arc vs Traditional Systems", content: "Traditional: centralized, opaque fees, counterparty risk, single point failure, censorship possible. Arc: decentralized, transparent, trustless, no intermediaries, censorship-resistant, global access." },
    { title: "Governance Model", content: "ARC token holders vote on protocol changes. Proposals submitted, debated, voted on-chain. ≥66% approval needed. No central authority, decisions made collectively." },
    { title: "Regulatory Considerations", content: "Arc operates as decentralized protocol, not entity. Regulatory frameworks evolving. Applications built on Arc may require licenses. User responsibility to comply with local laws." }
];

let userProgress = initializeProgress();
let currentQuizState = null;
let arcSimulatorState = null;
let verificationStage = 0;
let animationFrameId = null;

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    updateStreak();
    renderLessonsList();
    renderFlashcards();
    renderLibrary();
    updateGlobalProgress();
    showSection('home');

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(e.target.getAttribute('data-section'));
        });
    });
});

function initializeProgress() {
    const defaultState = { streak: 0, lastLogin: null, lessons: {} };
    LESSONS.forEach(lesson => {
        defaultState.lessons[lesson.id] = { completed: false, quizPassed: false, readProgress: 0 };
    });

    const saved = localStorage.getItem('arcProgress');
    if (!saved) return defaultState;

    const parsed = JSON.parse(saved);
    LESSONS.forEach(lesson => {
        if (!parsed.lessons[lesson.id]) {
            parsed.lessons[lesson.id] = { completed: false, quizPassed: false, readProgress: 0 };
        }
    });
    return parsed;
}

function saveProgress() {
    localStorage.setItem('arcProgress', JSON.stringify(userProgress));
    updateGlobalProgress();
}

// NAVIGATION
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => section.classList.add('hidden'));
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

    const target = document.getElementById(sectionId);
    if (target) target.classList.remove('hidden');

    const navItem = document.querySelector(`[data-section="${sectionId}"]`);
    if (navItem) navItem.classList.add('active');

    if (sectionId === 'certificate') {
        checkCertificateEligibility();
    }
}

// PROGRESS & STREAK
function updateGlobalProgress() {
    const total = LESSONS.length;
    const passed = LESSONS.filter(lesson => userProgress.lessons[lesson.id]?.quizPassed).length;
    const percent = total ? Math.round((passed / total) * 100) : 0;

    const bar = document.getElementById('overall-progress-bar');
    const label = document.getElementById('progress-percent');
    if (bar) bar.style.width = `${percent}%`;
    if (label) label.textContent = `${percent}% Completed (${passed}/${total} Lessons Passed)`;

    renderLessonsList();
}

function updateStreak() {
    const today = new Date().toDateString();
    const last = userProgress.lastLogin;
    let streak = userProgress.streak || 0;

    if (last !== today) {
        if (last) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            streak = (last === yesterday.toDateString()) ? streak + 1 : 1;
        } else {
            streak = 1;
        }
        userProgress.streak = streak;
        userProgress.lastLogin = today;
    }

    const streakEl = document.getElementById('current-streak');
    const streakElHeader = document.getElementById('current-streak-header');
    if (streakEl) streakEl.textContent = `${userProgress.streak} Days`;
    if (streakElHeader) streakElHeader.textContent = `${userProgress.streak} Days`;

    saveProgress();
}

// LESSONS
function renderLessonsList() {
    const container = document.getElementById('lessons-list');
    if (!container) return;
    container.innerHTML = '';

    LESSONS.forEach((lesson, index) => {
        const status = userProgress.lessons[lesson.id];
        const isCompleted = !!status.quizPassed;
        const isLocked = index > 0 && !userProgress.lessons[lesson.id - 1].quizPassed;

        const card = document.createElement('div');
        card.className = `lesson-card section-card ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`;

        let statusText = 'Start Lesson';
        let icon = '<i class="fas fa-play"></i>';
        if (isLocked) {
            statusText = 'Locked';
            icon = '<i class="fas fa-lock"></i>';
        } else if (isCompleted) {
            statusText = 'Quiz Passed';
            icon = '<i class="fas fa-check-circle"></i>';
        }

        card.innerHTML = `
            <p>Lesson ${lesson.id}</p>
            <h3>${lesson.title}</h3>
            <div class="lesson-status">
                <span>${statusText}</span>
                ${icon}
            </div>
        `;

        if (!isLocked) {
            card.addEventListener('click', () => openLesson(lesson.id));
        }

        container.appendChild(card);
    });
}

function openLesson(id) {
    showSection('lesson-viewer');

    document.getElementById('lesson-title').textContent = LESSONS[id - 1].title;
    document.getElementById('lesson-content-display').innerHTML = LESSON_CONTENT[id];

    const quizArea = document.getElementById('quiz-area');
    const lessonNavFooter = document.getElementById('lesson-navigation-footer');
    const nextLessonBtn = document.getElementById('next-lesson-btn');

    if (userProgress.lessons[id].quizPassed) {
        quizArea.classList.add('hidden');
        lessonNavFooter.classList.remove('hidden');
        
        const nextLessonId = id + 1;
        if (nextLessonId <= LESSONS.length) {
            nextLessonBtn.onclick = () => openLesson(nextLessonId);
            nextLessonBtn.textContent = `Go to Lesson ${nextLessonId} `;
            const arrowIcon = document.createElement('i');
            arrowIcon.className = 'fas fa-arrow-right';
            nextLessonBtn.appendChild(arrowIcon);
        } else {
            nextLessonBtn.textContent = 'View Certificate ';
            const trophyIcon = document.createElement('i');
            trophyIcon.className = 'fas fa-trophy';
            nextLessonBtn.appendChild(trophyIcon);
            nextLessonBtn.onclick = () => showSection('certificate');
        }
    } else {
        quizArea.classList.remove('hidden');
        lessonNavFooter.classList.add('hidden');
        startStepByStepQuiz(id);
    }

    const wrapper = document.querySelector('.lesson-content-wrapper');
    wrapper.scrollTop = 0;
    wrapper.onscroll = () => updateReadProgress(id, wrapper);
    updateReadProgress(id, wrapper, true);
}

function updateReadProgress(lessonId, container, init = false) {
    const scrollable = container.scrollHeight - container.clientHeight;
    const scrolled = container.scrollTop;
    let progress = 0;

    if (scrollable > 0) {
        progress = Math.min(100, Math.round((scrolled / scrollable) * 100));
    }

    if (init) {
        progress = userProgress.lessons[lessonId].readProgress || 0;
    } else {
        userProgress.lessons[lessonId].readProgress = progress;
        saveProgress();
    }

    document.getElementById('lesson-read-progress').style.width = `${progress}%`;
    document.getElementById('read-progress-percent').textContent = `${progress}%`;
}

function shuffleAnswers(options, correctAnswerIndex) {
    const indexed = options.map((opt, idx) => ({ opt, idx }));
    
    for (let i = indexed.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
    }
    
    const correctIndex = indexed.findIndex(item => item.idx === correctAnswerIndex);
    
    return {
        options: indexed.map(item => item.opt),
        correctIndex: correctIndex
    };
}

// QUIZ
function startStepByStepQuiz(lessonId) {
    currentQuizState = {
        lessonId: lessonId,
        questions: QUIZZES[lessonId],
        currentIndex: 0,
        userAnswers: new Array(QUIZZES[lessonId].length).fill(null),
        started: false
    };

    document.getElementById('quiz-results').classList.add('hidden');
    document.getElementById('quiz-question-display').innerHTML = '';
    document.getElementById('quiz-navigation').classList.remove('hidden');
    document.getElementById('quiz-next-btn').onclick = handleQuizNext;
    document.getElementById('quiz-next-btn').textContent = "Next Question";
    
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const state = currentQuizState;
    const q = state.questions[state.currentIndex];
    
    document.getElementById('quiz-step-indicator').textContent = `Question ${state.currentIndex + 1} of ${state.questions.length}`;
    
    const shuffledOptions = shuffleAnswers(q.options, q.answer);
    
    const container = document.getElementById('quiz-question-display');
    container.innerHTML = `
        <div class="quiz-question-single">
            <h4>${q.q}</h4>
            ${shuffledOptions.options.map((opt, idx) => `
                <div class="quiz-option" data-option="${idx}">
                    <input type="radio" name="current-question" value="${idx}" id="opt-${idx}">
                    <label for="opt-${idx}">${opt}</label>
                </div>
            `).join('')}
        </div>
    `;
    
    if (state.userAnswers[state.currentIndex] !== null && typeof state.userAnswers[state.currentIndex] === 'object') {
        const prevSelected = container.querySelector(`.quiz-option[data-option="${state.userAnswers[state.currentIndex].shuffledIndex}"]`);
        if (prevSelected) {
            prevSelected.classList.add('selected');
            prevSelected.querySelector('input').checked = true;
        }
    }

    container.querySelectorAll('.quiz-option').forEach(opt => {
        opt.onclick = () => {
            container.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            opt.querySelector('input').checked = true;
            state.userAnswers[state.currentIndex] = {
                shuffledIndex: parseInt(opt.dataset.option),
                correctIndex: shuffledOptions.correctIndex,
                original: q.answer
            };
        };
    });
}

function handleQuizNext() {
    const state = currentQuizState;
    const selectedValue = state.userAnswers[state.currentIndex];
    
    if (selectedValue === null || selectedValue === undefined) {
        alert('Please select an answer before proceeding.');
        return;
    }
    
    if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
        renderQuizQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    const state = currentQuizState;
    let correct = 0;
    
    const reviewHTML = state.questions.map((q, idx) => {
        const userAns = state.userAnswers[idx];
        
        let isCorrect;
        let userAnswerText;
        
        if (typeof userAns === 'object' && userAns !== null && userAns.shuffledIndex !== undefined) {
            isCorrect = userAns.shuffledIndex === userAns.correctIndex;
            userAnswerText = q.options[q.answer];
        } else if (typeof userAns === 'number') {
            isCorrect = userAns === q.answer;
            userAnswerText = q.options[userAns];
        } else {
            isCorrect = false;
            userAnswerText = 'Not answered';
        }
        
        if (isCorrect) correct++;
        
        const correctAnswerText = q.options[q.answer];

        return `
            <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                <strong>Q${idx + 1}:</strong> ${q.q}<br>
                <strong>Your answer:</strong> ${userAnswerText || 'Not answered'}<br>
                ${!isCorrect ? `<strong>Correct answer:</strong> ${correctAnswerText}<br>` : ''}
                ${!isCorrect ? `<em>Hint:</em> ${q.hint}` : ''}
            </div>
        `;
    }).join('');
    
    const passed = correct >= 4;
    
    document.getElementById('quiz-question-display').innerHTML = '';
    document.getElementById('quiz-navigation').classList.add('hidden');
    
    const resultsDiv = document.getElementById('quiz-results');
    resultsDiv.classList.remove('hidden');
    
    document.getElementById('quiz-score').innerHTML = `
        <strong class="${passed ? 'result-message success' : 'result-message fail'}">
            You scored ${correct} out of ${state.questions.length}. ${passed ? '✅ You passed!' : '❌ You need 4 correct to pass.'}
        </strong>
    `;
    
    document.getElementById('quiz-review').innerHTML = reviewHTML;
    document.getElementById('quiz-hints').innerHTML = '';

    if (!passed) {
        document.getElementById('quiz-hints').innerHTML = `
            <h4><i class="fas fa-lightbulb"></i> Study Tips:</h4>
            <p>Review the lesson material carefully, especially sections mentioned in the hints above. Focus on mastering Arc's core concepts before retrying.</p>
        `;
        document.getElementById('retry-quiz-btn').classList.remove('hidden');
        document.getElementById('retry-quiz-btn').onclick = () => startStepByStepQuiz(state.lessonId);
        document.getElementById('finish-quiz-btn').classList.add('hidden');
    } else {
        userProgress.lessons[state.lessonId].quizPassed = true;
        userProgress.lessons[state.lessonId].completed = true;
        saveProgress();
        showLessonCompletedNotification(state.lessonId);
        
        document.getElementById('finish-quiz-btn').classList.remove('hidden');
        document.getElementById('finish-quiz-btn').onclick = () => showSection('lessons');
        document.getElementById('retry-quiz-btn').classList.add('hidden');
    }
}

function showLessonCompletedNotification(lessonId) {
    const notification = document.getElementById('lesson-completed-notification');
    const message = document.getElementById('completed-message');
    message.textContent = `Lesson ${lessonId} Completed! 🚀`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2500);
}

// FLASHCARDS
function renderFlashcards() {
    const grid = document.getElementById('flashcard-grid');
    if (!grid) return;
    grid.innerHTML = '';

    FLASHCARDS.forEach(cardInfo => {
        const wrapper = document.createElement('div');
        wrapper.className = 'flashcard-wrapper';

        const card = document.createElement('div');
        card.className = 'flashcard';
        card.innerHTML = `
            <div class="flashcard-front section-card">${cardInfo.term}</div>
            <div class="flashcard-back section-card">
                <p><strong>${cardInfo.term}</strong></p>
                <p>${cardInfo.definition}</p>
            </div>
        `;
        card.addEventListener('click', () => card.classList.toggle('flipped'));

        wrapper.appendChild(card);
        grid.appendChild(wrapper);
    });
}

// LIBRARY
function renderLibrary() {
    const container = document.getElementById('library-content');
    if (!container) return;
    container.innerHTML = '';

    LIBRARY_ENTRIES.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'library-item section-card';
        item.innerHTML = `
            <h3>${entry.title}</h3>
            <p>${entry.content}</p>
        `;
        container.appendChild(item);
    });
}

// CERTIFICATE
function checkCertificateEligibility() {
    const total = LESSONS.length;
    const completed = LESSONS.filter(lesson => userProgress.lessons[lesson.id]?.quizPassed).length;

    const message = document.getElementById('certificate-message');
    const img = document.getElementById('certificate-display');
    const button = document.getElementById('download-certificate');

    if (completed === total) {
        message.textContent = "🎉 Congratulations! You have completed Arc Academy and earned your Economic OS Certification!";
        img.classList.remove('hidden');
        button.classList.remove('hidden');
        button.onclick = () => alert("Certificate ready! You're now certified in Arc technology. Visit arc.network to start building.");
        triggerConfetti();
    } else {
        message.textContent = `Complete ${total - completed} more lesson${total - completed !== 1 ? 's' : ''} to earn your Arc Academy Certification.`;
        img.classList.add('hidden');
        button.classList.add('hidden');
    }
}

function triggerConfetti() {
    const confettiColors = ['#3BA9C8', '#1B5A7A', '#2B8BA3', '#FFD93D', '#6f42c1'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.setProperty('--confetti-color', confettiColors[Math.floor(Math.random() * confettiColors.length)]);
        confetti.style.setProperty('--x', `${Math.random() * 200 - 100}vw`);
        confetti.style.setProperty('--fall-duration', `${Math.random() * 3 + 2}s`);
        confetti.style.setProperty('--fall-delay', `${Math.random() * 5}s`);
        document.body.appendChild(confetti);

        confetti.addEventListener('animationend', () => confetti.remove());
    }
}

// ARC TRANSACTION SIMULATOR
function openArcSimulator() {
    document.getElementById('arc-simulator-modal').classList.remove('hidden');
    document.getElementById('transaction-setup').classList.remove('hidden');
    document.getElementById('transaction-phase').classList.add('hidden');
    verificationStage = 0;
    arcSimulatorState = null;
}

function closeArcSimulator() {
    document.getElementById('arc-simulator-modal').classList.add('hidden');
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
}

function initializeTransaction() {
    const recipientAddress = document.getElementById('recipient-address').value;
    const amount = parseFloat(document.getElementById('transaction-amount').value);
    const gasPrice = parseInt(document.getElementById('gas-price').value);

    if (!recipientAddress || !recipientAddress.startsWith('0x')) {
        alert('Please enter valid recipient address');
        return;
    }
    if (!amount || amount <= 0) {
        alert('Please enter valid amount');
        return;
    }

    const txHash = '0x' + Array.from({length: 64}, () => Math.floor(Math.random() * 16).toString(16)).join('');
    const gasUsed = 21000 + Math.random() * 50000;
    const txFee = (gasUsed * gasPrice) / 1e9;

    arcSimulatorState = {
        txHash: txHash,
        recipient: recipientAddress,
        amount: amount,
        gasPrice: gasPrice,
        gasUsed: Math.round(gasUsed),
        txFee: txFee,
        startTime: Date.now(),
        confirmationTime: 0,
        blockNumber: Math.floor(Math.random() * 20000000) + 17000000,
        status: 'Processing'
    };

    document.getElementById('transaction-setup').classList.add('hidden');
    document.getElementById('transaction-phase').classList.remove('hidden');
    
    updateSimulatorDisplay();
    startVerificationAnimation();
}

function startVerificationAnimation() {
    let stage = 0;
    const stages = ['stage-1', 'stage-2', 'stage-3', 'stage-4'];
    const stageTexts = ['Signature Generated', 'Broadcast to Mempool', 'Validators Verifying', 'Settlement Complete'];

    const runStage = () => {
        if (stage < stages.length) {
            const stageEl = document.getElementById(stages[stage]);
            stageEl.classList.add('active');
            
            const startTime = Date.now();
            const stageDuration = stage < 3 ? 1500 : 2000;

            const updateStage = () => {
                const elapsed = Date.now() - startTime;
                if (elapsed >= stageDuration) {
                    if (stage === stages.length - 1) {
                        arcSimulatorState.status = 'Complete';
                        arcSimulatorState.confirmationTime = Math.round((Date.now() - arcSimulatorState.startTime) / 1000);
                        updateSimulatorDisplay();
                    }
                    stage++;
                    runStage();
                } else {
                    requestAnimationFrame(updateStage);
                }
            };

            updateStage();
        }
    };

    runStage();
}

function updateSimulatorDisplay() {
    const state = arcSimulatorState;
    
    document.getElementById('tx-hash').textContent = state.txHash.substring(0, 20) + '...';
    document.getElementById('tx-status').textContent = state.status;
    document.getElementById('display-amount').textContent = state.amount + ' ARC';
    document.getElementById('gas-used').textContent = state.gasUsed + ' units';
    document.getElementById('tx-fee').textContent = '$' + state.txFee.toFixed(4);
    document.getElementById('confirm-time').textContent = state.confirmationTime + 's';
    document.getElementById('block-number').textContent = state.status === 'Complete' ? state.blockNumber : '-';
}