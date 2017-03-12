var wordBank = {
  level1: [ 'ranch', 'spoil', 'creep', 'steak', 'slave', 'catch', 'X-ray', 'embox', 'rebel', 'solve', 'queue', 'mayor', 'award', 'trait', 'merit', 'print', 'queen', 'sleep', 'train', 'salad', 'wheat', 'sniff', 'sense', 'other', 'glory', 'death', 'false', 'heart', 'rough', 'spite', 'charm', 'Koran', 'front', 'south', 'means', 'beach', 'brink', 'stick', 'blank', 'linen', 'prove', 'price', 'eagle', 'bowel', 'trick', 'sport', 'trail', 'error', 'quest', 'total', 'loose', 'chest', 'crash', 'humor', 'abbey', 'reach', 'adopt', 'stamp', 'split', 'plant', 'toast', 'enemy', 'shock', 'trunk', 'sight', 'quiet', 'patch', 'tread', 'swarm', 'table', 'think', 'arise', 'build', 'layer', 'stand', 'shape', 'teach', 'first', 'clerk', 'white', 'cream', 'essay', 'drill', 'cheat', 'tight', 'theft', 'fibre', 'choke', 'enfix', 'pupil', 'storm', 'ready', 'doubt', 'thank', 'gloom', 'strap', 'fleet', 'spray', 'scrap', 'spell', 'habit', 'belly', 'waist', 'orbit', 'chief', 'ivory', 'rifle', 'straw', 'refer', 'ferry', 'drown', 'sweep', 'snake', 'utter', 'leave', 'proud', 'groan', 'giant', 'shell', 'beard', 'aware', 'steel', 'witch', 'tasty', 'title', 'dough', 'budge', 'board', 'cover', 'speed', 'sheep', 'creed', 'alarm', 'dairy', 'swear', 'crime', 'store', 'agree', 'pound', 'shoot', 'drain', 'mouse', 'draft', 'noble', 'steam', 'money', 'entry', 'faith', 'knock', 'visit', 'brick', 'story', 'guard', 'uncle', 'dozen', 'valid', 'penny', 'spine', 'dance', 'world', 'funny', 'asset', 'tempt', 'awful', 'width', 'snail', 'harsh', 'brand', 'donor', 'favor', 'tooth', 'berry', 'ridge', 'clean', 'trial', 'siege', 'dress', 'angel', 'truck', 'still', 'piano', 'nerve', 'watch', 'black', 'grass', 'glide', 'fever', 'metal', 'cheap', 'drink', 'equip', 'break', 'river', 'worth', 'grand', 'match', 'arrow', 'plane', 'chalk', 'stool' ],
  level2: [ 'polite', 'glance', 'adjust', 'buffet', 'detail', 'carpet', 'script', 'efflux', 'repeat', 'deport', 'course', 'relief', 'design', 'symbol', 'please', 'desert', 'formal', 'cheque', 'unrest', 'number', 'coffin', 'stress', 'scream', 'chance', 'animal', 'gossip', 'oppose', 'global', 'accept', 'devote', 'slogan', 'tumour', 'summit', 'follow', 'honest', 'volume', 'coerce', 'prefer', 'smooth', 'tender', 'singer', 'jungle', 'debate', 'carbon', 'ticket', 'engine', 'twitch', 'sleeve', 'preach', 'critic', 'supply', 'useful', 'guitar', 'stable', 'export', 'direct', 'voyage', 'middle', 'aspect', 'defend', 'regard', 'subway', 'reveal', 'extend', 'rescue', 'nature', 'rotate', 'update', 'injury', 'seller', 'family', 'divide', 'remind', 'branch', 'pardon', 'safety', 'barrel', 'poetry', 'cancel', 'parade', 'flower', 'accent', 'appear', 'effort', 'linear', 'cousin', 'stitch', 'inject', 'differ', 'origin', 'hiccup', 'offend', 'output', 'growth', 'cellar', 'makeup', 'remain', 'single', 'desire', 'mutual', 'arrest', 'sticky', 'reject', 'endure', 'person', 'collar', 'ignore', 'valley', 'heaven', 'matrix', 'pierce', 'sample', 'theory', 'sermon', 'garage', 'tiptoe', 'advice', 'resort', 'bundle', 'Sunday', 'survey', 'meadow', 'peanut', 'letter', 'mobile', 'demand', 'notice', 'salmon', 'bottle', 'report', 'embark', 'spring', 'shrink', 'action', 'ladder', 'likely', 'tenant', 'squash', 'hunter', 'porter', 'absent', 'height', 'bitter', 'bottom', 'pledge', 'inside', 'banner', 'screen', 'insure', 'thread', 'excuse', 'bullet', 'deputy', 'church', 'empire', 'wonder', 'latest', 'ballot', 'needle', 'border', 'tissue', 'gallon', 'spirit', 'kidnap', 'patent', 'foster', 'record', 'square', 'school', 'budget', 'nuance', 'retire', 'revive', 'shiver', 'packet', 'bloody', 'factor', 'extort', 'freeze', 'depend', 'rhythm', 'runner', 'forbid', 'garlic', 'weight', 'strain', 'winter', 'dollar', 'tumble', 'mosque', 'leader', 'finish', 'snatch', 'doctor', 'prince', 'affect', 'regret', 'lawyer', 'modest', 'temple' ],
  level3: [ 'decrease', 'appetite', 'convince', 'handicap', 'spectrum', 'teenager', 'survival', 'portrait', 'describe', 'football', 'discover', 'flourish', 'patience', 'audience', 'scramble', 'judgment', 'nominate', 'language', 'suitcase', 'dominate', 'suppress', 'predator', 'referral', 'business', 'specimen', 'grateful', 'ministry', 'romantic', 'forestry', 'magazine', 'multiply', 'theorist', 'mosquito', 'farewell', 'omission', 'relative', 'flatware', 'dramatic', 'location', 'position', 'rational', 'headline', 'momentum', 'cultural', 'separate', 'occasion', 'employee', 'straight', 'analysis', 'concrete', 'contempt', 'building', 'critical', 'casualty', 'stunning', 'implicit', 'tropical', 'orthodox', 'contrary', 'password', 'wardrobe', 'midnight', 'minister', 'bathroom', 'increase', 'childish', 'dividend', 'champion', 'buttocks', 'creation', 'marriage', 'exercise', 'skeleton', 'dominant', 'detector', 'disaster', 'domestic', 'pleasant', 'freshman', 'designer', 'mutation', 'innocent', 'director', 'complete', 'cemetery', 'familiar', 'fraction', 'abundant', 'prisoner', 'remember', 'profound', 'broccoli', 'nonsense', 'ordinary', 'dialogue', 'customer', 'relation', 'infinite', 'amputate', 'carriage', 'terminal', 'threaten', 'consumer', 'generate', 'workshop', 'flexible', 'talented', 'coincide', 'elephant', 'election', 'surround', 'resident', 'contract', 'birthday', 'original', 'fountain', 'motorist', 'cassette', 'national', 'diameter', 'recovery', 'resource', 'function', 'decisive', 'tendency', 'reliance', 'vigorous', 'electron', 'obstacle', 'feminist', 'survivor', 'sickness', 'assembly', 'abnormal', 'joystick', 'negative', 'discount', 'observer', 'discreet', 'epicalyx', 'reporter', 'exchange', 'compound', 'standard', 'commerce', 'econobox', 'contrast', 'emphasis', 'mountain', 'constant', 'monopoly', 'fragment', 'imposter', 'ideology', 'ceremony', 'shortage', 'notebook', 'marathon', 'material', 'invasion', 'adoption', 'restrain', 'courtesy', 'proclaim', 'transfer', 'stubborn', 'district', 'accurate', 'imperial', 'misplace', 'absolute', 'withdraw', 'hardship', 'evaluate', 'minimize', 'dedicate', 'cupboard', 'accident', 'diplomat', 'category', 'illusion', 'positive', 'memorial', 'register', 'rhetoric', 'hardware', 'possible', 'research', 'medicine', 'traction', 'merchant', 'facility', 'shoulder', 'calendar', 'weakness', 'work out', 'tolerate', 'colorful', 'crackpot', 'delivery' ],
  level4: [ 'instrument', 'photograph', 'government', 'settlement', 'relinquish', 'prediction', 'repetition', 'psychology', 'possession', 'chimpanzee', 'researcher', 'attachment', 'indication', 'understand', 'mainstream', 'mechanical', 'pedestrian', 'regulation', 'conviction', 'girlfriend', 'definition', 'enthusiasm', 'reflection', 'continuous', 'confession', 'television', 'homosexual', 'negligence', 'conception', 'dictionary', 'memorandum', 'atmosphere', 'thoughtful', 'democratic', 'experience', 'production', 'disability', 'incredible', 'stereotype', 'censorship', 'motorcycle', 'litigation', 'distribute', 'concession', 'insistence', 'leadership', 'initiative', 'permission', 'appreciate', 'particular', 'separation', 'decoration', 'obligation', 'preference', 'inhabitant', 'conference', 'plagiarize', 'federation', 'accountant', 'remunerate', 'right wing', 'tournament', 'acceptable', 'deficiency', 'correspond', 'hemisphere', 'folk music', 'distortion', 'basketball', 'illustrate', 'engagement', 'connection', 'transition', 'confidence', 'conspiracy', 'reluctance', 'productive', 'competence', 'constraint', 'correction', 'attractive', 'substitute', 'presidency', 'brilliance', 'hypnothize', 'domination', 'compromise', 'earthquake', 'protection', 'excitement', 'convention', 'convulsion', 'overcharge', 'vegetarian', 'diplomatic', 'difference', 'attraction', 'commission', 'allocation', 'mastermind', 'resolution', 'exaggerate', 'artificial', 'microphone', 'conclusion', 'vegetation', 'excavation', 'systematic', 'articulate', 'chauvinist', 'decorative', 'inhibition', 'literature', 'difficulty', 'collection', 'goalkeeper', 'withdrawal', 'discipline' ],
  level5: [ 'registration', 'intermediate', 'conventional', 'constitution', 'conservation', 'intervention', 'acquaintance', 'transmission', 'jurisdiction', 'headquarters', 'interference', 'satisfaction', 'reproduction', 'manufacturer', 'compensation', 'presidential', 'introduction', 'complication', 'contemporary', 'intelligence', 'anticipation', 'mail carrier', 'organisation', 'civilization', 'consultation', 'disagreement', 'accumulation', 'contribution', 'continuation', 'presentation', 'circumstance', 'refrigerator', 'neighborhood' ]
}
