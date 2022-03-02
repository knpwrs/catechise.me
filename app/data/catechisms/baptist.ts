import { Book, Catechism } from '.';

const baptist: Catechism = [
  {
    q: 'Who is the first and chiefest being?',
    a: [
      {
        text: 'God is the first and chiefest being.',
        verses: [
          { book: Book.ISAIAH, chapter: 44, verse: 6 },
          { book: Book.ISAIAH, chapter: 48, verse: 12 },
          { book: Book.PSALMS, chapter: 97, verse: 9 },
        ],
      },
    ],
  },
  {
    q: 'Ought everyone to believe there is a God?',
    a: [
      {
        text: 'Everyone ought to believe there is a God;',
        verses: [{ book: Book.HEBREWS, chapter: 11, verse: 6 }],
      },
      {
        text: 'and it is their great sin and folly who do not.',
        verses: [{ book: Book.PSALMS, chapter: 14, verse: 1 }],
      },
    ],
  },
  {
    q: 'How may we know there is a God?',
    a: [
      {
        text: 'The light of nature in man and the works of God plainly declare there is a God;',
        verses: [
          { book: Book.ROMANS, chapter: 1, verse: { from: 19, to: 20 } },
          { book: Book.PSALMS, chapter: 19, verse: { from: 1, to: 3 } },
          { book: Book.ACTS, chapter: 17, verse: 24 },
        ],
      },
      {
        text: 'but his word and Spirit only do it fully and effectually for the salvation of sinners.',
        verses: [
          { book: Book.FIRST_CORINTHIANS, chapter: 2, verse: 10 },
          {
            book: Book.SECOND_TIMOTHY,
            chapter: 3,
            verse: { from: 15, to: 16 },
          },
        ],
      },
    ],
  },
  {
    q: 'What is the word of God?',
    a: [
      {
        text: 'The holy scriptures of the Old and New Testament are the word of God, and the only certain rule of faith and obedience.',
        verses: [
          { book: Book.SECOND_TIMOTHY, chapter: 3, verse: 16 },
          { book: Book.EPHESIANS, chapter: 2, verse: 20 },
        ],
      },
    ],
  },
  {
    q: 'May all men make use of the holy scriptures?',
    a: [
      {
        text: 'All men are not only permitted, but commanded and exhorted to read, hear, and understand the holy scriptures.',
        verses: [
          { book: Book.JOHN, chapter: 5, verse: 38 },
          { book: Book.JOHN, chapter: 17, verse: { from: 17, to: 18 } },
          { book: Book.REVELATION, chapter: 1, verse: 3 },
          { book: Book.ACTS, chapter: 8, verse: 30 },
        ],
      },
    ],
  },
  {
    q: 'What things are chiefly contained in the holy scriptures?',
    a: [
      {
        text: 'The holy scriptures chiefly contain what man ought to believe concerning God, and what duty God requireth of man.',
        verses: [
          { book: Book.SECOND_TIMOTHY, chapter: 1, verse: 13 },
          {
            book: Book.SECOND_TIMOTHY,
            chapter: 3,
            verse: { from: 15, to: 16 },
          },
        ],
      },
    ],
  },
  {
    q: 'What is God?',
    a: [
      {
        text: 'God is a Spirit,',
        verses: [{ book: Book.JOHN, chapter: 4, verse: 24 }],
      },
      {
        text: 'infinite,',
        verses: [{ book: Book.JOB, chapter: 11, verse: { from: 7, to: 9 } }],
      },
      {
        text: 'eternal,',
        verses: [{ book: Book.PSALMS, chapter: 110, verse: 2 }],
      },
      {
        text: 'and unchangeable',
        verses: [{ book: Book.JAMES, chapter: 1, verse: 17 }],
      },
      {
        text: 'in his being,',
        verses: [{ book: Book.EXODUS, chapter: 3, verse: 14 }],
      },
      {
        text: 'wisdom,',
        verses: [{ book: Book.PSALMS, chapter: 147, verse: 5 }],
      },
      {
        text: 'power,',
        verses: [{ book: Book.REVELATION, chapter: 4, verse: 8 }],
      },
      {
        text: 'holiness,',
        verses: [{ book: Book.REVELATION, chapter: 15, verse: 4 }],
      },
      {
        text: 'justice, goodness, and truth.',
        verses: [{ book: Book.EXODUS, chapter: 34, verse: 6 }],
      },
    ],
  },
  {
    q: 'Are there more gods than one?',
    a: [
      {
        text: 'There is but one only, the living and true God.',
        verses: [
          { book: Book.DEUTERONOMY, chapter: 6, verse: 4 },
          { book: Book.JEREMIAH, chapter: 10, verse: 10 },
        ],
      },
    ],
  },
  {
    q: 'How many persons are there in the Godhead?',
    a: [
      {
        text: 'There are three persons in the godhead, the Father, the Son, and the Holy Spirit; and these three are one God, the same in essence, equal in power and glory.',
        verses: [
          { book: Book.FIRST_JOHN, chapter: 5, verse: 7 },
          { book: Book.MATTHEW, chapter: 28, verse: 19 },
        ],
      },
    ],
  },
  {
    q: 'What are the decrees of God?',
    a: [
      {
        text: 'The decrees of God are his eternal purpose according to the counsel of his will, whereby, for his own glory, he hath foreordained whatsoever comes to pass.',
        verses: [
          {
            book: Book.EPHESIANS,
            chapter: 1,
            verse: [4, 11],
          },
          { book: Book.ROMANS, chapter: 9, verse: { from: 22, to: 23 } },
          { book: Book.ISAIAH, chapter: 46, verse: 10 },
          { book: Book.LAMENTATIONS, chapter: 3, verse: 37 },
        ],
      },
    ],
  },
  {
    q: 'How doth God execute his decrees?',
    a: [
      {
        text: 'God executeth his decrees in the works of creation and providence.',
      },
    ],
  },
  {
    q: 'What is the work of creation?',
    a: [
      {
        text: 'The work of creation is God’s making all things of nothing, by the word of his power, in the space of six days, and all very good.',
        verses: [
          { book: Book.GENESIS, chapter: 1 },
          { book: Book.HEBREWS, chapter: 11, verse: 3 },
        ],
      },
    ],
  },
  {
    q: 'How did God create man?',
    a: [
      {
        text: 'God created man, male and female, after his own image, in knowledge, righteousness, and holiness, with dominion over the creatures.',
        verses: [
          { book: Book.GENESIS, chapter: 1, verse: { from: 26, to: 28 } },
          { book: Book.COLOSSIANS, chapter: 3, verse: 10 },
          { book: Book.EPHESIANS, chapter: 4, verse: 24 },
        ],
      },
    ],
  },
  {
    q: 'What are God’s works of providence?',
    a: [
      {
        text: 'God’s works of providence are his most holy,',
        verses: [{ book: Book.PSALMS, chapter: 145, verse: 17 }],
      },
      {
        text: 'wise,',
        verses: [
          { book: Book.ISAIAH, chapter: 28, verse: 29 },
          { book: Book.PSALMS, chapter: 104, verse: 24 },
        ],
      },
      {
        text: 'and powerful preserving',
        verses: [{ book: Book.HEBREWS, chapter: 1, verse: 3 }],
      },
      {
        text: 'and governing all his creatures, and all their actions.',
        verses: [
          { book: Book.PSALMS, chapter: 103, verse: 19 },
          { book: Book.MATTHEW, chapter: 10, verse: { from: 29, to: 31 } },
        ],
      },
    ],
  },
  {
    q: 'What special act of providence did God exercise towards man in the estate wherein he was created?',
    a: [
      {
        text: 'When God had created man, he entered into a covenant of life with him upon condition of perfect obedience; forbidding him to eat of the tree of the knowledge of good and evil, upon pain of death.',
        verses: [
          { book: Book.GALATIANS, chapter: 3, verse: 12 },
          { book: Book.GENESIS, chapter: 2, verse: 17 },
        ],
      },
    ],
  },
  {
    q: 'Did our first parents continue in the estate wherein they were created?',
    a: [
      {
        text: 'Our first parents being left to the freedom of their own will, fell from the estate wherein they were created, by sinning against God.',
        verses: [
          { book: Book.GENESIS, chapter: 3, verse: [{ from: 6, to: 8 }, 13] },
          { book: Book.ECCLESIASTES, chapter: 7, verse: 29 },
        ],
      },
    ],
  },
  {
    q: 'What is sin?',
    a: [
      {
        text: 'Sin is any want of conformity unto, or transgression of, the law of God.',
        verses: [{ book: Book.FIRST_JOHN, chapter: 3, verse: 4 }],
      },
    ],
  },
  {
    q: 'What was the sin whereby our first parents fell from the estate wherein they were created?',
    a: [
      {
        text: 'The sin whereby our first parents fell from the estate wherein they were created, was their eating the forbidden fruit.',
        verses: [
          {
            book: Book.GENESIS,
            chapter: 3,
            verse: [6, 12, { from: 16, to: 17 }],
          },
        ],
      },
    ],
  },
  {
    q: 'Did all mankind fall in Adam’s first transgression?',
    a: [
      {
        text: 'The covenant being made with Adam, not only for himself but for his posterity, all mankind descending from him by ordinary generation sinned in him, and fell with him in his first transgression.',
        verses: [
          { book: Book.GENESIS, chapter: 2, verse: { from: 16, to: 17 } },
          { book: Book.ROMANS, chapter: 5, verse: 12 },
          {
            book: Book.FIRST_CORINTHIANS,
            chapter: 15,
            verse: { from: 21, to: 22 },
          },
        ],
      },
    ],
  },
  {
    q: 'Into what estate did the fall bring mankind?',
    a: [
      {
        text: 'The fall brought mankind into an estate of sin and misery.',
        verses: [{ book: Book.ROMANS, chapter: 5, verse: 12 }],
      },
    ],
  },
  {
    q: 'Wherein consists the sinfulness of that estate whereinto man fell?',
    a: [
      {
        text: 'The sinfulness of that estate whereinto man fell, consists in the guilt of Adam’s first sin, the want of original righteousness, and the corruption of his whole nature, which is commonly called original sin; together with all actual transgressions which proceed from it.',
        verses: [
          { book: Book.ROMANS, chapter: 5, verse: 12 },
          { book: Book.EPHESIANS, chapter: 2, verse: { from: 1, to: 3 } },
          { book: Book.JAMES, chapter: 1, verse: { from: 14, to: 15 } },
          { book: Book.MATTHEW, chapter: 15, verse: 19 },
        ],
      },
    ],
  },
  {
    q: 'What is the misery of that estate whereinto man fell?',
    a: [
      {
        text: 'All mankind by their fall lost communion with God,',
        verses: [{ book: Book.GENESIS, chapter: 3, verse: [8, 10, 24] }],
      },
      {
        text: 'are under his wrath and curse,',
        verses: [
          { book: Book.EPHESIANS, chapter: 2, verse: { from: 2, to: 3 } },
          { book: Book.GALATIANS, chapter: 3, verse: 10 },
        ],
      },
      {
        text: 'and so made liable to all miseries in this life, to death itself, and to the pains of hell for ever',
        verses: [
          { book: Book.LAMENTATIONS, chapter: 3, verse: 39 },
          { book: Book.ROMANS, chapter: 6, verse: 23 },
          { book: Book.MATTHEW, chapter: 25, verse: [41, 46] },
        ],
      },
    ],
  },
  {
    q: 'Did God leave all mankind to perish in the estate of sin and misery?',
    a: [
      {
        text: 'God having out of his mere good pleasure, from all eternity, elected some to everlasting life,',
        verses: [
          { book: Book.EPHESIANS, chapter: 1, verse: { from: 4, to: 5 } },
        ],
      },
      {
        text: 'did enter into a covenant of grace, to deliver them out of the estate of sin and misery, and to bring them into an estate of salvation by a Redeemer.',
        verses: [
          { book: Book.ROMANS, chapter: 3, verse: { from: 20, to: 22 } },
          { book: Book.GALATIANS, chapter: 3, verse: { from: 21, to: 22 } },
        ],
      },
    ],
  },
  {
    q: 'Who is the Redeemer of God’s elect?',
    a: [
      {
        text: 'The only Redeemer of God’s elect is the Lord Jesus Christ;',
        verses: [
          { book: Book.FIRST_TIMOTHY, chapter: 2, verse: { from: 5, to: 6 } },
        ],
      },
      {
        text: 'who, being the eternal Son of God, became man,',
        verses: [
          { book: Book.JOHN, chapter: 1, verse: 14 },
          { book: Book.GALATIANS, chapter: 4, verse: 4 },
        ],
      },
      {
        text: 'and so was and continueth to be God and man in two distinct natures, and one person for ever.',
        verses: [
          { book: Book.ROMANS, chapter: 9, verse: 5 },
          { book: Book.LUKE, chapter: 1, verse: 35 },
          { book: Book.COLOSSIANS, chapter: 2, verse: 9 },
          { book: Book.HEBREWS, chapter: 7, verse: { from: 24, to: 25 } },
        ],
      },
    ],
  },
  {
    q: 'How did Christ, being the Son of God become man?',
    a: [
      {
        text: 'Christ the Son of God became man by taking to himself a true body,',
        verses: [
          { book: Book.HEBREWS, chapter: 2, verse: [14, 17] },
          { book: Book.HEBREWS, chapter: 10, verse: 5 },
        ],
      },
      {
        text: 'and a reasonable soul;',
        verses: [{ book: Book.MATTHEW, chapter: 26, verse: 38 }],
      },
      {
        text: 'being conceived by the power of the Holy Spirit in the womb of the Virgin Mary, and born of her,',
        verses: [
          {
            book: Book.LUKE,
            chapter: 1,
            verse: [27, 31, { from: 34, to: 35 }, 42],
          },
          { book: Book.GALATIANS, chapter: 4, verse: 4 },
        ],
      },
      {
        text: 'yet without sin.',
        verses: [
          { book: Book.HEBREWS, chapter: 4, verse: 15 },
          { book: Book.HEBREWS, chapter: 7, verse: 26 },
        ],
      },
    ],
  },
  {
    q: 'What offices doth Christ execute as our Redeemer?',
    a: [
      {
        text: 'Christ as our Redeemer executeth the offices of a prophet, of a priest, and of king, both in his estate of humiliation and exaltation.',
        verses: [
          {
            book: Book.ACTS,
            chapter: 3,
            verse: 22,
          },
          { book: Book.HEBREWS, chapter: 12, verse: 25 },
          { book: Book.SECOND_CORINTHIANS, chapter: 13, verse: 3 },
          { book: Book.HEBREWS, chapter: 5, verse: { from: 5, to: 7 } },
          { book: Book.HEBREWS, chapter: 7, verse: 25 },
          { book: Book.PSALMS, chapter: 2, verse: 6 },
          { book: Book.ISAIAH, chapter: 9, verse: { from: 6, to: 7 } },
          { book: Book.MATTHEW, chapter: 21, verse: 5 },
          { book: Book.PSALMS, chapter: 2, verse: { from: 8, to: 11 } },
        ],
      },
    ],
  },
  {
    q: 'How doth Christ execute the office of a prophet?',
    a: [
      {
        text: 'Christ executeth the office of prophet in revealing to us, by his word and Spirit, the will of God for our salvation.',
        verses: [
          { book: Book.JOHN, chapter: 1, verse: 18 },
          { book: Book.FIRST_PETER, chapter: 1, verse: { from: 10, to: 12 } },
          { book: Book.JOHN, chapter: 15, verse: 15 },
          { book: Book.JOHN, chapter: 20, verse: 31 },
        ],
      },
    ],
  },
  {
    q: 'How doth Christ execute the office of a priest?',
    a: [
      {
        text: 'Christ executeth the office of priest in his once offering up himself a sacrifice to satisfy divine justice',
        verses: [{ book: Book.HEBREWS, chapter: 9, verse: [14, 28] }],
      },
      {
        text: 'and reconcile us to God,',
        verses: [{ book: Book.HEBREWS, chapter: 2, verse: 17 }],
      },
      {
        text: 'and in making continual intercession for us.',
        verses: [
          { book: Book.HEBREWS, chapter: 7, verse: { from: 24, to: 25 } },
        ],
      },
    ],
  },
  {
    q: 'How doth Christ execute the office of king?',
    a: [
      {
        text: 'Christ executeth the office of a king, in subduing us to himself,',
        verses: [{ book: Book.ACTS, chapter: 15, verse: { from: 14, to: 16 } }],
      },
      {
        text: 'in ruling,',
        verses: [{ book: Book.ISAIAH, chapter: 33, verse: 22 }],
      },
      {
        text: 'and defending us,',
        verses: [{ book: Book.ISAIAH, chapter: 32, verse: { from: 1, to: 2 } }],
      },
      {
        text: 'and in restraining and conquering all his and our enemies.',
        verses: [
          { book: Book.FIRST_CORINTHIANS, chapter: 15, verse: 25 },
          { book: Book.PSALMS, chapter: 110 },
        ],
      },
    ],
  },
  {
    q: 'Wherein did Christ’s humiliation consist?',
    a: [
      {
        text: 'Christ’s humiliation consisted in his being born, and that in a low condition,',
        verses: [{ book: Book.LUKE, chapter: 2, verse: 7 }],
      },
      {
        text: 'made under the law,',
        verses: [{ book: Book.GALATIANS, chapter: 4, verse: 4 }],
      },
      {
        text: 'undergoing the miseries of this life,',
        verses: [
          {
            book: Book.HEBREWS,
            chapter: 12,
            verse: { from: 2, to: 3 },
          },
          { book: Book.ISAIAH, chapter: 53, verse: { from: 2, to: 3 } },
        ],
      },
      {
        text: 'the wrath of God,',
        verses: [
          { book: Book.LUKE, chapter: 22, verse: 44 },
          { book: Book.MATTHEW, chapter: 27, verse: 46 },
        ],
      },
      {
        text: 'and the cursed death of the cross;',
        verses: [{ book: Book.PHILIPPIANS, chapter: 2, verse: 8 }],
      },
      {
        text: 'in being buried,',
        verses: [
          {
            book: Book.FIRST_CORINTHIANS,
            chapter: 15,
            verse: { from: 3, to: 4 },
          },
        ],
      },
      {
        text: 'and continuing under the power of death for a time.',
        verses: [
          { book: Book.ACTS, chapter: 2, verse: [{ from: 24, to: 27 }, 31] },
          { book: Book.MATTHEW, chapter: 12, verse: 40 },
        ],
      },
    ],
  },
  {
    q: 'Wherein consisteth Christ’s exaltation?',
    a: [
      {
        text: 'Christ’s exaltation consisteth in his rising again from the dead on the third day,',
        verses: [{ book: Book.FIRST_CORINTHIANS, chapter: 15, verse: 4 }],
      },
      {
        text: 'in ascending up into heaven,',
        verses: [{ book: Book.MARK, chapter: 16, verse: 19 }],
      },
      {
        text: 'in sitting at the right hand of God the Father,',
        verses: [{ book: Book.EPHESIANS, chapter: 1, verse: 20 }],
      },
      {
        text: 'and in coming to judge the world at the last day.',
        verses: [
          { book: Book.ACTS, chapter: 1, verse: 11 },
          { book: Book.ACTS, chapter: 17, verse: 31 },
        ],
      },
    ],
  },
  {
    q: 'How are we made partakers of the redemption purchased by Christ?',
    a: [
      {
        text: 'We are made partakers of the redemption purchased by Christ, by the effectual application of it to us',
        verses: [{ book: Book.JOHN, chapter: 1, verse: { from: 11, to: 12 } }],
      },
      {
        text: 'by his Holy Spirit.',
        verses: [{ book: Book.TITUS, chapter: 3, verse: { from: 5, to: 6 } }],
      },
    ],
  },
  {
    q: 'How doth the spirit apply to us the redemption purchased by Christ?',
    a: [
      {
        text: 'The Spirit applieth to us the redemption purchased by Christ, by working faith in us,',
        verses: [
          { book: Book.EPHESIANS, chapter: 1, verse: { from: 13, to: 14 } },
          { book: Book.JOHN, chapter: 6, verse: [37, 39] },
          { book: Book.EPHESIANS, chapter: 2, verse: 8 },
        ],
      },
      {
        text: 'and thereby uniting us to Christ, in our effectual calling',
        verses: [
          { book: Book.EPHESIANS, chapter: 3, verse: 17 },
          { book: Book.FIRST_CORINTHIANS, chapter: 1, verse: 9 },
        ],
      },
    ],
  },
  {
    q: 'What is effectual calling?',
    a: [
      {
        text: 'Effectual calling is the work of God’s Spirit,',
        verses: [
          { book: Book.SECOND_TIMOTHY, chapter: 1, verse: 9 },
          {
            book: Book.SECOND_THESSALONIANS,
            chapter: 2,
            verse: { from: 13, to: 14 },
          },
        ],
      },
      {
        text: 'whereby convincing us of our sin and misery,',
        verses: [{ book: Book.ACTS, chapter: 2, verse: 37 }],
      },
      {
        text: 'enlightening our minds in the knowledge of Christ,',
        verses: [{ book: Book.ACTS, chapter: 26, verse: 18 }],
      },
      {
        text: 'and renewing our wills,',
        verses: [
          { book: Book.EZEKIEL, chapter: 36, verse: { from: 26, to: 27 } },
        ],
      },
      {
        text: 'he doth persuade and enable us to embrace Jesus Christ freely offered to us in the gospel.',
        verses: [
          { book: Book.JOHN, chapter: 6, verse: { from: 44, to: 45 } },
          { book: Book.PHILIPPIANS, chapter: 2, verse: 13 },
        ],
      },
    ],
  },
  {
    q: 'What benefits do they that are effectually called partake of in this life?',
    a: [
      {
        text: 'They that are effectually called do in this life partake of justification,',
        verses: [{ book: Book.ROMANS, chapter: 8, verse: 30 }],
      },
      {
        text: 'adoption,',
        verses: [{ book: Book.EPHESIANS, chapter: 1, verse: 5 }],
      },
      {
        text: 'sanctification, and the several benefits which in this life do either accompany or flow from them.',
        verses: [{ book: Book.FIRST_CORINTHIANS, chapter: 1, verse: 30 }],
      },
    ],
  },
  {
    q: 'What is justification?',
    a: [
      {
        text: 'Justification is an act of God’s free grace, wherein he pardoneth all our sins,',
        verses: [
          { book: Book.ROMANS, chapter: 3, verse: { from: 24, to: 25 } },
          { book: Book.ROMANS, chapter: 4, verse: { from: 6, to: 8 } },
        ],
      },
      {
        text: 'and accepteth us as righteous in his sight,',
        verses: [
          { book: Book.SECOND_CORINTHIANS, chapter: 5, verse: [19, 21] },
        ],
      },
      {
        text: 'only for the righteousness of Christ imputed to us,',
        verses: [
          { book: Book.ROMANS, chapter: 5, verse: { from: 17, to: 19 } },
        ],
      },
      {
        text: 'and received by faith alone.',
        verses: [
          { book: Book.GALATIANS, chapter: 2, verse: 16 },
          { book: Book.PHILIPPIANS, chapter: 3, verse: 9 },
        ],
      },
    ],
  },
  {
    q: 'What is adoption?',
    a: [
      {
        text: 'Adoption is an act of God’s free grace,',
        verses: [{ book: Book.FIRST_JOHN, chapter: 3, verse: 1 }],
      },
      {
        text: 'whereby we are received into the number and have a right to all the privileges of the sons of God,',
        verses: [
          { book: Book.JOHN, chapter: 1, verse: 12 },
          { book: Book.ROMANS, chapter: 8, verse: { from: 14, to: 17 } },
        ],
      },
    ],
  },
  {
    q: 'What is sanctification?',
    a: [
      {
        text: 'Sanctification is the work of God’s free grace,',
        verses: [{ book: Book.SECOND_THESSALONIANS, chapter: 2, verse: 13 }],
      },
      {
        text: 'whereby we are renewed in the whole man after the image of God,',
        verses: [
          { book: Book.EPHESIANS, chapter: 4, verse: { from: 23, to: 24 } },
        ],
      },
      {
        text: 'and are enabled more and more to die unto sin, and live unto righteousness.',
        verses: [
          { book: Book.ROMANS, chapter: 6, verse: [4, 6] },
          { book: Book.ROMANS, chapter: 8, verse: 1 },
        ],
      },
    ],
  },
  {
    q: 'What are the benefits which in this life do accompany or flow from justification, adoption, and sanctification?',
    a: [
      {
        text: 'The benefits which in this life do accompany or flow from justification, adoption, and sanctification, are assurance of God’s love, peace of conscience,',
        verses: [
          { book: Book.ROMANS, chapter: 5, verse: [{ from: 1, to: 2 }, 5] },
        ],
      },
      {
        text: 'joy in the Holy Spirit',
        verses: [{ book: Book.ROMANS, chapter: 5, verse: [5, 17] }],
      },
      {
        text: 'increase of grace,',
        verses: [{ book: Book.PROVERBS, chapter: 4, verse: 18 }],
      },
      {
        text: 'and perseverance therein to the end.',
        verses: [
          { book: Book.FIRST_JOHN, chapter: 5, verse: 13 },
          { book: Book.FIRST_PETER, chapter: 1, verse: 5 },
        ],
      },
    ],
  },
  {
    q: 'What benefits do believers receive from Christ at their death?',
    a: [
      {
        text: 'The souls of believers are at their death made perfect in holiness,',
        verses: [{ book: Book.HEBREWS, chapter: 12, verse: 23 }],
      },
      {
        text: 'and do immediately pass into glory;',
        verses: [
          { book: Book.SECOND_CORINTHIANS, chapter: 5, verse: [1, 6, 8] },
          { book: Book.PHILIPPIANS, chapter: 1, verse: 23 },
          { book: Book.LUKE, chapter: 23, verse: 43 },
        ],
      },
      {
        text: 'and their bodies being still united to Christ,',
        verses: [{ book: Book.FIRST_THESSALONIANS, chapter: 4, verse: 14 }],
      },
      {
        text: 'do rest in their graves',
        verses: [{ book: Book.ISAIAH, chapter: 57, verse: 2 }],
      },
      {
        text: 'till the resurrection.',
        verses: [{ book: Book.JOB, chapter: 19, verse: { from: 26, to: 27 } }],
      },
    ],
  },
  {
    q: 'What benefits do believers receive from Christ at the resurrection?',
    a: [
      {
        text: 'At the resurrection believers, being raised up in glory,',
        verses: [{ book: Book.FIRST_CORINTHIANS, chapter: 15, verse: 43 }],
      },
      {
        text: 'shall be openly acknowledged, and acquitted in the day of judgment,',
        verses: [
          { book: Book.MATTHEW, chapter: 25, verse: 23 },
          { book: Book.MATTHEW, chapter: 10, verse: 32 },
        ],
      },
      {
        text: 'and made perfectly blessed, both in soul and body, in the full enjoyment of God',
        verses: [
          { book: Book.FIRST_JOHN, chapter: 3, verse: 2 },
          { book: Book.FIRST_CORINTHIANS, chapter: 13, verse: 12 },
        ],
      },
      {
        text: 'to all eternity.',
        verses: [
          {
            book: Book.FIRST_THESSALONIANS,
            chapter: 4,
            verse: { from: 17, to: 18 },
          },
        ],
      },
    ],
  },
  {
    q: 'But what shall be done to the wicked at their death?',
    a: [
      {
        text: 'The souls of the wicked shall, at their death, be cast into the torments of hell, and their bodies lie in their graves, till the resurrection and judgment of the great day.',
        verses: [
          {
            book: Book.LUKE,
            chapter: 16,
            verse: { from: 23, to: 24 },
          },
          { book: Book.ACTS, chapter: 2, verse: 24 },
          { book: Book.JUDE, verse: [5, 7] },
          { book: Book.FIRST_PETER, chapter: 3, verse: 19 },
          { book: Book.PSALMS, chapter: 49, verse: 14 },
        ],
      },
    ],
  },
  {
    q: 'What shall be done to the wicked, at the day of judgment?',
    a: [
      {
        text: 'At the day of judgment the bodies of the wicked, being raised out of their graves, shall be sentenced, together with their souls, to unspeakable torments with the devil and his angels for ever.',
        verses: [
          { book: Book.JOHN, chapter: 5, verse: { from: 28, to: 29 } },
          { book: Book.MATTHEW, chapter: 25, verse: [41, 46] },
          {
            book: Book.SECOND_THESSALONIANS,
            chapter: 1,
            verse: { from: 8, to: 9 },
          },
        ],
      },
    ],
  },
  {
    q: 'What is the duty which God requireth of man?',
    a: [
      {
        text: 'The duty which God requireth of man is, obedience to his revealed will.',
        verses: [
          { book: Book.MICAH, chapter: 6, verse: 8 },
          { book: Book.FIRST_SAMUEL, chapter: 15, verse: 22 },
        ],
      },
    ],
  },
  {
    q: 'What did God at first reveal to man for the rule of his obedience?',
    a: [
      {
        text: 'The rule which God at first revealed to man for his obedience, was the moral law.',
        verses: [
          { book: Book.ROMANS, chapter: 2, verse: { from: 14, to: 15 } },
          { book: Book.ROMANS, chapter: 10, verse: 5 },
        ],
      },
    ],
  },
  {
    q: 'Where is the moral law summarily comprehended?',
    a: [
      {
        text: 'The moral law is summarily comprehended in the ten commandments.',
        verses: [
          { book: Book.DEUTERONOMY, chapter: 10, verse: 4 },
          { book: Book.MATTHEW, chapter: 19, verse: 17 },
        ],
      },
    ],
  },
  {
    q: 'What is the sum of the ten commandments?',
    a: [
      {
        text: 'The sum of the ten commandments is, to love the Lord our God, with all our heart, with all our soul, with all our strength, and with all our mind; and our neighbour as ourselves.',
        verses: [
          { book: Book.MATTHEW, chapter: 22, verse: { from: 37, to: 40 } },
        ],
      },
    ],
  },
  {
    q: 'What is the preface to the ten commandments?',
    a: [
      {
        text: 'The preface to the ten commandments is in these words; I am the Lord thy God which have brought thee out of the land of Egypt, out of the house of bondage.',
        verses: [{ book: Book.EXODUS, chapter: 20, verse: 2 }],
      },
    ],
  },
  {
    q: 'What doth the preface to the ten commandments teach us?',
    a: [
      {
        text: 'The preface to the ten commandments teacheth us that because God is the Lord, and our God and redeemer, therefore we are bound to keep all his commandments.',
        verses: [
          { book: Book.LUKE, chapter: 1, verse: { from: 74, to: 75 } },
          { book: Book.FIRST_PETER, chapter: 1, verse: { from: 15, to: 19 } },
        ],
      },
    ],
  },
  {
    q: 'Which is the first commandment?',
    a: [
      {
        text: 'The first commandment is, Thou shalt have no other gods before me.',
        verses: [{ book: Book.EXODUS, chapter: 20, verse: 3 }],
      },
    ],
  },
  {
    q: 'What is required in the first commandment?',
    a: [
      {
        text: 'The first commandment requireth us to know and acknowledge God to be the only true God and our God,',
        verses: [
          { book: Book.FIRST_CHRONICLES, chapter: 28, verse: 9 },
          { book: Book.DEUTERONOMY, chapter: 26, verse: 17 },
        ],
      },
      {
        text: 'and to worship and glorify him accordingly.',
        verses: [
          { book: Book.MATTHEW, chapter: 4, verse: 10 },
          { book: Book.PSALMS, chapter: 29, verse: 2 },
        ],
      },
    ],
  },
  {
    q: 'What is forbidden in the first commandment?',
    a: [
      {
        text: 'The first commandment forbiddeth the denying,',
        verses: [{ book: Book.PSALMS, chapter: 14, verse: 1 }],
      },
      {
        text: 'or not worshipping and glorifying the true God,',
        verses: [{ book: Book.ROMANS, chapter: 1, verse: 21 }],
      },
      {
        text: 'as God and our God,',
        verses: [
          { book: Book.PSALMS, chapter: 81, verse: { from: 10, to: 11 } },
        ],
      },
      {
        text: 'and the giving of that worship and glory to any other, which is due unto him alone.',
        verses: [
          { book: Book.ROMANS, chapter: 1, verse: { from: 25, to: 26 } },
        ],
      },
    ],
  },
  {
    q: 'What are we especially taught by these words before me, in the first commandment?',
    a: [
      {
        text: 'These words before me, in the first commandment teach us, that God, who seeth all things, taketh notice of and is much displeased with the sin of having any other God.',
        verses: [{ book: Book.EXODUS, chapter: 8, verse: 5, following: true }],
      },
    ],
  },
  {
    q: 'Which is the second commandment?',
    a: [
      {
        text: 'The second commandment is, Thou shalt not make unto thee any graven image, or any likeness of anything that is in heaven above, or that is in the earth beneath, or that is in the water under the earth; thou shalt not bow down thyself to them, nor serve them; for I the Lord thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; and shewing mercy unto thousands of them that love me, and keep my commandments.',
        verses: [{ book: Book.EXODUS, chapter: 20, verse: { from: 4, to: 6 } }],
      },
    ],
  },
  {
    q: 'What is required in the second commandment?',
    a: [
      {
        text: 'The second commandment requireth the receiving, observing, and keeping pure and entire all such religious worship and ordinances, as God hath appointed in his word.',
        verses: [
          { book: Book.DEUTERONOMY, chapter: 32, verse: 46 },
          { book: Book.MATTHEW, chapter: 23, verse: 20 },
          { book: Book.ACTS, chapter: 2, verse: 42 },
        ],
      },
    ],
  },
  {
    q: 'What is forbidden in the second commandment?',
    a: [
      {
        text: 'The second commandment forbiddeth the worshipping of God by images',
        verses: [
          { book: Book.DEUTERONOMY, chapter: 4, verse: { from: 15, to: 19 } },
          { book: Book.EXODUS, chapter: 32, verse: [5, 8] },
        ],
      },
      {
        text: 'or any other way not appointed in his word.',
        verses: [
          { book: Book.DEUTERONOMY, chapter: 12, verse: { from: 31, to: 32 } },
        ],
      },
    ],
  },
  {
    q: 'What are the reasons annexed to the second commandment?',
    a: [
      {
        text: 'The reasons annexed to the second commandment are, God’s sovereignty over us,',
        verses: [
          { book: Book.PSALMS, chapter: 45, verse: [{ from: 2, to: 3 }, 6] },
        ],
      },
      {
        text: 'his propriety in us,',
        verses: [{ book: Book.PSALMS, chapter: 45, verse: 11 }],
      },
      {
        text: 'and the zeal he hath to his own worship.',
        verses: [
          { book: Book.EXODUS, chapter: 34, verse: { from: 13, to: 14 } },
        ],
      },
    ],
  },
  {
    q: 'Which is the third commandment?',
    a: [
      {
        text: 'The third commandment is, Thou shalt not take the name of the Lord thy God in vain; for the Lord will not hold him guiltless that taketh his name in vain.',
        verses: [{ book: Book.EXODUS, chapter: 20, verse: 7 }],
      },
    ],
  },
  {
    q: 'What is required in the third commandment?',
    a: [
      {
        text: 'The third commandment requireth the holy and reverent use of God’s names,',
        verses: [
          { book: Book.MATTHEW, chapter: 6, verse: 9 },
          { book: Book.DEUTERONOMY, chapter: 28, verse: 58 },
        ],
      },
      {
        text: 'titles,',
        verses: [{ book: Book.PSALMS, chapter: 68, verse: 4 }],
      },
      {
        text: 'attributes,',
        verses: [
          { book: Book.REVELATION, chapter: 15, verse: { from: 3, to: 4 } },
        ],
      },
      {
        text: 'ordinances,',
        verses: [{ book: Book.MALACHI, chapter: 1, verse: [11, 14] }],
      },
      {
        text: 'word',
        verses: [
          { book: Book.PSALMS, chapter: 136, verse: { from: 1, to: 2 } },
        ],
      },
      {
        text: 'and works.',
        verses: [{ book: Book.JOB, chapter: 36, verse: 24 }],
      },
    ],
  },
  {
    q: 'What is forbidden in the third commandment?',
    a: [
      {
        text: 'The third commandment forbiddeth all profaning and abusing of any thing whereby God makes himself known.',
        verses: [
          { book: Book.MALACHI, chapter: 1, verse: [{ from: 6, to: 7 }, 12] },
          { book: Book.MALACHI, chapter: 2, verse: 2 },
          { book: Book.MALACHI, chapter: 3, verse: 14 },
        ],
      },
    ],
  },
  {
    q: 'What is the reason annexed to the third commandment?',
    a: [
      {
        text: 'The reason annexed to the third commandment is, that however the breakers of this commandment may escape punishment from men, yet the Lord our God will not suffer them to escape his righteous judgment.',
      },
    ],
  },
  {
    q: 'What is the fourth commandment?',
    a: [
      {
        text: 'The fourth commandment is, Remember the Sabbath day to keep it holy; six days shalt thou labour and do all thy work; but the seventh day is the Sabbath of the Lord thy God, in it thou shalt not do any work, thou, nor thy son, nor thy daughter, nor thy man-servant, nor thy maid-servant, nor thy cattle, nor the stranger that is within thy gates; for in six days the Lord made heaven and earth, the sea, and all that in them is, and rested the seventh day; wherefore the Lord blessed the Sabbath day and hallowed it.',
        verses: [
          { book: Book.EXODUS, chapter: 20, verse: { from: 8, to: 11 } },
        ],
      },
    ],
  },
  {
    q: 'What is required in the fourth commandment?',
    a: [
      {
        text: 'The fourth commandment requireth the keeping holy to God such set times as He hath appointed in His word, expressly, one whole day in seven to be a holy sabbath to Himself.',
        verses: [
          { book: Book.EXODUS, chapter: 20, verse: { from: 8, to: 11 } },
          { book: Book.DEUTERONOMY, chapter: 5, verse: { from: 12, to: 14 } },
        ],
      },
    ],
  },
  {
    q: 'Which day of the seven hath God appointed to be the weekly Sabbath?',
    a: [
      {
        text: 'Before the resurrection of Christ, God appointed the seventh day of the week to be the weekly Sabbath;',
        verses: [
          { book: Book.EXODUS, chapter: 20, verse: { from: 8, to: 11 } },
          { book: Book.DEUTERONOMY, chapter: 5, verse: { from: 12, to: 14 } },
        ],
      },
      {
        text: 'and the first day of the week ever since, to continue to the end of the world, which is the Christian Sabbath.',
        verses: [
          {
            book: Book.PSALMS,
            chapter: 118,
            verse: 24,
          },
          { book: Book.MATTHEW, chapter: 28, verse: 1 },
          { book: Book.MARK, chapter: 2, verse: { from: 27, to: 28 } },
          { book: Book.JOHN, chapter: 20, verse: [{ from: 19, to: 20 }, 26] },
          { book: Book.REVELATION, chapter: 1, verse: 10 },
          { book: Book.MARK, chapter: 16, verse: 2 },
          { book: Book.LUKE, chapter: 24, verse: [1, { from: 30, to: 36 }] },
          { book: Book.JOHN, chapter: 20, verse: 1 },
          { book: Book.ACTS, chapter: 1, verse: 3 },
          { book: Book.ACTS, chapter: 2, verse: { from: 1, to: 2 } },
          { book: Book.ACTS, chapter: 20, verse: 7 },
          { book: Book.FIRST_CORINTHIANS, chapter: 16, verse: [1, 2] },
        ],
      },
    ],
  },
  {
    q: 'How is the Sabbath to be sanctified?',
    a: [
      {
        text: 'The Sabbath is to be sanctified by a holy resting all that day,',
        verses: [{ book: Book.EXODUS, chapter: 20, verse: [8, 10] }],
      },
      {
        text: 'even from such worldly employments and recreations as are lawful on other days;',
        verses: [
          { book: Book.EXODUS, chapter: 16, verse: { from: 25, to: 28 } },
          { book: Book.NEHEMIAH, chapter: 13, verse: { from: 15, to: 22 } },
        ],
      },
      {
        text: 'and spending the whole time in the public and private exercises of God’s worship,',
        verses: [
          { book: Book.LUKE, chapter: 4, verse: 16 },
          { book: Book.ACTS, chapter: 20, verse: 7 },
          { book: Book.ISAIAH, chapter: 66, verse: 23 },
        ],
      },
      {
        text: 'except so much as is to be taken up in the works of necessity and mercy',
        verses: [
          { book: Book.MATTHEW, chapter: 12, verse: { from: 1, to: 13 } },
        ],
      },
    ],
  },
  {
    q: 'What is forbidden in the fourth commandment?',
    a: [
      {
        text: 'The fourth commandment forbiddeth the omission or careless performance of the duties required,',
        verses: [
          { book: Book.EZEKIEL, chapter: 22, verse: 26 },
          { book: Book.AMOS, chapter: 8, verse: 5 },
          { book: Book.MALACHI, chapter: 1, verse: 13 },
        ],
      },
      {
        text: 'and the profaning the day by idleness,',
        verses: [{ book: Book.ACTS, chapter: 20, verse: [7, 9] }],
      },
      {
        text: 'or doing that which is in itself sinful,',
        verses: [{ book: Book.EZEKIEL, chapter: 23, verse: 38 }],
      },
      {
        text: 'or by unnecessary thoughts, words, or works, about worldly employments or recreations.',
        verses: [
          { book: Book.JEREMIAH, chapter: 17, verse: { from: 24, to: 27 } },
          { book: Book.ISAIAH, chapter: 58, verse: 13 },
        ],
      },
    ],
  },
  {
    q: 'What are the reasons annexed to the fourth commandment?',
    a: [
      {
        text: 'The reasons annexed to the fourth commandment, are God’s allowing us six days of the week for our own lawful employments,',
        verses: [{ book: Book.EXODUS, chapter: 20, verse: 9 }],
      },
      {
        text: 'his challenging a special propriety in a seventh, his own example, and his blessing the Sabbath day.',
        verses: [{ book: Book.EXODUS, chapter: 20, verse: 11 }],
      },
    ],
  },
  {
    q: 'Which is the fifth commandment?',
    a: [
      {
        text: 'The fifth commandment is, Honor thy father and thy mother; that thy days may be long in the land which the Lord thy God giveth thee.',
        verses: [{ book: Book.EXODUS, chapter: 20, verse: 12 }],
      },
    ],
  },
  {
    q: 'What is required in the fifth commandment?',
    a: [
      {
        text: 'The fifth commandment requireth the preserving the honour and performing the duties belonging to every one in their several places and relations, as superiors,',
        verses: [{ book: Book.EPHESIANS, chapter: 5, verse: 21 }],
      },
      {
        text: 'inferiors,',
        verses: [{ book: Book.FIRST_PETER, chapter: 2, verse: 17 }],
      },
      {
        text: 'or equals.',
        verses: [{ book: Book.ROMANS, chapter: 12, verse: 10 }],
      },
    ],
  },
  {
    q: 'What is forbidden in the fifth commandment?',
    a: [
      {
        text: 'The fifth commandment forbiddeth the neglect of, or doing any thing against the honour and duty which belongeth to every one in their several places and relations.',
        verses: [
          { book: Book.MATTHEW, chapter: 15, verse: { from: 4, to: 6 } },
          { book: Book.EZEKIEL, chapter: 34, verse: 24 },
          { book: Book.ROMANS, chapter: 13, verse: 8 },
        ],
      },
    ],
  },
  {
    q: 'What is the reason annexed to the fifth commandment?',
    a: [
      {
        text: 'The reason annexed to the fifth commandment is a promise of long life and prosperity (as far as it shall serve for God’s glory, and their own good) to all such as keep this commandment.',
        verses: [
          { book: Book.DEUTERONOMY, chapter: 5, verse: 16 },
          { book: Book.EPHESIANS, chapter: 6, verse: { from: 2, to: 3 } },
        ],
      },
    ],
  },
  {
    q: 'What is the sixth commandment?',
    a: [
      {
        text: 'The sixth commandment is, Thou shalt not kill.',
        verses: [{ book: Book.EXODUS, chapter: 20, verse: 13 }],
      },
    ],
  },
  {
    q: 'What is required in the sixth commandment?',
    a: [
      {
        text: 'The sixth commandment requireth all lawful endeavours to preserve our own life',
        verses: [
          { book: Book.EPHESIANS, chapter: 5, verse: { from: 28, to: 29 } },
        ],
      },
      {
        text: 'and the life of others.',
        verses: [{ book: Book.FIRST_KINGS, chapter: 18, verse: 4 }],
      },
    ],
  },
  {
    q: 'What is forbidden in the sixth commandment?',
    a: [
      {
        text: 'The sixth commandment absolutely forbiddeth the taking away of our own life, or the life of our neighbour unjustly, or whatsoever tendeth thereunto.',
        verses: [
          { book: Book.ACTS, chapter: 26, verse: 28 },
          { book: Book.GENESIS, chapter: 9, verse: 9 },
        ],
      },
    ],
  },
  {
    q: 'Which is the seventh commandment?',
    a: [
      {
        text: 'The seventh commandment is, Thou shalt not commit adultery.',
        verses: [{ book: Book.EXODUS, chapter: 20, verse: 14 }],
      },
    ],
  },
  {
    q: 'What is required in the seventh commandment?',
    a: [
      {
        text: "The seventh commandment requireth the preservation of our own and our neighbor's chastity, in heart, speech, and behavior.",
        verses: [
          {
            book: Book.FIRST_CORINTHIANS,
            chapter: 7,
            verse: [{ from: 2, to: 3 }, 5, 34, 36],
          },
          { book: Book.COLOSSIANS, chapter: 4, verse: 6 },
          { book: Book.FIRST_PETER, chapter: 3, verse: 2 },
        ],
      },
    ],
  },
  {
    q: 'What is forbidden in the seventh commandment?',
    a: [
      {
        text: 'The seventh commandment forbiddeth all unchaste thoughts, words, and actions.',
        verses: [
          { book: Book.MATTHEW, chapter: 15, verse: 19 },
          { book: Book.MATTHEW, chapter: 5, verse: 28 },
          { book: Book.EPHESIANS, chapter: 5, verse: { from: 3, to: 4 } },
        ],
      },
    ],
  },
  {
    q: 'Which is the eighth commandment?',
    a: [
      {
        text: 'The eighth commandment is, Thou shalt not steal.',
        verses: [{ book: Book.EXODUS, chapter: 20, verse: 15 }],
      },
    ],
  },
  {
    q: 'What is required in the eighth commandment?',
    a: [
      {
        text: 'The eighth commandment requireth the lawful procuring and furthering the wealth and outward estate of ourselves and others.',
        verses: [
          {
            book: Book.GENESIS,
            chapter: 30,
            verse: 30,
          },
          {
            book: Book.FIRST_TIMOTHY,
            chapter: 5,
            verse: 8,
          },
          { book: Book.LEVITICUS, chapter: 25, verse: 35 },
          { book: Book.DEUTERONOMY, chapter: 22, verse: { from: 1, to: 5 } },
          { book: Book.EXODUS, chapter: 23, verse: { from: 4, to: 5 } },
          { book: Book.GENESIS, chapter: 47, verse: [14, 20] },
        ],
      },
    ],
  },
  {
    q: 'What is forbidden in the eighth commandment?',
    a: [
      {
        text: 'The eighth commandment forbiddeth whatsoever doth or may unjustly hinder our own',
        verses: [
          {
            book: Book.FIRST_TIMOTHY,
            chapter: 5,
            verse: 8,
          },
          { book: Book.PROVERBS, chapter: 28, verse: 19 },
        ],
      },
      {
        text: 'or our neighbour’s wealth or outward estate.',
        verses: [
          { book: Book.PROVERBS, chapter: 21, verse: 17 },
          { book: Book.PROVERBS, chapter: 23, verse: { from: 20, to: 21 } },
          { book: Book.EPHESIANS, chapter: 4, verse: 28 },
        ],
      },
    ],
  },
  {
    q: 'Which is the ninth commandment?',
    a: [
      {
        text: 'The ninth commandment is, Thou shalt not bear false witness against thy neighbour.',
        verses: [{ book: Book.EXODUS, chapter: 20, verse: 16 }],
      },
    ],
  },
  {
    q: 'What is required in the ninth commandment?',
    a: [
      {
        text: 'The ninth commandment requireth the maintaining and promoting of truth between man and man,',
        verses: [{ book: Book.ZECHARIAH, chapter: 8, verse: 16 }],
      },
      {
        text: 'and of our own and our neighbour’s good name,',
        verses: [{ book: Book.JOHN, chapter: 5, verse: 12 }],
      },
      {
        text: 'especially in witness bearing.',
        verses: [{ book: Book.PROVERBS, chapter: 14, verse: [5, 25] }],
      },
    ],
  },
  {
    q: 'What is forbidden in the ninth commandment?',
    a: [
      {
        text: 'The ninth commandment forbiddeth whatsoever is prejudicial to the truth, or injurious to our own or our neighbour’s good name.',
        verses: [
          { book: Book.FIRST_SAMUEL, chapter: 17, verse: 28 },
          { book: Book.LEVITICUS, chapter: 19, verse: 16 },
          { book: Book.PSALMS, chapter: 15, verse: { from: 2, to: 3 } },
        ],
      },
    ],
  },
  {
    q: 'Which is the tenth commandment?',
    a: [
      {
        text: 'The tenth commandment is Thou shalt not covet thy neighbour’s house, thou shalt not covet thy neighbour’s wife, nor his man-servant, nor his maid-servant, nor his ox, nor his ass, nor anything that is thy neighbour’s.',
        verses: [{ book: Book.EXODUS, chapter: 20, verse: 17 }],
      },
    ],
  },
  {
    q: 'What is required in the tenth commandment?',
    a: [
      {
        text: 'The tenth commandment requireth full contentment with our own condition,',
        verses: [
          { book: Book.HEBREWS, chapter: 13, verse: 5 },
          { book: Book.FIRST_TIMOTHY, chapter: 6, verse: 6 },
        ],
      },
      {
        text: 'with a right and charitable frame of spirit toward our neighbour, and all that is his.',
        verses: [
          { book: Book.JOB, chapter: 31, verse: 29 },
          { book: Book.ROMANS, chapter: 7, verse: 15 },
          { book: Book.FIRST_TIMOTHY, chapter: 1, verse: 5 },
          { book: Book.FIRST_CORINTHIANS, chapter: 8, verse: [4, 7] },
        ],
      },
    ],
  },
  {
    q: 'What is forbidden in the tenth commandment?',
    a: [
      {
        text: 'The tenth commandment forbiddeth all discontentment with our own estate,',
        verses: [
          { book: Book.FIRST_KINGS, chapter: 21, verse: 4 },
          { book: Book.ESTHER, chapter: 5, verse: 13 },
          { book: Book.FIRST_CORINTHIANS, chapter: 10, verse: 10 },
        ],
      },
      {
        text: 'envying or grieving at the good of our neighbour,',
        verses: [
          { book: Book.GALATIANS, chapter: 5, verse: 26 },
          { book: Book.JAMES, chapter: 3, verse: [14, 16] },
        ],
      },
      {
        text: 'and all inordinate motions and affections to anything that is his.',
        verses: [
          { book: Book.ROMANS, chapter: 7, verse: { from: 7, to: 8 } },
          { book: Book.ROMANS, chapter: 13, verse: 9 },
          { book: Book.DEUTERONOMY, chapter: 5, verse: 21 },
        ],
      },
    ],
  },
  {
    q: 'Is any man able perfectly to keep the commandments of God?',
    a: [
      {
        text: 'No mere man since the fall is able in this life perfectly to keep the commandments of God,',
        verses: [
          { book: Book.ECCLESIASTES, chapter: 7, verse: 20 },
          { book: Book.FIRST_JOHN, chapter: 1, verse: [8, 10] },
          { book: Book.GALATIANS, chapter: 5, verse: 17 },
        ],
      },
      {
        text: 'but doth daily break them in thought, word, or deed (Genesis 6:5, 8:21; Rom. 3:9-21; James 3:2-13',
      },
    ],
  },
  {
    q: 'Are all transgressions of the law equally heinous?',
    a: [
      {
        text: 'Some sins in themselves, and by reason of several aggravations, are more heinous in the sight of God than others.',
        verses: [
          { book: Book.EZEKIEL, chapter: 8, verse: [6, 13, 15] },
          { book: Book.FIRST_JOHN, chapter: 5, verse: 16 },
          { book: Book.PSALMS, chapter: 78, verse: [17, 32, 56] },
        ],
      },
    ],
  },
  {
    q: 'What doth every sin deserve?',
    a: [
      {
        text: 'Every sin deserveth God’s wrath and curse, both in this life and that which is to come.',
        verses: [
          {
            book: Book.EPHESIANS,
            chapter: 5,
            verse: 6,
          },
          { book: Book.GALATIANS, chapter: 3, verse: 10 },
          { book: Book.LAMENTATIONS, chapter: 3, verse: 39 },
          { book: Book.MATTHEW, chapter: 25, verse: 41 },
          { book: Book.ROMANS, chapter: 6, verse: 23 },
        ],
      },
    ],
  },
  {
    q: 'What doth God require of us that we may escape his wrath and curse, due to us for sin?',
    a: [
      {
        text: 'To escape the wrath and curse of God due to us for sin, God requireth of us faith in Jesus Christ, repentance unto life,',
        verses: [{ book: Book.ACTS, chapter: 20, verse: 21 }],
      },
      {
        text: 'with the diligent use of all the outward means whereby Christ communicateth to us the benefits of redemption.',
        verses: [
          { book: Book.PROVERBS, chapter: 2, verse: { from: 1, to: 6 } },
          { book: Book.PROVERBS, chapter: 8, verse: 33, following: true },
          { book: Book.ISAIAH, chapter: 55, verse: { from: 2, to: 3 } },
        ],
      },
    ],
  },
  {
    q: 'What is faith in Jesus Christ?',
    a: [
      {
        text: 'Faith in Jesus Christ is a saving grace,',
        verses: [{ book: Book.HEBREWS, chapter: 10, verse: 39 }],
      },
      {
        text: 'whereby we receive and rest upon him alone for salvation, as he is offered to us in the gospel.',
        verses: [
          { book: Book.JOHN, chapter: 1, verse: 12 },
          { book: Book.ISAIAH, chapter: 26, verse: { from: 3, to: 4 } },
          { book: Book.PHILIPPIANS, chapter: 3, verse: 9 },
          { book: Book.GALATIANS, chapter: 2, verse: 16 },
        ],
      },
    ],
  },
  {
    q: 'What is repentance unto life?',
    a: [
      {
        text: 'Repentance unto life is a saving grace,',
        verses: [{ book: Book.ACTS, chapter: 11, verse: 28 }],
      },
      {
        text: 'whereby a sinner, out of a true sense of his sin,',
        verses: [{ book: Book.ACTS, chapter: 2, verse: { from: 37, to: 38 } }],
      },
      {
        text: 'and apprehension of the mercy of God in Christ,',
        verses: [
          { book: Book.JOEL, chapter: 2, verse: 12 },
          { book: Book.JEREMIAH, chapter: 3, verse: 22 },
        ],
      },
      {
        text: 'doth, with grief and hatred of his sin, turn from it unto God,',
        verses: [
          { book: Book.JEREMIAH, chapter: 31, verse: { from: 18, to: 19 } },
          { book: Book.EZEKIEL, chapter: 36, verse: 31 },
        ],
      },
      {
        text: 'with full purpose of and endeavour after new obedience.',
        verses: [
          { book: Book.SECOND_CORINTHIANS, chapter: 7, verse: 11 },
          { book: Book.ISAIAH, chapter: 1, verse: { from: 16, to: 17 } },
        ],
      },
    ],
  },
  {
    q: 'What are the outward means whereby Christ communicateth to us the benefits of redemption?',
    a: [
      {
        text: 'The outward and ordinary means whereby Christ communicateth to us the benefits of redemption are his ordinances, especially the word, baptism, the Lord’s supper, and prayer; all which means are made effectual to the elect for salvation.',
        verses: [
          { book: Book.MATTHEW, chapter: 28, verse: { from: 19, to: 20 } },
          { book: Book.ACTS, chapter: 2, verse: [42, { from: 46, to: 47 }] },
        ],
      },
    ],
  },
  {
    q: 'How is the word made effectual to salvation?',
    a: [
      {
        text: 'The Spirit of God maketh the reading, but especially the preaching of the word, an effectual means of convincing and converting sinners, and of building them up in holiness and comfort through faith unto salvation.',
        verses: [
          {
            book: Book.NEHEMIAH,
            chapter: 8,
            verse: 8,
          },
          { book: Book.ACTS, chapter: 26, verse: 18 },
          { book: Book.PSALMS, chapter: 19, verse: 8 },
          { book: Book.ACTS, chapter: 20, verse: 32 },
          { book: Book.ROMANS, chapter: 1, verse: { from: 15, to: 16 } },
          { book: Book.ROMANS, chapter: 10, verse: { from: 13, to: 17 } },
          { book: Book.ROMANS, chapter: 15, verse: 4 },
          {
            book: Book.FIRST_CORINTHIANS,
            chapter: 14,
            verse: { from: 24, to: 25 },
          },
          {
            book: Book.SECOND_TIMOTHY,
            chapter: 3,
            verse: { from: 15, to: 17 },
          },
        ],
      },
    ],
  },
  {
    q: 'How is the word to be read and heard, that it may become effectual to salvation?',
    a: [
      {
        text: 'That the word may become effectual to salvation, we must attend thereunto with diligence,',
        verses: [{ book: Book.PROVERBS, chapter: 8, verse: 34 }],
      },
      {
        text: 'preparation,',
        verses: [
          { book: Book.FIRST_PETER, chapter: 2, verse: { from: 1, to: 2 } },
        ],
      },
      {
        text: 'and prayer;',
        verses: [{ book: Book.PSALMS, chapter: 119, verse: 18 }],
      },
      {
        text: 'receive it with faith and love,',
        verses: [
          { book: Book.HEBREWS, chapter: 4, verse: 2 },
          { book: Book.SECOND_THESSALONIANS, chapter: 2, verse: 10 },
        ],
      },
      {
        text: 'lay it up in our hearts,',
        verses: [{ book: Book.PSALMS, chapter: 119, verse: 18 }],
      },
      {
        text: 'and practice it in our lives.',
        verses: [
          { book: Book.LUKE, chapter: 8, verse: 15 },
          { book: Book.JAMES, chapter: 1, verse: 25 },
        ],
      },
    ],
  },
  {
    q: "How do baptism and the Lord's supper become effectual means of salvation?",
    a: [
      {
        text: "Baptism and the Lord's supper become effectual means of salvation, not for any virtue in them, or in him that doth administer them, but only by the blessing of Christ,",
        verses: [
          { book: Book.FIRST_PETER, chapter: 3, verse: 21 },
          { book: Book.MATTHEW, chapter: 3, verse: 11 },
          {
            book: Book.FIRST_CORINTHIANS,
            chapter: 3,
            verse: { from: 6, to: 7 },
          },
        ],
      },
      {
        text: 'and the working of the Spirit in those that by faith receive them.',
        verses: [
          { book: Book.FIRST_CORINTHIANS, chapter: 12, verse: 3 },
          { book: Book.MATTHEW, chapter: 28, verse: 19 },
        ],
      },
    ],
  },
  {
    q: 'What is baptism?',
    a: [
      {
        text: 'Baptism is an ordinance of the New Testament instituted by Jesus Christ, to be unto the party baptized a sign of his fellowship with him, in his death, burial, and resurrection; of his being ingrafted into him;',
        verses: [
          { book: Book.ROMANS, chapter: 6, verse: { from: 3, to: 5 } },
          { book: Book.COLOSSIANS, chapter: 2, verse: 12 },
          { book: Book.GALATIANS, chapter: 3, verse: 27 },
        ],
      },
      {
        text: 'of remission of sins;',
        verses: [
          { book: Book.MARK, chapter: 1, verse: 4 },
          { book: Book.ACTS, chapter: 2, verse: 38 },
          { book: Book.ACTS, chapter: 22, verse: 16 },
        ],
      },
      {
        text: 'and of his giving up himself unto God through Jesus Christ, to live and walk in newness of life.',
        verses: [{ book: Book.ROMANS, chapter: 6, verse: { from: 3, to: 4 } }],
      },
    ],
  },
  {
    q: 'To whom is baptism to be administered?',
    a: [
      {
        text: 'Baptism is to be administered to all those who actually profess repentance towards God,',
        verses: [
          { book: Book.ACTS, chapter: 2, verse: 38 },
          { book: Book.MATTHEW, chapter: 3, verse: 6 },
        ],
      },
      {
        text: 'faith in and obedience to our Lord Jesus Christ, and to none other.',
        verses: [
          { book: Book.ACTS, chapter: 8, verse: [12, { from: 36, to: 38 }] },
          { book: Book.ACTS, chapter: 10, verse: { from: 47, to: 48 } },
        ],
      },
    ],
  },
  {
    q: 'Are the infants of such as are professing believers to be baptized?',
    a: [
      {
        text: 'The infants of such as are professing believers are not to be baptized, because there is neither command or example in the holy scriptures, or certain consequence from them to baptize such.',
        verses: [
          { book: Book.EXODUS, chapter: 23, verse: 13 },
          { book: Book.PROVERBS, chapter: 30, verse: 6 },
          { book: Book.LUKE, chapter: 3, verse: { from: 7, to: 8 } },
        ],
      },
    ],
  },
  {
    q: 'How is Baptism rightly administered?',
    a: [
      {
        text: 'Baptism is rightly administered by immersion, or dipping the whole body of the party in water, into the name of the Father, and of the Son, and of the Holy Spirit, according to Christ’s institution, and the practice of the apostles,',
        verses: [
          {
            book: Book.MATTHEW,
            chapter: 3,
            verse: 16,
          },
          { book: Book.JOHN, chapter: 3, verse: 23 },
          { book: Book.JOHN, chapter: 4, verse: { from: 1, to: 2 } },
          { book: Book.MATTHEW, chapter: 28, verse: { from: 19, to: 20 } },
          { book: Book.ACTS, chapter: 8, verse: 38 },
          { book: Book.ROMANS, chapter: 6, verse: 4 },
          { book: Book.COLOSSIANS, chapter: 2, verse: 12 },
        ],
      },
      {
        text: 'and not by sprinkling or pouring of water, or dipping some part of the body, after the tradition of men.',
      },
    ],
  },
  {
    q: 'What is the duty of such who are rightly baptized?',
    a: [
      {
        text: 'It is the duty of such who are rightly baptized to give up themselves to some particular and orderly church of Jesus Christ, that they may walk in all the commandments and ordinances of the Lord blameless.',
        verses: [
          { book: Book.ACTS, chapter: 2, verse: { from: 41, to: 42 } },
          { book: Book.ACTS, chapter: 5, verse: { from: 13, to: 14 } },
          { book: Book.ACTS, chapter: 9, verse: 26 },
          { book: Book.FIRST_PETER, chapter: 2, verse: 5 },
          { book: Book.LUKE, chapter: 1, verse: 6 },
        ],
      },
    ],
  },
  {
    q: 'What is the Lord’s supper?',
    a: [
      {
        text: 'The Lord’s supper is an ordinance of the New Testament, instituted by Jesus Christ; wherein by giving and receiving bread and wine, according to his appointment, his death is shown forth, and the worthy receivers are, not after a corporal and carnal manner, but by faith, made partakers of his body and blood, with all his benefits, to their spiritual nourishment and growth in grace.',
        verses: [
          { book: Book.MATTHEW, chapter: 26, verse: { from: 26, to: 28 } },
          {
            book: Book.FIRST_CORINTHIANS,
            chapter: 11,
            verse: { from: 23, to: 26 },
          },
          { book: Book.FIRST_CORINTHIANS, chapter: 10, verse: 16 },
        ],
      },
    ],
  },
  {
    q: 'Who are the proper subjects of this ordinance?',
    a: [
      {
        text: 'They who have been baptized upon a personal profession of their faith in Jesus Christ, and repentance from dead works.',
        verses: [{ book: Book.ACTS, chapter: 2, verse: { from: 41, to: 42 } }],
      },
    ],
  },
  {
    q: 'What is required to the worthy receiving of the Lord’s supper?',
    a: [
      {
        text: 'It is required of them that would worthily partake of the Lords supper, that they examine themselves of their knowledge to discern the Lord’s body,',
        verses: [
          {
            book: Book.FIRST_CORINTHIANS,
            chapter: 11,
            verse: { from: 28, to: 29 },
          },
        ],
      },
      {
        text: 'of their faith to feed upon him,',
        verses: [{ book: Book.SECOND_CORINTHIANS, chapter: 13, verse: 5 }],
      },
      {
        text: 'of their repentance,',
        verses: [{ book: Book.FIRST_CORINTHIANS, chapter: 11, verse: 31 }],
      },
      {
        text: 'love,',
        verses: [
          {
            book: Book.FIRST_CORINTHIANS,
            chapter: 10,
            verse: { from: 16, to: 17 },
          },
        ],
      },
      {
        text: 'and new obedience,',
        verses: [
          {
            book: Book.FIRST_CORINTHIANS,
            chapter: 5,
            verse: { from: 7, to: 8 },
          },
        ],
      },
      {
        text: 'lest coming unworthily they eat and drink judgment to themselves.',
        verses: [
          {
            book: Book.FIRST_CORINTHIANS,
            chapter: 11,
            verse: { from: 28, to: 29 },
          },
        ],
      },
    ],
  },
  {
    q: 'What is prayer?',
    a: [
      {
        text: 'Prayer is an offering up our desires to God,',
        verses: [{ book: Book.PSALMS, chapter: 62, verse: 8 }],
      },
      {
        text: 'by the assistance of the Holy Spirit,',
        verses: [{ book: Book.ROMANS, chapter: 8, verse: 26 }],
      },
      {
        text: 'for things agreeable to his will,',
        verses: [
          { book: Book.FIRST_JOHN, chapter: 5, verse: 14 },
          { book: Book.ROMANS, chapter: 8, verse: 27 },
        ],
      },
      {
        text: 'in the name of Christ,',
        verses: [{ book: Book.JOHN, chapter: 16, verse: 23 }],
      },
      {
        text: 'believing,',
        verses: [
          { book: Book.MATTHEW, chapter: 21, verse: 22 },
          { book: Book.JAMES, chapter: 1, verse: 6 },
        ],
      },
      {
        text: 'with confession of our sins,',
        verses: [
          { book: Book.PSALMS, chapter: 32, verse: { from: 5, to: 6 } },
          { book: Book.DANIEL, chapter: 9, verse: 4 },
        ],
      },
      {
        text: 'and thankful acknowledgments of his mercies',
        verses: [{ book: Book.PHILIPPIANS, chapter: 4, verse: 6 }],
      },
    ],
  },
  {
    q: 'What rule hath God given for our direction in prayer?',
    a: [
      {
        text: 'The whole word of God is of use to direct us in prayer;',
        verses: [{ book: Book.FIRST_JOHN, chapter: 5, verse: 14 }],
      },
      {
        text: 'but the special rule of direction is that prayer which Christ taught his disciples, commonly called the Lord’s prayer.',
        verses: [
          {
            book: Book.MATTHEW,
            chapter: 6,
            verse: { from: 9, to: 13 },
          },
          { book: Book.LUKE, chapter: 11, verse: { from: 2, to: 4 } },
        ],
      },
    ],
  },
  {
    q: 'What doth the preface of the Lord’s prayer teach us?',
    a: [
      {
        text: "The preface of the Lord's prayer, which is Our Father which art in heaven",
        verses: [{ book: Book.MATTHEW, chapter: 6, verse: 9 }],
      },
      {
        text: 'teacheth us to draw near to God with all holy reverence and confidence, as children to a father, able and ready to help us;',
        verses: [
          { book: Book.ROMANS, chapter: 8, verse: 15 },
          { book: Book.LUKE, chapter: 11, verse: 13 },
          { book: Book.ISAIAH, chapter: 24, verse: 8 },
        ],
      },
      {
        text: 'and that we should pray with and for others.',
        verses: [
          { book: Book.ACTS, chapter: 12, verse: 5 },
          { book: Book.FIRST_TIMOTHY, chapter: 2, verse: { from: 1, to: 2 } },
        ],
      },
    ],
  },
  {
    q: 'What do we pray for in the first petition?',
    a: [
      {
        text: 'In the first petition, which is, Hallowed be thy name,',
        verses: [{ book: Book.MATTHEW, chapter: 6, verse: 9 }],
      },
      {
        text: 'we pray that God would enable us and others to glorify him in all that whereby he maketh himself known,',
        verses: [{ book: Book.PSALMS, chapter: 67, verse: { from: 2, to: 3 } }],
      },
      {
        text: 'and that he would dispose all things to his own glory.',
        verses: [
          { book: Book.PSALMS, chapter: 83 },
          { book: Book.ROMANS, chapter: 11, verse: 36 },
        ],
      },
    ],
  },
  {
    q: 'What do we pray for in the second petition?',
    a: [
      {
        text: 'In the second petition, which is, Thy kingdom come,',
        verses: [{ book: Book.MATTHEW, chapter: 6, verse: 10 }],
      },
      {
        text: 'we pray that Satan’s kingdom may be destroyed,',
        verses: [{ book: Book.PSALMS, chapter: 68, verse: [1, 18] }],
      },
      {
        text: 'and that the kingdom of grace may be advanced',
        verses: [
          { book: Book.REVELATION, chapter: 12, verse: { from: 10, to: 11 } },
        ],
      },
      {
        text: 'ourselves and others brought into it and kept in it,',
        verses: [
          { book: Book.SECOND_THESSALONIANS, chapter: 3, verse: 1 },
          { book: Book.ROMANS, chapter: 10, verse: 1 },
          { book: Book.JOHN, chapter: 17, verse: { from: 19, to: 20 } },
        ],
      },
      {
        text: 'and that the kingdom of glory may be hastened',
        verses: [{ book: Book.REVELATION, chapter: 22, verse: 10 }],
      },
    ],
  },
  {
    q: 'What do we pray for in the third petition?',
    a: [
      {
        text: 'In the third petition, which is, Thy will be done on earth as it is in heaven',
        verses: [{ book: Book.MATTHEW, chapter: 6, verse: 10 }],
      },
      {
        text: 'we pray that God by his grace would make us able and willing to know, obey, and submit to his will in all things,',
        verses: [
          { book: Book.PSALMS, chapter: 67 },
          { book: Book.PSALMS, chapter: 119, verse: 36 },
          { book: Book.SECOND_SAMUEL, chapter: 15, verse: 25 },
          { book: Book.JOB, chapter: 1, verse: 21 },
        ],
      },
      {
        text: 'as the angels do in heaven.',
        verses: [
          { book: Book.PSALMS, chapter: 103, verse: { from: 20, to: 21 } },
        ],
      },
    ],
  },
  {
    q: 'What do we pray for in the fourth petition?',
    a: [
      {
        text: 'In the fourth petition, which is, Give us this day our daily bread',
        verses: [{ book: Book.MATTHEW, chapter: 6, verse: 11 }],
      },
      {
        text: 'we pray that of God’s free gift we may receive a competent portion of the good things of this life, and enjoy his blessing with them.',
        verses: [
          { book: Book.PROVERBS, chapter: 30, verse: 8 },
          { book: Book.GENESIS, chapter: 28, verse: 20 },
          { book: Book.FIRST_TIMOTHY, chapter: 4, verse: { from: 4, to: 5 } },
        ],
      },
    ],
  },
  {
    q: 'What do we pray for in the fifth petition?',
    a: [
      {
        text: 'In the fifth petition, which is, And forgive us our debts as we forgive our debtors,',
        verses: [{ book: Book.MATTHEW, chapter: 6, verse: 12 }],
      },
      {
        text: 'we pray that God, for Christ’s sake, would freely pardon all our sins',
        verses: [
          {
            book: Book.PSALMS,
            chapter: 51,
            verse: [{ from: 1, to: 2 }, 7, 9],
          },
          { book: Book.DANIEL, chapter: 9, verse: { from: 17, to: 19 } },
        ],
      },
      {
        text: 'which we are rather encouraged to ask because of his grace we are enabled from the heart to forgive others.',
        verses: [
          { book: Book.LUKE, chapter: 11, verse: 4 },
          { book: Book.MATTHEW, chapter: 18, verse: 35 },
        ],
      },
    ],
  },
  {
    q: 'What do we pray for in the sixth petition?',
    a: [
      {
        text: 'In the sixth petition, which is, And lead us not into temptation but deliver us from evil',
        verses: [{ book: Book.MATTHEW, chapter: 6, verse: 13 }],
      },
      {
        text: 'we pray that God would either keep us from being tempted to sin,',
        verses: [{ book: Book.MATTHEW, chapter: 26, verse: 31 }],
      },
      {
        text: 'or support and deliver us when we are tempted.',
        verses: [{ book: Book.SECOND_CORINTHIANS, chapter: 12, verse: 8 }],
      },
    ],
  },
  {
    q: 'What doth the conclusion of the Lord’s prayer teach?',
    a: [
      {
        text: 'The conclusion of the Lord’s prayer, which is, For Thine is the kingdom, and the power, and the glory, forever. Amen,',
        verses: [{ book: Book.MATTHEW, chapter: 6, verse: 13 }],
      },
      {
        text: 'teacheth us to take our encouragement in prayer from God only,',
        verses: [
          {
            book: Book.DANIEL,
            chapter: 9,
            verse: [4, { from: 7, to: 9 }, { from: 16, to: 19 }],
          },
        ],
      },
      {
        text: 'and in our prayers to praise Him, ascribing kingdom, power, and glory, to Him.',
        verses: [
          {
            book: Book.FIRST_CHRONICLES,
            chapter: 29,
            verse: { from: 10, to: 13 },
          },
        ],
      },
      {
        text: 'And in testimony of our desire and assurance to be heard, we say, Amen.',
        verses: [
          { book: Book.FIRST_CORINTHIANS, chapter: 4, verse: 16 },
          { book: Book.REVELATION, chapter: 11, verse: 20 },
          { book: Book.REVELATION, chapter: 22, verse: { from: 20, to: 21 } },
        ],
      },
    ],
  },
];

export default baptist;
