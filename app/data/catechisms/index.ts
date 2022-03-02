import { RequireAtLeastOne } from 'type-fest';

export { default as baptist } from './baptist';

export enum Book {
  // Old Testament
  GENESIS,
  EXODUS,
  LEVITICUS,
  NUMBERS,
  DEUTERONOMY,
  JOSHUA,
  JUDGES,
  RUTH,
  FIRST_SAMUEL,
  SECOND_SAMUEL,
  FIRST_KINGS,
  SECOND_KINGS,
  FIRST_CHRONICLES,
  SECOND_CHRONICLES,
  EZRA,
  NEHEMIAH,
  ESTHER,
  JOB,
  PSALMS,
  PROVERBS,
  ECCLESIASTES,
  SONG_OF_SOLOMON,
  ISAIAH,
  JEREMIAH,
  LAMENTATIONS,
  EZEKIEL,
  DANIEL,
  HOSEA,
  JOEL,
  AMOS,
  OBADIAH,
  JONAH,
  MICAH,
  NAHUM,
  HABAKKUK,
  ZEPHANIAH,
  HAGGAI,
  ZECHARIAH,
  MALACHI,
  // New Testament
  MATTHEW,
  MARK,
  LUKE,
  JOHN,
  ACTS,
  ROMANS,
  FIRST_CORINTHIANS,
  SECOND_CORINTHIANS,
  GALATIANS,
  EPHESIANS,
  PHILIPPIANS,
  COLOSSIANS,
  FIRST_THESSALONIANS,
  SECOND_THESSALONIANS,
  FIRST_TIMOTHY,
  SECOND_TIMOTHY,
  TITUS,
  PHILEMON,
  HEBREWS,
  JAMES,
  FIRST_PETER,
  SECOND_PETER,
  FIRST_JOHN,
  SECOND_JOHN,
  THIRD_JOHN,
  JUDE,
  REVELATION,
}

export type Range = { from: number; to: number };
export type Reference = RequireAtLeastOne<
  {
    book: Book;
    chapter?: number;
    verse?: number | Range | Array<number | Range>;
    following?: boolean;
  },
  'chapter' | 'verse'
>;

export type Question = {
  q: string;
  a: Array<{
    text: string;
    verses?: Array<Reference>;
  }>;
};

export type Catechism = Array<Question>;
