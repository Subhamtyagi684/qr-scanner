/*! For license information please see html5-qrcode.min.js.LICENSE.txt */
var __Html5QrcodeLibrary__;
(() => {
    var t = {
            449: function(t, e, r) {
                ! function(t) {
                    "use strict";
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                    };
                    var n, i = function(t) {
                        function r(e) {
                            var r, n, i, o = this.constructor,
                                s = t.call(this, e) || this;
                            return Object.defineProperty(s, "name", {
                                    value: o.name,
                                    enumerable: !1
                                }), r = s, n = o.prototype, (i = Object.setPrototypeOf) ? i(r, n) : r.__proto__ = n,
                                function(t, e) {
                                    void 0 === e && (e = t.constructor);
                                    var r = Error.captureStackTrace;
                                    r && r(t, e)
                                }(s), s
                        }
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }(r, t), r
                    }(Error);
                    class o extends i {
                        constructor(t) {
                            super(t), this.message = t
                        }
                        getKind() {
                            return this.constructor.kind
                        }
                    }
                    o.kind = "Exception";
                    class s extends o {}
                    s.kind = "ArgumentException";
                    class a extends o {}
                    a.kind = "IllegalArgumentException";
                    class A {
                        constructor(t) {
                            if (this.binarizer = t, null === t) throw new a("Binarizer must be non-null.")
                        }
                        getWidth() {
                            return this.binarizer.getWidth()
                        }
                        getHeight() {
                            return this.binarizer.getHeight()
                        }
                        getBlackRow(t, e) {
                            return this.binarizer.getBlackRow(t, e)
                        }
                        getBlackMatrix() {
                            return null !== this.matrix && void 0 !== this.matrix || (this.matrix = this.binarizer.getBlackMatrix()), this.matrix
                        }
                        isCropSupported() {
                            return this.binarizer.getLuminanceSource().isCropSupported()
                        }
                        crop(t, e, r, n) {
                            const i = this.binarizer.getLuminanceSource().crop(t, e, r, n);
                            return new A(this.binarizer.createBinarizer(i))
                        }
                        isRotateSupported() {
                            return this.binarizer.getLuminanceSource().isRotateSupported()
                        }
                        rotateCounterClockwise() {
                            const t = this.binarizer.getLuminanceSource().rotateCounterClockwise();
                            return new A(this.binarizer.createBinarizer(t))
                        }
                        rotateCounterClockwise45() {
                            const t = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
                            return new A(this.binarizer.createBinarizer(t))
                        }
                        toString() {
                            try {
                                return this.getBlackMatrix().toString()
                            } catch (t) {
                                return ""
                            }
                        }
                    }
                    class l extends o {
                        static getChecksumInstance() {
                            return new l
                        }
                    }
                    l.kind = "ChecksumException";
                    class c {
                        constructor(t) {
                            this.source = t
                        }
                        getLuminanceSource() {
                            return this.source
                        }
                        getWidth() {
                            return this.source.getWidth()
                        }
                        getHeight() {
                            return this.source.getHeight()
                        }
                    }
                    class h {
                        static arraycopy(t, e, r, n, i) {
                            for (; i--;) r[n++] = t[e++]
                        }
                        static currentTimeMillis() {
                            return Date.now()
                        }
                    }
                    class g extends o {}
                    g.kind = "IndexOutOfBoundsException";
                    class d extends g {
                        constructor(t, e) {
                            super(e), this.index = t, this.message = e
                        }
                    }
                    d.kind = "ArrayIndexOutOfBoundsException";
                    class u {
                        static fill(t, e) {
                            for (let r = 0, n = t.length; r < n; r++) t[r] = e
                        }
                        static fillWithin(t, e, r, n) {
                            u.rangeCheck(t.length, e, r);
                            for (let i = e; i < r; i++) t[i] = n
                        }
                        static rangeCheck(t, e, r) {
                            if (e > r) throw new a("fromIndex(" + e + ") > toIndex(" + r + ")");
                            if (e < 0) throw new d(e);
                            if (r > t) throw new d(r)
                        }
                        static asList(...t) {
                            return t
                        }
                        static create(t, e, r) {
                            return Array.from({
                                length: t
                            }).map((t => Array.from({
                                length: e
                            }).fill(r)))
                        }
                        static createInt32Array(t, e, r) {
                            return Array.from({
                                length: t
                            }).map((t => Int32Array.from({
                                length: e
                            }).fill(r)))
                        }
                        static equals(t, e) {
                            if (!t) return !1;
                            if (!e) return !1;
                            if (!t.length) return !1;
                            if (!e.length) return !1;
                            if (t.length !== e.length) return !1;
                            for (let r = 0, n = t.length; r < n; r++)
                                if (t[r] !== e[r]) return !1;
                            return !0
                        }
                        static hashCode(t) {
                            if (null === t) return 0;
                            let e = 1;
                            for (const r of t) e = 31 * e + r;
                            return e
                        }
                        static fillUint8Array(t, e) {
                            for (let r = 0; r !== t.length; r++) t[r] = e
                        }
                        static copyOf(t, e) {
                            return t.slice(0, e)
                        }
                        static copyOfUint8Array(t, e) {
                            if (t.length <= e) {
                                const r = new Uint8Array(e);
                                return r.set(t), r
                            }
                            return t.slice(0, e)
                        }
                        static copyOfRange(t, e, r) {
                            const n = r - e,
                                i = new Int32Array(n);
                            return h.arraycopy(t, e, i, 0, n), i
                        }
                        static binarySearch(t, e, r) {
                            void 0 === r && (r = u.numberComparator);
                            let n = 0,
                                i = t.length - 1;
                            for (; n <= i;) {
                                const o = i + n >> 1,
                                    s = r(e, t[o]);
                                if (s > 0) n = o + 1;
                                else {
                                    if (!(s < 0)) return o;
                                    i = o - 1
                                }
                            }
                            return -n - 1
                        }
                        static numberComparator(t, e) {
                            return t - e
                        }
                    }
                    class C {
                        static numberOfTrailingZeros(t) {
                            let e;
                            if (0 === t) return 32;
                            let r = 31;
                            return e = t << 16, 0 !== e && (r -= 16, t = e), e = t << 8, 0 !== e && (r -= 8, t = e), e = t << 4, 0 !== e && (r -= 4, t = e), e = t << 2, 0 !== e && (r -= 2, t = e), r - (t << 1 >>> 31)
                        }
                        static numberOfLeadingZeros(t) {
                            if (0 === t) return 32;
                            let e = 1;
                            return t >>> 16 == 0 && (e += 16, t <<= 16), t >>> 24 == 0 && (e += 8, t <<= 8), t >>> 28 == 0 && (e += 4, t <<= 4), t >>> 30 == 0 && (e += 2, t <<= 2), e -= t >>> 31, e
                        }
                        static toHexString(t) {
                            return t.toString(16)
                        }
                        static toBinaryString(t) {
                            return String(parseInt(String(t), 2))
                        }
                        static bitCount(t) {
                            return t = (t = (858993459 & (t -= t >>> 1 & 1431655765)) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135, 63 & (t += t >>> 8) + (t >>> 16)
                        }
                        static truncDivision(t, e) {
                            return Math.trunc(t / e)
                        }
                        static parseInt(t, e) {
                            return parseInt(t, e)
                        }
                    }
                    C.MIN_VALUE_32_BITS = -2147483648, C.MAX_VALUE = Number.MAX_SAFE_INTEGER;
                    class I {
                        constructor(t, e) {
                            void 0 === t ? (this.size = 0, this.bits = new Int32Array(1)) : (this.size = t, this.bits = null == e ? I.makeArray(t) : e)
                        }
                        getSize() {
                            return this.size
                        }
                        getSizeInBytes() {
                            return Math.floor((this.size + 7) / 8)
                        }
                        ensureCapacity(t) {
                            if (t > 32 * this.bits.length) {
                                const e = I.makeArray(t);
                                h.arraycopy(this.bits, 0, e, 0, this.bits.length), this.bits = e
                            }
                        }
                        get(t) {
                            return 0 != (this.bits[Math.floor(t / 32)] & 1 << (31 & t))
                        }
                        set(t) {
                            this.bits[Math.floor(t / 32)] |= 1 << (31 & t)
                        }
                        flip(t) {
                            this.bits[Math.floor(t / 32)] ^= 1 << (31 & t)
                        }
                        getNextSet(t) {
                            const e = this.size;
                            if (t >= e) return e;
                            const r = this.bits;
                            let n = Math.floor(t / 32),
                                i = r[n];
                            i &= ~((1 << (31 & t)) - 1);
                            const o = r.length;
                            for (; 0 === i;) {
                                if (++n === o) return e;
                                i = r[n]
                            }
                            const s = 32 * n + C.numberOfTrailingZeros(i);
                            return s > e ? e : s
                        }
                        getNextUnset(t) {
                            const e = this.size;
                            if (t >= e) return e;
                            const r = this.bits;
                            let n = Math.floor(t / 32),
                                i = ~r[n];
                            i &= ~((1 << (31 & t)) - 1);
                            const o = r.length;
                            for (; 0 === i;) {
                                if (++n === o) return e;
                                i = ~r[n]
                            }
                            const s = 32 * n + C.numberOfTrailingZeros(i);
                            return s > e ? e : s
                        }
                        setBulk(t, e) {
                            this.bits[Math.floor(t / 32)] = e
                        }
                        setRange(t, e) {
                            if (e < t || t < 0 || e > this.size) throw new a;
                            if (e === t) return;
                            e--;
                            const r = Math.floor(t / 32),
                                n = Math.floor(e / 32),
                                i = this.bits;
                            for (let o = r; o <= n; o++) {
                                const s = (2 << (o < n ? 31 : 31 & e)) - (1 << (o > r ? 0 : 31 & t));
                                i[o] |= s
                            }
                        }
                        clear() {
                            const t = this.bits.length,
                                e = this.bits;
                            for (let r = 0; r < t; r++) e[r] = 0
                        }
                        isRange(t, e, r) {
                            if (e < t || t < 0 || e > this.size) throw new a;
                            if (e === t) return !0;
                            e--;
                            const n = Math.floor(t / 32),
                                i = Math.floor(e / 32),
                                o = this.bits;
                            for (let s = n; s <= i; s++) {
                                const a = (2 << (s < i ? 31 : 31 & e)) - (1 << (s > n ? 0 : 31 & t)) & 4294967295;
                                if ((o[s] & a) !== (r ? a : 0)) return !1
                            }
                            return !0
                        }
                        appendBit(t) {
                            this.ensureCapacity(this.size + 1), t && (this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size)), this.size++
                        }
                        appendBits(t, e) {
                            if (e < 0 || e > 32) throw new a("Num bits must be between 0 and 32");
                            this.ensureCapacity(this.size + e);
                            for (let r = e; r > 0; r--) this.appendBit(1 == (t >> r - 1 & 1))
                        }
                        appendBitArray(t) {
                            const e = t.size;
                            this.ensureCapacity(this.size + e);
                            for (let r = 0; r < e; r++) this.appendBit(t.get(r))
                        }
                        xor(t) {
                            if (this.size !== t.size) throw new a("Sizes don't match");
                            const e = this.bits;
                            for (let r = 0, n = e.length; r < n; r++) e[r] ^= t.bits[r]
                        }
                        toBytes(t, e, r, n) {
                            for (let i = 0; i < n; i++) {
                                let n = 0;
                                for (let e = 0; e < 8; e++) this.get(t) && (n |= 1 << 7 - e), t++;
                                e[r + i] = n
                            }
                        }
                        getBitArray() {
                            return this.bits
                        }
                        reverse() {
                            const t = new Int32Array(this.bits.length),
                                e = Math.floor((this.size - 1) / 32),
                                r = e + 1,
                                n = this.bits;
                            for (let i = 0; i < r; i++) {
                                let r = n[i];
                                r = r >> 1 & 1431655765 | (1431655765 & r) << 1, r = r >> 2 & 858993459 | (858993459 & r) << 2, r = r >> 4 & 252645135 | (252645135 & r) << 4, r = r >> 8 & 16711935 | (16711935 & r) << 8, r = r >> 16 & 65535 | (65535 & r) << 16, t[e - i] = r
                            }
                            if (this.size !== 32 * r) {
                                const e = 32 * r - this.size;
                                let n = t[0] >>> e;
                                for (let i = 1; i < r; i++) {
                                    const r = t[i];
                                    n |= r << 32 - e, t[i - 1] = n, n = r >>> e
                                }
                                t[r - 1] = n
                            }
                            this.bits = t
                        }
                        static makeArray(t) {
                            return new Int32Array(Math.floor((t + 31) / 32))
                        }
                        equals(t) {
                            if (!(t instanceof I)) return !1;
                            const e = t;
                            return this.size === e.size && u.equals(this.bits, e.bits)
                        }
                        hashCode() {
                            return 31 * this.size + u.hashCode(this.bits)
                        }
                        toString() {
                            let t = "";
                            for (let e = 0, r = this.size; e < r; e++) 0 == (7 & e) && (t += " "), t += this.get(e) ? "X" : ".";
                            return t
                        }
                        clone() {
                            return new I(this.size, this.bits.slice())
                        }
                    }! function(t) {
                        t[t.OTHER = 0] = "OTHER", t[t.PURE_BARCODE = 1] = "PURE_BARCODE", t[t.POSSIBLE_FORMATS = 2] = "POSSIBLE_FORMATS", t[t.TRY_HARDER = 3] = "TRY_HARDER", t[t.CHARACTER_SET = 4] = "CHARACTER_SET", t[t.ALLOWED_LENGTHS = 5] = "ALLOWED_LENGTHS", t[t.ASSUME_CODE_39_CHECK_DIGIT = 6] = "ASSUME_CODE_39_CHECK_DIGIT", t[t.ASSUME_GS1 = 7] = "ASSUME_GS1", t[t.RETURN_CODABAR_START_END = 8] = "RETURN_CODABAR_START_END", t[t.NEED_RESULT_POINT_CALLBACK = 9] = "NEED_RESULT_POINT_CALLBACK", t[t.ALLOWED_EAN_EXTENSIONS = 10] = "ALLOWED_EAN_EXTENSIONS"
                    }(n || (n = {}));
                    var f, w = n;
                    class E extends o {
                        static getFormatInstance() {
                            return new E
                        }
                    }
                    E.kind = "FormatException",
                        function(t) {
                            t[t.Cp437 = 0] = "Cp437", t[t.ISO8859_1 = 1] = "ISO8859_1", t[t.ISO8859_2 = 2] = "ISO8859_2", t[t.ISO8859_3 = 3] = "ISO8859_3", t[t.ISO8859_4 = 4] = "ISO8859_4", t[t.ISO8859_5 = 5] = "ISO8859_5", t[t.ISO8859_6 = 6] = "ISO8859_6", t[t.ISO8859_7 = 7] = "ISO8859_7", t[t.ISO8859_8 = 8] = "ISO8859_8", t[t.ISO8859_9 = 9] = "ISO8859_9", t[t.ISO8859_10 = 10] = "ISO8859_10", t[t.ISO8859_11 = 11] = "ISO8859_11", t[t.ISO8859_13 = 12] = "ISO8859_13", t[t.ISO8859_14 = 13] = "ISO8859_14", t[t.ISO8859_15 = 14] = "ISO8859_15", t[t.ISO8859_16 = 15] = "ISO8859_16", t[t.SJIS = 16] = "SJIS", t[t.Cp1250 = 17] = "Cp1250", t[t.Cp1251 = 18] = "Cp1251", t[t.Cp1252 = 19] = "Cp1252", t[t.Cp1256 = 20] = "Cp1256", t[t.UnicodeBigUnmarked = 21] = "UnicodeBigUnmarked", t[t.UTF8 = 22] = "UTF8", t[t.ASCII = 23] = "ASCII", t[t.Big5 = 24] = "Big5", t[t.GB18030 = 25] = "GB18030", t[t.EUC_KR = 26] = "EUC_KR"
                        }(f || (f = {}));
                    class m {
                        constructor(t, e, r, ...n) {
                            this.valueIdentifier = t, this.name = r, this.values = "number" == typeof e ? Int32Array.from([e]) : e, this.otherEncodingNames = n, m.VALUE_IDENTIFIER_TO_ECI.set(t, this), m.NAME_TO_ECI.set(r, this);
                            const i = this.values;
                            for (let t = 0, e = i.length; t !== e; t++) {
                                const e = i[t];
                                m.VALUES_TO_ECI.set(e, this)
                            }
                            for (const t of n) m.NAME_TO_ECI.set(t, this)
                        }
                        getValueIdentifier() {
                            return this.valueIdentifier
                        }
                        getName() {
                            return this.name
                        }
                        getValue() {
                            return this.values[0]
                        }
                        static getCharacterSetECIByValue(t) {
                            if (t < 0 || t >= 900) throw new E("incorect value");
                            const e = m.VALUES_TO_ECI.get(t);
                            if (void 0 === e) throw new E("incorect value");
                            return e
                        }
                        static getCharacterSetECIByName(t) {
                            const e = m.NAME_TO_ECI.get(t);
                            if (void 0 === e) throw new E("incorect value");
                            return e
                        }
                        equals(t) {
                            if (!(t instanceof m)) return !1;
                            const e = t;
                            return this.getName() === e.getName()
                        }
                    }
                    m.VALUE_IDENTIFIER_TO_ECI = new Map, m.VALUES_TO_ECI = new Map, m.NAME_TO_ECI = new Map, m.Cp437 = new m(f.Cp437, Int32Array.from([0, 2]), "Cp437"), m.ISO8859_1 = new m(f.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1"), m.ISO8859_2 = new m(f.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2"), m.ISO8859_3 = new m(f.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3"), m.ISO8859_4 = new m(f.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4"), m.ISO8859_5 = new m(f.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5"), m.ISO8859_6 = new m(f.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6"), m.ISO8859_7 = new m(f.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7"), m.ISO8859_8 = new m(f.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8"), m.ISO8859_9 = new m(f.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9"), m.ISO8859_10 = new m(f.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10"), m.ISO8859_11 = new m(f.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11"), m.ISO8859_13 = new m(f.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13"), m.ISO8859_14 = new m(f.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14"), m.ISO8859_15 = new m(f.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15"), m.ISO8859_16 = new m(f.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16"), m.SJIS = new m(f.SJIS, 20, "SJIS", "Shift_JIS"), m.Cp1250 = new m(f.Cp1250, 21, "Cp1250", "windows-1250"), m.Cp1251 = new m(f.Cp1251, 22, "Cp1251", "windows-1251"), m.Cp1252 = new m(f.Cp1252, 23, "Cp1252", "windows-1252"), m.Cp1256 = new m(f.Cp1256, 24, "Cp1256", "windows-1256"), m.UnicodeBigUnmarked = new m(f.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig"), m.UTF8 = new m(f.UTF8, 26, "UTF8", "UTF-8"), m.ASCII = new m(f.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII"), m.Big5 = new m(f.Big5, 28, "Big5"), m.GB18030 = new m(f.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK"), m.EUC_KR = new m(f.EUC_KR, 30, "EUC_KR", "EUC-KR");
                    class p extends o {}
                    p.kind = "UnsupportedOperationException";
                    class S {
                        static decode(t, e) {
                            const r = this.encodingName(e);
                            return this.customDecoder ? this.customDecoder(t, r) : "undefined" == typeof TextDecoder || this.shouldDecodeOnFallback(r) ? this.decodeFallback(t, r) : new TextDecoder(r).decode(t)
                        }
                        static shouldDecodeOnFallback(t) {
                            return !S.isBrowser() && "ISO-8859-1" === t
                        }
                        static encode(t, e) {
                            const r = this.encodingName(e);
                            return this.customEncoder ? this.customEncoder(t, r) : "undefined" == typeof TextEncoder ? this.encodeFallback(t) : (new TextEncoder).encode(t)
                        }
                        static isBrowser() {
                            return "undefined" != typeof window && "[object Window]" === {}.toString.call(window)
                        }
                        static encodingName(t) {
                            return "string" == typeof t ? t : t.getName()
                        }
                        static encodingCharacterSet(t) {
                            return t instanceof m ? t : m.getCharacterSetECIByName(t)
                        }
                        static decodeFallback(t, e) {
                            const r = this.encodingCharacterSet(e);
                            if (S.isDecodeFallbackSupported(r)) {
                                let e = "";
                                for (let r = 0, n = t.length; r < n; r++) {
                                    let n = t[r].toString(16);
                                    n.length < 2 && (n = "0" + n), e += "%" + n
                                }
                                return decodeURIComponent(e)
                            }
                            if (r.equals(m.UnicodeBigUnmarked)) return String.fromCharCode.apply(null, new Uint16Array(t.buffer));
                            throw new p(`Encoding ${this.encodingName(e)} not supported by fallback.`)
                        }
                        static isDecodeFallbackSupported(t) {
                            return t.equals(m.UTF8) || t.equals(m.ISO8859_1) || t.equals(m.ASCII)
                        }
                        static encodeFallback(t) {
                            const e = btoa(unescape(encodeURIComponent(t))).split(""),
                                r = [];
                            for (let t = 0; t < e.length; t++) r.push(e[t].charCodeAt(0));
                            return new Uint8Array(r)
                        }
                    }
                    class R {
                        static castAsNonUtf8Char(t, e = null) {
                            const r = e ? e.getName() : this.ISO88591;
                            return S.decode(new Uint8Array([t]), r)
                        }
                        static guessEncoding(t, e) {
                            if (null != e && void 0 !== e.get(w.CHARACTER_SET)) return e.get(w.CHARACTER_SET).toString();
                            const r = t.length;
                            let n = !0,
                                i = !0,
                                o = !0,
                                s = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                c = 0,
                                h = 0,
                                g = 0,
                                d = 0,
                                u = 0,
                                C = 0,
                                I = 0;
                            const f = t.length > 3 && 239 === t[0] && 187 === t[1] && 191 === t[2];
                            for (let e = 0; e < r && (n || i || o); e++) {
                                const r = 255 & t[e];
                                o && (s > 0 ? 0 == (128 & r) ? o = !1 : s-- : 0 != (128 & r) && (0 == (64 & r) ? o = !1 : (s++, 0 == (32 & r) ? a++ : (s++, 0 == (16 & r) ? A++ : (s++, 0 == (8 & r) ? l++ : o = !1))))), n && (r > 127 && r < 160 ? n = !1 : r > 159 && (r < 192 || 215 === r || 247 === r) && I++), i && (c > 0 ? r < 64 || 127 === r || r > 252 ? i = !1 : c-- : 128 === r || 160 === r || r > 239 ? i = !1 : r > 160 && r < 224 ? (h++, d = 0, g++, g > u && (u = g)) : r > 127 ? (c++, g = 0, d++, d > C && (C = d)) : (g = 0, d = 0))
                            }
                            return o && s > 0 && (o = !1), i && c > 0 && (i = !1), o && (f || a + A + l > 0) ? R.UTF8 : i && (R.ASSUME_SHIFT_JIS || u >= 3 || C >= 3) ? R.SHIFT_JIS : n && i ? 2 === u && 2 === h || 10 * I >= r ? R.SHIFT_JIS : R.ISO88591 : n ? R.ISO88591 : i ? R.SHIFT_JIS : o ? R.UTF8 : R.PLATFORM_DEFAULT_ENCODING
                        }
                        static format(t, ...e) {
                            let r = -1;
                            return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, (function(t, n, i, o, s, a) {
                                if ("%%" === t) return "%";
                                if (void 0 === e[++r]) return;
                                t = o ? parseInt(o.substr(1)) : void 0;
                                let A, l = s ? parseInt(s.substr(1)) : void 0;
                                switch (a) {
                                    case "s":
                                        A = e[r];
                                        break;
                                    case "c":
                                        A = e[r][0];
                                        break;
                                    case "f":
                                        A = parseFloat(e[r]).toFixed(t);
                                        break;
                                    case "p":
                                        A = parseFloat(e[r]).toPrecision(t);
                                        break;
                                    case "e":
                                        A = parseFloat(e[r]).toExponential(t);
                                        break;
                                    case "x":
                                        A = parseInt(e[r]).toString(l || 16);
                                        break;
                                    case "d":
                                        A = parseFloat(parseInt(e[r], l || 10).toPrecision(t)).toFixed(0)
                                }
                                A = "object" == typeof A ? JSON.stringify(A) : (+A).toString(l);
                                let c = parseInt(i),
                                    h = i && i[0] + "" == "0" ? "0" : " ";
                                for (; A.length < c;) A = void 0 !== n ? A + h : h + A;
                                return A
                            }))
                        }
                        static getBytes(t, e) {
                            return S.encode(t, e)
                        }
                        static getCharCode(t, e = 0) {
                            return t.charCodeAt(e)
                        }
                        static getCharAt(t) {
                            return String.fromCharCode(t)
                        }
                    }
                    R.SHIFT_JIS = m.SJIS.getName(), R.GB2312 = "GB2312", R.ISO88591 = m.ISO8859_1.getName(), R.EUC_JP = "EUC_JP", R.UTF8 = m.UTF8.getName(), R.PLATFORM_DEFAULT_ENCODING = R.UTF8, R.ASSUME_SHIFT_JIS = !1;
                    class D {
                        constructor(t = "") {
                            this.value = t
                        }
                        enableDecoding(t) {
                            return this.encoding = t, this
                        }
                        append(t) {
                            return "string" == typeof t ? this.value += t.toString() : this.encoding ? this.value += R.castAsNonUtf8Char(t, this.encoding) : this.value += String.fromCharCode(t), this
                        }
                        appendChars(t, e, r) {
                            for (let n = e; e < e + r; n++) this.append(t[n]);
                            return this
                        }
                        length() {
                            return this.value.length
                        }
                        charAt(t) {
                            return this.value.charAt(t)
                        }
                        deleteCharAt(t) {
                            this.value = this.value.substr(0, t) + this.value.substring(t + 1)
                        }
                        setCharAt(t, e) {
                            this.value = this.value.substr(0, t) + e + this.value.substr(t + 1)
                        }
                        substring(t, e) {
                            return this.value.substring(t, e)
                        }
                        setLengthToZero() {
                            this.value = ""
                        }
                        toString() {
                            return this.value
                        }
                        insert(t, e) {
                            this.value = this.value.substr(0, t) + e + this.value.substr(t + e.length)
                        }
                    }
                    class B {
                        constructor(t, e, r, n) {
                            if (this.width = t, this.height = e, this.rowSize = r, this.bits = n, null == e && (e = t), this.height = e, t < 1 || e < 1) throw new a("Both dimensions must be greater than 0");
                            null == r && (r = Math.floor((t + 31) / 32)), this.rowSize = r, null == n && (this.bits = new Int32Array(this.rowSize * this.height))
                        }
                        static parseFromBooleanArray(t) {
                            const e = t.length,
                                r = t[0].length,
                                n = new B(r, e);
                            for (let i = 0; i < e; i++) {
                                const e = t[i];
                                for (let t = 0; t < r; t++) e[t] && n.set(t, i)
                            }
                            return n
                        }
                        static parseFromString(t, e, r) {
                            if (null === t) throw new a("stringRepresentation cannot be null");
                            const n = new Array(t.length);
                            let i = 0,
                                o = 0,
                                s = -1,
                                A = 0,
                                l = 0;
                            for (; l < t.length;)
                                if ("\n" === t.charAt(l) || "\r" === t.charAt(l)) {
                                    if (i > o) {
                                        if (-1 === s) s = i - o;
                                        else if (i - o !== s) throw new a("row lengths do not match");
                                        o = i, A++
                                    }
                                    l++
                                } else if (t.substring(l, l + e.length) === e) l += e.length, n[i] = !0, i++;
                            else {
                                if (t.substring(l, l + r.length) !== r) throw new a("illegal character encountered: " + t.substring(l));
                                l += r.length, n[i] = !1, i++
                            }
                            if (i > o) {
                                if (-1 === s) s = i - o;
                                else if (i - o !== s) throw new a("row lengths do not match");
                                A++
                            }
                            const c = new B(s, A);
                            for (let t = 0; t < i; t++) n[t] && c.set(Math.floor(t % s), Math.floor(t / s));
                            return c
                        }
                        get(t, e) {
                            const r = e * this.rowSize + Math.floor(t / 32);
                            return 0 != (this.bits[r] >>> (31 & t) & 1)
                        }
                        set(t, e) {
                            const r = e * this.rowSize + Math.floor(t / 32);
                            this.bits[r] |= 1 << (31 & t) & 4294967295
                        }
                        unset(t, e) {
                            const r = e * this.rowSize + Math.floor(t / 32);
                            this.bits[r] &= ~(1 << (31 & t) & 4294967295)
                        }
                        flip(t, e) {
                            const r = e * this.rowSize + Math.floor(t / 32);
                            this.bits[r] ^= 1 << (31 & t) & 4294967295
                        }
                        xor(t) {
                            if (this.width !== t.getWidth() || this.height !== t.getHeight() || this.rowSize !== t.getRowSize()) throw new a("input matrix dimensions do not match");
                            const e = new I(Math.floor(this.width / 32) + 1),
                                r = this.rowSize,
                                n = this.bits;
                            for (let i = 0, o = this.height; i < o; i++) {
                                const o = i * r,
                                    s = t.getRow(i, e).getBitArray();
                                for (let t = 0; t < r; t++) n[o + t] ^= s[t]
                            }
                        }
                        clear() {
                            const t = this.bits,
                                e = t.length;
                            for (let r = 0; r < e; r++) t[r] = 0
                        }
                        setRegion(t, e, r, n) {
                            if (e < 0 || t < 0) throw new a("Left and top must be nonnegative");
                            if (n < 1 || r < 1) throw new a("Height and width must be at least 1");
                            const i = t + r,
                                o = e + n;
                            if (o > this.height || i > this.width) throw new a("The region must fit inside the matrix");
                            const s = this.rowSize,
                                A = this.bits;
                            for (let r = e; r < o; r++) {
                                const e = r * s;
                                for (let r = t; r < i; r++) A[e + Math.floor(r / 32)] |= 1 << (31 & r) & 4294967295
                            }
                        }
                        getRow(t, e) {
                            null == e || e.getSize() < this.width ? e = new I(this.width) : e.clear();
                            const r = this.rowSize,
                                n = this.bits,
                                i = t * r;
                            for (let t = 0; t < r; t++) e.setBulk(32 * t, n[i + t]);
                            return e
                        }
                        setRow(t, e) {
                            h.arraycopy(e.getBitArray(), 0, this.bits, t * this.rowSize, this.rowSize)
                        }
                        rotate180() {
                            const t = this.getWidth(),
                                e = this.getHeight();
                            let r = new I(t),
                                n = new I(t);
                            for (let t = 0, i = Math.floor((e + 1) / 2); t < i; t++) r = this.getRow(t, r), n = this.getRow(e - 1 - t, n), r.reverse(), n.reverse(), this.setRow(t, n), this.setRow(e - 1 - t, r)
                        }
                        getEnclosingRectangle() {
                            const t = this.width,
                                e = this.height,
                                r = this.rowSize,
                                n = this.bits;
                            let i = t,
                                o = e,
                                s = -1,
                                a = -1;
                            for (let t = 0; t < e; t++)
                                for (let e = 0; e < r; e++) {
                                    const A = n[t * r + e];
                                    if (0 !== A) {
                                        if (t < o && (o = t), t > a && (a = t), 32 * e < i) {
                                            let t = 0;
                                            for (; 0 == (A << 31 - t & 4294967295);) t++;
                                            32 * e + t < i && (i = 32 * e + t)
                                        }
                                        if (32 * e + 31 > s) {
                                            let t = 31;
                                            for (; A >>> t == 0;) t--;
                                            32 * e + t > s && (s = 32 * e + t)
                                        }
                                    }
                                }
                            return s < i || a < o ? null : Int32Array.from([i, o, s - i + 1, a - o + 1])
                        }
                        getTopLeftOnBit() {
                            const t = this.rowSize,
                                e = this.bits;
                            let r = 0;
                            for (; r < e.length && 0 === e[r];) r++;
                            if (r === e.length) return null;
                            const n = r / t;
                            let i = r % t * 32;
                            const o = e[r];
                            let s = 0;
                            for (; 0 == (o << 31 - s & 4294967295);) s++;
                            return i += s, Int32Array.from([i, n])
                        }
                        getBottomRightOnBit() {
                            const t = this.rowSize,
                                e = this.bits;
                            let r = e.length - 1;
                            for (; r >= 0 && 0 === e[r];) r--;
                            if (r < 0) return null;
                            const n = Math.floor(r / t);
                            let i = 32 * Math.floor(r % t);
                            const o = e[r];
                            let s = 31;
                            for (; o >>> s == 0;) s--;
                            return i += s, Int32Array.from([i, n])
                        }
                        getWidth() {
                            return this.width
                        }
                        getHeight() {
                            return this.height
                        }
                        getRowSize() {
                            return this.rowSize
                        }
                        equals(t) {
                            if (!(t instanceof B)) return !1;
                            const e = t;
                            return this.width === e.width && this.height === e.height && this.rowSize === e.rowSize && u.equals(this.bits, e.bits)
                        }
                        hashCode() {
                            let t = this.width;
                            return t = 31 * t + this.width, t = 31 * t + this.height, t = 31 * t + this.rowSize, t = 31 * t + u.hashCode(this.bits), t
                        }
                        toString(t = "X ", e = "  ", r = "\n") {
                            return this.buildToString(t, e, r)
                        }
                        buildToString(t, e, r) {
                            let n = new D;
                            for (let i = 0, o = this.height; i < o; i++) {
                                for (let r = 0, o = this.width; r < o; r++) n.append(this.get(r, i) ? t : e);
                                n.append(r)
                            }
                            return n.toString()
                        }
                        clone() {
                            return new B(this.width, this.height, this.rowSize, this.bits.slice())
                        }
                    }
                    class M extends o {
                        static getNotFoundInstance() {
                            return new M
                        }
                    }
                    M.kind = "NotFoundException";
                    class T extends c {
                        constructor(t) {
                            super(t), this.luminances = T.EMPTY, this.buckets = new Int32Array(T.LUMINANCE_BUCKETS)
                        }
                        getBlackRow(t, e) {
                            const r = this.getLuminanceSource(),
                                n = r.getWidth();
                            null == e || e.getSize() < n ? e = new I(n) : e.clear(), this.initArrays(n);
                            const i = r.getRow(t, this.luminances),
                                o = this.buckets;
                            for (let t = 0; t < n; t++) o[(255 & i[t]) >> T.LUMINANCE_SHIFT]++;
                            const s = T.estimateBlackPoint(o);
                            if (n < 3)
                                for (let t = 0; t < n; t++)(255 & i[t]) < s && e.set(t);
                            else {
                                let t = 255 & i[0],
                                    r = 255 & i[1];
                                for (let o = 1; o < n - 1; o++) {
                                    const n = 255 & i[o + 1];
                                    (4 * r - t - n) / 2 < s && e.set(o), t = r, r = n
                                }
                            }
                            return e
                        }
                        getBlackMatrix() {
                            const t = this.getLuminanceSource(),
                                e = t.getWidth(),
                                r = t.getHeight(),
                                n = new B(e, r);
                            this.initArrays(e);
                            const i = this.buckets;
                            for (let n = 1; n < 5; n++) {
                                const o = Math.floor(r * n / 5),
                                    s = t.getRow(o, this.luminances),
                                    a = Math.floor(4 * e / 5);
                                for (let t = Math.floor(e / 5); t < a; t++) i[(255 & s[t]) >> T.LUMINANCE_SHIFT]++
                            }
                            const o = T.estimateBlackPoint(i),
                                s = t.getMatrix();
                            for (let t = 0; t < r; t++) {
                                const r = t * e;
                                for (let i = 0; i < e; i++)(255 & s[r + i]) < o && n.set(i, t)
                            }
                            return n
                        }
                        createBinarizer(t) {
                            return new T(t)
                        }
                        initArrays(t) {
                            this.luminances.length < t && (this.luminances = new Uint8ClampedArray(t));
                            const e = this.buckets;
                            for (let t = 0; t < T.LUMINANCE_BUCKETS; t++) e[t] = 0
                        }
                        static estimateBlackPoint(t) {
                            const e = t.length;
                            let r = 0,
                                n = 0,
                                i = 0;
                            for (let o = 0; o < e; o++) t[o] > i && (n = o, i = t[o]), t[o] > r && (r = t[o]);
                            let o = 0,
                                s = 0;
                            for (let r = 0; r < e; r++) {
                                const e = r - n,
                                    i = t[r] * e * e;
                                i > s && (o = r, s = i)
                            }
                            if (n > o) {
                                const t = n;
                                n = o, o = t
                            }
                            if (o - n <= e / 16) throw new M;
                            let a = o - 1,
                                A = -1;
                            for (let e = o - 1; e > n; e--) {
                                const i = e - n,
                                    s = i * i * (o - e) * (r - t[e]);
                                s > A && (a = e, A = s)
                            }
                            return a << T.LUMINANCE_SHIFT
                        }
                    }
                    T.LUMINANCE_BITS = 5, T.LUMINANCE_SHIFT = 8 - T.LUMINANCE_BITS, T.LUMINANCE_BUCKETS = 1 << T.LUMINANCE_BITS, T.EMPTY = Uint8ClampedArray.from([0]);
                    class N extends T {
                        constructor(t) {
                            super(t), this.matrix = null
                        }
                        getBlackMatrix() {
                            if (null !== this.matrix) return this.matrix;
                            const t = this.getLuminanceSource(),
                                e = t.getWidth(),
                                r = t.getHeight();
                            if (e >= N.MINIMUM_DIMENSION && r >= N.MINIMUM_DIMENSION) {
                                const n = t.getMatrix();
                                let i = e >> N.BLOCK_SIZE_POWER;
                                0 != (e & N.BLOCK_SIZE_MASK) && i++;
                                let o = r >> N.BLOCK_SIZE_POWER;
                                0 != (r & N.BLOCK_SIZE_MASK) && o++;
                                const s = N.calculateBlackPoints(n, i, o, e, r),
                                    a = new B(e, r);
                                N.calculateThresholdForBlock(n, i, o, e, r, s, a), this.matrix = a
                            } else this.matrix = super.getBlackMatrix();
                            return this.matrix
                        }
                        createBinarizer(t) {
                            return new N(t)
                        }
                        static calculateThresholdForBlock(t, e, r, n, i, o, s) {
                            const a = i - N.BLOCK_SIZE,
                                A = n - N.BLOCK_SIZE;
                            for (let i = 0; i < r; i++) {
                                let l = i << N.BLOCK_SIZE_POWER;
                                l > a && (l = a);
                                const c = N.cap(i, 2, r - 3);
                                for (let r = 0; r < e; r++) {
                                    let i = r << N.BLOCK_SIZE_POWER;
                                    i > A && (i = A);
                                    const a = N.cap(r, 2, e - 3);
                                    let h = 0;
                                    for (let t = -2; t <= 2; t++) {
                                        const e = o[c + t];
                                        h += e[a - 2] + e[a - 1] + e[a] + e[a + 1] + e[a + 2]
                                    }
                                    const g = h / 25;
                                    N.thresholdBlock(t, i, l, g, n, s)
                                }
                            }
                        }
                        static cap(t, e, r) {
                            return t < e ? e : t > r ? r : t
                        }
                        static thresholdBlock(t, e, r, n, i, o) {
                            for (let s = 0, a = r * i + e; s < N.BLOCK_SIZE; s++, a += i)
                                for (let i = 0; i < N.BLOCK_SIZE; i++)(255 & t[a + i]) <= n && o.set(e + i, r + s)
                        }
                        static calculateBlackPoints(t, e, r, n, i) {
                            const o = i - N.BLOCK_SIZE,
                                s = n - N.BLOCK_SIZE,
                                a = new Array(r);
                            for (let i = 0; i < r; i++) {
                                a[i] = new Int32Array(e);
                                let r = i << N.BLOCK_SIZE_POWER;
                                r > o && (r = o);
                                for (let o = 0; o < e; o++) {
                                    let e = o << N.BLOCK_SIZE_POWER;
                                    e > s && (e = s);
                                    let A = 0,
                                        l = 255,
                                        c = 0;
                                    for (let i = 0, o = r * n + e; i < N.BLOCK_SIZE; i++, o += n) {
                                        for (let e = 0; e < N.BLOCK_SIZE; e++) {
                                            const r = 255 & t[o + e];
                                            A += r, r < l && (l = r), r > c && (c = r)
                                        }
                                        if (c - l > N.MIN_DYNAMIC_RANGE)
                                            for (i++, o += n; i < N.BLOCK_SIZE; i++, o += n)
                                                for (let e = 0; e < N.BLOCK_SIZE; e++) A += 255 & t[o + e]
                                    }
                                    let h = A >> 2 * N.BLOCK_SIZE_POWER;
                                    if (c - l <= N.MIN_DYNAMIC_RANGE && (h = l / 2, i > 0 && o > 0)) {
                                        const t = (a[i - 1][o] + 2 * a[i][o - 1] + a[i - 1][o - 1]) / 4;
                                        l < t && (h = t)
                                    }
                                    a[i][o] = h
                                }
                            }
                            return a
                        }
                    }
                    N.BLOCK_SIZE_POWER = 3, N.BLOCK_SIZE = 1 << N.BLOCK_SIZE_POWER, N.BLOCK_SIZE_MASK = N.BLOCK_SIZE - 1, N.MINIMUM_DIMENSION = 5 * N.BLOCK_SIZE, N.MIN_DYNAMIC_RANGE = 24;
                    class y {
                        constructor(t, e) {
                            this.width = t, this.height = e
                        }
                        getWidth() {
                            return this.width
                        }
                        getHeight() {
                            return this.height
                        }
                        isCropSupported() {
                            return !1
                        }
                        crop(t, e, r, n) {
                            throw new p("This luminance source does not support cropping.")
                        }
                        isRotateSupported() {
                            return !1
                        }
                        rotateCounterClockwise() {
                            throw new p("This luminance source does not support rotation by 90 degrees.")
                        }
                        rotateCounterClockwise45() {
                            throw new p("This luminance source does not support rotation by 45 degrees.")
                        }
                        toString() {
                            const t = new Uint8ClampedArray(this.width);
                            let e = new D;
                            for (let r = 0; r < this.height; r++) {
                                const n = this.getRow(r, t);
                                for (let t = 0; t < this.width; t++) {
                                    const r = 255 & n[t];
                                    let i;
                                    i = r < 64 ? "#" : r < 128 ? "+" : r < 192 ? "." : " ", e.append(i)
                                }
                                e.append("\n")
                            }
                            return e.toString()
                        }
                    }
                    class _ extends y {
                        constructor(t) {
                            super(t.getWidth(), t.getHeight()), this.delegate = t
                        }
                        getRow(t, e) {
                            const r = this.delegate.getRow(t, e),
                                n = this.getWidth();
                            for (let t = 0; t < n; t++) r[t] = 255 - (255 & r[t]);
                            return r
                        }
                        getMatrix() {
                            const t = this.delegate.getMatrix(),
                                e = this.getWidth() * this.getHeight(),
                                r = new Uint8ClampedArray(e);
                            for (let n = 0; n < e; n++) r[n] = 255 - (255 & t[n]);
                            return r
                        }
                        isCropSupported() {
                            return this.delegate.isCropSupported()
                        }
                        crop(t, e, r, n) {
                            return new _(this.delegate.crop(t, e, r, n))
                        }
                        isRotateSupported() {
                            return this.delegate.isRotateSupported()
                        }
                        invert() {
                            return this.delegate
                        }
                        rotateCounterClockwise() {
                            return new _(this.delegate.rotateCounterClockwise())
                        }
                        rotateCounterClockwise45() {
                            return new _(this.delegate.rotateCounterClockwise45())
                        }
                    }
                    class O extends y {
                        constructor(t) {
                            super(t.width, t.height), this.canvas = t, this.tempCanvasElement = null, this.buffer = O.makeBufferFromCanvasImageData(t)
                        }
                        static makeBufferFromCanvasImageData(t) {
                            const e = t.getContext("2d").getImageData(0, 0, t.width, t.height);
                            return O.toGrayscaleBuffer(e.data, t.width, t.height)
                        }
                        static toGrayscaleBuffer(t, e, r) {
                            const n = new Uint8ClampedArray(e * r);
                            for (let e = 0, r = 0, i = t.length; e < i; e += 4, r++) {
                                let i;
                                i = 0 === t[e + 3] ? 255 : 306 * t[e] + 601 * t[e + 1] + 117 * t[e + 2] + 512 >> 10, n[r] = i
                            }
                            return n
                        }
                        getRow(t, e) {
                            if (t < 0 || t >= this.getHeight()) throw new a("Requested row is outside the image: " + t);
                            const r = this.getWidth(),
                                n = t * r;
                            return null === e ? e = this.buffer.slice(n, n + r) : (e.length < r && (e = new Uint8ClampedArray(r)), e.set(this.buffer.slice(n, n + r))), e
                        }
                        getMatrix() {
                            return this.buffer
                        }
                        isCropSupported() {
                            return !0
                        }
                        crop(t, e, r, n) {
                            return super.crop(t, e, r, n), this
                        }
                        isRotateSupported() {
                            return !0
                        }
                        rotateCounterClockwise() {
                            return this.rotate(-90), this
                        }
                        rotateCounterClockwise45() {
                            return this.rotate(-45), this
                        }
                        getTempCanvasElement() {
                            if (null === this.tempCanvasElement) {
                                const t = this.canvas.ownerDocument.createElement("canvas");
                                t.width = this.canvas.width, t.height = this.canvas.height, this.tempCanvasElement = t
                            }
                            return this.tempCanvasElement
                        }
                        rotate(t) {
                            const e = this.getTempCanvasElement(),
                                r = e.getContext("2d"),
                                n = t * O.DEGREE_TO_RADIANS,
                                i = this.canvas.width,
                                o = this.canvas.height,
                                s = Math.ceil(Math.abs(Math.cos(n)) * i + Math.abs(Math.sin(n)) * o),
                                a = Math.ceil(Math.abs(Math.sin(n)) * i + Math.abs(Math.cos(n)) * o);
                            return e.width = s, e.height = a, r.translate(s / 2, a / 2), r.rotate(n), r.drawImage(this.canvas, i / -2, o / -2), this.buffer = O.makeBufferFromCanvasImageData(e), this
                        }
                        invert() {
                            return new _(this)
                        }
                    }
                    O.DEGREE_TO_RADIANS = Math.PI / 180;
                    class b {
                        constructor(t, e, r) {
                            this.deviceId = t, this.label = e, this.kind = "videoinput", this.groupId = r || void 0
                        }
                        toJSON() {
                            return {
                                kind: this.kind,
                                groupId: this.groupId,
                                deviceId: this.deviceId,
                                label: this.label
                            }
                        }
                    }
                    var F, P = (globalThis || r.g || self || window ? (globalThis || r.g || self || window || void 0).__awaiter : void 0) || function(t, e, r, n) {
                        return new(r || (r = Promise))((function(i, o) {
                            function s(t) {
                                try {
                                    A(n.next(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function a(t) {
                                try {
                                    A(n.throw(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function A(t) {
                                var e;
                                t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                    t(e)
                                }))).then(s, a)
                            }
                            A((n = n.apply(t, e || [])).next())
                        }))
                    };
                    class k {
                        constructor(t, e = 500, r) {
                            this.reader = t, this.timeBetweenScansMillis = e, this._hints = r, this._stopContinuousDecode = !1, this._stopAsyncDecode = !1, this._timeBetweenDecodingAttempts = 0
                        }
                        get hasNavigator() {
                            return "undefined" != typeof navigator
                        }
                        get isMediaDevicesSuported() {
                            return this.hasNavigator && !!navigator.mediaDevices
                        }
                        get canEnumerateDevices() {
                            return !(!this.isMediaDevicesSuported || !navigator.mediaDevices.enumerateDevices)
                        }
                        get timeBetweenDecodingAttempts() {
                            return this._timeBetweenDecodingAttempts
                        }
                        set timeBetweenDecodingAttempts(t) {
                            this._timeBetweenDecodingAttempts = t < 0 ? 0 : t
                        }
                        set hints(t) {
                            this._hints = t || null
                        }
                        get hints() {
                            return this._hints
                        }
                        listVideoInputDevices() {
                            return P(this, void 0, void 0, (function*() {
                                if (!this.hasNavigator) throw new Error("Can't enumerate devices, navigator is not present.");
                                if (!this.canEnumerateDevices) throw new Error("Can't enumerate devices, method not supported.");
                                const t = yield navigator.mediaDevices.enumerateDevices(), e = [];
                                for (const r of t) {
                                    const t = "video" === r.kind ? "videoinput" : r.kind;
                                    if ("videoinput" !== t) continue;
                                    const n = {
                                        deviceId: r.deviceId || r.id,
                                        label: r.label || `Video device ${e.length+1}`,
                                        kind: t,
                                        groupId: r.groupId
                                    };
                                    e.push(n)
                                }
                                return e
                            }))
                        }
                        getVideoInputDevices() {
                            return P(this, void 0, void 0, (function*() {
                                return (yield this.listVideoInputDevices()).map((t => new b(t.deviceId, t.label)))
                            }))
                        }
                        findDeviceById(t) {
                            return P(this, void 0, void 0, (function*() {
                                const e = yield this.listVideoInputDevices();
                                return e ? e.find((e => e.deviceId === t)) : null
                            }))
                        }
                        decodeFromInputVideoDevice(t, e) {
                            return P(this, void 0, void 0, (function*() {
                                return yield this.decodeOnceFromVideoDevice(t, e)
                            }))
                        }
                        decodeOnceFromVideoDevice(t, e) {
                            return P(this, void 0, void 0, (function*() {
                                let r;
                                this.reset(), r = t ? {
                                    deviceId: {
                                        exact: t
                                    }
                                } : {
                                    facingMode: "environment"
                                };
                                const n = {
                                    video: r
                                };
                                return yield this.decodeOnceFromConstraints(n, e)
                            }))
                        }
                        decodeOnceFromConstraints(t, e) {
                            return P(this, void 0, void 0, (function*() {
                                const r = yield navigator.mediaDevices.getUserMedia(t);
                                return yield this.decodeOnceFromStream(r, e)
                            }))
                        }
                        decodeOnceFromStream(t, e) {
                            return P(this, void 0, void 0, (function*() {
                                this.reset();
                                const r = yield this.attachStreamToVideo(t, e);
                                return yield this.decodeOnce(r)
                            }))
                        }
                        decodeFromInputVideoDeviceContinuously(t, e, r) {
                            return P(this, void 0, void 0, (function*() {
                                return yield this.decodeFromVideoDevice(t, e, r)
                            }))
                        }
                        decodeFromVideoDevice(t, e, r) {
                            return P(this, void 0, void 0, (function*() {
                                let n;
                                n = t ? {
                                    deviceId: {
                                        exact: t
                                    }
                                } : {
                                    facingMode: "environment"
                                };
                                const i = {
                                    video: n
                                };
                                return yield this.decodeFromConstraints(i, e, r)
                            }))
                        }
                        decodeFromConstraints(t, e, r) {
                            return P(this, void 0, void 0, (function*() {
                                const n = yield navigator.mediaDevices.getUserMedia(t);
                                return yield this.decodeFromStream(n, e, r)
                            }))
                        }
                        decodeFromStream(t, e, r) {
                            return P(this, void 0, void 0, (function*() {
                                this.reset();
                                const n = yield this.attachStreamToVideo(t, e);
                                return yield this.decodeContinuously(n, r)
                            }))
                        }
                        stopAsyncDecode() {
                            this._stopAsyncDecode = !0
                        }
                        stopContinuousDecode() {
                            this._stopContinuousDecode = !0
                        }
                        attachStreamToVideo(t, e) {
                            return P(this, void 0, void 0, (function*() {
                                const r = this.prepareVideoElement(e);
                                return this.addVideoSource(r, t), this.videoElement = r, this.stream = t, yield this.playVideoOnLoadAsync(r), r
                            }))
                        }
                        playVideoOnLoadAsync(t) {
                            return new Promise(((e, r) => this.playVideoOnLoad(t, (() => e()))))
                        }
                        playVideoOnLoad(t, e) {
                            this.videoEndedListener = () => this.stopStreams(), this.videoCanPlayListener = () => this.tryPlayVideo(t), t.addEventListener("ended", this.videoEndedListener), t.addEventListener("canplay", this.videoCanPlayListener), t.addEventListener("playing", e), this.tryPlayVideo(t)
                        }
                        isVideoPlaying(t) {
                            return t.currentTime > 0 && !t.paused && !t.ended && t.readyState > 2
                        }
                        tryPlayVideo(t) {
                            return P(this, void 0, void 0, (function*() {
                                if (this.isVideoPlaying(t)) console.warn("Trying to play video that is already playing.");
                                else try {
                                    yield t.play()
                                } catch (t) {
                                    console.warn("It was not possible to play the video.")
                                }
                            }))
                        }
                        getMediaElement(t, e) {
                            const r = document.getElementById(t);
                            if (!r) throw new s(`element with id '${t}' not found`);
                            if (r.nodeName.toLowerCase() !== e.toLowerCase()) throw new s(`element with id '${t}' must be an ${e} element`);
                            return r
                        }
                        decodeFromImage(t, e) {
                            if (!t && !e) throw new s("either imageElement with a src set or an url must be provided");
                            return e && !t ? this.decodeFromImageUrl(e) : this.decodeFromImageElement(t)
                        }
                        decodeFromVideo(t, e) {
                            if (!t && !e) throw new s("Either an element with a src set or an URL must be provided");
                            return e && !t ? this.decodeFromVideoUrl(e) : this.decodeFromVideoElement(t)
                        }
                        decodeFromVideoContinuously(t, e, r) {
                            if (void 0 === t && void 0 === e) throw new s("Either an element with a src set or an URL must be provided");
                            return e && !t ? this.decodeFromVideoUrlContinuously(e, r) : this.decodeFromVideoElementContinuously(t, r)
                        }
                        decodeFromImageElement(t) {
                            if (!t) throw new s("An image element must be provided.");
                            this.reset();
                            const e = this.prepareImageElement(t);
                            let r;
                            return this.imageElement = e, r = this.isImageLoaded(e) ? this.decodeOnce(e, !1, !0) : this._decodeOnLoadImage(e), r
                        }
                        decodeFromVideoElement(t) {
                            const e = this._decodeFromVideoElementSetup(t);
                            return this._decodeOnLoadVideo(e)
                        }
                        decodeFromVideoElementContinuously(t, e) {
                            const r = this._decodeFromVideoElementSetup(t);
                            return this._decodeOnLoadVideoContinuously(r, e)
                        }
                        _decodeFromVideoElementSetup(t) {
                            if (!t) throw new s("A video element must be provided.");
                            this.reset();
                            const e = this.prepareVideoElement(t);
                            return this.videoElement = e, e
                        }
                        decodeFromImageUrl(t) {
                            if (!t) throw new s("An URL must be provided.");
                            this.reset();
                            const e = this.prepareImageElement();
                            this.imageElement = e;
                            const r = this._decodeOnLoadImage(e);
                            return e.src = t, r
                        }
                        decodeFromVideoUrl(t) {
                            if (!t) throw new s("An URL must be provided.");
                            this.reset();
                            const e = this.prepareVideoElement(),
                                r = this.decodeFromVideoElement(e);
                            return e.src = t, r
                        }
                        decodeFromVideoUrlContinuously(t, e) {
                            if (!t) throw new s("An URL must be provided.");
                            this.reset();
                            const r = this.prepareVideoElement(),
                                n = this.decodeFromVideoElementContinuously(r, e);
                            return r.src = t, n
                        }
                        _decodeOnLoadImage(t) {
                            return new Promise(((e, r) => {
                                this.imageLoadedListener = () => this.decodeOnce(t, !1, !0).then(e, r), t.addEventListener("load", this.imageLoadedListener)
                            }))
                        }
                        _decodeOnLoadVideo(t) {
                            return P(this, void 0, void 0, (function*() {
                                return yield this.playVideoOnLoadAsync(t), yield this.decodeOnce(t)
                            }))
                        }
                        _decodeOnLoadVideoContinuously(t, e) {
                            return P(this, void 0, void 0, (function*() {
                                yield this.playVideoOnLoadAsync(t), this.decodeContinuously(t, e)
                            }))
                        }
                        isImageLoaded(t) {
                            return !!t.complete && 0 !== t.naturalWidth
                        }
                        prepareImageElement(t) {
                            let e;
                            return void 0 === t && (e = document.createElement("img"), e.width = 200, e.height = 200), "string" == typeof t && (e = this.getMediaElement(t, "img")), t instanceof HTMLImageElement && (e = t), e
                        }
                        prepareVideoElement(t) {
                            let e;
                            return t || "undefined" == typeof document || (e = document.createElement("video"), e.width = 200, e.height = 200), "string" == typeof t && (e = this.getMediaElement(t, "video")), t instanceof HTMLVideoElement && (e = t), e.setAttribute("autoplay", "true"), e.setAttribute("muted", "true"), e.setAttribute("playsinline", "true"), e
                        }
                        decodeOnce(t, e = !0, r = !0) {
                            this._stopAsyncDecode = !1;
                            const n = (i, o) => {
                                if (this._stopAsyncDecode) return o(new M("Video stream has ended before any code could be detected.")), void(this._stopAsyncDecode = void 0);
                                try {
                                    i(this.decode(t))
                                } catch (t) {
                                    const s = (t instanceof l || t instanceof E) && r;
                                    if (e && t instanceof M || s) return setTimeout(n, this._timeBetweenDecodingAttempts, i, o);
                                    o(t)
                                }
                            };
                            return new Promise(((t, e) => n(t, e)))
                        }
                        decodeContinuously(t, e) {
                            this._stopContinuousDecode = !1;
                            const r = () => {
                                if (this._stopContinuousDecode) this._stopContinuousDecode = void 0;
                                else try {
                                    const n = this.decode(t);
                                    e(n, null), setTimeout(r, this.timeBetweenScansMillis)
                                } catch (t) {
                                    e(null, t);
                                    const n = t instanceof M;
                                    (t instanceof l || t instanceof E || n) && setTimeout(r, this._timeBetweenDecodingAttempts)
                                }
                            };
                            r()
                        }
                        decode(t) {
                            const e = this.createBinaryBitmap(t);
                            return this.decodeBitmap(e)
                        }
                        createBinaryBitmap(t) {
                            const e = this.getCaptureCanvasContext(t);
                            this.drawImageOnCanvas(e, t);
                            const r = this.getCaptureCanvas(t),
                                n = new O(r),
                                i = new N(n);
                            return new A(i)
                        }
                        getCaptureCanvasContext(t) {
                            if (!this.captureCanvasContext) {
                                const e = this.getCaptureCanvas(t).getContext("2d");
                                this.captureCanvasContext = e
                            }
                            return this.captureCanvasContext
                        }
                        getCaptureCanvas(t) {
                            if (!this.captureCanvas) {
                                const e = this.createCaptureCanvas(t);
                                this.captureCanvas = e
                            }
                            return this.captureCanvas
                        }
                        drawImageOnCanvas(t, e) {
                            t.drawImage(e, 0, 0)
                        }
                        decodeBitmap(t) {
                            return this.reader.decode(t, this._hints)
                        }
                        createCaptureCanvas(t) {
                            if ("undefined" == typeof document) return this._destroyCaptureCanvas(), null;
                            const e = document.createElement("canvas");
                            let r, n;
                            return void 0 !== t && (t instanceof HTMLVideoElement ? (r = t.videoWidth, n = t.videoHeight) : t instanceof HTMLImageElement && (r = t.naturalWidth || t.width, n = t.naturalHeight || t.height)), e.style.width = r + "px", e.style.height = n + "px", e.width = r, e.height = n, e
                        }
                        stopStreams() {
                            this.stream && (this.stream.getVideoTracks().forEach((t => t.stop())), this.stream = void 0), !1 === this._stopAsyncDecode && this.stopAsyncDecode(), !1 === this._stopContinuousDecode && this.stopContinuousDecode()
                        }
                        reset() {
                            this.stopStreams(), this._destroyVideoElement(), this._destroyImageElement(), this._destroyCaptureCanvas()
                        }
                        _destroyVideoElement() {
                            this.videoElement && (void 0 !== this.videoEndedListener && this.videoElement.removeEventListener("ended", this.videoEndedListener), void 0 !== this.videoPlayingEventListener && this.videoElement.removeEventListener("playing", this.videoPlayingEventListener), void 0 !== this.videoCanPlayListener && this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener), this.cleanVideoSource(this.videoElement), this.videoElement = void 0)
                        }
                        _destroyImageElement() {
                            this.imageElement && (void 0 !== this.imageLoadedListener && this.imageElement.removeEventListener("load", this.imageLoadedListener), this.imageElement.src = void 0, this.imageElement.removeAttribute("src"), this.imageElement = void 0)
                        }
                        _destroyCaptureCanvas() {
                            this.captureCanvasContext = void 0, this.captureCanvas = void 0
                        }
                        addVideoSource(t, e) {
                            try {
                                t.srcObject = e
                            } catch (r) {
                                t.src = URL.createObjectURL(e)
                            }
                        }
                        cleanVideoSource(t) {
                            try {
                                t.srcObject = null
                            } catch (e) {
                                t.src = ""
                            }
                            this.videoElement.removeAttribute("src")
                        }
                    }
                    class L {
                        constructor(t, e, r = (null == e ? 0 : 8 * e.length), n, i, o = h.currentTimeMillis()) {
                            this.text = t, this.rawBytes = e, this.numBits = r, this.resultPoints = n, this.format = i, this.timestamp = o, this.text = t, this.rawBytes = e, this.numBits = null == r ? null == e ? 0 : 8 * e.length : r, this.resultPoints = n, this.format = i, this.resultMetadata = null, this.timestamp = null == o ? h.currentTimeMillis() : o
                        }
                        getText() {
                            return this.text
                        }
                        getRawBytes() {
                            return this.rawBytes
                        }
                        getNumBits() {
                            return this.numBits
                        }
                        getResultPoints() {
                            return this.resultPoints
                        }
                        getBarcodeFormat() {
                            return this.format
                        }
                        getResultMetadata() {
                            return this.resultMetadata
                        }
                        putMetadata(t, e) {
                            null === this.resultMetadata && (this.resultMetadata = new Map), this.resultMetadata.set(t, e)
                        }
                        putAllMetadata(t) {
                            null !== t && (null === this.resultMetadata ? this.resultMetadata = t : this.resultMetadata = new Map(t))
                        }
                        addResultPoints(t) {
                            const e = this.resultPoints;
                            if (null === e) this.resultPoints = t;
                            else if (null !== t && t.length > 0) {
                                const r = new Array(e.length + t.length);
                                h.arraycopy(e, 0, r, 0, e.length), h.arraycopy(t, 0, r, e.length, t.length), this.resultPoints = r
                            }
                        }
                        getTimestamp() {
                            return this.timestamp
                        }
                        toString() {
                            return this.text
                        }
                    }! function(t) {
                        t[t.AZTEC = 0] = "AZTEC", t[t.CODABAR = 1] = "CODABAR", t[t.CODE_39 = 2] = "CODE_39", t[t.CODE_93 = 3] = "CODE_93", t[t.CODE_128 = 4] = "CODE_128", t[t.DATA_MATRIX = 5] = "DATA_MATRIX", t[t.EAN_8 = 6] = "EAN_8", t[t.EAN_13 = 7] = "EAN_13", t[t.ITF = 8] = "ITF", t[t.MAXICODE = 9] = "MAXICODE", t[t.PDF_417 = 10] = "PDF_417", t[t.QR_CODE = 11] = "QR_CODE", t[t.RSS_14 = 12] = "RSS_14", t[t.RSS_EXPANDED = 13] = "RSS_EXPANDED", t[t.UPC_A = 14] = "UPC_A", t[t.UPC_E = 15] = "UPC_E", t[t.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION"
                    }(F || (F = {}));
                    var G, Q = F;
                    ! function(t) {
                        t[t.OTHER = 0] = "OTHER", t[t.ORIENTATION = 1] = "ORIENTATION", t[t.BYTE_SEGMENTS = 2] = "BYTE_SEGMENTS", t[t.ERROR_CORRECTION_LEVEL = 3] = "ERROR_CORRECTION_LEVEL", t[t.ISSUE_NUMBER = 4] = "ISSUE_NUMBER", t[t.SUGGESTED_PRICE = 5] = "SUGGESTED_PRICE", t[t.POSSIBLE_COUNTRY = 6] = "POSSIBLE_COUNTRY", t[t.UPC_EAN_EXTENSION = 7] = "UPC_EAN_EXTENSION", t[t.PDF417_EXTRA_METADATA = 8] = "PDF417_EXTRA_METADATA", t[t.STRUCTURED_APPEND_SEQUENCE = 9] = "STRUCTURED_APPEND_SEQUENCE", t[t.STRUCTURED_APPEND_PARITY = 10] = "STRUCTURED_APPEND_PARITY"
                    }(G || (G = {}));
                    var Z, U, Y, v, x, W, H = G;
                    class V {
                        constructor(t, e, r, n, i = -1, o = -1) {
                            this.rawBytes = t, this.text = e, this.byteSegments = r, this.ecLevel = n, this.structuredAppendSequenceNumber = i, this.structuredAppendParity = o, this.numBits = null == t ? 0 : 8 * t.length
                        }
                        getRawBytes() {
                            return this.rawBytes
                        }
                        getNumBits() {
                            return this.numBits
                        }
                        setNumBits(t) {
                            this.numBits = t
                        }
                        getText() {
                            return this.text
                        }
                        getByteSegments() {
                            return this.byteSegments
                        }
                        getECLevel() {
                            return this.ecLevel
                        }
                        getErrorsCorrected() {
                            return this.errorsCorrected
                        }
                        setErrorsCorrected(t) {
                            this.errorsCorrected = t
                        }
                        getErasures() {
                            return this.erasures
                        }
                        setErasures(t) {
                            this.erasures = t
                        }
                        getOther() {
                            return this.other
                        }
                        setOther(t) {
                            this.other = t
                        }
                        hasStructuredAppend() {
                            return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0
                        }
                        getStructuredAppendParity() {
                            return this.structuredAppendParity
                        }
                        getStructuredAppendSequenceNumber() {
                            return this.structuredAppendSequenceNumber
                        }
                    }
                    class j {
                        exp(t) {
                            return this.expTable[t]
                        }
                        log(t) {
                            if (0 === t) throw new a;
                            return this.logTable[t]
                        }
                        static addOrSubtract(t, e) {
                            return t ^ e
                        }
                    }
                    class X {
                        constructor(t, e) {
                            if (0 === e.length) throw new a;
                            this.field = t;
                            const r = e.length;
                            if (r > 1 && 0 === e[0]) {
                                let t = 1;
                                for (; t < r && 0 === e[t];) t++;
                                t === r ? this.coefficients = Int32Array.from([0]) : (this.coefficients = new Int32Array(r - t), h.arraycopy(e, t, this.coefficients, 0, this.coefficients.length))
                            } else this.coefficients = e
                        }
                        getCoefficients() {
                            return this.coefficients
                        }
                        getDegree() {
                            return this.coefficients.length - 1
                        }
                        isZero() {
                            return 0 === this.coefficients[0]
                        }
                        getCoefficient(t) {
                            return this.coefficients[this.coefficients.length - 1 - t]
                        }
                        evaluateAt(t) {
                            if (0 === t) return this.getCoefficient(0);
                            const e = this.coefficients;
                            let r;
                            if (1 === t) {
                                r = 0;
                                for (let t = 0, n = e.length; t !== n; t++) {
                                    const n = e[t];
                                    r = j.addOrSubtract(r, n)
                                }
                                return r
                            }
                            r = e[0];
                            const n = e.length,
                                i = this.field;
                            for (let o = 1; o < n; o++) r = j.addOrSubtract(i.multiply(t, r), e[o]);
                            return r
                        }
                        addOrSubtract(t) {
                            if (!this.field.equals(t.field)) throw new a("GenericGFPolys do not have same GenericGF field");
                            if (this.isZero()) return t;
                            if (t.isZero()) return this;
                            let e = this.coefficients,
                                r = t.coefficients;
                            if (e.length > r.length) {
                                const t = e;
                                e = r, r = t
                            }
                            let n = new Int32Array(r.length);
                            const i = r.length - e.length;
                            h.arraycopy(r, 0, n, 0, i);
                            for (let t = i; t < r.length; t++) n[t] = j.addOrSubtract(e[t - i], r[t]);
                            return new X(this.field, n)
                        }
                        multiply(t) {
                            if (!this.field.equals(t.field)) throw new a("GenericGFPolys do not have same GenericGF field");
                            if (this.isZero() || t.isZero()) return this.field.getZero();
                            const e = this.coefficients,
                                r = e.length,
                                n = t.coefficients,
                                i = n.length,
                                o = new Int32Array(r + i - 1),
                                s = this.field;
                            for (let t = 0; t < r; t++) {
                                const r = e[t];
                                for (let e = 0; e < i; e++) o[t + e] = j.addOrSubtract(o[t + e], s.multiply(r, n[e]))
                            }
                            return new X(s, o)
                        }
                        multiplyScalar(t) {
                            if (0 === t) return this.field.getZero();
                            if (1 === t) return this;
                            const e = this.coefficients.length,
                                r = this.field,
                                n = new Int32Array(e),
                                i = this.coefficients;
                            for (let o = 0; o < e; o++) n[o] = r.multiply(i[o], t);
                            return new X(r, n)
                        }
                        multiplyByMonomial(t, e) {
                            if (t < 0) throw new a;
                            if (0 === e) return this.field.getZero();
                            const r = this.coefficients,
                                n = r.length,
                                i = new Int32Array(n + t),
                                o = this.field;
                            for (let t = 0; t < n; t++) i[t] = o.multiply(r[t], e);
                            return new X(o, i)
                        }
                        divide(t) {
                            if (!this.field.equals(t.field)) throw new a("GenericGFPolys do not have same GenericGF field");
                            if (t.isZero()) throw new a("Divide by 0");
                            const e = this.field;
                            let r = e.getZero(),
                                n = this;
                            const i = t.getCoefficient(t.getDegree()),
                                o = e.inverse(i);
                            for (; n.getDegree() >= t.getDegree() && !n.isZero();) {
                                const i = n.getDegree() - t.getDegree(),
                                    s = e.multiply(n.getCoefficient(n.getDegree()), o),
                                    a = t.multiplyByMonomial(i, s),
                                    A = e.buildMonomial(i, s);
                                r = r.addOrSubtract(A), n = n.addOrSubtract(a)
                            }
                            return [r, n]
                        }
                        toString() {
                            let t = "";
                            for (let e = this.getDegree(); e >= 0; e--) {
                                let r = this.getCoefficient(e);
                                if (0 !== r) {
                                    if (r < 0 ? (t += " - ", r = -r) : t.length > 0 && (t += " + "), 0 === e || 1 !== r) {
                                        const e = this.field.log(r);
                                        0 === e ? t += "1" : 1 === e ? t += "a" : (t += "a^", t += e)
                                    }
                                    0 !== e && (1 === e ? t += "x" : (t += "x^", t += e))
                                }
                            }
                            return t
                        }
                    }
                    class z extends o {}
                    z.kind = "ArithmeticException";
                    class J extends j {
                        constructor(t, e, r) {
                            super(), this.primitive = t, this.size = e, this.generatorBase = r;
                            const n = new Int32Array(e);
                            let i = 1;
                            for (let r = 0; r < e; r++) n[r] = i, i *= 2, i >= e && (i ^= t, i &= e - 1);
                            this.expTable = n;
                            const o = new Int32Array(e);
                            for (let t = 0; t < e - 1; t++) o[n[t]] = t;
                            this.logTable = o, this.zero = new X(this, Int32Array.from([0])), this.one = new X(this, Int32Array.from([1]))
                        }
                        getZero() {
                            return this.zero
                        }
                        getOne() {
                            return this.one
                        }
                        buildMonomial(t, e) {
                            if (t < 0) throw new a;
                            if (0 === e) return this.zero;
                            const r = new Int32Array(t + 1);
                            return r[0] = e, new X(this, r)
                        }
                        inverse(t) {
                            if (0 === t) throw new z;
                            return this.expTable[this.size - this.logTable[t] - 1]
                        }
                        multiply(t, e) {
                            return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.size - 1)]
                        }
                        getSize() {
                            return this.size
                        }
                        getGeneratorBase() {
                            return this.generatorBase
                        }
                        toString() {
                            return "GF(0x" + C.toHexString(this.primitive) + "," + this.size + ")"
                        }
                        equals(t) {
                            return t === this
                        }
                    }
                    J.AZTEC_DATA_12 = new J(4201, 4096, 1), J.AZTEC_DATA_10 = new J(1033, 1024, 1), J.AZTEC_DATA_6 = new J(67, 64, 1), J.AZTEC_PARAM = new J(19, 16, 1), J.QR_CODE_FIELD_256 = new J(285, 256, 0), J.DATA_MATRIX_FIELD_256 = new J(301, 256, 1), J.AZTEC_DATA_8 = J.DATA_MATRIX_FIELD_256, J.MAXICODE_FIELD_64 = J.AZTEC_DATA_6;
                    class K extends o {}
                    K.kind = "ReedSolomonException";
                    class q extends o {}
                    q.kind = "IllegalStateException";
                    class $ {
                        constructor(t) {
                            this.field = t
                        }
                        decode(t, e) {
                            const r = this.field,
                                n = new X(r, t),
                                i = new Int32Array(e);
                            let o = !0;
                            for (let t = 0; t < e; t++) {
                                const e = n.evaluateAt(r.exp(t + r.getGeneratorBase()));
                                i[i.length - 1 - t] = e, 0 !== e && (o = !1)
                            }
                            if (o) return;
                            const s = new X(r, i),
                                a = this.runEuclideanAlgorithm(r.buildMonomial(e, 1), s, e),
                                A = a[0],
                                l = a[1],
                                c = this.findErrorLocations(A),
                                h = this.findErrorMagnitudes(l, c);
                            for (let e = 0; e < c.length; e++) {
                                const n = t.length - 1 - r.log(c[e]);
                                if (n < 0) throw new K("Bad error location");
                                t[n] = J.addOrSubtract(t[n], h[e])
                            }
                        }
                        runEuclideanAlgorithm(t, e, r) {
                            if (t.getDegree() < e.getDegree()) {
                                const r = t;
                                t = e, e = r
                            }
                            const n = this.field;
                            let i = t,
                                o = e,
                                s = n.getZero(),
                                a = n.getOne();
                            for (; o.getDegree() >= (r / 2 | 0);) {
                                let t = i,
                                    e = s;
                                if (i = o, s = a, i.isZero()) throw new K("r_{i-1} was zero");
                                o = t;
                                let r = n.getZero();
                                const A = i.getCoefficient(i.getDegree()),
                                    l = n.inverse(A);
                                for (; o.getDegree() >= i.getDegree() && !o.isZero();) {
                                    const t = o.getDegree() - i.getDegree(),
                                        e = n.multiply(o.getCoefficient(o.getDegree()), l);
                                    r = r.addOrSubtract(n.buildMonomial(t, e)), o = o.addOrSubtract(i.multiplyByMonomial(t, e))
                                }
                                if (a = r.multiply(s).addOrSubtract(e), o.getDegree() >= i.getDegree()) throw new q("Division algorithm failed to reduce polynomial?")
                            }
                            const A = a.getCoefficient(0);
                            if (0 === A) throw new K("sigmaTilde(0) was zero");
                            const l = n.inverse(A);
                            return [a.multiplyScalar(l), o.multiplyScalar(l)]
                        }
                        findErrorLocations(t) {
                            const e = t.getDegree();
                            if (1 === e) return Int32Array.from([t.getCoefficient(1)]);
                            const r = new Int32Array(e);
                            let n = 0;
                            const i = this.field;
                            for (let o = 1; o < i.getSize() && n < e; o++) 0 === t.evaluateAt(o) && (r[n] = i.inverse(o), n++);
                            if (n !== e) throw new K("Error locator degree does not match number of roots");
                            return r
                        }
                        findErrorMagnitudes(t, e) {
                            const r = e.length,
                                n = new Int32Array(r),
                                i = this.field;
                            for (let o = 0; o < r; o++) {
                                const s = i.inverse(e[o]);
                                let a = 1;
                                for (let t = 0; t < r; t++)
                                    if (o !== t) {
                                        const r = i.multiply(e[t], s),
                                            n = 0 == (1 & r) ? 1 | r : -2 & r;
                                        a = i.multiply(a, n)
                                    } n[o] = i.multiply(t.evaluateAt(s), i.inverse(a)), 0 !== i.getGeneratorBase() && (n[o] = i.multiply(n[o], s))
                            }
                            return n
                        }
                    }! function(t) {
                        t[t.UPPER = 0] = "UPPER", t[t.LOWER = 1] = "LOWER", t[t.MIXED = 2] = "MIXED", t[t.DIGIT = 3] = "DIGIT", t[t.PUNCT = 4] = "PUNCT", t[t.BINARY = 5] = "BINARY"
                    }(Z || (Z = {}));
                    class tt {
                        decode(t) {
                            this.ddata = t;
                            let e = t.getBits(),
                                r = this.extractBits(e),
                                n = this.correctBits(r),
                                i = tt.convertBoolArrayToByteArray(n),
                                o = tt.getEncodedData(n),
                                s = new V(i, o, null, null);
                            return s.setNumBits(n.length), s
                        }
                        static highLevelDecode(t) {
                            return this.getEncodedData(t)
                        }
                        static getEncodedData(t) {
                            let e = t.length,
                                r = Z.UPPER,
                                n = Z.UPPER,
                                i = "",
                                o = 0;
                            for (; o < e;)
                                if (n === Z.BINARY) {
                                    if (e - o < 5) break;
                                    let s = tt.readCode(t, o, 5);
                                    if (o += 5, 0 === s) {
                                        if (e - o < 11) break;
                                        s = tt.readCode(t, o, 11) + 31, o += 11
                                    }
                                    for (let r = 0; r < s; r++) {
                                        if (e - o < 8) {
                                            o = e;
                                            break
                                        }
                                        const r = tt.readCode(t, o, 8);
                                        i += R.castAsNonUtf8Char(r), o += 8
                                    }
                                    n = r
                                } else {
                                    let s = n === Z.DIGIT ? 4 : 5;
                                    if (e - o < s) break;
                                    let a = tt.readCode(t, o, s);
                                    o += s;
                                    let A = tt.getCharacter(n, a);
                                    A.startsWith("CTRL_") ? (r = n, n = tt.getTable(A.charAt(5)), "L" === A.charAt(6) && (r = n)) : (i += A, n = r)
                                } return i
                        }
                        static getTable(t) {
                            switch (t) {
                                case "L":
                                    return Z.LOWER;
                                case "P":
                                    return Z.PUNCT;
                                case "M":
                                    return Z.MIXED;
                                case "D":
                                    return Z.DIGIT;
                                case "B":
                                    return Z.BINARY;
                                case "U":
                                default:
                                    return Z.UPPER
                            }
                        }
                        static getCharacter(t, e) {
                            switch (t) {
                                case Z.UPPER:
                                    return tt.UPPER_TABLE[e];
                                case Z.LOWER:
                                    return tt.LOWER_TABLE[e];
                                case Z.MIXED:
                                    return tt.MIXED_TABLE[e];
                                case Z.PUNCT:
                                    return tt.PUNCT_TABLE[e];
                                case Z.DIGIT:
                                    return tt.DIGIT_TABLE[e];
                                default:
                                    throw new q("Bad table")
                            }
                        }
                        correctBits(t) {
                            let e, r;
                            this.ddata.getNbLayers() <= 2 ? (r = 6, e = J.AZTEC_DATA_6) : this.ddata.getNbLayers() <= 8 ? (r = 8, e = J.AZTEC_DATA_8) : this.ddata.getNbLayers() <= 22 ? (r = 10, e = J.AZTEC_DATA_10) : (r = 12, e = J.AZTEC_DATA_12);
                            let n = this.ddata.getNbDatablocks(),
                                i = t.length / r;
                            if (i < n) throw new E;
                            let o = t.length % r,
                                s = new Int32Array(i);
                            for (let e = 0; e < i; e++, o += r) s[e] = tt.readCode(t, o, r);
                            try {
                                new $(e).decode(s, i - n)
                            } catch (t) {
                                throw new E(t)
                            }
                            let a = (1 << r) - 1,
                                A = 0;
                            for (let t = 0; t < n; t++) {
                                let e = s[t];
                                if (0 === e || e === a) throw new E;
                                1 !== e && e !== a - 1 || A++
                            }
                            let l = new Array(n * r - A),
                                c = 0;
                            for (let t = 0; t < n; t++) {
                                let e = s[t];
                                if (1 === e || e === a - 1) l.fill(e > 1, c, c + r - 1), c += r - 1;
                                else
                                    for (let t = r - 1; t >= 0; --t) l[c++] = 0 != (e & 1 << t)
                            }
                            return l
                        }
                        extractBits(t) {
                            let e = this.ddata.isCompact(),
                                r = this.ddata.getNbLayers(),
                                n = (e ? 11 : 14) + 4 * r,
                                i = new Int32Array(n),
                                o = new Array(this.totalBitsInLayer(r, e));
                            if (e)
                                for (let t = 0; t < i.length; t++) i[t] = t;
                            else {
                                let t = n + 1 + 2 * C.truncDivision(C.truncDivision(n, 2) - 1, 15),
                                    e = n / 2,
                                    r = C.truncDivision(t, 2);
                                for (let t = 0; t < e; t++) {
                                    let n = t + C.truncDivision(t, 15);
                                    i[e - t - 1] = r - n - 1, i[e + t] = r + n + 1
                                }
                            }
                            for (let s = 0, a = 0; s < r; s++) {
                                let A = 4 * (r - s) + (e ? 9 : 12),
                                    l = 2 * s,
                                    c = n - 1 - l;
                                for (let e = 0; e < A; e++) {
                                    let r = 2 * e;
                                    for (let n = 0; n < 2; n++) o[a + r + n] = t.get(i[l + n], i[l + e]), o[a + 2 * A + r + n] = t.get(i[l + e], i[c - n]), o[a + 4 * A + r + n] = t.get(i[c - n], i[c - e]), o[a + 6 * A + r + n] = t.get(i[c - e], i[l + n])
                                }
                                a += 8 * A
                            }
                            return o
                        }
                        static readCode(t, e, r) {
                            let n = 0;
                            for (let i = e; i < e + r; i++) n <<= 1, t[i] && (n |= 1);
                            return n
                        }
                        static readByte(t, e) {
                            let r = t.length - e;
                            return r >= 8 ? tt.readCode(t, e, 8) : tt.readCode(t, e, r) << 8 - r
                        }
                        static convertBoolArrayToByteArray(t) {
                            let e = new Uint8Array((t.length + 7) / 8);
                            for (let r = 0; r < e.length; r++) e[r] = tt.readByte(t, 8 * r);
                            return e
                        }
                        totalBitsInLayer(t, e) {
                            return ((e ? 88 : 112) + 16 * t) * t
                        }
                    }
                    tt.UPPER_TABLE = ["CTRL_PS", " ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "CTRL_LL", "CTRL_ML", "CTRL_DL", "CTRL_BS"], tt.LOWER_TABLE = ["CTRL_PS", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "CTRL_US", "CTRL_ML", "CTRL_DL", "CTRL_BS"], tt.MIXED_TABLE = ["CTRL_PS", " ", "\\1", "\\2", "\\3", "\\4", "\\5", "\\6", "\\7", "\b", "\t", "\n", "\\13", "\f", "\r", "\\33", "\\34", "\\35", "\\36", "\\37", "@", "\\", "^", "_", "`", "|", "~", "\\177", "CTRL_LL", "CTRL_UL", "CTRL_PL", "CTRL_BS"], tt.PUNCT_TABLE = ["", "\r", "\r\n", ". ", ", ", ": ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}", "CTRL_UL"], tt.DIGIT_TABLE = ["CTRL_PS", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ",", ".", "CTRL_UL", "CTRL_US"];
                    class et {
                        constructor() {}
                        static round(t) {
                            return NaN === t ? 0 : t <= Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : t >= Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : t + (t < 0 ? -.5 : .5) | 0
                        }
                        static distance(t, e, r, n) {
                            const i = t - r,
                                o = e - n;
                            return Math.sqrt(i * i + o * o)
                        }
                        static sum(t) {
                            let e = 0;
                            for (let r = 0, n = t.length; r !== n; r++) e += t[r];
                            return e
                        }
                    }
                    class rt {
                        static floatToIntBits(t) {
                            return t
                        }
                    }
                    rt.MAX_VALUE = Number.MAX_SAFE_INTEGER;
                    class nt {
                        constructor(t, e) {
                            this.x = t, this.y = e
                        }
                        getX() {
                            return this.x
                        }
                        getY() {
                            return this.y
                        }
                        equals(t) {
                            if (t instanceof nt) {
                                const e = t;
                                return this.x === e.x && this.y === e.y
                            }
                            return !1
                        }
                        hashCode() {
                            return 31 * rt.floatToIntBits(this.x) + rt.floatToIntBits(this.y)
                        }
                        toString() {
                            return "(" + this.x + "," + this.y + ")"
                        }
                        static orderBestPatterns(t) {
                            const e = this.distance(t[0], t[1]),
                                r = this.distance(t[1], t[2]),
                                n = this.distance(t[0], t[2]);
                            let i, o, s;
                            if (r >= e && r >= n ? (o = t[0], i = t[1], s = t[2]) : n >= r && n >= e ? (o = t[1], i = t[0], s = t[2]) : (o = t[2], i = t[0], s = t[1]), this.crossProductZ(i, o, s) < 0) {
                                const t = i;
                                i = s, s = t
                            }
                            t[0] = i, t[1] = o, t[2] = s
                        }
                        static distance(t, e) {
                            return et.distance(t.x, t.y, e.x, e.y)
                        }
                        static crossProductZ(t, e, r) {
                            const n = e.x,
                                i = e.y;
                            return (r.x - n) * (t.y - i) - (r.y - i) * (t.x - n)
                        }
                    }
                    class it {
                        constructor(t, e) {
                            this.bits = t, this.points = e
                        }
                        getBits() {
                            return this.bits
                        }
                        getPoints() {
                            return this.points
                        }
                    }
                    class ot extends it {
                        constructor(t, e, r, n, i) {
                            super(t, e), this.compact = r, this.nbDatablocks = n, this.nbLayers = i
                        }
                        getNbLayers() {
                            return this.nbLayers
                        }
                        getNbDatablocks() {
                            return this.nbDatablocks
                        }
                        isCompact() {
                            return this.compact
                        }
                    }
                    class st {
                        constructor(t, e, r, n) {
                            this.image = t, this.height = t.getHeight(), this.width = t.getWidth(), null == e && (e = st.INIT_SIZE), null == r && (r = t.getWidth() / 2 | 0), null == n && (n = t.getHeight() / 2 | 0);
                            const i = e / 2 | 0;
                            if (this.leftInit = r - i, this.rightInit = r + i, this.upInit = n - i, this.downInit = n + i, this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) throw new M
                        }
                        detect() {
                            let t = this.leftInit,
                                e = this.rightInit,
                                r = this.upInit,
                                n = this.downInit,
                                i = !1,
                                o = !0,
                                s = !1,
                                a = !1,
                                A = !1,
                                l = !1,
                                c = !1;
                            const h = this.width,
                                g = this.height;
                            for (; o;) {
                                o = !1;
                                let d = !0;
                                for (;
                                    (d || !a) && e < h;) d = this.containsBlackPoint(r, n, e, !1), d ? (e++, o = !0, a = !0) : a || e++;
                                if (e >= h) {
                                    i = !0;
                                    break
                                }
                                let u = !0;
                                for (;
                                    (u || !A) && n < g;) u = this.containsBlackPoint(t, e, n, !0), u ? (n++, o = !0, A = !0) : A || n++;
                                if (n >= g) {
                                    i = !0;
                                    break
                                }
                                let C = !0;
                                for (;
                                    (C || !l) && t >= 0;) C = this.containsBlackPoint(r, n, t, !1), C ? (t--, o = !0, l = !0) : l || t--;
                                if (t < 0) {
                                    i = !0;
                                    break
                                }
                                let I = !0;
                                for (;
                                    (I || !c) && r >= 0;) I = this.containsBlackPoint(t, e, r, !0), I ? (r--, o = !0, c = !0) : c || r--;
                                if (r < 0) {
                                    i = !0;
                                    break
                                }
                                o && (s = !0)
                            }
                            if (!i && s) {
                                const i = e - t;
                                let o = null;
                                for (let e = 1; null === o && e < i; e++) o = this.getBlackPointOnSegment(t, n - e, t + e, n);
                                if (null == o) throw new M;
                                let s = null;
                                for (let e = 1; null === s && e < i; e++) s = this.getBlackPointOnSegment(t, r + e, t + e, r);
                                if (null == s) throw new M;
                                let a = null;
                                for (let t = 1; null === a && t < i; t++) a = this.getBlackPointOnSegment(e, r + t, e - t, r);
                                if (null == a) throw new M;
                                let A = null;
                                for (let t = 1; null === A && t < i; t++) A = this.getBlackPointOnSegment(e, n - t, e - t, n);
                                if (null == A) throw new M;
                                return this.centerEdges(A, o, a, s)
                            }
                            throw new M
                        }
                        getBlackPointOnSegment(t, e, r, n) {
                            const i = et.round(et.distance(t, e, r, n)),
                                o = (r - t) / i,
                                s = (n - e) / i,
                                a = this.image;
                            for (let r = 0; r < i; r++) {
                                const n = et.round(t + r * o),
                                    i = et.round(e + r * s);
                                if (a.get(n, i)) return new nt(n, i)
                            }
                            return null
                        }
                        centerEdges(t, e, r, n) {
                            const i = t.getX(),
                                o = t.getY(),
                                s = e.getX(),
                                a = e.getY(),
                                A = r.getX(),
                                l = r.getY(),
                                c = n.getX(),
                                h = n.getY(),
                                g = st.CORR;
                            return i < this.width / 2 ? [new nt(c - g, h + g), new nt(s + g, a + g), new nt(A - g, l - g), new nt(i + g, o - g)] : [new nt(c + g, h + g), new nt(s + g, a - g), new nt(A - g, l + g), new nt(i - g, o - g)]
                        }
                        containsBlackPoint(t, e, r, n) {
                            const i = this.image;
                            if (n) {
                                for (let n = t; n <= e; n++)
                                    if (i.get(n, r)) return !0
                            } else
                                for (let n = t; n <= e; n++)
                                    if (i.get(r, n)) return !0;
                            return !1
                        }
                    }
                    st.INIT_SIZE = 10, st.CORR = 1;
                    class at {
                        static checkAndNudgePoints(t, e) {
                            const r = t.getWidth(),
                                n = t.getHeight();
                            let i = !0;
                            for (let t = 0; t < e.length && i; t += 2) {
                                const o = Math.floor(e[t]),
                                    s = Math.floor(e[t + 1]);
                                if (o < -1 || o > r || s < -1 || s > n) throw new M;
                                i = !1, -1 === o ? (e[t] = 0, i = !0) : o === r && (e[t] = r - 1, i = !0), -1 === s ? (e[t + 1] = 0, i = !0) : s === n && (e[t + 1] = n - 1, i = !0)
                            }
                            i = !0;
                            for (let t = e.length - 2; t >= 0 && i; t -= 2) {
                                const o = Math.floor(e[t]),
                                    s = Math.floor(e[t + 1]);
                                if (o < -1 || o > r || s < -1 || s > n) throw new M;
                                i = !1, -1 === o ? (e[t] = 0, i = !0) : o === r && (e[t] = r - 1, i = !0), -1 === s ? (e[t + 1] = 0, i = !0) : s === n && (e[t + 1] = n - 1, i = !0)
                            }
                        }
                    }
                    class At {
                        constructor(t, e, r, n, i, o, s, a, A) {
                            this.a11 = t, this.a21 = e, this.a31 = r, this.a12 = n, this.a22 = i, this.a32 = o, this.a13 = s, this.a23 = a, this.a33 = A
                        }
                        static quadrilateralToQuadrilateral(t, e, r, n, i, o, s, a, A, l, c, h, g, d, u, C) {
                            const I = At.quadrilateralToSquare(t, e, r, n, i, o, s, a);
                            return At.squareToQuadrilateral(A, l, c, h, g, d, u, C).times(I)
                        }
                        transformPoints(t) {
                            const e = t.length,
                                r = this.a11,
                                n = this.a12,
                                i = this.a13,
                                o = this.a21,
                                s = this.a22,
                                a = this.a23,
                                A = this.a31,
                                l = this.a32,
                                c = this.a33;
                            for (let h = 0; h < e; h += 2) {
                                const e = t[h],
                                    g = t[h + 1],
                                    d = i * e + a * g + c;
                                t[h] = (r * e + o * g + A) / d, t[h + 1] = (n * e + s * g + l) / d
                            }
                        }
                        transformPointsWithValues(t, e) {
                            const r = this.a11,
                                n = this.a12,
                                i = this.a13,
                                o = this.a21,
                                s = this.a22,
                                a = this.a23,
                                A = this.a31,
                                l = this.a32,
                                c = this.a33,
                                h = t.length;
                            for (let g = 0; g < h; g++) {
                                const h = t[g],
                                    d = e[g],
                                    u = i * h + a * d + c;
                                t[g] = (r * h + o * d + A) / u, e[g] = (n * h + s * d + l) / u
                            }
                        }
                        static squareToQuadrilateral(t, e, r, n, i, o, s, a) {
                            const A = t - r + i - s,
                                l = e - n + o - a;
                            if (0 === A && 0 === l) return new At(r - t, i - r, t, n - e, o - n, e, 0, 0, 1); {
                                const c = r - i,
                                    h = s - i,
                                    g = n - o,
                                    d = a - o,
                                    u = c * d - h * g,
                                    C = (A * d - h * l) / u,
                                    I = (c * l - A * g) / u;
                                return new At(r - t + C * r, s - t + I * s, t, n - e + C * n, a - e + I * a, e, C, I, 1)
                            }
                        }
                        static quadrilateralToSquare(t, e, r, n, i, o, s, a) {
                            return At.squareToQuadrilateral(t, e, r, n, i, o, s, a).buildAdjoint()
                        }
                        buildAdjoint() {
                            return new At(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21)
                        }
                        times(t) {
                            return new At(this.a11 * t.a11 + this.a21 * t.a12 + this.a31 * t.a13, this.a11 * t.a21 + this.a21 * t.a22 + this.a31 * t.a23, this.a11 * t.a31 + this.a21 * t.a32 + this.a31 * t.a33, this.a12 * t.a11 + this.a22 * t.a12 + this.a32 * t.a13, this.a12 * t.a21 + this.a22 * t.a22 + this.a32 * t.a23, this.a12 * t.a31 + this.a22 * t.a32 + this.a32 * t.a33, this.a13 * t.a11 + this.a23 * t.a12 + this.a33 * t.a13, this.a13 * t.a21 + this.a23 * t.a22 + this.a33 * t.a23, this.a13 * t.a31 + this.a23 * t.a32 + this.a33 * t.a33)
                        }
                    }
                    class lt extends at {
                        sampleGrid(t, e, r, n, i, o, s, a, A, l, c, h, g, d, u, C, I, f, w) {
                            const E = At.quadrilateralToQuadrilateral(n, i, o, s, a, A, l, c, h, g, d, u, C, I, f, w);
                            return this.sampleGridWithTransform(t, e, r, E)
                        }
                        sampleGridWithTransform(t, e, r, n) {
                            if (e <= 0 || r <= 0) throw new M;
                            const i = new B(e, r),
                                o = new Float32Array(2 * e);
                            for (let e = 0; e < r; e++) {
                                const r = o.length,
                                    s = e + .5;
                                for (let t = 0; t < r; t += 2) o[t] = t / 2 + .5, o[t + 1] = s;
                                n.transformPoints(o), at.checkAndNudgePoints(t, o);
                                try {
                                    for (let n = 0; n < r; n += 2) t.get(Math.floor(o[n]), Math.floor(o[n + 1])) && i.set(n / 2, e)
                                } catch (t) {
                                    throw new M
                                }
                            }
                            return i
                        }
                    }
                    class ct {
                        static setGridSampler(t) {
                            ct.gridSampler = t
                        }
                        static getInstance() {
                            return ct.gridSampler
                        }
                    }
                    ct.gridSampler = new lt;
                    class ht {
                        constructor(t, e) {
                            this.x = t, this.y = e
                        }
                        toResultPoint() {
                            return new nt(this.getX(), this.getY())
                        }
                        getX() {
                            return this.x
                        }
                        getY() {
                            return this.y
                        }
                    }
                    class gt {
                        constructor(t) {
                            this.EXPECTED_CORNER_BITS = new Int32Array([3808, 476, 2107, 1799]), this.image = t
                        }
                        detect() {
                            return this.detectMirror(!1)
                        }
                        detectMirror(t) {
                            let e = this.getMatrixCenter(),
                                r = this.getBullsEyeCorners(e);
                            if (t) {
                                let t = r[0];
                                r[0] = r[2], r[2] = t
                            }
                            this.extractParameters(r);
                            let n = this.sampleGrid(this.image, r[this.shift % 4], r[(this.shift + 1) % 4], r[(this.shift + 2) % 4], r[(this.shift + 3) % 4]),
                                i = this.getMatrixCornerPoints(r);
                            return new ot(n, i, this.compact, this.nbDataBlocks, this.nbLayers)
                        }
                        extractParameters(t) {
                            if (!(this.isValidPoint(t[0]) && this.isValidPoint(t[1]) && this.isValidPoint(t[2]) && this.isValidPoint(t[3]))) throw new M;
                            let e = 2 * this.nbCenterLayers,
                                r = new Int32Array([this.sampleLine(t[0], t[1], e), this.sampleLine(t[1], t[2], e), this.sampleLine(t[2], t[3], e), this.sampleLine(t[3], t[0], e)]);
                            this.shift = this.getRotation(r, e);
                            let n = 0;
                            for (let t = 0; t < 4; t++) {
                                let e = r[(this.shift + t) % 4];
                                this.compact ? (n <<= 7, n += e >> 1 & 127) : (n <<= 10, n += (e >> 2 & 992) + (e >> 1 & 31))
                            }
                            let i = this.getCorrectedParameterData(n, this.compact);
                            this.compact ? (this.nbLayers = 1 + (i >> 6), this.nbDataBlocks = 1 + (63 & i)) : (this.nbLayers = 1 + (i >> 11), this.nbDataBlocks = 1 + (2047 & i))
                        }
                        getRotation(t, e) {
                            let r = 0;
                            t.forEach(((t, n, i) => {
                                r = (t >> e - 2 << 1) + (1 & t) + (r << 3)
                            })), r = ((1 & r) << 11) + (r >> 1);
                            for (let t = 0; t < 4; t++)
                                if (C.bitCount(r ^ this.EXPECTED_CORNER_BITS[t]) <= 2) return t;
                            throw new M
                        }
                        getCorrectedParameterData(t, e) {
                            let r, n;
                            e ? (r = 7, n = 2) : (r = 10, n = 4);
                            let i = r - n,
                                o = new Int32Array(r);
                            for (let e = r - 1; e >= 0; --e) o[e] = 15 & t, t >>= 4;
                            try {
                                new $(J.AZTEC_PARAM).decode(o, i)
                            } catch (t) {
                                throw new M
                            }
                            let s = 0;
                            for (let t = 0; t < n; t++) s = (s << 4) + o[t];
                            return s
                        }
                        getBullsEyeCorners(t) {
                            let e = t,
                                r = t,
                                n = t,
                                i = t,
                                o = !0;
                            for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
                                let t = this.getFirstDifferent(e, o, 1, -1),
                                    s = this.getFirstDifferent(r, o, 1, 1),
                                    a = this.getFirstDifferent(n, o, -1, 1),
                                    A = this.getFirstDifferent(i, o, -1, -1);
                                if (this.nbCenterLayers > 2) {
                                    let r = this.distancePoint(A, t) * this.nbCenterLayers / (this.distancePoint(i, e) * (this.nbCenterLayers + 2));
                                    if (r < .75 || r > 1.25 || !this.isWhiteOrBlackRectangle(t, s, a, A)) break
                                }
                                e = t, r = s, n = a, i = A, o = !o
                            }
                            if (5 !== this.nbCenterLayers && 7 !== this.nbCenterLayers) throw new M;
                            this.compact = 5 === this.nbCenterLayers;
                            let s = new nt(e.getX() + .5, e.getY() - .5),
                                a = new nt(r.getX() + .5, r.getY() + .5),
                                A = new nt(n.getX() - .5, n.getY() + .5),
                                l = new nt(i.getX() - .5, i.getY() - .5);
                            return this.expandSquare([s, a, A, l], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers)
                        }
                        getMatrixCenter() {
                            let t, e, r, n;
                            try {
                                let i = new st(this.image).detect();
                                t = i[0], e = i[1], r = i[2], n = i[3]
                            } catch (i) {
                                let o = this.image.getWidth() / 2,
                                    s = this.image.getHeight() / 2;
                                t = this.getFirstDifferent(new ht(o + 7, s - 7), !1, 1, -1).toResultPoint(), e = this.getFirstDifferent(new ht(o + 7, s + 7), !1, 1, 1).toResultPoint(), r = this.getFirstDifferent(new ht(o - 7, s + 7), !1, -1, 1).toResultPoint(), n = this.getFirstDifferent(new ht(o - 7, s - 7), !1, -1, -1).toResultPoint()
                            }
                            let i = et.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4),
                                o = et.round((t.getY() + n.getY() + e.getY() + r.getY()) / 4);
                            try {
                                let s = new st(this.image, 15, i, o).detect();
                                t = s[0], e = s[1], r = s[2], n = s[3]
                            } catch (s) {
                                t = this.getFirstDifferent(new ht(i + 7, o - 7), !1, 1, -1).toResultPoint(), e = this.getFirstDifferent(new ht(i + 7, o + 7), !1, 1, 1).toResultPoint(), r = this.getFirstDifferent(new ht(i - 7, o + 7), !1, -1, 1).toResultPoint(), n = this.getFirstDifferent(new ht(i - 7, o - 7), !1, -1, -1).toResultPoint()
                            }
                            return i = et.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4), o = et.round((t.getY() + n.getY() + e.getY() + r.getY()) / 4), new ht(i, o)
                        }
                        getMatrixCornerPoints(t) {
                            return this.expandSquare(t, 2 * this.nbCenterLayers, this.getDimension())
                        }
                        sampleGrid(t, e, r, n, i) {
                            let o = ct.getInstance(),
                                s = this.getDimension(),
                                a = s / 2 - this.nbCenterLayers,
                                A = s / 2 + this.nbCenterLayers;
                            return o.sampleGrid(t, s, s, a, a, A, a, A, A, a, A, e.getX(), e.getY(), r.getX(), r.getY(), n.getX(), n.getY(), i.getX(), i.getY())
                        }
                        sampleLine(t, e, r) {
                            let n = 0,
                                i = this.distanceResultPoint(t, e),
                                o = i / r,
                                s = t.getX(),
                                a = t.getY(),
                                A = o * (e.getX() - t.getX()) / i,
                                l = o * (e.getY() - t.getY()) / i;
                            for (let t = 0; t < r; t++) this.image.get(et.round(s + t * A), et.round(a + t * l)) && (n |= 1 << r - t - 1);
                            return n
                        }
                        isWhiteOrBlackRectangle(t, e, r, n) {
                            t = new ht(t.getX() - 3, t.getY() + 3), e = new ht(e.getX() - 3, e.getY() - 3), r = new ht(r.getX() + 3, r.getY() - 3), n = new ht(n.getX() + 3, n.getY() + 3);
                            let i = this.getColor(n, t);
                            if (0 === i) return !1;
                            let o = this.getColor(t, e);
                            return o === i && (o = this.getColor(e, r), o === i && (o = this.getColor(r, n), o === i))
                        }
                        getColor(t, e) {
                            let r = this.distancePoint(t, e),
                                n = (e.getX() - t.getX()) / r,
                                i = (e.getY() - t.getY()) / r,
                                o = 0,
                                s = t.getX(),
                                a = t.getY(),
                                A = this.image.get(t.getX(), t.getY()),
                                l = Math.ceil(r);
                            for (let t = 0; t < l; t++) s += n, a += i, this.image.get(et.round(s), et.round(a)) !== A && o++;
                            let c = o / r;
                            return c > .1 && c < .9 ? 0 : c <= .1 === A ? 1 : -1
                        }
                        getFirstDifferent(t, e, r, n) {
                            let i = t.getX() + r,
                                o = t.getY() + n;
                            for (; this.isValid(i, o) && this.image.get(i, o) === e;) i += r, o += n;
                            for (i -= r, o -= n; this.isValid(i, o) && this.image.get(i, o) === e;) i += r;
                            for (i -= r; this.isValid(i, o) && this.image.get(i, o) === e;) o += n;
                            return o -= n, new ht(i, o)
                        }
                        expandSquare(t, e, r) {
                            let n = r / (2 * e),
                                i = t[0].getX() - t[2].getX(),
                                o = t[0].getY() - t[2].getY(),
                                s = (t[0].getX() + t[2].getX()) / 2,
                                a = (t[0].getY() + t[2].getY()) / 2,
                                A = new nt(s + n * i, a + n * o),
                                l = new nt(s - n * i, a - n * o);
                            return i = t[1].getX() - t[3].getX(), o = t[1].getY() - t[3].getY(), s = (t[1].getX() + t[3].getX()) / 2, a = (t[1].getY() + t[3].getY()) / 2, [A, new nt(s + n * i, a + n * o), l, new nt(s - n * i, a - n * o)]
                        }
                        isValid(t, e) {
                            return t >= 0 && t < this.image.getWidth() && e > 0 && e < this.image.getHeight()
                        }
                        isValidPoint(t) {
                            let e = et.round(t.getX()),
                                r = et.round(t.getY());
                            return this.isValid(e, r)
                        }
                        distancePoint(t, e) {
                            return et.distance(t.getX(), t.getY(), e.getX(), e.getY())
                        }
                        distanceResultPoint(t, e) {
                            return et.distance(t.getX(), t.getY(), e.getX(), e.getY())
                        }
                        getDimension() {
                            return this.compact ? 4 * this.nbLayers + 11 : this.nbLayers <= 4 ? 4 * this.nbLayers + 15 : 4 * this.nbLayers + 2 * (C.truncDivision(this.nbLayers - 4, 8) + 1) + 15
                        }
                    }
                    class dt {
                        decode(t, e = null) {
                            let r = null,
                                n = new gt(t.getBlackMatrix()),
                                i = null,
                                o = null;
                            try {
                                let t = n.detectMirror(!1);
                                i = t.getPoints(), this.reportFoundResultPoints(e, i), o = (new tt).decode(t)
                            } catch (t) {
                                r = t
                            }
                            if (null == o) try {
                                let t = n.detectMirror(!0);
                                i = t.getPoints(), this.reportFoundResultPoints(e, i), o = (new tt).decode(t)
                            } catch (t) {
                                if (null != r) throw r;
                                throw t
                            }
                            let s = new L(o.getText(), o.getRawBytes(), o.getNumBits(), i, Q.AZTEC, h.currentTimeMillis()),
                                a = o.getByteSegments();
                            null != a && s.putMetadata(H.BYTE_SEGMENTS, a);
                            let A = o.getECLevel();
                            return null != A && s.putMetadata(H.ERROR_CORRECTION_LEVEL, A), s
                        }
                        reportFoundResultPoints(t, e) {
                            if (null != t) {
                                let r = t.get(w.NEED_RESULT_POINT_CALLBACK);
                                null != r && e.forEach(((t, e, n) => {
                                    r.foundPossibleResultPoint(t)
                                }))
                            }
                        }
                        reset() {}
                    }
                    class ut {
                        decode(t, e) {
                            try {
                                return this.doDecode(t, e)
                            } catch (r) {
                                if (e && !0 === e.get(w.TRY_HARDER) && t.isRotateSupported()) {
                                    const r = t.rotateCounterClockwise(),
                                        n = this.doDecode(r, e),
                                        i = n.getResultMetadata();
                                    let o = 270;
                                    null !== i && !0 === i.get(H.ORIENTATION) && (o += i.get(H.ORIENTATION) % 360), n.putMetadata(H.ORIENTATION, o);
                                    const s = n.getResultPoints();
                                    if (null !== s) {
                                        const t = r.getHeight();
                                        for (let e = 0; e < s.length; e++) s[e] = new nt(t - s[e].getY() - 1, s[e].getX())
                                    }
                                    return n
                                }
                                throw new M
                            }
                        }
                        reset() {}
                        doDecode(t, e) {
                            const r = t.getWidth(),
                                n = t.getHeight();
                            let i = new I(r);
                            const o = e && !0 === e.get(w.TRY_HARDER),
                                s = Math.max(1, n >> (o ? 8 : 5));
                            let a;
                            a = o ? n : 15;
                            const A = Math.trunc(n / 2);
                            for (let o = 0; o < a; o++) {
                                const a = Math.trunc((o + 1) / 2),
                                    l = A + s * (0 == (1 & o) ? a : -a);
                                if (l < 0 || l >= n) break;
                                try {
                                    i = t.getBlackRow(l, i)
                                } catch (t) {
                                    continue
                                }
                                for (let t = 0; t < 2; t++) {
                                    if (1 === t && (i.reverse(), e && !0 === e.get(w.NEED_RESULT_POINT_CALLBACK))) {
                                        const t = new Map;
                                        e.forEach(((e, r) => t.set(r, e))), t.delete(w.NEED_RESULT_POINT_CALLBACK), e = t
                                    }
                                    try {
                                        const n = this.decodeRow(l, i, e);
                                        if (1 === t) {
                                            n.putMetadata(H.ORIENTATION, 180);
                                            const t = n.getResultPoints();
                                            null !== t && (t[0] = new nt(r - t[0].getX() - 1, t[0].getY()), t[1] = new nt(r - t[1].getX() - 1, t[1].getY()))
                                        }
                                        return n
                                    } catch (t) {}
                                }
                            }
                            throw new M
                        }
                        static recordPattern(t, e, r) {
                            const n = r.length;
                            for (let t = 0; t < n; t++) r[t] = 0;
                            const i = t.getSize();
                            if (e >= i) throw new M;
                            let o = !t.get(e),
                                s = 0,
                                a = e;
                            for (; a < i;) {
                                if (t.get(a) !== o) r[s]++;
                                else {
                                    if (++s === n) break;
                                    r[s] = 1, o = !o
                                }
                                a++
                            }
                            if (s !== n && (s !== n - 1 || a !== i)) throw new M
                        }
                        static recordPatternInReverse(t, e, r) {
                            let n = r.length,
                                i = t.get(e);
                            for (; e > 0 && n >= 0;) t.get(--e) !== i && (n--, i = !i);
                            if (n >= 0) throw new M;
                            ut.recordPattern(t, e + 1, r)
                        }
                        static patternMatchVariance(t, e, r) {
                            const n = t.length;
                            let i = 0,
                                o = 0;
                            for (let r = 0; r < n; r++) i += t[r], o += e[r];
                            if (i < o) return Number.POSITIVE_INFINITY;
                            const s = i / o;
                            r *= s;
                            let a = 0;
                            for (let i = 0; i < n; i++) {
                                const n = t[i],
                                    o = e[i] * s,
                                    A = n > o ? n - o : o - n;
                                if (A > r) return Number.POSITIVE_INFINITY;
                                a += A
                            }
                            return a / i
                        }
                    }
                    class Ct extends ut {
                        static findStartPattern(t) {
                            const e = t.getSize(),
                                r = t.getNextSet(0);
                            let n = 0,
                                i = Int32Array.from([0, 0, 0, 0, 0, 0]),
                                o = r,
                                s = !1;
                            for (let a = r; a < e; a++)
                                if (t.get(a) !== s) i[n]++;
                                else {
                                    if (5 === n) {
                                        let e = Ct.MAX_AVG_VARIANCE,
                                            r = -1;
                                        for (let t = Ct.CODE_START_A; t <= Ct.CODE_START_C; t++) {
                                            const n = ut.patternMatchVariance(i, Ct.CODE_PATTERNS[t], Ct.MAX_INDIVIDUAL_VARIANCE);
                                            n < e && (e = n, r = t)
                                        }
                                        if (r >= 0 && t.isRange(Math.max(0, o - (a - o) / 2), o, !1)) return Int32Array.from([o, a, r]);
                                        o += i[0] + i[1], i = i.slice(2, i.length - 1), i[n - 1] = 0, i[n] = 0, n--
                                    } else n++;
                                    i[n] = 1, s = !s
                                } throw new M
                        }
                        static decodeCode(t, e, r) {
                            ut.recordPattern(t, r, e);
                            let n = Ct.MAX_AVG_VARIANCE,
                                i = -1;
                            for (let t = 0; t < Ct.CODE_PATTERNS.length; t++) {
                                const r = Ct.CODE_PATTERNS[t],
                                    o = this.patternMatchVariance(e, r, Ct.MAX_INDIVIDUAL_VARIANCE);
                                o < n && (n = o, i = t)
                            }
                            if (i >= 0) return i;
                            throw new M
                        }
                        decodeRow(t, e, r) {
                            const n = r && !0 === r.get(w.ASSUME_GS1),
                                i = Ct.findStartPattern(e),
                                o = i[2];
                            let s = 0;
                            const a = new Uint8Array(20);
                            let A;
                            switch (a[s++] = o, o) {
                                case Ct.CODE_START_A:
                                    A = Ct.CODE_CODE_A;
                                    break;
                                case Ct.CODE_START_B:
                                    A = Ct.CODE_CODE_B;
                                    break;
                                case Ct.CODE_START_C:
                                    A = Ct.CODE_CODE_C;
                                    break;
                                default:
                                    throw new E
                            }
                            let c = !1,
                                h = !1,
                                g = "",
                                d = i[0],
                                u = i[1];
                            const C = Int32Array.from([0, 0, 0, 0, 0, 0]);
                            let I = 0,
                                f = 0,
                                m = o,
                                p = 0,
                                S = !0,
                                R = !1,
                                D = !1;
                            for (; !c;) {
                                const t = h;
                                switch (h = !1, I = f, f = Ct.decodeCode(e, C, u), a[s++] = f, f !== Ct.CODE_STOP && (S = !0), f !== Ct.CODE_STOP && (p++, m += p * f), d = u, u += C.reduce(((t, e) => t + e), 0), f) {
                                    case Ct.CODE_START_A:
                                    case Ct.CODE_START_B:
                                    case Ct.CODE_START_C:
                                        throw new E
                                }
                                switch (A) {
                                    case Ct.CODE_CODE_A:
                                        if (f < 64) g += D === R ? String.fromCharCode(" ".charCodeAt(0) + f) : String.fromCharCode(" ".charCodeAt(0) + f + 128), D = !1;
                                        else if (f < 96) g += D === R ? String.fromCharCode(f - 64) : String.fromCharCode(f + 64), D = !1;
                                        else switch (f !== Ct.CODE_STOP && (S = !1), f) {
                                            case Ct.CODE_FNC_1:
                                                n && (0 === g.length ? g += "]C1" : g += String.fromCharCode(29));
                                                break;
                                            case Ct.CODE_FNC_2:
                                            case Ct.CODE_FNC_3:
                                                break;
                                            case Ct.CODE_FNC_4_A:
                                                !R && D ? (R = !0, D = !1) : R && D ? (R = !1, D = !1) : D = !0;
                                                break;
                                            case Ct.CODE_SHIFT:
                                                h = !0, A = Ct.CODE_CODE_B;
                                                break;
                                            case Ct.CODE_CODE_B:
                                                A = Ct.CODE_CODE_B;
                                                break;
                                            case Ct.CODE_CODE_C:
                                                A = Ct.CODE_CODE_C;
                                                break;
                                            case Ct.CODE_STOP:
                                                c = !0
                                        }
                                        break;
                                    case Ct.CODE_CODE_B:
                                        if (f < 96) g += D === R ? String.fromCharCode(" ".charCodeAt(0) + f) : String.fromCharCode(" ".charCodeAt(0) + f + 128), D = !1;
                                        else switch (f !== Ct.CODE_STOP && (S = !1), f) {
                                            case Ct.CODE_FNC_1:
                                                n && (0 === g.length ? g += "]C1" : g += String.fromCharCode(29));
                                                break;
                                            case Ct.CODE_FNC_2:
                                            case Ct.CODE_FNC_3:
                                                break;
                                            case Ct.CODE_FNC_4_B:
                                                !R && D ? (R = !0, D = !1) : R && D ? (R = !1, D = !1) : D = !0;
                                                break;
                                            case Ct.CODE_SHIFT:
                                                h = !0, A = Ct.CODE_CODE_A;
                                                break;
                                            case Ct.CODE_CODE_A:
                                                A = Ct.CODE_CODE_A;
                                                break;
                                            case Ct.CODE_CODE_C:
                                                A = Ct.CODE_CODE_C;
                                                break;
                                            case Ct.CODE_STOP:
                                                c = !0
                                        }
                                        break;
                                    case Ct.CODE_CODE_C:
                                        if (f < 100) f < 10 && (g += "0"), g += f;
                                        else switch (f !== Ct.CODE_STOP && (S = !1), f) {
                                            case Ct.CODE_FNC_1:
                                                n && (0 === g.length ? g += "]C1" : g += String.fromCharCode(29));
                                                break;
                                            case Ct.CODE_CODE_A:
                                                A = Ct.CODE_CODE_A;
                                                break;
                                            case Ct.CODE_CODE_B:
                                                A = Ct.CODE_CODE_B;
                                                break;
                                            case Ct.CODE_STOP:
                                                c = !0
                                        }
                                }
                                t && (A = A === Ct.CODE_CODE_A ? Ct.CODE_CODE_B : Ct.CODE_CODE_A)
                            }
                            const B = u - d;
                            if (u = e.getNextUnset(u), !e.isRange(u, Math.min(e.getSize(), u + (u - d) / 2), !1)) throw new M;
                            if (m -= p * I, m % 103 !== I) throw new l;
                            const T = g.length;
                            if (0 === T) throw new M;
                            T > 0 && S && (g = A === Ct.CODE_CODE_C ? g.substring(0, T - 2) : g.substring(0, T - 1));
                            const N = (i[1] + i[0]) / 2,
                                y = d + B / 2,
                                _ = a.length,
                                O = new Uint8Array(_);
                            for (let t = 0; t < _; t++) O[t] = a[t];
                            const b = [new nt(N, t), new nt(y, t)];
                            return new L(g, O, 0, b, Q.CODE_128, (new Date).getTime())
                        }
                    }
                    Ct.CODE_PATTERNS = [Int32Array.from([2, 1, 2, 2, 2, 2]), Int32Array.from([2, 2, 2, 1, 2, 2]), Int32Array.from([2, 2, 2, 2, 2, 1]), Int32Array.from([1, 2, 1, 2, 2, 3]), Int32Array.from([1, 2, 1, 3, 2, 2]), Int32Array.from([1, 3, 1, 2, 2, 2]), Int32Array.from([1, 2, 2, 2, 1, 3]), Int32Array.from([1, 2, 2, 3, 1, 2]), Int32Array.from([1, 3, 2, 2, 1, 2]), Int32Array.from([2, 2, 1, 2, 1, 3]), Int32Array.from([2, 2, 1, 3, 1, 2]), Int32Array.from([2, 3, 1, 2, 1, 2]), Int32Array.from([1, 1, 2, 2, 3, 2]), Int32Array.from([1, 2, 2, 1, 3, 2]), Int32Array.from([1, 2, 2, 2, 3, 1]), Int32Array.from([1, 1, 3, 2, 2, 2]), Int32Array.from([1, 2, 3, 1, 2, 2]), Int32Array.from([1, 2, 3, 2, 2, 1]), Int32Array.from([2, 2, 3, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 3, 2]), Int32Array.from([2, 2, 1, 2, 3, 1]), Int32Array.from([2, 1, 3, 2, 1, 2]), Int32Array.from([2, 2, 3, 1, 1, 2]), Int32Array.from([3, 1, 2, 1, 3, 1]), Int32Array.from([3, 1, 1, 2, 2, 2]), Int32Array.from([3, 2, 1, 1, 2, 2]), Int32Array.from([3, 2, 1, 2, 2, 1]), Int32Array.from([3, 1, 2, 2, 1, 2]), Int32Array.from([3, 2, 2, 1, 1, 2]), Int32Array.from([3, 2, 2, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 2, 3]), Int32Array.from([2, 1, 2, 3, 2, 1]), Int32Array.from([2, 3, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 3, 2, 3]), Int32Array.from([1, 3, 1, 1, 2, 3]), Int32Array.from([1, 3, 1, 3, 2, 1]), Int32Array.from([1, 1, 2, 3, 1, 3]), Int32Array.from([1, 3, 2, 1, 1, 3]), Int32Array.from([1, 3, 2, 3, 1, 1]), Int32Array.from([2, 1, 1, 3, 1, 3]), Int32Array.from([2, 3, 1, 1, 1, 3]), Int32Array.from([2, 3, 1, 3, 1, 1]), Int32Array.from([1, 1, 2, 1, 3, 3]), Int32Array.from([1, 1, 2, 3, 3, 1]), Int32Array.from([1, 3, 2, 1, 3, 1]), Int32Array.from([1, 1, 3, 1, 2, 3]), Int32Array.from([1, 1, 3, 3, 2, 1]), Int32Array.from([1, 3, 3, 1, 2, 1]), Int32Array.from([3, 1, 3, 1, 2, 1]), Int32Array.from([2, 1, 1, 3, 3, 1]), Int32Array.from([2, 3, 1, 1, 3, 1]), Int32Array.from([2, 1, 3, 1, 1, 3]), Int32Array.from([2, 1, 3, 3, 1, 1]), Int32Array.from([2, 1, 3, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 2, 3]), Int32Array.from([3, 1, 1, 3, 2, 1]), Int32Array.from([3, 3, 1, 1, 2, 1]), Int32Array.from([3, 1, 2, 1, 1, 3]), Int32Array.from([3, 1, 2, 3, 1, 1]), Int32Array.from([3, 3, 2, 1, 1, 1]), Int32Array.from([3, 1, 4, 1, 1, 1]), Int32Array.from([2, 2, 1, 4, 1, 1]), Int32Array.from([4, 3, 1, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 2, 4]), Int32Array.from([1, 1, 1, 4, 2, 2]), Int32Array.from([1, 2, 1, 1, 2, 4]), Int32Array.from([1, 2, 1, 4, 2, 1]), Int32Array.from([1, 4, 1, 1, 2, 2]), Int32Array.from([1, 4, 1, 2, 2, 1]), Int32Array.from([1, 1, 2, 2, 1, 4]), Int32Array.from([1, 1, 2, 4, 1, 2]), Int32Array.from([1, 2, 2, 1, 1, 4]), Int32Array.from([1, 2, 2, 4, 1, 1]), Int32Array.from([1, 4, 2, 1, 1, 2]), Int32Array.from([1, 4, 2, 2, 1, 1]), Int32Array.from([2, 4, 1, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 1, 4]), Int32Array.from([4, 1, 3, 1, 1, 1]), Int32Array.from([2, 4, 1, 1, 1, 2]), Int32Array.from([1, 3, 4, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 4, 2]), Int32Array.from([1, 2, 1, 1, 4, 2]), Int32Array.from([1, 2, 1, 2, 4, 1]), Int32Array.from([1, 1, 4, 2, 1, 2]), Int32Array.from([1, 2, 4, 1, 1, 2]), Int32Array.from([1, 2, 4, 2, 1, 1]), Int32Array.from([4, 1, 1, 2, 1, 2]), Int32Array.from([4, 2, 1, 1, 1, 2]), Int32Array.from([4, 2, 1, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 4, 1]), Int32Array.from([2, 1, 4, 1, 2, 1]), Int32Array.from([4, 1, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 1, 4, 3]), Int32Array.from([1, 1, 1, 3, 4, 1]), Int32Array.from([1, 3, 1, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 1, 3]), Int32Array.from([1, 1, 4, 3, 1, 1]), Int32Array.from([4, 1, 1, 1, 1, 3]), Int32Array.from([4, 1, 1, 3, 1, 1]), Int32Array.from([1, 1, 3, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 4, 1]), Int32Array.from([4, 1, 1, 1, 3, 1]), Int32Array.from([2, 1, 1, 4, 1, 2]), Int32Array.from([2, 1, 1, 2, 1, 4]), Int32Array.from([2, 1, 1, 2, 3, 2]), Int32Array.from([2, 3, 3, 1, 1, 1, 2])], Ct.MAX_AVG_VARIANCE = .25, Ct.MAX_INDIVIDUAL_VARIANCE = .7, Ct.CODE_SHIFT = 98, Ct.CODE_CODE_C = 99, Ct.CODE_CODE_B = 100, Ct.CODE_CODE_A = 101, Ct.CODE_FNC_1 = 102, Ct.CODE_FNC_2 = 97, Ct.CODE_FNC_3 = 96, Ct.CODE_FNC_4_A = 101, Ct.CODE_FNC_4_B = 100, Ct.CODE_START_A = 103, Ct.CODE_START_B = 104, Ct.CODE_START_C = 105, Ct.CODE_STOP = 106;
                    class It extends ut {
                        constructor(t = !1, e = !1) {
                            super(), this.usingCheckDigit = t, this.extendedMode = e, this.decodeRowResult = "", this.counters = new Int32Array(9)
                        }
                        decodeRow(t, e, r) {
                            let n = this.counters;
                            n.fill(0), this.decodeRowResult = "";
                            let i, o, s = It.findAsteriskPattern(e, n),
                                a = e.getNextSet(s[1]),
                                A = e.getSize();
                            do {
                                It.recordPattern(e, a, n);
                                let t = It.toNarrowWidePattern(n);
                                if (t < 0) throw new M;
                                i = It.patternToChar(t), this.decodeRowResult += i, o = a;
                                for (let t of n) a += t;
                                a = e.getNextSet(a)
                            } while ("*" !== i);
                            this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
                            let c, h = 0;
                            for (let t of n) h += t;
                            if (a !== A && 2 * (a - o - h) < h) throw new M;
                            if (this.usingCheckDigit) {
                                let t = this.decodeRowResult.length - 1,
                                    e = 0;
                                for (let r = 0; r < t; r++) e += It.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(r));
                                if (this.decodeRowResult.charAt(t) !== It.ALPHABET_STRING.charAt(e % 43)) throw new l;
                                this.decodeRowResult = this.decodeRowResult.substring(0, t)
                            }
                            if (0 === this.decodeRowResult.length) throw new M;
                            c = this.extendedMode ? It.decodeExtended(this.decodeRowResult) : this.decodeRowResult;
                            let g = (s[1] + s[0]) / 2,
                                d = o + h / 2;
                            return new L(c, null, 0, [new nt(g, t), new nt(d, t)], Q.CODE_39, (new Date).getTime())
                        }
                        static findAsteriskPattern(t, e) {
                            let r = t.getSize(),
                                n = t.getNextSet(0),
                                i = 0,
                                o = n,
                                s = !1,
                                a = e.length;
                            for (let A = n; A < r; A++)
                                if (t.get(A) !== s) e[i]++;
                                else {
                                    if (i === a - 1) {
                                        if (this.toNarrowWidePattern(e) === It.ASTERISK_ENCODING && t.isRange(Math.max(0, o - Math.floor((A - o) / 2)), o, !1)) return [o, A];
                                        o += e[0] + e[1], e.copyWithin(0, 2, 2 + i - 1), e[i - 1] = 0, e[i] = 0, i--
                                    } else i++;
                                    e[i] = 1, s = !s
                                } throw new M
                        }
                        static toNarrowWidePattern(t) {
                            let e, r = t.length,
                                n = 0;
                            do {
                                let i = 2147483647;
                                for (let e of t) e < i && e > n && (i = e);
                                n = i, e = 0;
                                let o = 0,
                                    s = 0;
                                for (let i = 0; i < r; i++) {
                                    let a = t[i];
                                    a > n && (s |= 1 << r - 1 - i, e++, o += a)
                                }
                                if (3 === e) {
                                    for (let i = 0; i < r && e > 0; i++) {
                                        let r = t[i];
                                        if (r > n && (e--, 2 * r >= o)) return -1
                                    }
                                    return s
                                }
                            } while (e > 3);
                            return -1
                        }
                        static patternToChar(t) {
                            for (let e = 0; e < It.CHARACTER_ENCODINGS.length; e++)
                                if (It.CHARACTER_ENCODINGS[e] === t) return It.ALPHABET_STRING.charAt(e);
                            if (t === It.ASTERISK_ENCODING) return "*";
                            throw new M
                        }
                        static decodeExtended(t) {
                            let e = t.length,
                                r = "";
                            for (let n = 0; n < e; n++) {
                                let e = t.charAt(n);
                                if ("+" === e || "$" === e || "%" === e || "/" === e) {
                                    let i = t.charAt(n + 1),
                                        o = "\0";
                                    switch (e) {
                                        case "+":
                                            if (!(i >= "A" && i <= "Z")) throw new E;
                                            o = String.fromCharCode(i.charCodeAt(0) + 32);
                                            break;
                                        case "$":
                                            if (!(i >= "A" && i <= "Z")) throw new E;
                                            o = String.fromCharCode(i.charCodeAt(0) - 64);
                                            break;
                                        case "%":
                                            if (i >= "A" && i <= "E") o = String.fromCharCode(i.charCodeAt(0) - 38);
                                            else if (i >= "F" && i <= "J") o = String.fromCharCode(i.charCodeAt(0) - 11);
                                            else if (i >= "K" && i <= "O") o = String.fromCharCode(i.charCodeAt(0) + 16);
                                            else if (i >= "P" && i <= "T") o = String.fromCharCode(i.charCodeAt(0) + 43);
                                            else if ("U" === i) o = "\0";
                                            else if ("V" === i) o = "@";
                                            else if ("W" === i) o = "`";
                                            else {
                                                if ("X" !== i && "Y" !== i && "Z" !== i) throw new E;
                                                o = ""
                                            }
                                            break;
                                        case "/":
                                            if (i >= "A" && i <= "O") o = String.fromCharCode(i.charCodeAt(0) - 32);
                                            else {
                                                if ("Z" !== i) throw new E;
                                                o = ":"
                                            }
                                    }
                                    r += o, n++
                                } else r += e
                            }
                            return r
                        }
                    }
                    It.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%", It.CHARACTER_ENCODINGS = [52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 168, 162, 138, 42], It.ASTERISK_ENCODING = 148;
                    class ft extends ut {
                        constructor() {
                            super(...arguments), this.narrowLineWidth = -1
                        }
                        decodeRow(t, e, r) {
                            let n = this.decodeStart(e),
                                i = this.decodeEnd(e),
                                o = new D;
                            ft.decodeMiddle(e, n[1], i[0], o);
                            let s = o.toString(),
                                a = null;
                            null != r && (a = r.get(w.ALLOWED_LENGTHS)), null == a && (a = ft.DEFAULT_ALLOWED_LENGTHS);
                            let A = s.length,
                                l = !1,
                                c = 0;
                            for (let t of a) {
                                if (A === t) {
                                    l = !0;
                                    break
                                }
                                t > c && (c = t)
                            }
                            if (!l && A > c && (l = !0), !l) throw new E;
                            const h = [new nt(n[1], t), new nt(i[0], t)];
                            return new L(s, null, 0, h, Q.ITF, (new Date).getTime())
                        }
                        static decodeMiddle(t, e, r, n) {
                            let i = new Int32Array(10),
                                o = new Int32Array(5),
                                s = new Int32Array(5);
                            for (i.fill(0), o.fill(0), s.fill(0); e < r;) {
                                ut.recordPattern(t, e, i);
                                for (let t = 0; t < 5; t++) {
                                    let e = 2 * t;
                                    o[t] = i[e], s[t] = i[e + 1]
                                }
                                let r = ft.decodeDigit(o);
                                n.append(r.toString()), r = this.decodeDigit(s), n.append(r.toString()), i.forEach((function(t) {
                                    e += t
                                }))
                            }
                        }
                        decodeStart(t) {
                            let e = ft.skipWhiteSpace(t),
                                r = ft.findGuardPattern(t, e, ft.START_PATTERN);
                            return this.narrowLineWidth = (r[1] - r[0]) / 4, this.validateQuietZone(t, r[0]), r
                        }
                        validateQuietZone(t, e) {
                            let r = 10 * this.narrowLineWidth;
                            r = r < e ? r : e;
                            for (let n = e - 1; r > 0 && n >= 0 && !t.get(n); n--) r--;
                            if (0 !== r) throw new M
                        }
                        static skipWhiteSpace(t) {
                            const e = t.getSize(),
                                r = t.getNextSet(0);
                            if (r === e) throw new M;
                            return r
                        }
                        decodeEnd(t) {
                            t.reverse();
                            try {
                                let e, r = ft.skipWhiteSpace(t);
                                try {
                                    e = ft.findGuardPattern(t, r, ft.END_PATTERN_REVERSED[0])
                                } catch (n) {
                                    n instanceof M && (e = ft.findGuardPattern(t, r, ft.END_PATTERN_REVERSED[1]))
                                }
                                this.validateQuietZone(t, e[0]);
                                let n = e[0];
                                return e[0] = t.getSize() - e[1], e[1] = t.getSize() - n, e
                            } finally {
                                t.reverse()
                            }
                        }
                        static findGuardPattern(t, e, r) {
                            let n = r.length,
                                i = new Int32Array(n),
                                o = t.getSize(),
                                s = !1,
                                a = 0,
                                A = e;
                            i.fill(0);
                            for (let l = e; l < o; l++)
                                if (t.get(l) !== s) i[a]++;
                                else {
                                    if (a === n - 1) {
                                        if (ut.patternMatchVariance(i, r, ft.MAX_INDIVIDUAL_VARIANCE) < ft.MAX_AVG_VARIANCE) return [A, l];
                                        A += i[0] + i[1], h.arraycopy(i, 2, i, 0, a - 1), i[a - 1] = 0, i[a] = 0, a--
                                    } else a++;
                                    i[a] = 1, s = !s
                                } throw new M
                        }
                        static decodeDigit(t) {
                            let e = ft.MAX_AVG_VARIANCE,
                                r = -1,
                                n = ft.PATTERNS.length;
                            for (let i = 0; i < n; i++) {
                                let n = ft.PATTERNS[i],
                                    o = ut.patternMatchVariance(t, n, ft.MAX_INDIVIDUAL_VARIANCE);
                                o < e ? (e = o, r = i) : o === e && (r = -1)
                            }
                            if (r >= 0) return r % 10;
                            throw new M
                        }
                    }
                    ft.PATTERNS = [Int32Array.from([1, 1, 2, 2, 1]), Int32Array.from([2, 1, 1, 1, 2]), Int32Array.from([1, 2, 1, 1, 2]), Int32Array.from([2, 2, 1, 1, 1]), Int32Array.from([1, 1, 2, 1, 2]), Int32Array.from([2, 1, 2, 1, 1]), Int32Array.from([1, 2, 2, 1, 1]), Int32Array.from([1, 1, 1, 2, 2]), Int32Array.from([2, 1, 1, 2, 1]), Int32Array.from([1, 2, 1, 2, 1]), Int32Array.from([1, 1, 3, 3, 1]), Int32Array.from([3, 1, 1, 1, 3]), Int32Array.from([1, 3, 1, 1, 3]), Int32Array.from([3, 3, 1, 1, 1]), Int32Array.from([1, 1, 3, 1, 3]), Int32Array.from([3, 1, 3, 1, 1]), Int32Array.from([1, 3, 3, 1, 1]), Int32Array.from([1, 1, 1, 3, 3]), Int32Array.from([3, 1, 1, 3, 1]), Int32Array.from([1, 3, 1, 3, 1])], ft.MAX_AVG_VARIANCE = .38, ft.MAX_INDIVIDUAL_VARIANCE = .5, ft.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14], ft.START_PATTERN = Int32Array.from([1, 1, 1, 1]), ft.END_PATTERN_REVERSED = [Int32Array.from([1, 1, 2]), Int32Array.from([1, 1, 3])];
                    class wt extends ut {
                        constructor() {
                            super(...arguments), this.decodeRowStringBuffer = ""
                        }
                        static findStartGuardPattern(t) {
                            let e, r = !1,
                                n = 0,
                                i = Int32Array.from([0, 0, 0]);
                            for (; !r;) {
                                i = Int32Array.from([0, 0, 0]), e = wt.findGuardPattern(t, n, !1, this.START_END_PATTERN, i);
                                let o = e[0];
                                n = e[1];
                                let s = o - (n - o);
                                s >= 0 && (r = t.isRange(s, o, !1))
                            }
                            return e
                        }
                        static checkChecksum(t) {
                            return wt.checkStandardUPCEANChecksum(t)
                        }
                        static checkStandardUPCEANChecksum(t) {
                            let e = t.length;
                            if (0 === e) return !1;
                            let r = parseInt(t.charAt(e - 1), 10);
                            return wt.getStandardUPCEANChecksum(t.substring(0, e - 1)) === r
                        }
                        static getStandardUPCEANChecksum(t) {
                            let e = t.length,
                                r = 0;
                            for (let n = e - 1; n >= 0; n -= 2) {
                                let e = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                                if (e < 0 || e > 9) throw new E;
                                r += e
                            }
                            r *= 3;
                            for (let n = e - 2; n >= 0; n -= 2) {
                                let e = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                                if (e < 0 || e > 9) throw new E;
                                r += e
                            }
                            return (1e3 - r) % 10
                        }
                        static decodeEnd(t, e) {
                            return wt.findGuardPattern(t, e, !1, wt.START_END_PATTERN, new Int32Array(wt.START_END_PATTERN.length).fill(0))
                        }
                        static findGuardPatternWithoutCounters(t, e, r, n) {
                            return this.findGuardPattern(t, e, r, n, new Int32Array(n.length))
                        }
                        static findGuardPattern(t, e, r, n, i) {
                            let o = t.getSize(),
                                s = 0,
                                a = e = r ? t.getNextUnset(e) : t.getNextSet(e),
                                A = n.length,
                                l = r;
                            for (let r = e; r < o; r++)
                                if (t.get(r) !== l) i[s]++;
                                else {
                                    if (s === A - 1) {
                                        if (ut.patternMatchVariance(i, n, wt.MAX_INDIVIDUAL_VARIANCE) < wt.MAX_AVG_VARIANCE) return Int32Array.from([a, r]);
                                        a += i[0] + i[1];
                                        let t = i.slice(2, i.length - 1);
                                        for (let e = 0; e < s - 1; e++) i[e] = t[e];
                                        i[s - 1] = 0, i[s] = 0, s--
                                    } else s++;
                                    i[s] = 1, l = !l
                                } throw new M
                        }
                        static decodeDigit(t, e, r, n) {
                            this.recordPattern(t, r, e);
                            let i = this.MAX_AVG_VARIANCE,
                                o = -1,
                                s = n.length;
                            for (let t = 0; t < s; t++) {
                                let r = n[t],
                                    s = ut.patternMatchVariance(e, r, wt.MAX_INDIVIDUAL_VARIANCE);
                                s < i && (i = s, o = t)
                            }
                            if (o >= 0) return o;
                            throw new M
                        }
                    }
                    wt.MAX_AVG_VARIANCE = .48, wt.MAX_INDIVIDUAL_VARIANCE = .7, wt.START_END_PATTERN = Int32Array.from([1, 1, 1]), wt.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1]), wt.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), wt.L_PATTERNS = [Int32Array.from([3, 2, 1, 1]), Int32Array.from([2, 2, 2, 1]), Int32Array.from([2, 1, 2, 2]), Int32Array.from([1, 4, 1, 1]), Int32Array.from([1, 1, 3, 2]), Int32Array.from([1, 2, 3, 1]), Int32Array.from([1, 1, 1, 4]), Int32Array.from([1, 3, 1, 2]), Int32Array.from([1, 2, 1, 3]), Int32Array.from([3, 1, 1, 2])];
                    class Et {
                        constructor() {
                            this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5], this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = ""
                        }
                        decodeRow(t, e, r) {
                            let n = this.decodeRowStringBuffer,
                                i = this.decodeMiddle(e, r, n),
                                o = n.toString(),
                                s = Et.parseExtensionString(o),
                                a = [new nt((r[0] + r[1]) / 2, t), new nt(i, t)],
                                A = new L(o, null, 0, a, Q.UPC_EAN_EXTENSION, (new Date).getTime());
                            return null != s && A.putAllMetadata(s), A
                        }
                        decodeMiddle(t, e, r) {
                            let n = this.decodeMiddleCounters;
                            n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                            let i = t.getSize(),
                                o = e[1],
                                s = 0;
                            for (let e = 0; e < 5 && o < i; e++) {
                                let i = wt.decodeDigit(t, n, o, wt.L_AND_G_PATTERNS);
                                r += String.fromCharCode("0".charCodeAt(0) + i % 10);
                                for (let t of n) o += t;
                                i >= 10 && (s |= 1 << 4 - e), 4 !== e && (o = t.getNextSet(o), o = t.getNextUnset(o))
                            }
                            if (5 !== r.length) throw new M;
                            let a = this.determineCheckDigit(s);
                            if (Et.extensionChecksum(r.toString()) !== a) throw new M;
                            return o
                        }
                        static extensionChecksum(t) {
                            let e = t.length,
                                r = 0;
                            for (let n = e - 2; n >= 0; n -= 2) r += t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                            r *= 3;
                            for (let n = e - 1; n >= 0; n -= 2) r += t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                            return r *= 3, r % 10
                        }
                        determineCheckDigit(t) {
                            for (let e = 0; e < 10; e++)
                                if (t === this.CHECK_DIGIT_ENCODINGS[e]) return e;
                            throw new M
                        }
                        static parseExtensionString(t) {
                            if (5 !== t.length) return null;
                            let e = Et.parseExtension5String(t);
                            return null == e ? null : new Map([
                                [H.SUGGESTED_PRICE, e]
                            ])
                        }
                        static parseExtension5String(t) {
                            let e;
                            switch (t.charAt(0)) {
                                case "0":
                                    e = "£";
                                    break;
                                case "5":
                                    e = "$";
                                    break;
                                case "9":
                                    switch (t) {
                                        case "90000":
                                            return null;
                                        case "99991":
                                            return "0.00";
                                        case "99990":
                                            return "Used"
                                    }
                                    e = "";
                                    break;
                                default:
                                    e = ""
                            }
                            let r = parseInt(t.substring(1)),
                                n = r % 100;
                            return e + (r / 100).toString() + "." + (n < 10 ? "0" + n : n.toString())
                        }
                    }
                    class mt {
                        constructor() {
                            this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = ""
                        }
                        decodeRow(t, e, r) {
                            let n = this.decodeRowStringBuffer,
                                i = this.decodeMiddle(e, r, n),
                                o = n.toString(),
                                s = mt.parseExtensionString(o),
                                a = [new nt((r[0] + r[1]) / 2, t), new nt(i, t)],
                                A = new L(o, null, 0, a, Q.UPC_EAN_EXTENSION, (new Date).getTime());
                            return null != s && A.putAllMetadata(s), A
                        }
                        decodeMiddle(t, e, r) {
                            let n = this.decodeMiddleCounters;
                            n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                            let i = t.getSize(),
                                o = e[1],
                                s = 0;
                            for (let e = 0; e < 2 && o < i; e++) {
                                let i = wt.decodeDigit(t, n, o, wt.L_AND_G_PATTERNS);
                                r += String.fromCharCode("0".charCodeAt(0) + i % 10);
                                for (let t of n) o += t;
                                i >= 10 && (s |= 1 << 1 - e), 1 !== e && (o = t.getNextSet(o), o = t.getNextUnset(o))
                            }
                            if (2 !== r.length) throw new M;
                            if (parseInt(r.toString()) % 4 !== s) throw new M;
                            return o
                        }
                        static parseExtensionString(t) {
                            return 2 !== t.length ? null : new Map([
                                [H.ISSUE_NUMBER, parseInt(t)]
                            ])
                        }
                    }
                    class pt {
                        static decodeRow(t, e, r) {
                            let n = wt.findGuardPattern(e, r, !1, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
                            try {
                                return (new Et).decodeRow(t, e, n)
                            } catch (r) {
                                return (new mt).decodeRow(t, e, n)
                            }
                        }
                    }
                    pt.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]);
                    class St extends wt {
                        constructor() {
                            super(), this.decodeRowStringBuffer = "", St.L_AND_G_PATTERNS = St.L_PATTERNS.map((t => Int32Array.from(t)));
                            for (let t = 10; t < 20; t++) {
                                let e = St.L_PATTERNS[t - 10],
                                    r = new Int32Array(e.length);
                                for (let t = 0; t < e.length; t++) r[t] = e[e.length - t - 1];
                                St.L_AND_G_PATTERNS[t] = r
                            }
                        }
                        decodeRow(t, e, r) {
                            let n = St.findStartGuardPattern(e),
                                i = null == r ? null : r.get(w.NEED_RESULT_POINT_CALLBACK);
                            if (null != i) {
                                const e = new nt((n[0] + n[1]) / 2, t);
                                i.foundPossibleResultPoint(e)
                            }
                            let o = this.decodeMiddle(e, n, this.decodeRowStringBuffer),
                                s = o.rowOffset,
                                a = o.resultString;
                            if (null != i) {
                                const e = new nt(s, t);
                                i.foundPossibleResultPoint(e)
                            }
                            let A = St.decodeEnd(e, s);
                            if (null != i) {
                                const e = new nt((A[0] + A[1]) / 2, t);
                                i.foundPossibleResultPoint(e)
                            }
                            let c = A[1],
                                h = c + (c - A[0]);
                            if (h >= e.getSize() || !e.isRange(c, h, !1)) throw new M;
                            let g = a.toString();
                            if (g.length < 8) throw new E;
                            if (!St.checkChecksum(g)) throw new l;
                            let d = (n[1] + n[0]) / 2,
                                u = (A[1] + A[0]) / 2,
                                C = this.getBarcodeFormat(),
                                I = [new nt(d, t), new nt(u, t)],
                                f = new L(g, null, 0, I, C, (new Date).getTime()),
                                m = 0;
                            try {
                                let r = pt.decodeRow(t, e, A[1]);
                                f.putMetadata(H.UPC_EAN_EXTENSION, r.getText()), f.putAllMetadata(r.getResultMetadata()), f.addResultPoints(r.getResultPoints()), m = r.getText().length
                            } catch (t) {}
                            let p = null == r ? null : r.get(w.ALLOWED_EAN_EXTENSIONS);
                            if (null != p) {
                                let t = !1;
                                for (let e in p)
                                    if (m.toString() === e) {
                                        t = !0;
                                        break
                                    } if (!t) throw new M
                            }
                            return C === Q.EAN_13 || Q.UPC_A, f
                        }
                        static checkChecksum(t) {
                            return St.checkStandardUPCEANChecksum(t)
                        }
                        static checkStandardUPCEANChecksum(t) {
                            let e = t.length;
                            if (0 === e) return !1;
                            let r = parseInt(t.charAt(e - 1), 10);
                            return St.getStandardUPCEANChecksum(t.substring(0, e - 1)) === r
                        }
                        static getStandardUPCEANChecksum(t) {
                            let e = t.length,
                                r = 0;
                            for (let n = e - 1; n >= 0; n -= 2) {
                                let e = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                                if (e < 0 || e > 9) throw new E;
                                r += e
                            }
                            r *= 3;
                            for (let n = e - 2; n >= 0; n -= 2) {
                                let e = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                                if (e < 0 || e > 9) throw new E;
                                r += e
                            }
                            return (1e3 - r) % 10
                        }
                        static decodeEnd(t, e) {
                            return St.findGuardPattern(t, e, !1, St.START_END_PATTERN, new Int32Array(St.START_END_PATTERN.length).fill(0))
                        }
                    }
                    class Rt extends St {
                        constructor() {
                            super(), this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])
                        }
                        decodeMiddle(t, e, r) {
                            let n = this.decodeMiddleCounters;
                            n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                            let i = t.getSize(),
                                o = e[1],
                                s = 0;
                            for (let e = 0; e < 6 && o < i; e++) {
                                let i = St.decodeDigit(t, n, o, St.L_AND_G_PATTERNS);
                                r += String.fromCharCode("0".charCodeAt(0) + i % 10);
                                for (let t of n) o += t;
                                i >= 10 && (s |= 1 << 5 - e)
                            }
                            r = Rt.determineFirstDigit(r, s), o = St.findGuardPattern(t, o, !0, St.MIDDLE_PATTERN, new Int32Array(St.MIDDLE_PATTERN.length).fill(0))[1];
                            for (let e = 0; e < 6 && o < i; e++) {
                                let e = St.decodeDigit(t, n, o, St.L_PATTERNS);
                                r += String.fromCharCode("0".charCodeAt(0) + e);
                                for (let t of n) o += t
                            }
                            return {
                                rowOffset: o,
                                resultString: r
                            }
                        }
                        getBarcodeFormat() {
                            return Q.EAN_13
                        }
                        static determineFirstDigit(t, e) {
                            for (let r = 0; r < 10; r++)
                                if (e === this.FIRST_DIGIT_ENCODINGS[r]) return String.fromCharCode("0".charCodeAt(0) + r) + t;
                            throw new M
                        }
                    }
                    Rt.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26];
                    class Dt extends St {
                        constructor() {
                            super(), this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])
                        }
                        decodeMiddle(t, e, r) {
                            const n = this.decodeMiddleCounters;
                            n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                            let i = t.getSize(),
                                o = e[1];
                            for (let e = 0; e < 4 && o < i; e++) {
                                let e = St.decodeDigit(t, n, o, St.L_PATTERNS);
                                r += String.fromCharCode("0".charCodeAt(0) + e);
                                for (let t of n) o += t
                            }
                            o = St.findGuardPattern(t, o, !0, St.MIDDLE_PATTERN, new Int32Array(St.MIDDLE_PATTERN.length).fill(0))[1];
                            for (let e = 0; e < 4 && o < i; e++) {
                                let e = St.decodeDigit(t, n, o, St.L_PATTERNS);
                                r += String.fromCharCode("0".charCodeAt(0) + e);
                                for (let t of n) o += t
                            }
                            return {
                                rowOffset: o,
                                resultString: r
                            }
                        }
                        getBarcodeFormat() {
                            return Q.EAN_8
                        }
                    }
                    class Bt extends St {
                        constructor() {
                            super(...arguments), this.ean13Reader = new Rt
                        }
                        getBarcodeFormat() {
                            return Q.UPC_A
                        }
                        decode(t, e) {
                            return this.maybeReturnResult(this.ean13Reader.decode(t))
                        }
                        decodeRow(t, e, r) {
                            return this.maybeReturnResult(this.ean13Reader.decodeRow(t, e, r))
                        }
                        decodeMiddle(t, e, r) {
                            return this.ean13Reader.decodeMiddle(t, e, r)
                        }
                        maybeReturnResult(t) {
                            let e = t.getText();
                            if ("0" === e.charAt(0)) {
                                let r = new L(e.substring(1), null, null, t.getResultPoints(), Q.UPC_A);
                                return null != t.getResultMetadata() && r.putAllMetadata(t.getResultMetadata()), r
                            }
                            throw new M
                        }
                        reset() {
                            this.ean13Reader.reset()
                        }
                    }
                    class Mt extends St {
                        constructor() {
                            super(), this.decodeMiddleCounters = new Int32Array(4)
                        }
                        decodeMiddle(t, e, r) {
                            const n = this.decodeMiddleCounters.map((t => t));
                            n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                            const i = t.getSize();
                            let o = e[1],
                                s = 0;
                            for (let e = 0; e < 6 && o < i; e++) {
                                const i = Mt.decodeDigit(t, n, o, Mt.L_AND_G_PATTERNS);
                                r += String.fromCharCode("0".charCodeAt(0) + i % 10);
                                for (let t of n) o += t;
                                i >= 10 && (s |= 1 << 5 - e)
                            }
                            return Mt.determineNumSysAndCheckDigit(new D(r), s), o
                        }
                        decodeEnd(t, e) {
                            return Mt.findGuardPatternWithoutCounters(t, e, !0, Mt.MIDDLE_END_PATTERN)
                        }
                        checkChecksum(t) {
                            return St.checkChecksum(Mt.convertUPCEtoUPCA(t))
                        }
                        static determineNumSysAndCheckDigit(t, e) {
                            for (let r = 0; r <= 1; r++)
                                for (let n = 0; n < 10; n++)
                                    if (e === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[r][n]) return t.insert(0, "0" + r), void t.append("0" + n);
                            throw M.getNotFoundInstance()
                        }
                        getBarcodeFormat() {
                            return Q.UPC_E
                        }
                        static convertUPCEtoUPCA(t) {
                            const e = t.slice(1, 7).split("").map((t => t.charCodeAt(0))),
                                r = new D;
                            r.append(t.charAt(0));
                            let n = e[5];
                            switch (n) {
                                case 0:
                                case 1:
                                case 2:
                                    r.appendChars(e, 0, 2), r.append(n), r.append("0000"), r.appendChars(e, 2, 3);
                                    break;
                                case 3:
                                    r.appendChars(e, 0, 3), r.append("00000"), r.appendChars(e, 3, 2);
                                    break;
                                case 4:
                                    r.appendChars(e, 0, 4), r.append("00000"), r.append(e[4]);
                                    break;
                                default:
                                    r.appendChars(e, 0, 5), r.append("0000"), r.append(n)
                            }
                            return t.length >= 8 && r.append(t.charAt(7)), r.toString()
                        }
                    }
                    Mt.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), Mt.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]), Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 1])];
                    class Tt extends ut {
                        constructor(t) {
                            super();
                            let e = null == t ? null : t.get(w.POSSIBLE_FORMATS),
                                r = [];
                            null != e && (e.indexOf(Q.EAN_13) > -1 ? r.push(new Rt) : e.indexOf(Q.UPC_A) > -1 && r.push(new Bt), e.indexOf(Q.EAN_8) > -1 && r.push(new Dt), e.indexOf(Q.UPC_E) > -1 && r.push(new Mt)), 0 === r.length && (r.push(new Rt), r.push(new Dt), r.push(new Mt)), this.readers = r
                        }
                        decodeRow(t, e, r) {
                            for (let n of this.readers) try {
                                const i = n.decodeRow(t, e, r),
                                    o = i.getBarcodeFormat() === Q.EAN_13 && "0" === i.getText().charAt(0),
                                    s = null == r ? null : r.get(w.POSSIBLE_FORMATS),
                                    a = null == s || s.includes(Q.UPC_A);
                                if (o && a) {
                                    const t = i.getRawBytes(),
                                        e = new L(i.getText().substring(1), t, t.length, i.getResultPoints(), Q.UPC_A);
                                    return e.putAllMetadata(i.getResultMetadata()), e
                                }
                                return i
                            } catch (t) {}
                            throw new M
                        }
                        reset() {
                            for (let t of this.readers) t.reset()
                        }
                    }
                    class Nt extends ut {
                        constructor() {
                            super(), this.decodeFinderCounters = new Int32Array(4), this.dataCharacterCounters = new Int32Array(8), this.oddRoundingErrors = new Array(4), this.evenRoundingErrors = new Array(4), this.oddCounts = new Array(this.dataCharacterCounters.length / 2), this.evenCounts = new Array(this.dataCharacterCounters.length / 2)
                        }
                        getDecodeFinderCounters() {
                            return this.decodeFinderCounters
                        }
                        getDataCharacterCounters() {
                            return this.dataCharacterCounters
                        }
                        getOddRoundingErrors() {
                            return this.oddRoundingErrors
                        }
                        getEvenRoundingErrors() {
                            return this.evenRoundingErrors
                        }
                        getOddCounts() {
                            return this.oddCounts
                        }
                        getEvenCounts() {
                            return this.evenCounts
                        }
                        parseFinderValue(t, e) {
                            for (let r = 0; r < e.length; r++)
                                if (ut.patternMatchVariance(t, e[r], Nt.MAX_INDIVIDUAL_VARIANCE) < Nt.MAX_AVG_VARIANCE) return r;
                            throw new M
                        }
                        static count(t) {
                            return et.sum(new Int32Array(t))
                        }
                        static increment(t, e) {
                            let r = 0,
                                n = e[0];
                            for (let i = 1; i < t.length; i++) e[i] > n && (n = e[i], r = i);
                            t[r]++
                        }
                        static decrement(t, e) {
                            let r = 0,
                                n = e[0];
                            for (let i = 1; i < t.length; i++) e[i] < n && (n = e[i], r = i);
                            t[r]--
                        }
                        static isFinderPattern(t) {
                            let e = t[0] + t[1],
                                r = e / (e + t[2] + t[3]);
                            if (r >= Nt.MIN_FINDER_PATTERN_RATIO && r <= Nt.MAX_FINDER_PATTERN_RATIO) {
                                let e = Number.MAX_SAFE_INTEGER,
                                    r = Number.MIN_SAFE_INTEGER;
                                for (let n of t) n > r && (r = n), n < e && (e = n);
                                return r < 10 * e
                            }
                            return !1
                        }
                    }
                    Nt.MAX_AVG_VARIANCE = .2, Nt.MAX_INDIVIDUAL_VARIANCE = .45, Nt.MIN_FINDER_PATTERN_RATIO = 9.5 / 12, Nt.MAX_FINDER_PATTERN_RATIO = 12.5 / 14;
                    class yt {
                        constructor(t, e) {
                            this.value = t, this.checksumPortion = e
                        }
                        getValue() {
                            return this.value
                        }
                        getChecksumPortion() {
                            return this.checksumPortion
                        }
                        toString() {
                            return this.value + "(" + this.checksumPortion + ")"
                        }
                        equals(t) {
                            if (!(t instanceof yt)) return !1;
                            const e = t;
                            return this.value === e.value && this.checksumPortion === e.checksumPortion
                        }
                        hashCode() {
                            return this.value ^ this.checksumPortion
                        }
                    }
                    class _t {
                        constructor(t, e, r, n, i) {
                            this.value = t, this.startEnd = e, this.value = t, this.startEnd = e, this.resultPoints = new Array, this.resultPoints.push(new nt(r, i)), this.resultPoints.push(new nt(n, i))
                        }
                        getValue() {
                            return this.value
                        }
                        getStartEnd() {
                            return this.startEnd
                        }
                        getResultPoints() {
                            return this.resultPoints
                        }
                        equals(t) {
                            if (!(t instanceof _t)) return !1;
                            const e = t;
                            return this.value === e.value
                        }
                        hashCode() {
                            return this.value
                        }
                    }
                    class Ot {
                        constructor() {}
                        static getRSSvalue(t, e, r) {
                            let n = 0;
                            for (let e of t) n += e;
                            let i = 0,
                                o = 0,
                                s = t.length;
                            for (let a = 0; a < s - 1; a++) {
                                let A;
                                for (A = 1, o |= 1 << a; A < t[a]; A++, o &= ~(1 << a)) {
                                    let t = Ot.combins(n - A - 1, s - a - 2);
                                    if (r && 0 === o && n - A - (s - a - 1) >= s - a - 1 && (t -= Ot.combins(n - A - (s - a), s - a - 2)), s - a - 1 > 1) {
                                        let r = 0;
                                        for (let t = n - A - (s - a - 2); t > e; t--) r += Ot.combins(n - A - t - 1, s - a - 3);
                                        t -= r * (s - 1 - a)
                                    } else n - A > e && t--;
                                    i += t
                                }
                                n -= A
                            }
                            return i
                        }
                        static combins(t, e) {
                            let r, n;
                            t - e > e ? (n = e, r = t - e) : (n = t - e, r = e);
                            let i = 1,
                                o = 1;
                            for (let e = t; e > r; e--) i *= e, o <= n && (i /= o, o++);
                            for (; o <= n;) i /= o, o++;
                            return i
                        }
                    }
                    class bt {
                        constructor(t, e) {
                            e ? this.decodedInformation = null : (this.finished = t, this.decodedInformation = e)
                        }
                        getDecodedInformation() {
                            return this.decodedInformation
                        }
                        isFinished() {
                            return this.finished
                        }
                    }
                    class Ft {
                        constructor(t) {
                            this.newPosition = t
                        }
                        getNewPosition() {
                            return this.newPosition
                        }
                    }
                    class Pt extends Ft {
                        constructor(t, e) {
                            super(t), this.value = e
                        }
                        getValue() {
                            return this.value
                        }
                        isFNC1() {
                            return this.value === Pt.FNC1
                        }
                    }
                    Pt.FNC1 = "$";
                    class kt extends Ft {
                        constructor(t, e, r) {
                            super(t), r ? (this.remaining = !0, this.remainingValue = this.remainingValue) : (this.remaining = !1, this.remainingValue = 0), this.newString = e
                        }
                        getNewString() {
                            return this.newString
                        }
                        isRemaining() {
                            return this.remaining
                        }
                        getRemainingValue() {
                            return this.remainingValue
                        }
                    }
                    class Lt extends Ft {
                        constructor(t, e, r) {
                            if (super(t), e < 0 || e > 10 || r < 0 || r > 10) throw new E;
                            this.firstDigit = e, this.secondDigit = r
                        }
                        getFirstDigit() {
                            return this.firstDigit
                        }
                        getSecondDigit() {
                            return this.secondDigit
                        }
                        getValue() {
                            return 10 * this.firstDigit + this.secondDigit
                        }
                        isFirstDigitFNC1() {
                            return this.firstDigit === Lt.FNC1
                        }
                        isSecondDigitFNC1() {
                            return this.secondDigit === Lt.FNC1
                        }
                        isAnyFNC1() {
                            return this.firstDigit === Lt.FNC1 || this.secondDigit === Lt.FNC1
                        }
                    }
                    Lt.FNC1 = 10;
                    class Gt {
                        constructor() {}
                        static parseFieldsInGeneralPurpose(t) {
                            if (!t) return null;
                            if (t.length < 2) throw new M;
                            let e = t.substring(0, 2);
                            for (let r of Gt.TWO_DIGIT_DATA_LENGTH)
                                if (r[0] === e) return r[1] === Gt.VARIABLE_LENGTH ? Gt.processVariableAI(2, r[2], t) : Gt.processFixedAI(2, r[1], t);
                            if (t.length < 3) throw new M;
                            let r = t.substring(0, 3);
                            for (let e of Gt.THREE_DIGIT_DATA_LENGTH)
                                if (e[0] === r) return e[1] === Gt.VARIABLE_LENGTH ? Gt.processVariableAI(3, e[2], t) : Gt.processFixedAI(3, e[1], t);
                            for (let e of Gt.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH)
                                if (e[0] === r) return e[1] === Gt.VARIABLE_LENGTH ? Gt.processVariableAI(4, e[2], t) : Gt.processFixedAI(4, e[1], t);
                            if (t.length < 4) throw new M;
                            let n = t.substring(0, 4);
                            for (let e of Gt.FOUR_DIGIT_DATA_LENGTH)
                                if (e[0] === n) return e[1] === Gt.VARIABLE_LENGTH ? Gt.processVariableAI(4, e[2], t) : Gt.processFixedAI(4, e[1], t);
                            throw new M
                        }
                        static processFixedAI(t, e, r) {
                            if (r.length < t) throw new M;
                            let n = r.substring(0, t);
                            if (r.length < t + e) throw new M;
                            let i = r.substring(t, t + e),
                                o = r.substring(t + e),
                                s = "(" + n + ")" + i,
                                a = Gt.parseFieldsInGeneralPurpose(o);
                            return null == a ? s : s + a
                        }
                        static processVariableAI(t, e, r) {
                            let n, i = r.substring(0, t);
                            n = r.length < t + e ? r.length : t + e;
                            let o = r.substring(t, n),
                                s = r.substring(n),
                                a = "(" + i + ")" + o,
                                A = Gt.parseFieldsInGeneralPurpose(s);
                            return null == A ? a : a + A
                        }
                    }
                    Gt.VARIABLE_LENGTH = [], Gt.TWO_DIGIT_DATA_LENGTH = [
                        ["00", 18],
                        ["01", 14],
                        ["02", 14],
                        ["10", Gt.VARIABLE_LENGTH, 20],
                        ["11", 6],
                        ["12", 6],
                        ["13", 6],
                        ["15", 6],
                        ["17", 6],
                        ["20", 2],
                        ["21", Gt.VARIABLE_LENGTH, 20],
                        ["22", Gt.VARIABLE_LENGTH, 29],
                        ["30", Gt.VARIABLE_LENGTH, 8],
                        ["37", Gt.VARIABLE_LENGTH, 8],
                        ["90", Gt.VARIABLE_LENGTH, 30],
                        ["91", Gt.VARIABLE_LENGTH, 30],
                        ["92", Gt.VARIABLE_LENGTH, 30],
                        ["93", Gt.VARIABLE_LENGTH, 30],
                        ["94", Gt.VARIABLE_LENGTH, 30],
                        ["95", Gt.VARIABLE_LENGTH, 30],
                        ["96", Gt.VARIABLE_LENGTH, 30],
                        ["97", Gt.VARIABLE_LENGTH, 3],
                        ["98", Gt.VARIABLE_LENGTH, 30],
                        ["99", Gt.VARIABLE_LENGTH, 30]
                    ], Gt.THREE_DIGIT_DATA_LENGTH = [
                        ["240", Gt.VARIABLE_LENGTH, 30],
                        ["241", Gt.VARIABLE_LENGTH, 30],
                        ["242", Gt.VARIABLE_LENGTH, 6],
                        ["250", Gt.VARIABLE_LENGTH, 30],
                        ["251", Gt.VARIABLE_LENGTH, 30],
                        ["253", Gt.VARIABLE_LENGTH, 17],
                        ["254", Gt.VARIABLE_LENGTH, 20],
                        ["400", Gt.VARIABLE_LENGTH, 30],
                        ["401", Gt.VARIABLE_LENGTH, 30],
                        ["402", 17],
                        ["403", Gt.VARIABLE_LENGTH, 30],
                        ["410", 13],
                        ["411", 13],
                        ["412", 13],
                        ["413", 13],
                        ["414", 13],
                        ["420", Gt.VARIABLE_LENGTH, 20],
                        ["421", Gt.VARIABLE_LENGTH, 15],
                        ["422", 3],
                        ["423", Gt.VARIABLE_LENGTH, 15],
                        ["424", 3],
                        ["425", 3],
                        ["426", 3]
                    ], Gt.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [
                        ["310", 6],
                        ["311", 6],
                        ["312", 6],
                        ["313", 6],
                        ["314", 6],
                        ["315", 6],
                        ["316", 6],
                        ["320", 6],
                        ["321", 6],
                        ["322", 6],
                        ["323", 6],
                        ["324", 6],
                        ["325", 6],
                        ["326", 6],
                        ["327", 6],
                        ["328", 6],
                        ["329", 6],
                        ["330", 6],
                        ["331", 6],
                        ["332", 6],
                        ["333", 6],
                        ["334", 6],
                        ["335", 6],
                        ["336", 6],
                        ["340", 6],
                        ["341", 6],
                        ["342", 6],
                        ["343", 6],
                        ["344", 6],
                        ["345", 6],
                        ["346", 6],
                        ["347", 6],
                        ["348", 6],
                        ["349", 6],
                        ["350", 6],
                        ["351", 6],
                        ["352", 6],
                        ["353", 6],
                        ["354", 6],
                        ["355", 6],
                        ["356", 6],
                        ["357", 6],
                        ["360", 6],
                        ["361", 6],
                        ["362", 6],
                        ["363", 6],
                        ["364", 6],
                        ["365", 6],
                        ["366", 6],
                        ["367", 6],
                        ["368", 6],
                        ["369", 6],
                        ["390", Gt.VARIABLE_LENGTH, 15],
                        ["391", Gt.VARIABLE_LENGTH, 18],
                        ["392", Gt.VARIABLE_LENGTH, 15],
                        ["393", Gt.VARIABLE_LENGTH, 18],
                        ["703", Gt.VARIABLE_LENGTH, 30]
                    ], Gt.FOUR_DIGIT_DATA_LENGTH = [
                        ["7001", 13],
                        ["7002", Gt.VARIABLE_LENGTH, 30],
                        ["7003", 10],
                        ["8001", 14],
                        ["8002", Gt.VARIABLE_LENGTH, 20],
                        ["8003", Gt.VARIABLE_LENGTH, 30],
                        ["8004", Gt.VARIABLE_LENGTH, 30],
                        ["8005", 6],
                        ["8006", 18],
                        ["8007", Gt.VARIABLE_LENGTH, 30],
                        ["8008", Gt.VARIABLE_LENGTH, 12],
                        ["8018", 18],
                        ["8020", Gt.VARIABLE_LENGTH, 25],
                        ["8100", 6],
                        ["8101", 10],
                        ["8102", 2],
                        ["8110", Gt.VARIABLE_LENGTH, 70],
                        ["8200", Gt.VARIABLE_LENGTH, 70]
                    ];
                    class Qt {
                        constructor(t) {
                            this.buffer = new D, this.information = t
                        }
                        decodeAllCodes(t, e) {
                            let r = e,
                                n = null;
                            for (;;) {
                                let e = this.decodeGeneralPurposeField(r, n),
                                    i = Gt.parseFieldsInGeneralPurpose(e.getNewString());
                                if (null != i && t.append(i), n = e.isRemaining() ? "" + e.getRemainingValue() : null, r === e.getNewPosition()) break;
                                r = e.getNewPosition()
                            }
                            return t.toString()
                        }
                        isStillNumeric(t) {
                            if (t + 7 > this.information.getSize()) return t + 4 <= this.information.getSize();
                            for (let e = t; e < t + 3; ++e)
                                if (this.information.get(e)) return !0;
                            return this.information.get(t + 3)
                        }
                        decodeNumeric(t) {
                            if (t + 7 > this.information.getSize()) {
                                let e = this.extractNumericValueFromBitArray(t, 4);
                                return new Lt(this.information.getSize(), 0 === e ? Lt.FNC1 : e - 1, Lt.FNC1)
                            }
                            let e = this.extractNumericValueFromBitArray(t, 7);
                            return new Lt(t + 7, (e - 8) / 11, (e - 8) % 11)
                        }
                        extractNumericValueFromBitArray(t, e) {
                            return Qt.extractNumericValueFromBitArray(this.information, t, e)
                        }
                        static extractNumericValueFromBitArray(t, e, r) {
                            let n = 0;
                            for (let i = 0; i < r; ++i) t.get(e + i) && (n |= 1 << r - i - 1);
                            return n
                        }
                        decodeGeneralPurposeField(t, e) {
                            this.buffer.setLengthToZero(), null != e && this.buffer.append(e), this.current.setPosition(t);
                            let r = this.parseBlocks();
                            return null != r && r.isRemaining() ? new kt(this.current.getPosition(), this.buffer.toString(), r.getRemainingValue()) : new kt(this.current.getPosition(), this.buffer.toString())
                        }
                        parseBlocks() {
                            let t, e;
                            do {
                                let r = this.current.getPosition();
                                if (this.current.isAlpha() ? (e = this.parseAlphaBlock(), t = e.isFinished()) : this.current.isIsoIec646() ? (e = this.parseIsoIec646Block(), t = e.isFinished()) : (e = this.parseNumericBlock(), t = e.isFinished()), r === this.current.getPosition() && !t) break
                            } while (!t);
                            return e.getDecodedInformation()
                        }
                        parseNumericBlock() {
                            for (; this.isStillNumeric(this.current.getPosition());) {
                                let t = this.decodeNumeric(this.current.getPosition());
                                if (this.current.setPosition(t.getNewPosition()), t.isFirstDigitFNC1()) {
                                    let e;
                                    return e = t.isSecondDigitFNC1() ? new kt(this.current.getPosition(), this.buffer.toString()) : new kt(this.current.getPosition(), this.buffer.toString(), t.getSecondDigit()), new bt(!0, e)
                                }
                                if (this.buffer.append(t.getFirstDigit()), t.isSecondDigitFNC1()) {
                                    let t = new kt(this.current.getPosition(), this.buffer.toString());
                                    return new bt(!0, t)
                                }
                                this.buffer.append(t.getSecondDigit())
                            }
                            return this.isNumericToAlphaNumericLatch(this.current.getPosition()) && (this.current.setAlpha(), this.current.incrementPosition(4)), new bt(!1)
                        }
                        parseIsoIec646Block() {
                            for (; this.isStillIsoIec646(this.current.getPosition());) {
                                let t = this.decodeIsoIec646(this.current.getPosition());
                                if (this.current.setPosition(t.getNewPosition()), t.isFNC1()) {
                                    let t = new kt(this.current.getPosition(), this.buffer.toString());
                                    return new bt(!0, t)
                                }
                                this.buffer.append(t.getValue())
                            }
                            return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setAlpha()), new bt(!1)
                        }
                        parseAlphaBlock() {
                            for (; this.isStillAlpha(this.current.getPosition());) {
                                let t = this.decodeAlphanumeric(this.current.getPosition());
                                if (this.current.setPosition(t.getNewPosition()), t.isFNC1()) {
                                    let t = new kt(this.current.getPosition(), this.buffer.toString());
                                    return new bt(!0, t)
                                }
                                this.buffer.append(t.getValue())
                            }
                            return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setIsoIec646()), new bt(!1)
                        }
                        isStillIsoIec646(t) {
                            if (t + 5 > this.information.getSize()) return !1;
                            let e = this.extractNumericValueFromBitArray(t, 5);
                            if (e >= 5 && e < 16) return !0;
                            if (t + 7 > this.information.getSize()) return !1;
                            let r = this.extractNumericValueFromBitArray(t, 7);
                            if (r >= 64 && r < 116) return !0;
                            if (t + 8 > this.information.getSize()) return !1;
                            let n = this.extractNumericValueFromBitArray(t, 8);
                            return n >= 232 && n < 253
                        }
                        decodeIsoIec646(t) {
                            let e = this.extractNumericValueFromBitArray(t, 5);
                            if (15 === e) return new Pt(t + 5, Pt.FNC1);
                            if (e >= 5 && e < 15) return new Pt(t + 5, "0" + (e - 5));
                            let r, n = this.extractNumericValueFromBitArray(t, 7);
                            if (n >= 64 && n < 90) return new Pt(t + 7, "" + (n + 1));
                            if (n >= 90 && n < 116) return new Pt(t + 7, "" + (n + 7));
                            switch (this.extractNumericValueFromBitArray(t, 8)) {
                                case 232:
                                    r = "!";
                                    break;
                                case 233:
                                    r = '"';
                                    break;
                                case 234:
                                    r = "%";
                                    break;
                                case 235:
                                    r = "&";
                                    break;
                                case 236:
                                    r = "'";
                                    break;
                                case 237:
                                    r = "(";
                                    break;
                                case 238:
                                    r = ")";
                                    break;
                                case 239:
                                    r = "*";
                                    break;
                                case 240:
                                    r = "+";
                                    break;
                                case 241:
                                    r = ",";
                                    break;
                                case 242:
                                    r = "-";
                                    break;
                                case 243:
                                    r = ".";
                                    break;
                                case 244:
                                    r = "/";
                                    break;
                                case 245:
                                    r = ":";
                                    break;
                                case 246:
                                    r = ";";
                                    break;
                                case 247:
                                    r = "<";
                                    break;
                                case 248:
                                    r = "=";
                                    break;
                                case 249:
                                    r = ">";
                                    break;
                                case 250:
                                    r = "?";
                                    break;
                                case 251:
                                    r = "_";
                                    break;
                                case 252:
                                    r = " ";
                                    break;
                                default:
                                    throw new E
                            }
                            return new Pt(t + 8, r)
                        }
                        isStillAlpha(t) {
                            if (t + 5 > this.information.getSize()) return !1;
                            let e = this.extractNumericValueFromBitArray(t, 5);
                            if (e >= 5 && e < 16) return !0;
                            if (t + 6 > this.information.getSize()) return !1;
                            let r = this.extractNumericValueFromBitArray(t, 6);
                            return r >= 16 && r < 63
                        }
                        decodeAlphanumeric(t) {
                            let e = this.extractNumericValueFromBitArray(t, 5);
                            if (15 === e) return new Pt(t + 5, Pt.FNC1);
                            if (e >= 5 && e < 15) return new Pt(t + 5, "0" + (e - 5));
                            let r, n = this.extractNumericValueFromBitArray(t, 6);
                            if (n >= 32 && n < 58) return new Pt(t + 6, "" + (n + 33));
                            switch (n) {
                                case 58:
                                    r = "*";
                                    break;
                                case 59:
                                    r = ",";
                                    break;
                                case 60:
                                    r = "-";
                                    break;
                                case 61:
                                    r = ".";
                                    break;
                                case 62:
                                    r = "/";
                                    break;
                                default:
                                    throw new q("Decoding invalid alphanumeric value: " + n)
                            }
                            return new Pt(t + 6, r)
                        }
                        isAlphaTo646ToAlphaLatch(t) {
                            if (t + 1 > this.information.getSize()) return !1;
                            for (let e = 0; e < 5 && e + t < this.information.getSize(); ++e)
                                if (2 === e) {
                                    if (!this.information.get(t + 2)) return !1
                                } else if (this.information.get(t + e)) return !1;
                            return !0
                        }
                        isAlphaOr646ToNumericLatch(t) {
                            if (t + 3 > this.information.getSize()) return !1;
                            for (let e = t; e < t + 3; ++e)
                                if (this.information.get(e)) return !1;
                            return !0
                        }
                        isNumericToAlphaNumericLatch(t) {
                            if (t + 1 > this.information.getSize()) return !1;
                            for (let e = 0; e < 4 && e + t < this.information.getSize(); ++e)
                                if (this.information.get(t + e)) return !1;
                            return !0
                        }
                    }
                    class Zt {
                        constructor(t) {
                            this.information = t, this.generalDecoder = new Qt(t)
                        }
                        getInformation() {
                            return this.information
                        }
                        getGeneralDecoder() {
                            return this.generalDecoder
                        }
                    }
                    class Ut extends Zt {
                        constructor(t) {
                            super(t)
                        }
                        encodeCompressedGtin(t, e) {
                            t.append("(01)");
                            let r = t.length();
                            t.append("9"), this.encodeCompressedGtinWithoutAI(t, e, r)
                        }
                        encodeCompressedGtinWithoutAI(t, e, r) {
                            for (let r = 0; r < 4; ++r) {
                                let n = this.getGeneralDecoder().extractNumericValueFromBitArray(e + 10 * r, 10);
                                n / 100 == 0 && t.append("0"), n / 10 == 0 && t.append("0"), t.append(n)
                            }
                            Ut.appendCheckDigit(t, r)
                        }
                        static appendCheckDigit(t, e) {
                            let r = 0;
                            for (let n = 0; n < 13; n++) {
                                let i = t.charAt(n + e).charCodeAt(0) - "0".charCodeAt(0);
                                r += 0 == (1 & n) ? 3 * i : i
                            }
                            r = 10 - r % 10, 10 === r && (r = 0), t.append(r)
                        }
                    }
                    Ut.GTIN_SIZE = 40;
                    class Yt extends Ut {
                        constructor(t) {
                            super(t)
                        }
                        parseInformation() {
                            let t = new D;
                            t.append("(01)");
                            let e = t.length(),
                                r = this.getGeneralDecoder().extractNumericValueFromBitArray(Yt.HEADER_SIZE, 4);
                            return t.append(r), this.encodeCompressedGtinWithoutAI(t, Yt.HEADER_SIZE + 4, e), this.getGeneralDecoder().decodeAllCodes(t, Yt.HEADER_SIZE + 44)
                        }
                    }
                    Yt.HEADER_SIZE = 4;
                    class vt extends Zt {
                        constructor(t) {
                            super(t)
                        }
                        parseInformation() {
                            let t = new D;
                            return this.getGeneralDecoder().decodeAllCodes(t, vt.HEADER_SIZE)
                        }
                    }
                    vt.HEADER_SIZE = 5;
                    class xt extends Ut {
                        constructor(t) {
                            super(t)
                        }
                        encodeCompressedWeight(t, e, r) {
                            let n = this.getGeneralDecoder().extractNumericValueFromBitArray(e, r);
                            this.addWeightCode(t, n);
                            let i = this.checkWeight(n),
                                o = 1e5;
                            for (let e = 0; e < 5; ++e) i / o == 0 && t.append("0"), o /= 10;
                            t.append(i)
                        }
                    }
                    class Wt extends xt {
                        constructor(t) {
                            super(t)
                        }
                        parseInformation() {
                            if (this.getInformation().getSize() != Wt.HEADER_SIZE + xt.GTIN_SIZE + Wt.WEIGHT_SIZE) throw new M;
                            let t = new D;
                            return this.encodeCompressedGtin(t, Wt.HEADER_SIZE), this.encodeCompressedWeight(t, Wt.HEADER_SIZE + xt.GTIN_SIZE, Wt.WEIGHT_SIZE), t.toString()
                        }
                    }
                    Wt.HEADER_SIZE = 5, Wt.WEIGHT_SIZE = 15;
                    class Ht extends Wt {
                        constructor(t) {
                            super(t)
                        }
                        addWeightCode(t, e) {
                            t.append("(3103)")
                        }
                        checkWeight(t) {
                            return t
                        }
                    }
                    class Vt extends Wt {
                        constructor(t) {
                            super(t)
                        }
                        addWeightCode(t, e) {
                            e < 1e4 ? t.append("(3202)") : t.append("(3203)")
                        }
                        checkWeight(t) {
                            return t < 1e4 ? t : t - 1e4
                        }
                    }
                    class jt extends Ut {
                        constructor(t) {
                            super(t)
                        }
                        parseInformation() {
                            if (this.getInformation().getSize() < jt.HEADER_SIZE + Ut.GTIN_SIZE) throw new M;
                            let t = new D;
                            this.encodeCompressedGtin(t, jt.HEADER_SIZE);
                            let e = this.getGeneralDecoder().extractNumericValueFromBitArray(jt.HEADER_SIZE + Ut.GTIN_SIZE, jt.LAST_DIGIT_SIZE);
                            t.append("(392"), t.append(e), t.append(")");
                            let r = this.getGeneralDecoder().decodeGeneralPurposeField(jt.HEADER_SIZE + Ut.GTIN_SIZE + jt.LAST_DIGIT_SIZE, null);
                            return t.append(r.getNewString()), t.toString()
                        }
                    }
                    jt.HEADER_SIZE = 8, jt.LAST_DIGIT_SIZE = 2;
                    class Xt extends Ut {
                        constructor(t) {
                            super(t)
                        }
                        parseInformation() {
                            if (this.getInformation().getSize() < Xt.HEADER_SIZE + Ut.GTIN_SIZE) throw new M;
                            let t = new D;
                            this.encodeCompressedGtin(t, Xt.HEADER_SIZE);
                            let e = this.getGeneralDecoder().extractNumericValueFromBitArray(Xt.HEADER_SIZE + Ut.GTIN_SIZE, Xt.LAST_DIGIT_SIZE);
                            t.append("(393"), t.append(e), t.append(")");
                            let r = this.getGeneralDecoder().extractNumericValueFromBitArray(Xt.HEADER_SIZE + Ut.GTIN_SIZE + Xt.LAST_DIGIT_SIZE, Xt.FIRST_THREE_DIGITS_SIZE);
                            r / 100 == 0 && t.append("0"), r / 10 == 0 && t.append("0"), t.append(r);
                            let n = this.getGeneralDecoder().decodeGeneralPurposeField(Xt.HEADER_SIZE + Ut.GTIN_SIZE + Xt.LAST_DIGIT_SIZE + Xt.FIRST_THREE_DIGITS_SIZE, null);
                            return t.append(n.getNewString()), t.toString()
                        }
                    }
                    Xt.HEADER_SIZE = 8, Xt.LAST_DIGIT_SIZE = 2, Xt.FIRST_THREE_DIGITS_SIZE = 10;
                    class zt extends xt {
                        constructor(t, e, r) {
                            super(t), this.dateCode = r, this.firstAIdigits = e
                        }
                        parseInformation() {
                            if (this.getInformation().getSize() != zt.HEADER_SIZE + zt.GTIN_SIZE + zt.WEIGHT_SIZE + zt.DATE_SIZE) throw new M;
                            let t = new D;
                            return this.encodeCompressedGtin(t, zt.HEADER_SIZE), this.encodeCompressedWeight(t, zt.HEADER_SIZE + zt.GTIN_SIZE, zt.WEIGHT_SIZE), this.encodeCompressedDate(t, zt.HEADER_SIZE + zt.GTIN_SIZE + zt.WEIGHT_SIZE), t.toString()
                        }
                        encodeCompressedDate(t, e) {
                            let r = this.getGeneralDecoder().extractNumericValueFromBitArray(e, zt.DATE_SIZE);
                            if (38400 == r) return;
                            t.append("("), t.append(this.dateCode), t.append(")");
                            let n = r % 32;
                            r /= 32;
                            let i = r % 12 + 1;
                            r /= 12;
                            let o = r;
                            o / 10 == 0 && t.append("0"), t.append(o), i / 10 == 0 && t.append("0"), t.append(i), n / 10 == 0 && t.append("0"), t.append(n)
                        }
                        addWeightCode(t, e) {
                            t.append("("), t.append(this.firstAIdigits), t.append(e / 1e5), t.append(")")
                        }
                        checkWeight(t) {
                            return t % 1e5
                        }
                    }
                    zt.HEADER_SIZE = 8, zt.WEIGHT_SIZE = 20, zt.DATE_SIZE = 16;
                    class Jt {
                        constructor(t, e, r, n) {
                            this.leftchar = t, this.rightchar = e, this.finderpattern = r, this.maybeLast = n
                        }
                        mayBeLast() {
                            return this.maybeLast
                        }
                        getLeftChar() {
                            return this.leftchar
                        }
                        getRightChar() {
                            return this.rightchar
                        }
                        getFinderPattern() {
                            return this.finderpattern
                        }
                        mustBeLast() {
                            return null == this.rightchar
                        }
                        toString() {
                            return "[ " + this.leftchar + ", " + this.rightchar + " : " + (null == this.finderpattern ? "null" : this.finderpattern.getValue()) + " ]"
                        }
                        static equals(t, e) {
                            return t instanceof Jt && Jt.equalsOrNull(t.leftchar, e.leftchar) && Jt.equalsOrNull(t.rightchar, e.rightchar) && Jt.equalsOrNull(t.finderpattern, e.finderpattern)
                        }
                        static equalsOrNull(t, e) {
                            return null === t ? null === e : Jt.equals(t, e)
                        }
                        hashCode() {
                            return this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue()
                        }
                    }
                    class Kt {
                        constructor(t, e, r) {
                            this.pairs = t, this.rowNumber = e, this.wasReversed = r
                        }
                        getPairs() {
                            return this.pairs
                        }
                        getRowNumber() {
                            return this.rowNumber
                        }
                        isReversed() {
                            return this.wasReversed
                        }
                        isEquivalent(t) {
                            return this.checkEqualitity(this, t)
                        }
                        toString() {
                            return "{ " + this.pairs + " }"
                        }
                        equals(t, e) {
                            return t instanceof Kt && this.checkEqualitity(t, e) && t.wasReversed === e.wasReversed
                        }
                        checkEqualitity(t, e) {
                            if (!t || !e) return;
                            let r;
                            return t.forEach(((t, n) => {
                                e.forEach((e => {
                                    t.getLeftChar().getValue() === e.getLeftChar().getValue() && t.getRightChar().getValue() === e.getRightChar().getValue() && t.getFinderPatter().getValue() === e.getFinderPatter().getValue() && (r = !0)
                                }))
                            })), r
                        }
                    }
                    class qt extends Nt {
                        constructor(t) {
                            super(...arguments), this.pairs = new Array(qt.MAX_PAIRS), this.rows = new Array, this.startEnd = [2], this.verbose = !0 === t
                        }
                        decodeRow(t, e, r) {
                            this.pairs.length = 0, this.startFromEven = !1;
                            try {
                                return qt.constructResult(this.decodeRow2pairs(t, e))
                            } catch (t) {
                                this.verbose && console.log(t)
                            }
                            return this.pairs.length = 0, this.startFromEven = !0, qt.constructResult(this.decodeRow2pairs(t, e))
                        }
                        reset() {
                            this.pairs.length = 0, this.rows.length = 0
                        }
                        decodeRow2pairs(t, e) {
                            let r, n = !1;
                            for (; !n;) try {
                                this.pairs.push(this.retrieveNextPair(e, this.pairs, t))
                            } catch (t) {
                                if (t instanceof M) {
                                    if (!this.pairs.length) throw new M;
                                    n = !0
                                }
                            }
                            if (this.checkChecksum()) return this.pairs;
                            if (r = !!this.rows.length, this.storeRow(t, !1), r) {
                                let t = this.checkRowsBoolean(!1);
                                if (null != t) return t;
                                if (t = this.checkRowsBoolean(!0), null != t) return t
                            }
                            throw new M
                        }
                        checkRowsBoolean(t) {
                            if (this.rows.length > 25) return this.rows.length = 0, null;
                            this.pairs.length = 0, t && (this.rows = this.rows.reverse());
                            let e = null;
                            try {
                                e = this.checkRows(new Array, 0)
                            } catch (t) {
                                this.verbose && console.log(t)
                            }
                            return t && (this.rows = this.rows.reverse()), e
                        }
                        checkRows(t, e) {
                            for (let r = e; r < this.rows.length; r++) {
                                let e = this.rows[r];
                                this.pairs.length = 0;
                                for (let e of t) this.pairs.push(e.getPairs());
                                if (this.pairs.push(e.getPairs()), !qt.isValidSequence(this.pairs)) continue;
                                if (this.checkChecksum()) return this.pairs;
                                let n = new Array(t);
                                n.push(e);
                                try {
                                    return this.checkRows(n, r + 1)
                                } catch (t) {
                                    this.verbose && console.log(t)
                                }
                            }
                            throw new M
                        }
                        static isValidSequence(t) {
                            for (let e of qt.FINDER_PATTERN_SEQUENCES) {
                                if (t.length > e.length) continue;
                                let r = !0;
                                for (let n = 0; n < t.length; n++)
                                    if (t[n].getFinderPattern().getValue() != e[n]) {
                                        r = !1;
                                        break
                                    } if (r) return !0
                            }
                            return !1
                        }
                        storeRow(t, e) {
                            let r = 0,
                                n = !1,
                                i = !1;
                            for (; r < this.rows.length;) {
                                let e = this.rows[r];
                                if (e.getRowNumber() > t) {
                                    i = e.isEquivalent(this.pairs);
                                    break
                                }
                                n = e.isEquivalent(this.pairs), r++
                            }
                            i || n || qt.isPartialRow(this.pairs, this.rows) || (this.rows.push(r, new Kt(this.pairs, t, e)), this.removePartialRows(this.pairs, this.rows))
                        }
                        removePartialRows(t, e) {
                            for (let r of e)
                                if (r.getPairs().length !== t.length)
                                    for (let e of r.getPairs())
                                        for (let r of t)
                                            if (Jt.equals(e, r)) break
                        }
                        static isPartialRow(t, e) {
                            for (let r of e) {
                                let e = !0;
                                for (let n of t) {
                                    let t = !1;
                                    for (let e of r.getPairs())
                                        if (n.equals(e)) {
                                            t = !0;
                                            break
                                        } if (!t) {
                                        e = !1;
                                        break
                                    }
                                }
                                if (e) return !0
                            }
                            return !1
                        }
                        getRows() {
                            return this.rows
                        }
                        static constructResult(t) {
                            let e = function(t) {
                                    try {
                                        if (t.get(1)) return new Yt(t);
                                        if (!t.get(2)) return new vt(t);
                                        switch (Qt.extractNumericValueFromBitArray(t, 1, 4)) {
                                            case 4:
                                                return new Ht(t);
                                            case 5:
                                                return new Vt(t)
                                        }
                                        switch (Qt.extractNumericValueFromBitArray(t, 1, 5)) {
                                            case 12:
                                                return new jt(t);
                                            case 13:
                                                return new Xt(t)
                                        }
                                        switch (Qt.extractNumericValueFromBitArray(t, 1, 7)) {
                                            case 56:
                                                return new zt(t, "310", "11");
                                            case 57:
                                                return new zt(t, "320", "11");
                                            case 58:
                                                return new zt(t, "310", "13");
                                            case 59:
                                                return new zt(t, "320", "13");
                                            case 60:
                                                return new zt(t, "310", "15");
                                            case 61:
                                                return new zt(t, "320", "15");
                                            case 62:
                                                return new zt(t, "310", "17");
                                            case 63:
                                                return new zt(t, "320", "17")
                                        }
                                    } catch (e) {
                                        throw console.log(e), new q("unknown decoder: " + t)
                                    }
                                }(class {
                                    static buildBitArray(t) {
                                        let e = 2 * t.length - 1;
                                        null == t[t.length - 1].getRightChar() && (e -= 1);
                                        let r = new I(12 * e),
                                            n = 0,
                                            i = t[0].getRightChar().getValue();
                                        for (let t = 11; t >= 0; --t) 0 != (i & 1 << t) && r.set(n), n++;
                                        for (let e = 1; e < t.length; ++e) {
                                            let i = t[e],
                                                o = i.getLeftChar().getValue();
                                            for (let t = 11; t >= 0; --t) 0 != (o & 1 << t) && r.set(n), n++;
                                            if (null != i.getRightChar()) {
                                                let t = i.getRightChar().getValue();
                                                for (let e = 11; e >= 0; --e) 0 != (t & 1 << e) && r.set(n), n++
                                            }
                                        }
                                        return r
                                    }
                                }.buildBitArray(t)).parseInformation(),
                                r = t[0].getFinderPattern().getResultPoints(),
                                n = t[t.length - 1].getFinderPattern().getResultPoints(),
                                i = [r[0], r[1], n[0], n[1]];
                            return new L(e, null, null, i, Q.RSS_EXPANDED, null)
                        }
                        checkChecksum() {
                            let t = this.pairs.get(0),
                                e = t.getLeftChar(),
                                r = t.getRightChar();
                            if (null == r) return !1;
                            let n = r.getChecksumPortion(),
                                i = 2;
                            for (let t = 1; t < this.pairs.size(); ++t) {
                                let e = this.pairs.get(t);
                                n += e.getLeftChar().getChecksumPortion(), i++;
                                let r = e.getRightChar();
                                null != r && (n += r.getChecksumPortion(), i++)
                            }
                            return n %= 211, 211 * (i - 4) + n == e.getValue()
                        }
                        static getNextSecondBar(t, e) {
                            let r;
                            return t.get(e) ? (r = t.getNextUnset(e), r = t.getNextSet(r)) : (r = t.getNextSet(e), r = t.getNextUnset(r)), r
                        }
                        retrieveNextPair(t, e, r) {
                            let n, i = e.length % 2 == 0;
                            this.startFromEven && (i = !i);
                            let o = !0,
                                s = -1;
                            do {
                                this.findNextPair(t, e, s), n = this.parseFoundFinderPattern(t, r, i), null == n ? s = qt.getNextSecondBar(t, this.startEnd[0]) : o = !1
                            } while (o);
                            let a, A = this.decodeDataCharacter(t, n, i, !0);
                            if (!this.isEmptyPair(e) && e[e.length - 1].mustBeLast()) throw new M;
                            try {
                                a = this.decodeDataCharacter(t, n, i, !1)
                            } catch (t) {
                                a = null, this.verbose && console.log(t)
                            }
                            return new Jt(A, a, n, !0)
                        }
                        isEmptyPair(t) {
                            return 0 === t.length
                        }
                        findNextPair(t, e, r) {
                            let n = this.getDecodeFinderCounters();
                            n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                            let i, o = t.getSize();
                            i = r >= 0 ? r : this.isEmptyPair(e) ? 0 : e[e.length - 1].getFinderPattern().getStartEnd()[1];
                            let s = e.length % 2 != 0;
                            this.startFromEven && (s = !s);
                            let a = !1;
                            for (; i < o && (a = !t.get(i), a);) i++;
                            let A = 0,
                                l = i;
                            for (let e = i; e < o; e++)
                                if (t.get(e) != a) n[A]++;
                                else {
                                    if (3 == A) {
                                        if (s && qt.reverseCounters(n), qt.isFinderPattern(n)) return this.startEnd[0] = l, void(this.startEnd[1] = e);
                                        s && qt.reverseCounters(n), l += n[0] + n[1], n[0] = n[2], n[1] = n[3], n[2] = 0, n[3] = 0, A--
                                    } else A++;
                                    n[A] = 1, a = !a
                                } throw new M
                        }
                        static reverseCounters(t) {
                            let e = t.length;
                            for (let r = 0; r < e / 2; ++r) {
                                let n = t[r];
                                t[r] = t[e - r - 1], t[e - r - 1] = n
                            }
                        }
                        parseFoundFinderPattern(t, e, r) {
                            let n, i, o;
                            if (r) {
                                let e = this.startEnd[0] - 1;
                                for (; e >= 0 && !t.get(e);) e--;
                                e++, n = this.startEnd[0] - e, i = e, o = this.startEnd[1]
                            } else i = this.startEnd[0], o = t.getNextUnset(this.startEnd[1] + 1), n = o - this.startEnd[1];
                            let s, a = this.getDecodeFinderCounters();
                            h.arraycopy(a, 0, a, 1, a.length - 1), a[0] = n;
                            try {
                                s = this.parseFinderValue(a, qt.FINDER_PATTERNS)
                            } catch (t) {
                                return null
                            }
                            return new _t(s, [i, o], i, o, e)
                        }
                        decodeDataCharacter(t, e, r, n) {
                            let i = this.getDataCharacterCounters();
                            for (let t = 0; t < i.length; t++) i[t] = 0;
                            if (n) qt.recordPatternInReverse(t, e.getStartEnd()[0], i);
                            else {
                                qt.recordPattern(t, e.getStartEnd()[1], i);
                                for (let t = 0, e = i.length - 1; t < e; t++, e--) {
                                    let r = i[t];
                                    i[t] = i[e], i[e] = r
                                }
                            }
                            let o = et.sum(new Int32Array(i)) / 17,
                                s = (e.getStartEnd()[1] - e.getStartEnd()[0]) / 15;
                            if (Math.abs(o - s) / s > .3) throw new M;
                            let a = this.getOddCounts(),
                                A = this.getEvenCounts(),
                                l = this.getOddRoundingErrors(),
                                c = this.getEvenRoundingErrors();
                            for (let t = 0; t < i.length; t++) {
                                let e = 1 * i[t] / o,
                                    r = e + .5;
                                if (r < 1) {
                                    if (e < .3) throw new M;
                                    r = 1
                                } else if (r > 8) {
                                    if (e > 8.7) throw new M;
                                    r = 8
                                }
                                let n = t / 2;
                                0 == (1 & t) ? (a[n] = r, l[n] = e - r) : (A[n] = r, c[n] = e - r)
                            }
                            this.adjustOddEvenCounts(17);
                            let h = 4 * e.getValue() + (r ? 0 : 2) + (n ? 0 : 1) - 1,
                                g = 0,
                                d = 0;
                            for (let t = a.length - 1; t >= 0; t--) {
                                if (qt.isNotA1left(e, r, n)) {
                                    let e = qt.WEIGHTS[h][2 * t];
                                    d += a[t] * e
                                }
                                g += a[t]
                            }
                            let u = 0;
                            for (let t = A.length - 1; t >= 0; t--)
                                if (qt.isNotA1left(e, r, n)) {
                                    let e = qt.WEIGHTS[h][2 * t + 1];
                                    u += A[t] * e
                                } let C = d + u;
                            if (0 != (1 & g) || g > 13 || g < 4) throw new M;
                            let I = (13 - g) / 2,
                                f = qt.SYMBOL_WIDEST[I],
                                w = 9 - f,
                                E = Ot.getRSSvalue(a, f, !0),
                                m = Ot.getRSSvalue(A, w, !1),
                                p = qt.EVEN_TOTAL_SUBSET[I],
                                S = qt.GSUM[I];
                            return new yt(E * p + m + S, C)
                        }
                        static isNotA1left(t, e, r) {
                            return !(0 == t.getValue() && e && r)
                        }
                        adjustOddEvenCounts(t) {
                            let e = et.sum(new Int32Array(this.getOddCounts())),
                                r = et.sum(new Int32Array(this.getEvenCounts())),
                                n = !1,
                                i = !1;
                            e > 13 ? i = !0 : e < 4 && (n = !0);
                            let o = !1,
                                s = !1;
                            r > 13 ? s = !0 : r < 4 && (o = !0);
                            let a = e + r - t,
                                A = 1 == (1 & e),
                                l = 0 == (1 & r);
                            if (1 == a)
                                if (A) {
                                    if (l) throw new M;
                                    i = !0
                                } else {
                                    if (!l) throw new M;
                                    s = !0
                                }
                            else if (-1 == a)
                                if (A) {
                                    if (l) throw new M;
                                    n = !0
                                } else {
                                    if (!l) throw new M;
                                    o = !0
                                }
                            else {
                                if (0 != a) throw new M;
                                if (A) {
                                    if (!l) throw new M;
                                    e < r ? (n = !0, s = !0) : (i = !0, o = !0)
                                } else if (l) throw new M
                            }
                            if (n) {
                                if (i) throw new M;
                                qt.increment(this.getOddCounts(), this.getOddRoundingErrors())
                            }
                            if (i && qt.decrement(this.getOddCounts(), this.getOddRoundingErrors()), o) {
                                if (s) throw new M;
                                qt.increment(this.getEvenCounts(), this.getOddRoundingErrors())
                            }
                            s && qt.decrement(this.getEvenCounts(), this.getEvenRoundingErrors())
                        }
                    }
                    qt.SYMBOL_WIDEST = [7, 5, 4, 3, 1], qt.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204], qt.GSUM = [0, 348, 1388, 2948, 3988], qt.FINDER_PATTERNS = [Int32Array.from([1, 8, 4, 1]), Int32Array.from([3, 6, 4, 1]), Int32Array.from([3, 4, 6, 1]), Int32Array.from([3, 2, 8, 1]), Int32Array.from([2, 6, 5, 1]), Int32Array.from([2, 2, 9, 1])], qt.WEIGHTS = [
                        [1, 3, 9, 27, 81, 32, 96, 77],
                        [20, 60, 180, 118, 143, 7, 21, 63],
                        [189, 145, 13, 39, 117, 140, 209, 205],
                        [193, 157, 49, 147, 19, 57, 171, 91],
                        [62, 186, 136, 197, 169, 85, 44, 132],
                        [185, 133, 188, 142, 4, 12, 36, 108],
                        [113, 128, 173, 97, 80, 29, 87, 50],
                        [150, 28, 84, 41, 123, 158, 52, 156],
                        [46, 138, 203, 187, 139, 206, 196, 166],
                        [76, 17, 51, 153, 37, 111, 122, 155],
                        [43, 129, 176, 106, 107, 110, 119, 146],
                        [16, 48, 144, 10, 30, 90, 59, 177],
                        [109, 116, 137, 200, 178, 112, 125, 164],
                        [70, 210, 208, 202, 184, 130, 179, 115],
                        [134, 191, 151, 31, 93, 68, 204, 190],
                        [148, 22, 66, 198, 172, 94, 71, 2],
                        [6, 18, 54, 162, 64, 192, 154, 40],
                        [120, 149, 25, 75, 14, 42, 126, 167],
                        [79, 26, 78, 23, 69, 207, 199, 175],
                        [103, 98, 83, 38, 114, 131, 182, 124],
                        [161, 61, 183, 127, 170, 88, 53, 159],
                        [55, 165, 73, 8, 24, 72, 5, 15],
                        [45, 135, 194, 160, 58, 174, 100, 89]
                    ], qt.FINDER_PAT_A = 0, qt.FINDER_PAT_B = 1, qt.FINDER_PAT_C = 2, qt.FINDER_PAT_D = 3, qt.FINDER_PAT_E = 4, qt.FINDER_PAT_F = 5, qt.FINDER_PATTERN_SEQUENCES = [
                        [qt.FINDER_PAT_A, qt.FINDER_PAT_A],
                        [qt.FINDER_PAT_A, qt.FINDER_PAT_B, qt.FINDER_PAT_B],
                        [qt.FINDER_PAT_A, qt.FINDER_PAT_C, qt.FINDER_PAT_B, qt.FINDER_PAT_D],
                        [qt.FINDER_PAT_A, qt.FINDER_PAT_E, qt.FINDER_PAT_B, qt.FINDER_PAT_D, qt.FINDER_PAT_C],
                        [qt.FINDER_PAT_A, qt.FINDER_PAT_E, qt.FINDER_PAT_B, qt.FINDER_PAT_D, qt.FINDER_PAT_D, qt.FINDER_PAT_F],
                        [qt.FINDER_PAT_A, qt.FINDER_PAT_E, qt.FINDER_PAT_B, qt.FINDER_PAT_D, qt.FINDER_PAT_E, qt.FINDER_PAT_F, qt.FINDER_PAT_F],
                        [qt.FINDER_PAT_A, qt.FINDER_PAT_A, qt.FINDER_PAT_B, qt.FINDER_PAT_B, qt.FINDER_PAT_C, qt.FINDER_PAT_C, qt.FINDER_PAT_D, qt.FINDER_PAT_D],
                        [qt.FINDER_PAT_A, qt.FINDER_PAT_A, qt.FINDER_PAT_B, qt.FINDER_PAT_B, qt.FINDER_PAT_C, qt.FINDER_PAT_C, qt.FINDER_PAT_D, qt.FINDER_PAT_E, qt.FINDER_PAT_E],
                        [qt.FINDER_PAT_A, qt.FINDER_PAT_A, qt.FINDER_PAT_B, qt.FINDER_PAT_B, qt.FINDER_PAT_C, qt.FINDER_PAT_C, qt.FINDER_PAT_D, qt.FINDER_PAT_E, qt.FINDER_PAT_F, qt.FINDER_PAT_F],
                        [qt.FINDER_PAT_A, qt.FINDER_PAT_A, qt.FINDER_PAT_B, qt.FINDER_PAT_B, qt.FINDER_PAT_C, qt.FINDER_PAT_D, qt.FINDER_PAT_D, qt.FINDER_PAT_E, qt.FINDER_PAT_E, qt.FINDER_PAT_F, qt.FINDER_PAT_F]
                    ], qt.MAX_PAIRS = 11;
                    class $t extends yt {
                        constructor(t, e, r) {
                            super(t, e), this.count = 0, this.finderPattern = r
                        }
                        getFinderPattern() {
                            return this.finderPattern
                        }
                        getCount() {
                            return this.count
                        }
                        incrementCount() {
                            this.count++
                        }
                    }
                    class te extends Nt {
                        constructor() {
                            super(...arguments), this.possibleLeftPairs = [], this.possibleRightPairs = []
                        }
                        decodeRow(t, e, r) {
                            const n = this.decodePair(e, !1, t, r);
                            te.addOrTally(this.possibleLeftPairs, n), e.reverse();
                            let i = this.decodePair(e, !0, t, r);
                            te.addOrTally(this.possibleRightPairs, i), e.reverse();
                            for (let t of this.possibleLeftPairs)
                                if (t.getCount() > 1)
                                    for (let e of this.possibleRightPairs)
                                        if (e.getCount() > 1 && te.checkChecksum(t, e)) return te.constructResult(t, e);
                            throw new M
                        }
                        static addOrTally(t, e) {
                            if (null == e) return;
                            let r = !1;
                            for (let n of t)
                                if (n.getValue() === e.getValue()) {
                                    n.incrementCount(), r = !0;
                                    break
                                } r || t.push(e)
                        }
                        reset() {
                            this.possibleLeftPairs.length = 0, this.possibleRightPairs.length = 0
                        }
                        static constructResult(t, e) {
                            let r = 4537077 * t.getValue() + e.getValue(),
                                n = new String(r).toString(),
                                i = new D;
                            for (let t = 13 - n.length; t > 0; t--) i.append("0");
                            i.append(n);
                            let o = 0;
                            for (let t = 0; t < 13; t++) {
                                let e = i.charAt(t).charCodeAt(0) - "0".charCodeAt(0);
                                o += 0 == (1 & t) ? 3 * e : e
                            }
                            o = 10 - o % 10, 10 === o && (o = 0), i.append(o.toString());
                            let s = t.getFinderPattern().getResultPoints(),
                                a = e.getFinderPattern().getResultPoints();
                            return new L(i.toString(), null, 0, [s[0], s[1], a[0], a[1]], Q.RSS_14, (new Date).getTime())
                        }
                        static checkChecksum(t, e) {
                            let r = (t.getChecksumPortion() + 16 * e.getChecksumPortion()) % 79,
                                n = 9 * t.getFinderPattern().getValue() + e.getFinderPattern().getValue();
                            return n > 72 && n--, n > 8 && n--, r === n
                        }
                        decodePair(t, e, r, n) {
                            try {
                                let i = this.findFinderPattern(t, e),
                                    o = this.parseFoundFinderPattern(t, r, e, i),
                                    s = null == n ? null : n.get(w.NEED_RESULT_POINT_CALLBACK);
                                if (null != s) {
                                    let n = (i[0] + i[1]) / 2;
                                    e && (n = t.getSize() - 1 - n), s.foundPossibleResultPoint(new nt(n, r))
                                }
                                let a = this.decodeDataCharacter(t, o, !0),
                                    A = this.decodeDataCharacter(t, o, !1);
                                return new $t(1597 * a.getValue() + A.getValue(), a.getChecksumPortion() + 4 * A.getChecksumPortion(), o)
                            } catch (t) {
                                return null
                            }
                        }
                        decodeDataCharacter(t, e, r) {
                            let n = this.getDataCharacterCounters();
                            for (let t = 0; t < n.length; t++) n[t] = 0;
                            if (r) ut.recordPatternInReverse(t, e.getStartEnd()[0], n);
                            else {
                                ut.recordPattern(t, e.getStartEnd()[1] + 1, n);
                                for (let t = 0, e = n.length - 1; t < e; t++, e--) {
                                    let r = n[t];
                                    n[t] = n[e], n[e] = r
                                }
                            }
                            let i = r ? 16 : 15,
                                o = et.sum(new Int32Array(n)) / i,
                                s = this.getOddCounts(),
                                a = this.getEvenCounts(),
                                A = this.getOddRoundingErrors(),
                                l = this.getEvenRoundingErrors();
                            for (let t = 0; t < n.length; t++) {
                                let e = n[t] / o,
                                    r = Math.floor(e + .5);
                                r < 1 ? r = 1 : r > 8 && (r = 8);
                                let i = Math.floor(t / 2);
                                0 == (1 & t) ? (s[i] = r, A[i] = e - r) : (a[i] = r, l[i] = e - r)
                            }
                            this.adjustOddEvenCounts(r, i);
                            let c = 0,
                                h = 0;
                            for (let t = s.length - 1; t >= 0; t--) h *= 9, h += s[t], c += s[t];
                            let g = 0,
                                d = 0;
                            for (let t = a.length - 1; t >= 0; t--) g *= 9, g += a[t], d += a[t];
                            let u = h + 3 * g;
                            if (r) {
                                if (0 != (1 & c) || c > 12 || c < 4) throw new M;
                                let t = (12 - c) / 2,
                                    e = te.OUTSIDE_ODD_WIDEST[t],
                                    r = 9 - e,
                                    n = Ot.getRSSvalue(s, e, !1),
                                    i = Ot.getRSSvalue(a, r, !0),
                                    o = te.OUTSIDE_EVEN_TOTAL_SUBSET[t],
                                    A = te.OUTSIDE_GSUM[t];
                                return new yt(n * o + i + A, u)
                            } {
                                if (0 != (1 & d) || d > 10 || d < 4) throw new M;
                                let t = (10 - d) / 2,
                                    e = te.INSIDE_ODD_WIDEST[t],
                                    r = 9 - e,
                                    n = Ot.getRSSvalue(s, e, !0),
                                    i = Ot.getRSSvalue(a, r, !1),
                                    o = te.INSIDE_ODD_TOTAL_SUBSET[t],
                                    A = te.INSIDE_GSUM[t];
                                return new yt(i * o + n + A, u)
                            }
                        }
                        findFinderPattern(t, e) {
                            let r = this.getDecodeFinderCounters();
                            r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 0;
                            let n = t.getSize(),
                                i = !1,
                                o = 0;
                            for (; o < n && (i = !t.get(o), e !== i);) o++;
                            let s = 0,
                                a = o;
                            for (let e = o; e < n; e++)
                                if (t.get(e) !== i) r[s]++;
                                else {
                                    if (3 === s) {
                                        if (Nt.isFinderPattern(r)) return [a, e];
                                        a += r[0] + r[1], r[0] = r[2], r[1] = r[3], r[2] = 0, r[3] = 0, s--
                                    } else s++;
                                    r[s] = 1, i = !i
                                } throw new M
                        }
                        parseFoundFinderPattern(t, e, r, n) {
                            let i = t.get(n[0]),
                                o = n[0] - 1;
                            for (; o >= 0 && i !== t.get(o);) o--;
                            o++;
                            const s = n[0] - o,
                                a = this.getDecodeFinderCounters(),
                                A = new Int32Array(a.length);
                            h.arraycopy(a, 0, A, 1, a.length - 1), A[0] = s;
                            const l = this.parseFinderValue(A, te.FINDER_PATTERNS);
                            let c = o,
                                g = n[1];
                            return r && (c = t.getSize() - 1 - c, g = t.getSize() - 1 - g), new _t(l, [o, n[1]], c, g, e)
                        }
                        adjustOddEvenCounts(t, e) {
                            let r = et.sum(new Int32Array(this.getOddCounts())),
                                n = et.sum(new Int32Array(this.getEvenCounts())),
                                i = !1,
                                o = !1,
                                s = !1,
                                a = !1;
                            t ? (r > 12 ? o = !0 : r < 4 && (i = !0), n > 12 ? a = !0 : n < 4 && (s = !0)) : (r > 11 ? o = !0 : r < 5 && (i = !0), n > 10 ? a = !0 : n < 4 && (s = !0));
                            let A = r + n - e,
                                l = (1 & r) == (t ? 1 : 0),
                                c = 1 == (1 & n);
                            if (1 === A)
                                if (l) {
                                    if (c) throw new M;
                                    o = !0
                                } else {
                                    if (!c) throw new M;
                                    a = !0
                                }
                            else if (-1 === A)
                                if (l) {
                                    if (c) throw new M;
                                    i = !0
                                } else {
                                    if (!c) throw new M;
                                    s = !0
                                }
                            else {
                                if (0 !== A) throw new M;
                                if (l) {
                                    if (!c) throw new M;
                                    r < n ? (i = !0, a = !0) : (o = !0, s = !0)
                                } else if (c) throw new M
                            }
                            if (i) {
                                if (o) throw new M;
                                Nt.increment(this.getOddCounts(), this.getOddRoundingErrors())
                            }
                            if (o && Nt.decrement(this.getOddCounts(), this.getOddRoundingErrors()), s) {
                                if (a) throw new M;
                                Nt.increment(this.getEvenCounts(), this.getOddRoundingErrors())
                            }
                            a && Nt.decrement(this.getEvenCounts(), this.getEvenRoundingErrors())
                        }
                    }
                    te.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126], te.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81], te.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715], te.INSIDE_GSUM = [0, 336, 1036, 1516], te.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1], te.INSIDE_ODD_WIDEST = [2, 4, 6, 8], te.FINDER_PATTERNS = [Int32Array.from([3, 8, 2, 1]), Int32Array.from([3, 5, 5, 1]), Int32Array.from([3, 3, 7, 1]), Int32Array.from([3, 1, 9, 1]), Int32Array.from([2, 7, 4, 1]), Int32Array.from([2, 5, 6, 1]), Int32Array.from([2, 3, 8, 1]), Int32Array.from([1, 5, 7, 1]), Int32Array.from([1, 3, 9, 1])];
                    class ee extends ut {
                        constructor(t, e) {
                            super(), this.readers = [], this.verbose = !0 === e;
                            const r = t ? t.get(w.POSSIBLE_FORMATS) : null,
                                n = t && void 0 !== t.get(w.ASSUME_CODE_39_CHECK_DIGIT);
                            r && ((r.includes(Q.EAN_13) || r.includes(Q.UPC_A) || r.includes(Q.EAN_8) || r.includes(Q.UPC_E)) && this.readers.push(new Tt(t)), r.includes(Q.CODE_39) && this.readers.push(new It(n)), r.includes(Q.CODE_128) && this.readers.push(new Ct), r.includes(Q.ITF) && this.readers.push(new ft), r.includes(Q.RSS_14) && this.readers.push(new te), r.includes(Q.RSS_EXPANDED) && this.readers.push(new qt(this.verbose))), 0 === this.readers.length && (this.readers.push(new Tt(t)), this.readers.push(new It), this.readers.push(new Tt(t)), this.readers.push(new Ct), this.readers.push(new ft), this.readers.push(new te), this.readers.push(new qt(this.verbose)))
                        }
                        decodeRow(t, e, r) {
                            for (let n = 0; n < this.readers.length; n++) try {
                                return this.readers[n].decodeRow(t, e, r)
                            } catch (t) {}
                            throw new M
                        }
                        reset() {
                            this.readers.forEach((t => t.reset()))
                        }
                    }
                    class re {
                        constructor(t, e, r) {
                            this.ecCodewords = t, this.ecBlocks = [e], r && this.ecBlocks.push(r)
                        }
                        getECCodewords() {
                            return this.ecCodewords
                        }
                        getECBlocks() {
                            return this.ecBlocks
                        }
                    }
                    class ne {
                        constructor(t, e) {
                            this.count = t, this.dataCodewords = e
                        }
                        getCount() {
                            return this.count
                        }
                        getDataCodewords() {
                            return this.dataCodewords
                        }
                    }
                    class ie {
                        constructor(t, e, r, n, i, o) {
                            this.versionNumber = t, this.symbolSizeRows = e, this.symbolSizeColumns = r, this.dataRegionSizeRows = n, this.dataRegionSizeColumns = i, this.ecBlocks = o;
                            let s = 0;
                            const a = o.getECCodewords(),
                                A = o.getECBlocks();
                            for (let t of A) s += t.getCount() * (t.getDataCodewords() + a);
                            this.totalCodewords = s
                        }
                        getVersionNumber() {
                            return this.versionNumber
                        }
                        getSymbolSizeRows() {
                            return this.symbolSizeRows
                        }
                        getSymbolSizeColumns() {
                            return this.symbolSizeColumns
                        }
                        getDataRegionSizeRows() {
                            return this.dataRegionSizeRows
                        }
                        getDataRegionSizeColumns() {
                            return this.dataRegionSizeColumns
                        }
                        getTotalCodewords() {
                            return this.totalCodewords
                        }
                        getECBlocks() {
                            return this.ecBlocks
                        }
                        static getVersionForDimensions(t, e) {
                            if (0 != (1 & t) || 0 != (1 & e)) throw new E;
                            for (let r of ie.VERSIONS)
                                if (r.symbolSizeRows === t && r.symbolSizeColumns === e) return r;
                            throw new E
                        }
                        toString() {
                            return "" + this.versionNumber
                        }
                        static buildVersions() {
                            return [new ie(1, 10, 10, 8, 8, new re(5, new ne(1, 3))), new ie(2, 12, 12, 10, 10, new re(7, new ne(1, 5))), new ie(3, 14, 14, 12, 12, new re(10, new ne(1, 8))), new ie(4, 16, 16, 14, 14, new re(12, new ne(1, 12))), new ie(5, 18, 18, 16, 16, new re(14, new ne(1, 18))), new ie(6, 20, 20, 18, 18, new re(18, new ne(1, 22))), new ie(7, 22, 22, 20, 20, new re(20, new ne(1, 30))), new ie(8, 24, 24, 22, 22, new re(24, new ne(1, 36))), new ie(9, 26, 26, 24, 24, new re(28, new ne(1, 44))), new ie(10, 32, 32, 14, 14, new re(36, new ne(1, 62))), new ie(11, 36, 36, 16, 16, new re(42, new ne(1, 86))), new ie(12, 40, 40, 18, 18, new re(48, new ne(1, 114))), new ie(13, 44, 44, 20, 20, new re(56, new ne(1, 144))), new ie(14, 48, 48, 22, 22, new re(68, new ne(1, 174))), new ie(15, 52, 52, 24, 24, new re(42, new ne(2, 102))), new ie(16, 64, 64, 14, 14, new re(56, new ne(2, 140))), new ie(17, 72, 72, 16, 16, new re(36, new ne(4, 92))), new ie(18, 80, 80, 18, 18, new re(48, new ne(4, 114))), new ie(19, 88, 88, 20, 20, new re(56, new ne(4, 144))), new ie(20, 96, 96, 22, 22, new re(68, new ne(4, 174))), new ie(21, 104, 104, 24, 24, new re(56, new ne(6, 136))), new ie(22, 120, 120, 18, 18, new re(68, new ne(6, 175))), new ie(23, 132, 132, 20, 20, new re(62, new ne(8, 163))), new ie(24, 144, 144, 22, 22, new re(62, new ne(8, 156), new ne(2, 155))), new ie(25, 8, 18, 6, 16, new re(7, new ne(1, 5))), new ie(26, 8, 32, 6, 14, new re(11, new ne(1, 10))), new ie(27, 12, 26, 10, 24, new re(14, new ne(1, 16))), new ie(28, 12, 36, 10, 16, new re(18, new ne(1, 22))), new ie(29, 16, 36, 14, 16, new re(24, new ne(1, 32))), new ie(30, 16, 48, 14, 22, new re(28, new ne(1, 49)))]
                        }
                    }
                    ie.VERSIONS = ie.buildVersions();
                    class oe {
                        constructor(t) {
                            const e = t.getHeight();
                            if (e < 8 || e > 144 || 0 != (1 & e)) throw new E;
                            this.version = oe.readVersion(t), this.mappingBitMatrix = this.extractDataRegion(t), this.readMappingMatrix = new B(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight())
                        }
                        getVersion() {
                            return this.version
                        }
                        static readVersion(t) {
                            const e = t.getHeight(),
                                r = t.getWidth();
                            return ie.getVersionForDimensions(e, r)
                        }
                        readCodewords() {
                            const t = new Int8Array(this.version.getTotalCodewords());
                            let e = 0,
                                r = 4,
                                n = 0;
                            const i = this.mappingBitMatrix.getHeight(),
                                o = this.mappingBitMatrix.getWidth();
                            let s = !1,
                                a = !1,
                                A = !1,
                                l = !1;
                            do {
                                if (r !== i || 0 !== n || s)
                                    if (r !== i - 2 || 0 !== n || 0 == (3 & o) || a)
                                        if (r !== i + 4 || 2 !== n || 0 != (7 & o) || A)
                                            if (r !== i - 2 || 0 !== n || 4 != (7 & o) || l) {
                                                do {
                                                    r < i && n >= 0 && !this.readMappingMatrix.get(n, r) && (t[e++] = 255 & this.readUtah(r, n, i, o)), r -= 2, n += 2
                                                } while (r >= 0 && n < o);
                                                r += 1, n += 3;
                                                do {
                                                    r >= 0 && n < o && !this.readMappingMatrix.get(n, r) && (t[e++] = 255 & this.readUtah(r, n, i, o)), r += 2, n -= 2
                                                } while (r < i && n >= 0);
                                                r += 3, n += 1
                                            } else t[e++] = 255 & this.readCorner4(i, o), r -= 2, n += 2, l = !0;
                                else t[e++] = 255 & this.readCorner3(i, o), r -= 2, n += 2, A = !0;
                                else t[e++] = 255 & this.readCorner2(i, o), r -= 2, n += 2, a = !0;
                                else t[e++] = 255 & this.readCorner1(i, o), r -= 2, n += 2, s = !0
                            } while (r < i || n < o);
                            if (e !== this.version.getTotalCodewords()) throw new E;
                            return t
                        }
                        readModule(t, e, r, n) {
                            return t < 0 && (t += r, e += 4 - (r + 4 & 7)), e < 0 && (e += n, t += 4 - (n + 4 & 7)), this.readMappingMatrix.set(e, t), this.mappingBitMatrix.get(e, t)
                        }
                        readUtah(t, e, r, n) {
                            let i = 0;
                            return this.readModule(t - 2, e - 2, r, n) && (i |= 1), i <<= 1, this.readModule(t - 2, e - 1, r, n) && (i |= 1), i <<= 1, this.readModule(t - 1, e - 2, r, n) && (i |= 1), i <<= 1, this.readModule(t - 1, e - 1, r, n) && (i |= 1), i <<= 1, this.readModule(t - 1, e, r, n) && (i |= 1), i <<= 1, this.readModule(t, e - 2, r, n) && (i |= 1), i <<= 1, this.readModule(t, e - 1, r, n) && (i |= 1), i <<= 1, this.readModule(t, e, r, n) && (i |= 1), i
                        }
                        readCorner1(t, e) {
                            let r = 0;
                            return this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 1, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(2, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(3, e - 1, t, e) && (r |= 1), r
                        }
                        readCorner2(t, e) {
                            let r = 0;
                            return this.readModule(t - 3, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 2, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 4, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 3, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r
                        }
                        readCorner3(t, e) {
                            let r = 0;
                            return this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 3, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 3, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r
                        }
                        readCorner4(t, e) {
                            let r = 0;
                            return this.readModule(t - 3, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 2, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(2, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(3, e - 1, t, e) && (r |= 1), r
                        }
                        extractDataRegion(t) {
                            const e = this.version.getSymbolSizeRows(),
                                r = this.version.getSymbolSizeColumns();
                            if (t.getHeight() !== e) throw new a("Dimension of bitMatrix must match the version size");
                            const n = this.version.getDataRegionSizeRows(),
                                i = this.version.getDataRegionSizeColumns(),
                                o = e / n | 0,
                                s = r / i | 0,
                                A = new B(s * i, o * n);
                            for (let e = 0; e < o; ++e) {
                                const r = e * n;
                                for (let o = 0; o < s; ++o) {
                                    const s = o * i;
                                    for (let a = 0; a < n; ++a) {
                                        const l = e * (n + 2) + 1 + a,
                                            c = r + a;
                                        for (let e = 0; e < i; ++e) {
                                            const r = o * (i + 2) + 1 + e;
                                            if (t.get(r, l)) {
                                                const t = s + e;
                                                A.set(t, c)
                                            }
                                        }
                                    }
                                }
                            }
                            return A
                        }
                    }
                    class se {
                        constructor(t, e) {
                            this.numDataCodewords = t, this.codewords = e
                        }
                        static getDataBlocks(t, e) {
                            const r = e.getECBlocks();
                            let n = 0;
                            const i = r.getECBlocks();
                            for (let t of i) n += t.getCount();
                            const o = new Array(n);
                            let s = 0;
                            for (let t of i)
                                for (let e = 0; e < t.getCount(); e++) {
                                    const e = t.getDataCodewords(),
                                        n = r.getECCodewords() + e;
                                    o[s++] = new se(e, new Uint8Array(n))
                                }
                            const A = o[0].codewords.length - r.getECCodewords(),
                                l = A - 1;
                            let c = 0;
                            for (let e = 0; e < l; e++)
                                for (let r = 0; r < s; r++) o[r].codewords[e] = t[c++];
                            const h = 24 === e.getVersionNumber(),
                                g = h ? 8 : s;
                            for (let e = 0; e < g; e++) o[e].codewords[A - 1] = t[c++];
                            const d = o[0].codewords.length;
                            for (let e = A; e < d; e++)
                                for (let r = 0; r < s; r++) {
                                    const n = h ? (r + 8) % s : r,
                                        i = h && n > 7 ? e - 1 : e;
                                    o[n].codewords[i] = t[c++]
                                }
                            if (c !== t.length) throw new a;
                            return o
                        }
                        getNumDataCodewords() {
                            return this.numDataCodewords
                        }
                        getCodewords() {
                            return this.codewords
                        }
                    }
                    class ae {
                        constructor(t) {
                            this.bytes = t, this.byteOffset = 0, this.bitOffset = 0
                        }
                        getBitOffset() {
                            return this.bitOffset
                        }
                        getByteOffset() {
                            return this.byteOffset
                        }
                        readBits(t) {
                            if (t < 1 || t > 32 || t > this.available()) throw new a("" + t);
                            let e = 0,
                                r = this.bitOffset,
                                n = this.byteOffset;
                            const i = this.bytes;
                            if (r > 0) {
                                const o = 8 - r,
                                    s = t < o ? t : o,
                                    a = o - s,
                                    A = 255 >> 8 - s << a;
                                e = (i[n] & A) >> a, t -= s, r += s, 8 === r && (r = 0, n++)
                            }
                            if (t > 0) {
                                for (; t >= 8;) e = e << 8 | 255 & i[n], n++, t -= 8;
                                if (t > 0) {
                                    const o = 8 - t,
                                        s = 255 >> o << o;
                                    e = e << t | (i[n] & s) >> o, r += t
                                }
                            }
                            return this.bitOffset = r, this.byteOffset = n, e
                        }
                        available() {
                            return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset
                        }
                    }! function(t) {
                        t[t.PAD_ENCODE = 0] = "PAD_ENCODE", t[t.ASCII_ENCODE = 1] = "ASCII_ENCODE", t[t.C40_ENCODE = 2] = "C40_ENCODE", t[t.TEXT_ENCODE = 3] = "TEXT_ENCODE", t[t.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE", t[t.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE", t[t.BASE256_ENCODE = 6] = "BASE256_ENCODE"
                    }(U || (U = {}));
                    class Ae {
                        static decode(t) {
                            const e = new ae(t),
                                r = new D,
                                n = new D,
                                i = new Array;
                            let o = U.ASCII_ENCODE;
                            do {
                                if (o === U.ASCII_ENCODE) o = this.decodeAsciiSegment(e, r, n);
                                else {
                                    switch (o) {
                                        case U.C40_ENCODE:
                                            this.decodeC40Segment(e, r);
                                            break;
                                        case U.TEXT_ENCODE:
                                            this.decodeTextSegment(e, r);
                                            break;
                                        case U.ANSIX12_ENCODE:
                                            this.decodeAnsiX12Segment(e, r);
                                            break;
                                        case U.EDIFACT_ENCODE:
                                            this.decodeEdifactSegment(e, r);
                                            break;
                                        case U.BASE256_ENCODE:
                                            this.decodeBase256Segment(e, r, i);
                                            break;
                                        default:
                                            throw new E
                                    }
                                    o = U.ASCII_ENCODE
                                }
                            } while (o !== U.PAD_ENCODE && e.available() > 0);
                            return n.length() > 0 && r.append(n.toString()), new V(t, r.toString(), 0 === i.length ? null : i, null)
                        }
                        static decodeAsciiSegment(t, e, r) {
                            let n = !1;
                            do {
                                let i = t.readBits(8);
                                if (0 === i) throw new E;
                                if (i <= 128) return n && (i += 128), e.append(String.fromCharCode(i - 1)), U.ASCII_ENCODE;
                                if (129 === i) return U.PAD_ENCODE;
                                if (i <= 229) {
                                    const t = i - 130;
                                    t < 10 && e.append("0"), e.append("" + t)
                                } else switch (i) {
                                    case 230:
                                        return U.C40_ENCODE;
                                    case 231:
                                        return U.BASE256_ENCODE;
                                    case 232:
                                        e.append(String.fromCharCode(29));
                                        break;
                                    case 233:
                                    case 234:
                                        break;
                                    case 235:
                                        n = !0;
                                        break;
                                    case 236:
                                        e.append("[)>05"), r.insert(0, "");
                                        break;
                                    case 237:
                                        e.append("[)>06"), r.insert(0, "");
                                        break;
                                    case 238:
                                        return U.ANSIX12_ENCODE;
                                    case 239:
                                        return U.TEXT_ENCODE;
                                    case 240:
                                        return U.EDIFACT_ENCODE;
                                    case 241:
                                        break;
                                    default:
                                        if (254 !== i || 0 !== t.available()) throw new E
                                }
                            } while (t.available() > 0);
                            return U.ASCII_ENCODE
                        }
                        static decodeC40Segment(t, e) {
                            let r = !1;
                            const n = [];
                            let i = 0;
                            do {
                                if (8 === t.available()) return;
                                const o = t.readBits(8);
                                if (254 === o) return;
                                this.parseTwoBytes(o, t.readBits(8), n);
                                for (let t = 0; t < 3; t++) {
                                    const o = n[t];
                                    switch (i) {
                                        case 0:
                                            if (o < 3) i = o + 1;
                                            else {
                                                if (!(o < this.C40_BASIC_SET_CHARS.length)) throw new E; {
                                                    const t = this.C40_BASIC_SET_CHARS[o];
                                                    r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), r = !1) : e.append(t)
                                                }
                                            }
                                            break;
                                        case 1:
                                            r ? (e.append(String.fromCharCode(o + 128)), r = !1) : e.append(String.fromCharCode(o)), i = 0;
                                            break;
                                        case 2:
                                            if (o < this.C40_SHIFT2_SET_CHARS.length) {
                                                const t = this.C40_SHIFT2_SET_CHARS[o];
                                                r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), r = !1) : e.append(t)
                                            } else switch (o) {
                                                case 27:
                                                    e.append(String.fromCharCode(29));
                                                    break;
                                                case 30:
                                                    r = !0;
                                                    break;
                                                default:
                                                    throw new E
                                            }
                                            i = 0;
                                            break;
                                        case 3:
                                            r ? (e.append(String.fromCharCode(o + 224)), r = !1) : e.append(String.fromCharCode(o + 96)), i = 0;
                                            break;
                                        default:
                                            throw new E
                                    }
                                }
                            } while (t.available() > 0)
                        }
                        static decodeTextSegment(t, e) {
                            let r = !1,
                                n = [],
                                i = 0;
                            do {
                                if (8 === t.available()) return;
                                const o = t.readBits(8);
                                if (254 === o) return;
                                this.parseTwoBytes(o, t.readBits(8), n);
                                for (let t = 0; t < 3; t++) {
                                    const o = n[t];
                                    switch (i) {
                                        case 0:
                                            if (o < 3) i = o + 1;
                                            else {
                                                if (!(o < this.TEXT_BASIC_SET_CHARS.length)) throw new E; {
                                                    const t = this.TEXT_BASIC_SET_CHARS[o];
                                                    r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), r = !1) : e.append(t)
                                                }
                                            }
                                            break;
                                        case 1:
                                            r ? (e.append(String.fromCharCode(o + 128)), r = !1) : e.append(String.fromCharCode(o)), i = 0;
                                            break;
                                        case 2:
                                            if (o < this.TEXT_SHIFT2_SET_CHARS.length) {
                                                const t = this.TEXT_SHIFT2_SET_CHARS[o];
                                                r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), r = !1) : e.append(t)
                                            } else switch (o) {
                                                case 27:
                                                    e.append(String.fromCharCode(29));
                                                    break;
                                                case 30:
                                                    r = !0;
                                                    break;
                                                default:
                                                    throw new E
                                            }
                                            i = 0;
                                            break;
                                        case 3:
                                            if (!(o < this.TEXT_SHIFT3_SET_CHARS.length)) throw new E; {
                                                const t = this.TEXT_SHIFT3_SET_CHARS[o];
                                                r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), r = !1) : e.append(t), i = 0
                                            }
                                            break;
                                        default:
                                            throw new E
                                    }
                                }
                            } while (t.available() > 0)
                        }
                        static decodeAnsiX12Segment(t, e) {
                            const r = [];
                            do {
                                if (8 === t.available()) return;
                                const n = t.readBits(8);
                                if (254 === n) return;
                                this.parseTwoBytes(n, t.readBits(8), r);
                                for (let t = 0; t < 3; t++) {
                                    const n = r[t];
                                    switch (n) {
                                        case 0:
                                            e.append("\r");
                                            break;
                                        case 1:
                                            e.append("*");
                                            break;
                                        case 2:
                                            e.append(">");
                                            break;
                                        case 3:
                                            e.append(" ");
                                            break;
                                        default:
                                            if (n < 14) e.append(String.fromCharCode(n + 44));
                                            else {
                                                if (!(n < 40)) throw new E;
                                                e.append(String.fromCharCode(n + 51))
                                            }
                                    }
                                }
                            } while (t.available() > 0)
                        }
                        static parseTwoBytes(t, e, r) {
                            let n = (t << 8) + e - 1,
                                i = Math.floor(n / 1600);
                            r[0] = i, n -= 1600 * i, i = Math.floor(n / 40), r[1] = i, r[2] = n - 40 * i
                        }
                        static decodeEdifactSegment(t, e) {
                            do {
                                if (t.available() <= 16) return;
                                for (let r = 0; r < 4; r++) {
                                    let r = t.readBits(6);
                                    if (31 === r) {
                                        const e = 8 - t.getBitOffset();
                                        return void(8 !== e && t.readBits(e))
                                    }
                                    0 == (32 & r) && (r |= 64), e.append(String.fromCharCode(r))
                                }
                            } while (t.available() > 0)
                        }
                        static decodeBase256Segment(t, e, r) {
                            let n = 1 + t.getByteOffset();
                            const i = this.unrandomize255State(t.readBits(8), n++);
                            let o;
                            if (o = 0 === i ? t.available() / 8 | 0 : i < 250 ? i : 250 * (i - 249) + this.unrandomize255State(t.readBits(8), n++), o < 0) throw new E;
                            const s = new Uint8Array(o);
                            for (let e = 0; e < o; e++) {
                                if (t.available() < 8) throw new E;
                                s[e] = this.unrandomize255State(t.readBits(8), n++)
                            }
                            r.push(s);
                            try {
                                e.append(S.decode(s, R.ISO88591))
                            } catch (t) {
                                throw new q("Platform does not support required encoding: " + t.message)
                            }
                        }
                        static unrandomize255State(t, e) {
                            const r = t - (149 * e % 255 + 1);
                            return r >= 0 ? r : r + 256
                        }
                    }
                    Ae.C40_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], Ae.C40_SHIFT2_SET_CHARS = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_"], Ae.TEXT_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], Ae.TEXT_SHIFT2_SET_CHARS = Ae.C40_SHIFT2_SET_CHARS, Ae.TEXT_SHIFT3_SET_CHARS = ["`", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "{", "|", "}", "~", String.fromCharCode(127)];
                    class le {
                        constructor() {
                            this.rsDecoder = new $(J.DATA_MATRIX_FIELD_256)
                        }
                        decode(t) {
                            const e = new oe(t),
                                r = e.getVersion(),
                                n = e.readCodewords(),
                                i = se.getDataBlocks(n, r);
                            let o = 0;
                            for (let t of i) o += t.getNumDataCodewords();
                            const s = new Uint8Array(o),
                                a = i.length;
                            for (let t = 0; t < a; t++) {
                                const e = i[t],
                                    r = e.getCodewords(),
                                    n = e.getNumDataCodewords();
                                this.correctErrors(r, n);
                                for (let e = 0; e < n; e++) s[e * a + t] = r[e]
                            }
                            return Ae.decode(s)
                        }
                        correctErrors(t, e) {
                            const r = new Int32Array(t);
                            try {
                                this.rsDecoder.decode(r, t.length - e)
                            } catch (t) {
                                throw new l
                            }
                            for (let n = 0; n < e; n++) t[n] = r[n]
                        }
                    }
                    class ce {
                        constructor(t) {
                            this.image = t, this.rectangleDetector = new st(this.image)
                        }
                        detect() {
                            const t = this.rectangleDetector.detect();
                            let e = this.detectSolid1(t);
                            if (e = this.detectSolid2(e), e[3] = this.correctTopRight(e), !e[3]) throw new M;
                            e = this.shiftToModuleCenter(e);
                            const r = e[0],
                                n = e[1],
                                i = e[2],
                                o = e[3];
                            let s = this.transitionsBetween(r, o) + 1,
                                a = this.transitionsBetween(i, o) + 1;
                            1 == (1 & s) && (s += 1), 1 == (1 & a) && (a += 1), 4 * s < 7 * a && 4 * a < 7 * s && (s = a = Math.max(s, a));
                            let A = ce.sampleGrid(this.image, r, n, i, o, s, a);
                            return new it(A, [r, n, i, o])
                        }
                        static shiftPoint(t, e, r) {
                            let n = (e.getX() - t.getX()) / (r + 1),
                                i = (e.getY() - t.getY()) / (r + 1);
                            return new nt(t.getX() + n, t.getY() + i)
                        }
                        static moveAway(t, e, r) {
                            let n = t.getX(),
                                i = t.getY();
                            return n < e ? n -= 1 : n += 1, i < r ? i -= 1 : i += 1, new nt(n, i)
                        }
                        detectSolid1(t) {
                            let e = t[0],
                                r = t[1],
                                n = t[3],
                                i = t[2],
                                o = this.transitionsBetween(e, r),
                                s = this.transitionsBetween(r, n),
                                a = this.transitionsBetween(n, i),
                                A = this.transitionsBetween(i, e),
                                l = o,
                                c = [i, e, r, n];
                            return l > s && (l = s, c[0] = e, c[1] = r, c[2] = n, c[3] = i), l > a && (l = a, c[0] = r, c[1] = n, c[2] = i, c[3] = e), l > A && (c[0] = n, c[1] = i, c[2] = e, c[3] = r), c
                        }
                        detectSolid2(t) {
                            let e = t[0],
                                r = t[1],
                                n = t[2],
                                i = t[3],
                                o = this.transitionsBetween(e, i),
                                s = ce.shiftPoint(r, n, 4 * (o + 1)),
                                a = ce.shiftPoint(n, r, 4 * (o + 1));
                            return this.transitionsBetween(s, e) < this.transitionsBetween(a, i) ? (t[0] = e, t[1] = r, t[2] = n, t[3] = i) : (t[0] = r, t[1] = n, t[2] = i, t[3] = e), t
                        }
                        correctTopRight(t) {
                            let e = t[0],
                                r = t[1],
                                n = t[2],
                                i = t[3],
                                o = this.transitionsBetween(e, i),
                                s = this.transitionsBetween(r, i),
                                a = ce.shiftPoint(e, r, 4 * (s + 1)),
                                A = ce.shiftPoint(n, r, 4 * (o + 1));
                            o = this.transitionsBetween(a, i), s = this.transitionsBetween(A, i);
                            let l = new nt(i.getX() + (n.getX() - r.getX()) / (o + 1), i.getY() + (n.getY() - r.getY()) / (o + 1)),
                                c = new nt(i.getX() + (e.getX() - r.getX()) / (s + 1), i.getY() + (e.getY() - r.getY()) / (s + 1));
                            return this.isValid(l) ? this.isValid(c) ? this.transitionsBetween(a, l) + this.transitionsBetween(A, l) > this.transitionsBetween(a, c) + this.transitionsBetween(A, c) ? l : c : l : this.isValid(c) ? c : null
                        }
                        shiftToModuleCenter(t) {
                            let e = t[0],
                                r = t[1],
                                n = t[2],
                                i = t[3],
                                o = this.transitionsBetween(e, i) + 1,
                                s = this.transitionsBetween(n, i) + 1,
                                a = ce.shiftPoint(e, r, 4 * s),
                                A = ce.shiftPoint(n, r, 4 * o);
                            o = this.transitionsBetween(a, i) + 1, s = this.transitionsBetween(A, i) + 1, 1 == (1 & o) && (o += 1), 1 == (1 & s) && (s += 1);
                            let l, c, h = (e.getX() + r.getX() + n.getX() + i.getX()) / 4,
                                g = (e.getY() + r.getY() + n.getY() + i.getY()) / 4;
                            return e = ce.moveAway(e, h, g), r = ce.moveAway(r, h, g), n = ce.moveAway(n, h, g), i = ce.moveAway(i, h, g), a = ce.shiftPoint(e, r, 4 * s), a = ce.shiftPoint(a, i, 4 * o), l = ce.shiftPoint(r, e, 4 * s), l = ce.shiftPoint(l, n, 4 * o), A = ce.shiftPoint(n, i, 4 * s), A = ce.shiftPoint(A, r, 4 * o), c = ce.shiftPoint(i, n, 4 * s), c = ce.shiftPoint(c, e, 4 * o), [a, l, A, c]
                        }
                        isValid(t) {
                            return t.getX() >= 0 && t.getX() < this.image.getWidth() && t.getY() > 0 && t.getY() < this.image.getHeight()
                        }
                        static sampleGrid(t, e, r, n, i, o, s) {
                            return ct.getInstance().sampleGrid(t, o, s, .5, .5, o - .5, .5, o - .5, s - .5, .5, s - .5, e.getX(), e.getY(), i.getX(), i.getY(), n.getX(), n.getY(), r.getX(), r.getY())
                        }
                        transitionsBetween(t, e) {
                            let r = Math.trunc(t.getX()),
                                n = Math.trunc(t.getY()),
                                i = Math.trunc(e.getX()),
                                o = Math.trunc(e.getY()),
                                s = Math.abs(o - n) > Math.abs(i - r);
                            if (s) {
                                let t = r;
                                r = n, n = t, t = i, i = o, o = t
                            }
                            let a = Math.abs(i - r),
                                A = Math.abs(o - n),
                                l = -a / 2,
                                c = n < o ? 1 : -1,
                                h = r < i ? 1 : -1,
                                g = 0,
                                d = this.image.get(s ? n : r, s ? r : n);
                            for (let t = r, e = n; t !== i; t += h) {
                                let r = this.image.get(s ? e : t, s ? t : e);
                                if (r !== d && (g++, d = r), l += A, l > 0) {
                                    if (e === o) break;
                                    e += c, l -= a
                                }
                            }
                            return g
                        }
                    }
                    class he {
                        constructor() {
                            this.decoder = new le
                        }
                        decode(t, e = null) {
                            let r, n;
                            if (null != e && e.has(w.PURE_BARCODE)) {
                                const e = he.extractPureBits(t.getBlackMatrix());
                                r = this.decoder.decode(e), n = he.NO_POINTS
                            } else {
                                const e = new ce(t.getBlackMatrix()).detect();
                                r = this.decoder.decode(e.getBits()), n = e.getPoints()
                            }
                            const i = r.getRawBytes(),
                                o = new L(r.getText(), i, 8 * i.length, n, Q.DATA_MATRIX, h.currentTimeMillis()),
                                s = r.getByteSegments();
                            null != s && o.putMetadata(H.BYTE_SEGMENTS, s);
                            const a = r.getECLevel();
                            return null != a && o.putMetadata(H.ERROR_CORRECTION_LEVEL, a), o
                        }
                        reset() {}
                        static extractPureBits(t) {
                            const e = t.getTopLeftOnBit(),
                                r = t.getBottomRightOnBit();
                            if (null == e || null == r) throw new M;
                            const n = this.moduleSize(e, t);
                            let i = e[1];
                            const o = r[1];
                            let s = e[0];
                            const a = (r[0] - s + 1) / n,
                                A = (o - i + 1) / n;
                            if (a <= 0 || A <= 0) throw new M;
                            const l = n / 2;
                            i += l, s += l;
                            const c = new B(a, A);
                            for (let e = 0; e < A; e++) {
                                const r = i + e * n;
                                for (let i = 0; i < a; i++) t.get(s + i * n, r) && c.set(i, e)
                            }
                            return c
                        }
                        static moduleSize(t, e) {
                            const r = e.getWidth();
                            let n = t[0];
                            const i = t[1];
                            for (; n < r && e.get(n, i);) n++;
                            if (n === r) throw new M;
                            const o = n - t[0];
                            if (0 === o) throw new M;
                            return o
                        }
                    }
                    he.NO_POINTS = [];
                    ! function(t) {
                        t[t.L = 0] = "L", t[t.M = 1] = "M", t[t.Q = 2] = "Q", t[t.H = 3] = "H"
                    }(Y || (Y = {}));
                    class ge {
                        constructor(t, e, r) {
                            this.value = t, this.stringValue = e, this.bits = r, ge.FOR_BITS.set(r, this), ge.FOR_VALUE.set(t, this)
                        }
                        getValue() {
                            return this.value
                        }
                        getBits() {
                            return this.bits
                        }
                        static fromString(t) {
                            switch (t) {
                                case "L":
                                    return ge.L;
                                case "M":
                                    return ge.M;
                                case "Q":
                                    return ge.Q;
                                case "H":
                                    return ge.H;
                                default:
                                    throw new s(t + "not available")
                            }
                        }
                        toString() {
                            return this.stringValue
                        }
                        equals(t) {
                            if (!(t instanceof ge)) return !1;
                            const e = t;
                            return this.value === e.value
                        }
                        static forBits(t) {
                            if (t < 0 || t >= ge.FOR_BITS.size) throw new a;
                            return ge.FOR_BITS.get(t)
                        }
                    }
                    ge.FOR_BITS = new Map, ge.FOR_VALUE = new Map, ge.L = new ge(Y.L, "L", 1), ge.M = new ge(Y.M, "M", 0), ge.Q = new ge(Y.Q, "Q", 3), ge.H = new ge(Y.H, "H", 2);
                    class de {
                        constructor(t) {
                            this.errorCorrectionLevel = ge.forBits(t >> 3 & 3), this.dataMask = 7 & t
                        }
                        static numBitsDiffering(t, e) {
                            return C.bitCount(t ^ e)
                        }
                        static decodeFormatInformation(t, e) {
                            const r = de.doDecodeFormatInformation(t, e);
                            return null !== r ? r : de.doDecodeFormatInformation(t ^ de.FORMAT_INFO_MASK_QR, e ^ de.FORMAT_INFO_MASK_QR)
                        }
                        static doDecodeFormatInformation(t, e) {
                            let r = Number.MAX_SAFE_INTEGER,
                                n = 0;
                            for (const i of de.FORMAT_INFO_DECODE_LOOKUP) {
                                const o = i[0];
                                if (o === t || o === e) return new de(i[1]);
                                let s = de.numBitsDiffering(t, o);
                                s < r && (n = i[1], r = s), t !== e && (s = de.numBitsDiffering(e, o), s < r && (n = i[1], r = s))
                            }
                            return r <= 3 ? new de(n) : null
                        }
                        getErrorCorrectionLevel() {
                            return this.errorCorrectionLevel
                        }
                        getDataMask() {
                            return this.dataMask
                        }
                        hashCode() {
                            return this.errorCorrectionLevel.getBits() << 3 | this.dataMask
                        }
                        equals(t) {
                            if (!(t instanceof de)) return !1;
                            const e = t;
                            return this.errorCorrectionLevel === e.errorCorrectionLevel && this.dataMask === e.dataMask
                        }
                    }
                    de.FORMAT_INFO_MASK_QR = 21522, de.FORMAT_INFO_DECODE_LOOKUP = [Int32Array.from([21522, 0]), Int32Array.from([20773, 1]), Int32Array.from([24188, 2]), Int32Array.from([23371, 3]), Int32Array.from([17913, 4]), Int32Array.from([16590, 5]), Int32Array.from([20375, 6]), Int32Array.from([19104, 7]), Int32Array.from([30660, 8]), Int32Array.from([29427, 9]), Int32Array.from([32170, 10]), Int32Array.from([30877, 11]), Int32Array.from([26159, 12]), Int32Array.from([25368, 13]), Int32Array.from([27713, 14]), Int32Array.from([26998, 15]), Int32Array.from([5769, 16]), Int32Array.from([5054, 17]), Int32Array.from([7399, 18]), Int32Array.from([6608, 19]), Int32Array.from([1890, 20]), Int32Array.from([597, 21]), Int32Array.from([3340, 22]), Int32Array.from([2107, 23]), Int32Array.from([13663, 24]), Int32Array.from([12392, 25]), Int32Array.from([16177, 26]), Int32Array.from([14854, 27]), Int32Array.from([9396, 28]), Int32Array.from([8579, 29]), Int32Array.from([11994, 30]), Int32Array.from([11245, 31])];
                    class ue {
                        constructor(t, ...e) {
                            this.ecCodewordsPerBlock = t, this.ecBlocks = e
                        }
                        getECCodewordsPerBlock() {
                            return this.ecCodewordsPerBlock
                        }
                        getNumBlocks() {
                            let t = 0;
                            const e = this.ecBlocks;
                            for (const r of e) t += r.getCount();
                            return t
                        }
                        getTotalECCodewords() {
                            return this.ecCodewordsPerBlock * this.getNumBlocks()
                        }
                        getECBlocks() {
                            return this.ecBlocks
                        }
                    }
                    class Ce {
                        constructor(t, e) {
                            this.count = t, this.dataCodewords = e
                        }
                        getCount() {
                            return this.count
                        }
                        getDataCodewords() {
                            return this.dataCodewords
                        }
                    }
                    class Ie {
                        constructor(t, e, ...r) {
                            this.versionNumber = t, this.alignmentPatternCenters = e, this.ecBlocks = r;
                            let n = 0;
                            const i = r[0].getECCodewordsPerBlock(),
                                o = r[0].getECBlocks();
                            for (const t of o) n += t.getCount() * (t.getDataCodewords() + i);
                            this.totalCodewords = n
                        }
                        getVersionNumber() {
                            return this.versionNumber
                        }
                        getAlignmentPatternCenters() {
                            return this.alignmentPatternCenters
                        }
                        getTotalCodewords() {
                            return this.totalCodewords
                        }
                        getDimensionForVersion() {
                            return 17 + 4 * this.versionNumber
                        }
                        getECBlocksForLevel(t) {
                            return this.ecBlocks[t.getValue()]
                        }
                        static getProvisionalVersionForDimension(t) {
                            if (t % 4 != 1) throw new E;
                            try {
                                return this.getVersionForNumber((t - 17) / 4)
                            } catch (t) {
                                throw new E
                            }
                        }
                        static getVersionForNumber(t) {
                            if (t < 1 || t > 40) throw new a;
                            return Ie.VERSIONS[t - 1]
                        }
                        static decodeVersionInformation(t) {
                            let e = Number.MAX_SAFE_INTEGER,
                                r = 0;
                            for (let n = 0; n < Ie.VERSION_DECODE_INFO.length; n++) {
                                const i = Ie.VERSION_DECODE_INFO[n];
                                if (i === t) return Ie.getVersionForNumber(n + 7);
                                const o = de.numBitsDiffering(t, i);
                                o < e && (r = n + 7, e = o)
                            }
                            return e <= 3 ? Ie.getVersionForNumber(r) : null
                        }
                        buildFunctionPattern() {
                            const t = this.getDimensionForVersion(),
                                e = new B(t);
                            e.setRegion(0, 0, 9, 9), e.setRegion(t - 8, 0, 8, 9), e.setRegion(0, t - 8, 9, 8);
                            const r = this.alignmentPatternCenters.length;
                            for (let t = 0; t < r; t++) {
                                const n = this.alignmentPatternCenters[t] - 2;
                                for (let i = 0; i < r; i++) 0 === t && (0 === i || i === r - 1) || t === r - 1 && 0 === i || e.setRegion(this.alignmentPatternCenters[i] - 2, n, 5, 5)
                            }
                            return e.setRegion(6, 9, 1, t - 17), e.setRegion(9, 6, t - 17, 1), this.versionNumber > 6 && (e.setRegion(t - 11, 0, 3, 6), e.setRegion(0, t - 11, 6, 3)), e
                        }
                        toString() {
                            return "" + this.versionNumber
                        }
                    }
                    Ie.VERSION_DECODE_INFO = Int32Array.from([31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017]), Ie.VERSIONS = [new Ie(1, new Int32Array(0), new ue(7, new Ce(1, 19)), new ue(10, new Ce(1, 16)), new ue(13, new Ce(1, 13)), new ue(17, new Ce(1, 9))), new Ie(2, Int32Array.from([6, 18]), new ue(10, new Ce(1, 34)), new ue(16, new Ce(1, 28)), new ue(22, new Ce(1, 22)), new ue(28, new Ce(1, 16))), new Ie(3, Int32Array.from([6, 22]), new ue(15, new Ce(1, 55)), new ue(26, new Ce(1, 44)), new ue(18, new Ce(2, 17)), new ue(22, new Ce(2, 13))), new Ie(4, Int32Array.from([6, 26]), new ue(20, new Ce(1, 80)), new ue(18, new Ce(2, 32)), new ue(26, new Ce(2, 24)), new ue(16, new Ce(4, 9))), new Ie(5, Int32Array.from([6, 30]), new ue(26, new Ce(1, 108)), new ue(24, new Ce(2, 43)), new ue(18, new Ce(2, 15), new Ce(2, 16)), new ue(22, new Ce(2, 11), new Ce(2, 12))), new Ie(6, Int32Array.from([6, 34]), new ue(18, new Ce(2, 68)), new ue(16, new Ce(4, 27)), new ue(24, new Ce(4, 19)), new ue(28, new Ce(4, 15))), new Ie(7, Int32Array.from([6, 22, 38]), new ue(20, new Ce(2, 78)), new ue(18, new Ce(4, 31)), new ue(18, new Ce(2, 14), new Ce(4, 15)), new ue(26, new Ce(4, 13), new Ce(1, 14))), new Ie(8, Int32Array.from([6, 24, 42]), new ue(24, new Ce(2, 97)), new ue(22, new Ce(2, 38), new Ce(2, 39)), new ue(22, new Ce(4, 18), new Ce(2, 19)), new ue(26, new Ce(4, 14), new Ce(2, 15))), new Ie(9, Int32Array.from([6, 26, 46]), new ue(30, new Ce(2, 116)), new ue(22, new Ce(3, 36), new Ce(2, 37)), new ue(20, new Ce(4, 16), new Ce(4, 17)), new ue(24, new Ce(4, 12), new Ce(4, 13))), new Ie(10, Int32Array.from([6, 28, 50]), new ue(18, new Ce(2, 68), new Ce(2, 69)), new ue(26, new Ce(4, 43), new Ce(1, 44)), new ue(24, new Ce(6, 19), new Ce(2, 20)), new ue(28, new Ce(6, 15), new Ce(2, 16))), new Ie(11, Int32Array.from([6, 30, 54]), new ue(20, new Ce(4, 81)), new ue(30, new Ce(1, 50), new Ce(4, 51)), new ue(28, new Ce(4, 22), new Ce(4, 23)), new ue(24, new Ce(3, 12), new Ce(8, 13))), new Ie(12, Int32Array.from([6, 32, 58]), new ue(24, new Ce(2, 92), new Ce(2, 93)), new ue(22, new Ce(6, 36), new Ce(2, 37)), new ue(26, new Ce(4, 20), new Ce(6, 21)), new ue(28, new Ce(7, 14), new Ce(4, 15))), new Ie(13, Int32Array.from([6, 34, 62]), new ue(26, new Ce(4, 107)), new ue(22, new Ce(8, 37), new Ce(1, 38)), new ue(24, new Ce(8, 20), new Ce(4, 21)), new ue(22, new Ce(12, 11), new Ce(4, 12))), new Ie(14, Int32Array.from([6, 26, 46, 66]), new ue(30, new Ce(3, 115), new Ce(1, 116)), new ue(24, new Ce(4, 40), new Ce(5, 41)), new ue(20, new Ce(11, 16), new Ce(5, 17)), new ue(24, new Ce(11, 12), new Ce(5, 13))), new Ie(15, Int32Array.from([6, 26, 48, 70]), new ue(22, new Ce(5, 87), new Ce(1, 88)), new ue(24, new Ce(5, 41), new Ce(5, 42)), new ue(30, new Ce(5, 24), new Ce(7, 25)), new ue(24, new Ce(11, 12), new Ce(7, 13))), new Ie(16, Int32Array.from([6, 26, 50, 74]), new ue(24, new Ce(5, 98), new Ce(1, 99)), new ue(28, new Ce(7, 45), new Ce(3, 46)), new ue(24, new Ce(15, 19), new Ce(2, 20)), new ue(30, new Ce(3, 15), new Ce(13, 16))), new Ie(17, Int32Array.from([6, 30, 54, 78]), new ue(28, new Ce(1, 107), new Ce(5, 108)), new ue(28, new Ce(10, 46), new Ce(1, 47)), new ue(28, new Ce(1, 22), new Ce(15, 23)), new ue(28, new Ce(2, 14), new Ce(17, 15))), new Ie(18, Int32Array.from([6, 30, 56, 82]), new ue(30, new Ce(5, 120), new Ce(1, 121)), new ue(26, new Ce(9, 43), new Ce(4, 44)), new ue(28, new Ce(17, 22), new Ce(1, 23)), new ue(28, new Ce(2, 14), new Ce(19, 15))), new Ie(19, Int32Array.from([6, 30, 58, 86]), new ue(28, new Ce(3, 113), new Ce(4, 114)), new ue(26, new Ce(3, 44), new Ce(11, 45)), new ue(26, new Ce(17, 21), new Ce(4, 22)), new ue(26, new Ce(9, 13), new Ce(16, 14))), new Ie(20, Int32Array.from([6, 34, 62, 90]), new ue(28, new Ce(3, 107), new Ce(5, 108)), new ue(26, new Ce(3, 41), new Ce(13, 42)), new ue(30, new Ce(15, 24), new Ce(5, 25)), new ue(28, new Ce(15, 15), new Ce(10, 16))), new Ie(21, Int32Array.from([6, 28, 50, 72, 94]), new ue(28, new Ce(4, 116), new Ce(4, 117)), new ue(26, new Ce(17, 42)), new ue(28, new Ce(17, 22), new Ce(6, 23)), new ue(30, new Ce(19, 16), new Ce(6, 17))), new Ie(22, Int32Array.from([6, 26, 50, 74, 98]), new ue(28, new Ce(2, 111), new Ce(7, 112)), new ue(28, new Ce(17, 46)), new ue(30, new Ce(7, 24), new Ce(16, 25)), new ue(24, new Ce(34, 13))), new Ie(23, Int32Array.from([6, 30, 54, 78, 102]), new ue(30, new Ce(4, 121), new Ce(5, 122)), new ue(28, new Ce(4, 47), new Ce(14, 48)), new ue(30, new Ce(11, 24), new Ce(14, 25)), new ue(30, new Ce(16, 15), new Ce(14, 16))), new Ie(24, Int32Array.from([6, 28, 54, 80, 106]), new ue(30, new Ce(6, 117), new Ce(4, 118)), new ue(28, new Ce(6, 45), new Ce(14, 46)), new ue(30, new Ce(11, 24), new Ce(16, 25)), new ue(30, new Ce(30, 16), new Ce(2, 17))), new Ie(25, Int32Array.from([6, 32, 58, 84, 110]), new ue(26, new Ce(8, 106), new Ce(4, 107)), new ue(28, new Ce(8, 47), new Ce(13, 48)), new ue(30, new Ce(7, 24), new Ce(22, 25)), new ue(30, new Ce(22, 15), new Ce(13, 16))), new Ie(26, Int32Array.from([6, 30, 58, 86, 114]), new ue(28, new Ce(10, 114), new Ce(2, 115)), new ue(28, new Ce(19, 46), new Ce(4, 47)), new ue(28, new Ce(28, 22), new Ce(6, 23)), new ue(30, new Ce(33, 16), new Ce(4, 17))), new Ie(27, Int32Array.from([6, 34, 62, 90, 118]), new ue(30, new Ce(8, 122), new Ce(4, 123)), new ue(28, new Ce(22, 45), new Ce(3, 46)), new ue(30, new Ce(8, 23), new Ce(26, 24)), new ue(30, new Ce(12, 15), new Ce(28, 16))), new Ie(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new ue(30, new Ce(3, 117), new Ce(10, 118)), new ue(28, new Ce(3, 45), new Ce(23, 46)), new ue(30, new Ce(4, 24), new Ce(31, 25)), new ue(30, new Ce(11, 15), new Ce(31, 16))), new Ie(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new ue(30, new Ce(7, 116), new Ce(7, 117)), new ue(28, new Ce(21, 45), new Ce(7, 46)), new ue(30, new Ce(1, 23), new Ce(37, 24)), new ue(30, new Ce(19, 15), new Ce(26, 16))), new Ie(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new ue(30, new Ce(5, 115), new Ce(10, 116)), new ue(28, new Ce(19, 47), new Ce(10, 48)), new ue(30, new Ce(15, 24), new Ce(25, 25)), new ue(30, new Ce(23, 15), new Ce(25, 16))), new Ie(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new ue(30, new Ce(13, 115), new Ce(3, 116)), new ue(28, new Ce(2, 46), new Ce(29, 47)), new ue(30, new Ce(42, 24), new Ce(1, 25)), new ue(30, new Ce(23, 15), new Ce(28, 16))), new Ie(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new ue(30, new Ce(17, 115)), new ue(28, new Ce(10, 46), new Ce(23, 47)), new ue(30, new Ce(10, 24), new Ce(35, 25)), new ue(30, new Ce(19, 15), new Ce(35, 16))), new Ie(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new ue(30, new Ce(17, 115), new Ce(1, 116)), new ue(28, new Ce(14, 46), new Ce(21, 47)), new ue(30, new Ce(29, 24), new Ce(19, 25)), new ue(30, new Ce(11, 15), new Ce(46, 16))), new Ie(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new ue(30, new Ce(13, 115), new Ce(6, 116)), new ue(28, new Ce(14, 46), new Ce(23, 47)), new ue(30, new Ce(44, 24), new Ce(7, 25)), new ue(30, new Ce(59, 16), new Ce(1, 17))), new Ie(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new ue(30, new Ce(12, 121), new Ce(7, 122)), new ue(28, new Ce(12, 47), new Ce(26, 48)), new ue(30, new Ce(39, 24), new Ce(14, 25)), new ue(30, new Ce(22, 15), new Ce(41, 16))), new Ie(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new ue(30, new Ce(6, 121), new Ce(14, 122)), new ue(28, new Ce(6, 47), new Ce(34, 48)), new ue(30, new Ce(46, 24), new Ce(10, 25)), new ue(30, new Ce(2, 15), new Ce(64, 16))), new Ie(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new ue(30, new Ce(17, 122), new Ce(4, 123)), new ue(28, new Ce(29, 46), new Ce(14, 47)), new ue(30, new Ce(49, 24), new Ce(10, 25)), new ue(30, new Ce(24, 15), new Ce(46, 16))), new Ie(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new ue(30, new Ce(4, 122), new Ce(18, 123)), new ue(28, new Ce(13, 46), new Ce(32, 47)), new ue(30, new Ce(48, 24), new Ce(14, 25)), new ue(30, new Ce(42, 15), new Ce(32, 16))), new Ie(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new ue(30, new Ce(20, 117), new Ce(4, 118)), new ue(28, new Ce(40, 47), new Ce(7, 48)), new ue(30, new Ce(43, 24), new Ce(22, 25)), new ue(30, new Ce(10, 15), new Ce(67, 16))), new Ie(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new ue(30, new Ce(19, 118), new Ce(6, 119)), new ue(28, new Ce(18, 47), new Ce(31, 48)), new ue(30, new Ce(34, 24), new Ce(34, 25)), new ue(30, new Ce(20, 15), new Ce(61, 16)))],
                        function(t) {
                            t[t.DATA_MASK_000 = 0] = "DATA_MASK_000", t[t.DATA_MASK_001 = 1] = "DATA_MASK_001", t[t.DATA_MASK_010 = 2] = "DATA_MASK_010", t[t.DATA_MASK_011 = 3] = "DATA_MASK_011", t[t.DATA_MASK_100 = 4] = "DATA_MASK_100", t[t.DATA_MASK_101 = 5] = "DATA_MASK_101", t[t.DATA_MASK_110 = 6] = "DATA_MASK_110", t[t.DATA_MASK_111 = 7] = "DATA_MASK_111"
                        }(v || (v = {}));
                    class fe {
                        constructor(t, e) {
                            this.value = t, this.isMasked = e
                        }
                        unmaskBitMatrix(t, e) {
                            for (let r = 0; r < e; r++)
                                for (let n = 0; n < e; n++) this.isMasked(r, n) && t.flip(n, r)
                        }
                    }
                    fe.values = new Map([
                        [v.DATA_MASK_000, new fe(v.DATA_MASK_000, ((t, e) => 0 == (t + e & 1)))],
                        [v.DATA_MASK_001, new fe(v.DATA_MASK_001, ((t, e) => 0 == (1 & t)))],
                        [v.DATA_MASK_010, new fe(v.DATA_MASK_010, ((t, e) => e % 3 == 0))],
                        [v.DATA_MASK_011, new fe(v.DATA_MASK_011, ((t, e) => (t + e) % 3 == 0))],
                        [v.DATA_MASK_100, new fe(v.DATA_MASK_100, ((t, e) => 0 == (Math.floor(t / 2) + Math.floor(e / 3) & 1)))],
                        [v.DATA_MASK_101, new fe(v.DATA_MASK_101, ((t, e) => t * e % 6 == 0))],
                        [v.DATA_MASK_110, new fe(v.DATA_MASK_110, ((t, e) => t * e % 6 < 3))],
                        [v.DATA_MASK_111, new fe(v.DATA_MASK_111, ((t, e) => 0 == (t + e + t * e % 3 & 1)))]
                    ]);
                    class we {
                        constructor(t) {
                            const e = t.getHeight();
                            if (e < 21 || 1 != (3 & e)) throw new E;
                            this.bitMatrix = t
                        }
                        readFormatInformation() {
                            if (null !== this.parsedFormatInfo && void 0 !== this.parsedFormatInfo) return this.parsedFormatInfo;
                            let t = 0;
                            for (let e = 0; e < 6; e++) t = this.copyBit(e, 8, t);
                            t = this.copyBit(7, 8, t), t = this.copyBit(8, 8, t), t = this.copyBit(8, 7, t);
                            for (let e = 5; e >= 0; e--) t = this.copyBit(8, e, t);
                            const e = this.bitMatrix.getHeight();
                            let r = 0;
                            const n = e - 7;
                            for (let t = e - 1; t >= n; t--) r = this.copyBit(8, t, r);
                            for (let t = e - 8; t < e; t++) r = this.copyBit(t, 8, r);
                            if (this.parsedFormatInfo = de.decodeFormatInformation(t, r), null !== this.parsedFormatInfo) return this.parsedFormatInfo;
                            throw new E
                        }
                        readVersion() {
                            if (null !== this.parsedVersion && void 0 !== this.parsedVersion) return this.parsedVersion;
                            const t = this.bitMatrix.getHeight(),
                                e = Math.floor((t - 17) / 4);
                            if (e <= 6) return Ie.getVersionForNumber(e);
                            let r = 0;
                            const n = t - 11;
                            for (let e = 5; e >= 0; e--)
                                for (let i = t - 9; i >= n; i--) r = this.copyBit(i, e, r);
                            let i = Ie.decodeVersionInformation(r);
                            if (null !== i && i.getDimensionForVersion() === t) return this.parsedVersion = i, i;
                            r = 0;
                            for (let e = 5; e >= 0; e--)
                                for (let i = t - 9; i >= n; i--) r = this.copyBit(e, i, r);
                            if (i = Ie.decodeVersionInformation(r), null !== i && i.getDimensionForVersion() === t) return this.parsedVersion = i, i;
                            throw new E
                        }
                        copyBit(t, e, r) {
                            return (this.isMirror ? this.bitMatrix.get(e, t) : this.bitMatrix.get(t, e)) ? r << 1 | 1 : r << 1
                        }
                        readCodewords() {
                            const t = this.readFormatInformation(),
                                e = this.readVersion(),
                                r = fe.values.get(t.getDataMask()),
                                n = this.bitMatrix.getHeight();
                            r.unmaskBitMatrix(this.bitMatrix, n);
                            const i = e.buildFunctionPattern();
                            let o = !0;
                            const s = new Uint8Array(e.getTotalCodewords());
                            let a = 0,
                                A = 0,
                                l = 0;
                            for (let t = n - 1; t > 0; t -= 2) {
                                6 === t && t--;
                                for (let e = 0; e < n; e++) {
                                    const r = o ? n - 1 - e : e;
                                    for (let e = 0; e < 2; e++) i.get(t - e, r) || (l++, A <<= 1, this.bitMatrix.get(t - e, r) && (A |= 1), 8 === l && (s[a++] = A, l = 0, A = 0))
                                }
                                o = !o
                            }
                            if (a !== e.getTotalCodewords()) throw new E;
                            return s
                        }
                        remask() {
                            if (null === this.parsedFormatInfo) return;
                            const t = fe.values[this.parsedFormatInfo.getDataMask()],
                                e = this.bitMatrix.getHeight();
                            t.unmaskBitMatrix(this.bitMatrix, e)
                        }
                        setMirror(t) {
                            this.parsedVersion = null, this.parsedFormatInfo = null, this.isMirror = t
                        }
                        mirror() {
                            const t = this.bitMatrix;
                            for (let e = 0, r = t.getWidth(); e < r; e++)
                                for (let r = e + 1, n = t.getHeight(); r < n; r++) t.get(e, r) !== t.get(r, e) && (t.flip(r, e), t.flip(e, r))
                        }
                    }
                    class Ee {
                        constructor(t, e) {
                            this.numDataCodewords = t, this.codewords = e
                        }
                        static getDataBlocks(t, e, r) {
                            if (t.length !== e.getTotalCodewords()) throw new a;
                            const n = e.getECBlocksForLevel(r);
                            let i = 0;
                            const o = n.getECBlocks();
                            for (const t of o) i += t.getCount();
                            const s = new Array(i);
                            let A = 0;
                            for (const t of o)
                                for (let e = 0; e < t.getCount(); e++) {
                                    const e = t.getDataCodewords(),
                                        r = n.getECCodewordsPerBlock() + e;
                                    s[A++] = new Ee(e, new Uint8Array(r))
                                }
                            const l = s[0].codewords.length;
                            let c = s.length - 1;
                            for (; c >= 0 && s[c].codewords.length !== l;) c--;
                            c++;
                            const h = l - n.getECCodewordsPerBlock();
                            let g = 0;
                            for (let e = 0; e < h; e++)
                                for (let r = 0; r < A; r++) s[r].codewords[e] = t[g++];
                            for (let e = c; e < A; e++) s[e].codewords[h] = t[g++];
                            const d = s[0].codewords.length;
                            for (let e = h; e < d; e++)
                                for (let r = 0; r < A; r++) {
                                    const n = r < c ? e : e + 1;
                                    s[r].codewords[n] = t[g++]
                                }
                            return s
                        }
                        getNumDataCodewords() {
                            return this.numDataCodewords
                        }
                        getCodewords() {
                            return this.codewords
                        }
                    }! function(t) {
                        t[t.TERMINATOR = 0] = "TERMINATOR", t[t.NUMERIC = 1] = "NUMERIC", t[t.ALPHANUMERIC = 2] = "ALPHANUMERIC", t[t.STRUCTURED_APPEND = 3] = "STRUCTURED_APPEND", t[t.BYTE = 4] = "BYTE", t[t.ECI = 5] = "ECI", t[t.KANJI = 6] = "KANJI", t[t.FNC1_FIRST_POSITION = 7] = "FNC1_FIRST_POSITION", t[t.FNC1_SECOND_POSITION = 8] = "FNC1_SECOND_POSITION", t[t.HANZI = 9] = "HANZI"
                    }(x || (x = {}));
                    class me {
                        constructor(t, e, r, n) {
                            this.value = t, this.stringValue = e, this.characterCountBitsForVersions = r, this.bits = n, me.FOR_BITS.set(n, this), me.FOR_VALUE.set(t, this)
                        }
                        static forBits(t) {
                            const e = me.FOR_BITS.get(t);
                            if (void 0 === e) throw new a;
                            return e
                        }
                        getCharacterCountBits(t) {
                            const e = t.getVersionNumber();
                            let r;
                            return r = e <= 9 ? 0 : e <= 26 ? 1 : 2, this.characterCountBitsForVersions[r]
                        }
                        getValue() {
                            return this.value
                        }
                        getBits() {
                            return this.bits
                        }
                        equals(t) {
                            if (!(t instanceof me)) return !1;
                            const e = t;
                            return this.value === e.value
                        }
                        toString() {
                            return this.stringValue
                        }
                    }
                    me.FOR_BITS = new Map, me.FOR_VALUE = new Map, me.TERMINATOR = new me(x.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0), me.NUMERIC = new me(x.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1), me.ALPHANUMERIC = new me(x.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2), me.STRUCTURED_APPEND = new me(x.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3), me.BYTE = new me(x.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4), me.ECI = new me(x.ECI, "ECI", Int32Array.from([0, 0, 0]), 7), me.KANJI = new me(x.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8), me.FNC1_FIRST_POSITION = new me(x.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5), me.FNC1_SECOND_POSITION = new me(x.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9), me.HANZI = new me(x.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13);
                    class pe {
                        static decode(t, e, r, n) {
                            const i = new ae(t);
                            let o = new D;
                            const s = new Array;
                            let a = -1,
                                A = -1;
                            try {
                                let t, r = null,
                                    l = !1;
                                do {
                                    if (i.available() < 4) t = me.TERMINATOR;
                                    else {
                                        const e = i.readBits(4);
                                        t = me.forBits(e)
                                    }
                                    switch (t) {
                                        case me.TERMINATOR:
                                            break;
                                        case me.FNC1_FIRST_POSITION:
                                        case me.FNC1_SECOND_POSITION:
                                            l = !0;
                                            break;
                                        case me.STRUCTURED_APPEND:
                                            if (i.available() < 16) throw new E;
                                            a = i.readBits(8), A = i.readBits(8);
                                            break;
                                        case me.ECI:
                                            const c = pe.parseECIValue(i);
                                            if (r = m.getCharacterSetECIByValue(c), null === r) throw new E;
                                            break;
                                        case me.HANZI:
                                            const h = i.readBits(4),
                                                g = i.readBits(t.getCharacterCountBits(e));
                                            h === pe.GB2312_SUBSET && pe.decodeHanziSegment(i, o, g);
                                            break;
                                        default:
                                            const d = i.readBits(t.getCharacterCountBits(e));
                                            switch (t) {
                                                case me.NUMERIC:
                                                    pe.decodeNumericSegment(i, o, d);
                                                    break;
                                                case me.ALPHANUMERIC:
                                                    pe.decodeAlphanumericSegment(i, o, d, l);
                                                    break;
                                                case me.BYTE:
                                                    pe.decodeByteSegment(i, o, d, r, s, n);
                                                    break;
                                                case me.KANJI:
                                                    pe.decodeKanjiSegment(i, o, d);
                                                    break;
                                                default:
                                                    throw new E
                                            }
                                    }
                                } while (t !== me.TERMINATOR)
                            } catch (t) {
                                throw new E
                            }
                            return new V(t, o.toString(), 0 === s.length ? null : s, null === r ? null : r.toString(), a, A)
                        }
                        static decodeHanziSegment(t, e, r) {
                            if (13 * r > t.available()) throw new E;
                            const n = new Uint8Array(2 * r);
                            let i = 0;
                            for (; r > 0;) {
                                const e = t.readBits(13);
                                let o = e / 96 << 8 & 4294967295 | e % 96;
                                o += o < 959 ? 41377 : 42657, n[i] = o >> 8 & 255, n[i + 1] = 255 & o, i += 2, r--
                            }
                            try {
                                e.append(S.decode(n, R.GB2312))
                            } catch (t) {
                                throw new E(t)
                            }
                        }
                        static decodeKanjiSegment(t, e, r) {
                            if (13 * r > t.available()) throw new E;
                            const n = new Uint8Array(2 * r);
                            let i = 0;
                            for (; r > 0;) {
                                const e = t.readBits(13);
                                let o = e / 192 << 8 & 4294967295 | e % 192;
                                o += o < 7936 ? 33088 : 49472, n[i] = o >> 8, n[i + 1] = o, i += 2, r--
                            }
                            try {
                                e.append(S.decode(n, R.SHIFT_JIS))
                            } catch (t) {
                                throw new E(t)
                            }
                        }
                        static decodeByteSegment(t, e, r, n, i, o) {
                            if (8 * r > t.available()) throw new E;
                            const s = new Uint8Array(r);
                            for (let e = 0; e < r; e++) s[e] = t.readBits(8);
                            let a;
                            a = null === n ? R.guessEncoding(s, o) : n.getName();
                            try {
                                e.append(S.decode(s, a))
                            } catch (t) {
                                throw new E(t)
                            }
                            i.push(s)
                        }
                        static toAlphaNumericChar(t) {
                            if (t >= pe.ALPHANUMERIC_CHARS.length) throw new E;
                            return pe.ALPHANUMERIC_CHARS[t]
                        }
                        static decodeAlphanumericSegment(t, e, r, n) {
                            const i = e.length();
                            for (; r > 1;) {
                                if (t.available() < 11) throw new E;
                                const n = t.readBits(11);
                                e.append(pe.toAlphaNumericChar(Math.floor(n / 45))), e.append(pe.toAlphaNumericChar(n % 45)), r -= 2
                            }
                            if (1 === r) {
                                if (t.available() < 6) throw new E;
                                e.append(pe.toAlphaNumericChar(t.readBits(6)))
                            }
                            if (n)
                                for (let t = i; t < e.length(); t++) "%" === e.charAt(t) && (t < e.length() - 1 && "%" === e.charAt(t + 1) ? e.deleteCharAt(t + 1) : e.setCharAt(t, String.fromCharCode(29)))
                        }
                        static decodeNumericSegment(t, e, r) {
                            for (; r >= 3;) {
                                if (t.available() < 10) throw new E;
                                const n = t.readBits(10);
                                if (n >= 1e3) throw new E;
                                e.append(pe.toAlphaNumericChar(Math.floor(n / 100))), e.append(pe.toAlphaNumericChar(Math.floor(n / 10) % 10)), e.append(pe.toAlphaNumericChar(n % 10)), r -= 3
                            }
                            if (2 === r) {
                                if (t.available() < 7) throw new E;
                                const r = t.readBits(7);
                                if (r >= 100) throw new E;
                                e.append(pe.toAlphaNumericChar(Math.floor(r / 10))), e.append(pe.toAlphaNumericChar(r % 10))
                            } else if (1 === r) {
                                if (t.available() < 4) throw new E;
                                const r = t.readBits(4);
                                if (r >= 10) throw new E;
                                e.append(pe.toAlphaNumericChar(r))
                            }
                        }
                        static parseECIValue(t) {
                            const e = t.readBits(8);
                            if (0 == (128 & e)) return 127 & e;
                            if (128 == (192 & e)) return (63 & e) << 8 & 4294967295 | t.readBits(8);
                            if (192 == (224 & e)) return (31 & e) << 16 & 4294967295 | t.readBits(16);
                            throw new E
                        }
                    }
                    pe.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", pe.GB2312_SUBSET = 1;
                    class Se {
                        constructor(t) {
                            this.mirrored = t
                        }
                        isMirrored() {
                            return this.mirrored
                        }
                        applyMirroredCorrection(t) {
                            if (!this.mirrored || null === t || t.length < 3) return;
                            const e = t[0];
                            t[0] = t[2], t[2] = e
                        }
                    }
                    class Re {
                        constructor() {
                            this.rsDecoder = new $(J.QR_CODE_FIELD_256)
                        }
                        decodeBooleanArray(t, e) {
                            return this.decodeBitMatrix(B.parseFromBooleanArray(t), e)
                        }
                        decodeBitMatrix(t, e) {
                            const r = new we(t);
                            let n = null;
                            try {
                                return this.decodeBitMatrixParser(r, e)
                            } catch (t) {
                                n = t
                            }
                            try {
                                r.remask(), r.setMirror(!0), r.readVersion(), r.readFormatInformation(), r.mirror();
                                const t = this.decodeBitMatrixParser(r, e);
                                return t.setOther(new Se(!0)), t
                            } catch (t) {
                                if (null !== n) throw n;
                                throw t
                            }
                        }
                        decodeBitMatrixParser(t, e) {
                            const r = t.readVersion(),
                                n = t.readFormatInformation().getErrorCorrectionLevel(),
                                i = t.readCodewords(),
                                o = Ee.getDataBlocks(i, r, n);
                            let s = 0;
                            for (const t of o) s += t.getNumDataCodewords();
                            const a = new Uint8Array(s);
                            let A = 0;
                            for (const t of o) {
                                const e = t.getCodewords(),
                                    r = t.getNumDataCodewords();
                                this.correctErrors(e, r);
                                for (let t = 0; t < r; t++) a[A++] = e[t]
                            }
                            return pe.decode(a, r, n, e)
                        }
                        correctErrors(t, e) {
                            const r = new Int32Array(t);
                            try {
                                this.rsDecoder.decode(r, t.length - e)
                            } catch (t) {
                                throw new l
                            }
                            for (let n = 0; n < e; n++) t[n] = r[n]
                        }
                    }
                    class De extends nt {
                        constructor(t, e, r) {
                            super(t, e), this.estimatedModuleSize = r
                        }
                        aboutEquals(t, e, r) {
                            if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
                                const e = Math.abs(t - this.estimatedModuleSize);
                                return e <= 1 || e <= this.estimatedModuleSize
                            }
                            return !1
                        }
                        combineEstimate(t, e, r) {
                            const n = (this.getX() + e) / 2,
                                i = (this.getY() + t) / 2,
                                o = (this.estimatedModuleSize + r) / 2;
                            return new De(n, i, o)
                        }
                    }
                    class Be {
                        constructor(t, e, r, n, i, o, s) {
                            this.image = t, this.startX = e, this.startY = r, this.width = n, this.height = i, this.moduleSize = o, this.resultPointCallback = s, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(3)
                        }
                        find() {
                            const t = this.startX,
                                e = this.height,
                                r = t + this.width,
                                n = this.startY + e / 2,
                                i = new Int32Array(3),
                                o = this.image;
                            for (let s = 0; s < e; s++) {
                                const e = n + (0 == (1 & s) ? Math.floor((s + 1) / 2) : -Math.floor((s + 1) / 2));
                                i[0] = 0, i[1] = 0, i[2] = 0;
                                let a = t;
                                for (; a < r && !o.get(a, e);) a++;
                                let A = 0;
                                for (; a < r;) {
                                    if (o.get(a, e))
                                        if (1 === A) i[1]++;
                                        else if (2 === A) {
                                        if (this.foundPatternCross(i)) {
                                            const t = this.handlePossibleCenter(i, e, a);
                                            if (null !== t) return t
                                        }
                                        i[0] = i[2], i[1] = 1, i[2] = 0, A = 1
                                    } else i[++A]++;
                                    else 1 === A && A++, i[A]++;
                                    a++
                                }
                                if (this.foundPatternCross(i)) {
                                    const t = this.handlePossibleCenter(i, e, r);
                                    if (null !== t) return t
                                }
                            }
                            if (0 !== this.possibleCenters.length) return this.possibleCenters[0];
                            throw new M
                        }
                        static centerFromEnd(t, e) {
                            return e - t[2] - t[1] / 2
                        }
                        foundPatternCross(t) {
                            const e = this.moduleSize,
                                r = e / 2;
                            for (let n = 0; n < 3; n++)
                                if (Math.abs(e - t[n]) >= r) return !1;
                            return !0
                        }
                        crossCheckVertical(t, e, r, n) {
                            const i = this.image,
                                o = i.getHeight(),
                                s = this.crossCheckStateCount;
                            s[0] = 0, s[1] = 0, s[2] = 0;
                            let a = t;
                            for (; a >= 0 && i.get(e, a) && s[1] <= r;) s[1]++, a--;
                            if (a < 0 || s[1] > r) return NaN;
                            for (; a >= 0 && !i.get(e, a) && s[0] <= r;) s[0]++, a--;
                            if (s[0] > r) return NaN;
                            for (a = t + 1; a < o && i.get(e, a) && s[1] <= r;) s[1]++, a++;
                            if (a === o || s[1] > r) return NaN;
                            for (; a < o && !i.get(e, a) && s[2] <= r;) s[2]++, a++;
                            if (s[2] > r) return NaN;
                            const A = s[0] + s[1] + s[2];
                            return 5 * Math.abs(A - n) >= 2 * n ? NaN : this.foundPatternCross(s) ? Be.centerFromEnd(s, a) : NaN
                        }
                        handlePossibleCenter(t, e, r) {
                            const n = t[0] + t[1] + t[2],
                                i = Be.centerFromEnd(t, r),
                                o = this.crossCheckVertical(e, i, 2 * t[1], n);
                            if (!isNaN(o)) {
                                const e = (t[0] + t[1] + t[2]) / 3;
                                for (const t of this.possibleCenters)
                                    if (t.aboutEquals(e, o, i)) return t.combineEstimate(o, i, e);
                                const r = new De(i, o, e);
                                this.possibleCenters.push(r), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(r)
                            }
                            return null
                        }
                    }
                    class Me extends nt {
                        constructor(t, e, r, n) {
                            super(t, e), this.estimatedModuleSize = r, this.count = n, void 0 === n && (this.count = 1)
                        }
                        getEstimatedModuleSize() {
                            return this.estimatedModuleSize
                        }
                        getCount() {
                            return this.count
                        }
                        aboutEquals(t, e, r) {
                            if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
                                const e = Math.abs(t - this.estimatedModuleSize);
                                return e <= 1 || e <= this.estimatedModuleSize
                            }
                            return !1
                        }
                        combineEstimate(t, e, r) {
                            const n = this.count + 1,
                                i = (this.count * this.getX() + e) / n,
                                o = (this.count * this.getY() + t) / n,
                                s = (this.count * this.estimatedModuleSize + r) / n;
                            return new Me(i, o, s, n)
                        }
                    }
                    class Te {
                        constructor(t) {
                            this.bottomLeft = t[0], this.topLeft = t[1], this.topRight = t[2]
                        }
                        getBottomLeft() {
                            return this.bottomLeft
                        }
                        getTopLeft() {
                            return this.topLeft
                        }
                        getTopRight() {
                            return this.topRight
                        }
                    }
                    class Ne {
                        constructor(t, e) {
                            this.image = t, this.resultPointCallback = e, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(5), this.resultPointCallback = e
                        }
                        getImage() {
                            return this.image
                        }
                        getPossibleCenters() {
                            return this.possibleCenters
                        }
                        find(t) {
                            const e = null != t && void 0 !== t.get(w.TRY_HARDER),
                                r = null != t && void 0 !== t.get(w.PURE_BARCODE),
                                n = this.image,
                                i = n.getHeight(),
                                o = n.getWidth();
                            let s = Math.floor(3 * i / (4 * Ne.MAX_MODULES));
                            (s < Ne.MIN_SKIP || e) && (s = Ne.MIN_SKIP);
                            let a = !1;
                            const A = new Int32Array(5);
                            for (let t = s - 1; t < i && !a; t += s) {
                                A[0] = 0, A[1] = 0, A[2] = 0, A[3] = 0, A[4] = 0;
                                let e = 0;
                                for (let i = 0; i < o; i++)
                                    if (n.get(i, t)) 1 == (1 & e) && e++, A[e]++;
                                    else if (0 == (1 & e))
                                    if (4 === e)
                                        if (Ne.foundPatternCross(A)) {
                                            if (!0 !== this.handlePossibleCenter(A, t, i, r)) {
                                                A[0] = A[2], A[1] = A[3], A[2] = A[4], A[3] = 1, A[4] = 0, e = 3;
                                                continue
                                            }
                                            if (s = 2, !0 === this.hasSkipped) a = this.haveMultiplyConfirmedCenters();
                                            else {
                                                const e = this.findRowSkip();
                                                e > A[2] && (t += e - A[2] - s, i = o - 1)
                                            }
                                            e = 0, A[0] = 0, A[1] = 0, A[2] = 0, A[3] = 0, A[4] = 0
                                        } else A[0] = A[2], A[1] = A[3], A[2] = A[4], A[3] = 1, A[4] = 0, e = 3;
                                else A[++e]++;
                                else A[e]++;
                                Ne.foundPatternCross(A) && !0 === this.handlePossibleCenter(A, t, o, r) && (s = A[0], this.hasSkipped && (a = this.haveMultiplyConfirmedCenters()))
                            }
                            const l = this.selectBestPatterns();
                            return nt.orderBestPatterns(l), new Te(l)
                        }
                        static centerFromEnd(t, e) {
                            return e - t[4] - t[3] - t[2] / 2
                        }
                        static foundPatternCross(t) {
                            let e = 0;
                            for (let r = 0; r < 5; r++) {
                                const n = t[r];
                                if (0 === n) return !1;
                                e += n
                            }
                            if (e < 7) return !1;
                            const r = e / 7,
                                n = r / 2;
                            return Math.abs(r - t[0]) < n && Math.abs(r - t[1]) < n && Math.abs(3 * r - t[2]) < 3 * n && Math.abs(r - t[3]) < n && Math.abs(r - t[4]) < n
                        }
                        getCrossCheckStateCount() {
                            const t = this.crossCheckStateCount;
                            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t
                        }
                        crossCheckDiagonal(t, e, r, n) {
                            const i = this.getCrossCheckStateCount();
                            let o = 0;
                            const s = this.image;
                            for (; t >= o && e >= o && s.get(e - o, t - o);) i[2]++, o++;
                            if (t < o || e < o) return !1;
                            for (; t >= o && e >= o && !s.get(e - o, t - o) && i[1] <= r;) i[1]++, o++;
                            if (t < o || e < o || i[1] > r) return !1;
                            for (; t >= o && e >= o && s.get(e - o, t - o) && i[0] <= r;) i[0]++, o++;
                            if (i[0] > r) return !1;
                            const a = s.getHeight(),
                                A = s.getWidth();
                            for (o = 1; t + o < a && e + o < A && s.get(e + o, t + o);) i[2]++, o++;
                            if (t + o >= a || e + o >= A) return !1;
                            for (; t + o < a && e + o < A && !s.get(e + o, t + o) && i[3] < r;) i[3]++, o++;
                            if (t + o >= a || e + o >= A || i[3] >= r) return !1;
                            for (; t + o < a && e + o < A && s.get(e + o, t + o) && i[4] < r;) i[4]++, o++;
                            if (i[4] >= r) return !1;
                            const l = i[0] + i[1] + i[2] + i[3] + i[4];
                            return Math.abs(l - n) < 2 * n && Ne.foundPatternCross(i)
                        }
                        crossCheckVertical(t, e, r, n) {
                            const i = this.image,
                                o = i.getHeight(),
                                s = this.getCrossCheckStateCount();
                            let a = t;
                            for (; a >= 0 && i.get(e, a);) s[2]++, a--;
                            if (a < 0) return NaN;
                            for (; a >= 0 && !i.get(e, a) && s[1] <= r;) s[1]++, a--;
                            if (a < 0 || s[1] > r) return NaN;
                            for (; a >= 0 && i.get(e, a) && s[0] <= r;) s[0]++, a--;
                            if (s[0] > r) return NaN;
                            for (a = t + 1; a < o && i.get(e, a);) s[2]++, a++;
                            if (a === o) return NaN;
                            for (; a < o && !i.get(e, a) && s[3] < r;) s[3]++, a++;
                            if (a === o || s[3] >= r) return NaN;
                            for (; a < o && i.get(e, a) && s[4] < r;) s[4]++, a++;
                            if (s[4] >= r) return NaN;
                            const A = s[0] + s[1] + s[2] + s[3] + s[4];
                            return 5 * Math.abs(A - n) >= 2 * n ? NaN : Ne.foundPatternCross(s) ? Ne.centerFromEnd(s, a) : NaN
                        }
                        crossCheckHorizontal(t, e, r, n) {
                            const i = this.image,
                                o = i.getWidth(),
                                s = this.getCrossCheckStateCount();
                            let a = t;
                            for (; a >= 0 && i.get(a, e);) s[2]++, a--;
                            if (a < 0) return NaN;
                            for (; a >= 0 && !i.get(a, e) && s[1] <= r;) s[1]++, a--;
                            if (a < 0 || s[1] > r) return NaN;
                            for (; a >= 0 && i.get(a, e) && s[0] <= r;) s[0]++, a--;
                            if (s[0] > r) return NaN;
                            for (a = t + 1; a < o && i.get(a, e);) s[2]++, a++;
                            if (a === o) return NaN;
                            for (; a < o && !i.get(a, e) && s[3] < r;) s[3]++, a++;
                            if (a === o || s[3] >= r) return NaN;
                            for (; a < o && i.get(a, e) && s[4] < r;) s[4]++, a++;
                            if (s[4] >= r) return NaN;
                            const A = s[0] + s[1] + s[2] + s[3] + s[4];
                            return 5 * Math.abs(A - n) >= n ? NaN : Ne.foundPatternCross(s) ? Ne.centerFromEnd(s, a) : NaN
                        }
                        handlePossibleCenter(t, e, r, n) {
                            const i = t[0] + t[1] + t[2] + t[3] + t[4];
                            let o = Ne.centerFromEnd(t, r),
                                s = this.crossCheckVertical(e, Math.floor(o), t[2], i);
                            if (!isNaN(s) && (o = this.crossCheckHorizontal(Math.floor(o), Math.floor(s), t[2], i), !isNaN(o) && (!n || this.crossCheckDiagonal(Math.floor(s), Math.floor(o), t[2], i)))) {
                                const t = i / 7;
                                let e = !1;
                                const r = this.possibleCenters;
                                for (let n = 0, i = r.length; n < i; n++) {
                                    const i = r[n];
                                    if (i.aboutEquals(t, s, o)) {
                                        r[n] = i.combineEstimate(s, o, t), e = !0;
                                        break
                                    }
                                }
                                if (!e) {
                                    const e = new Me(o, s, t);
                                    r.push(e), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(e)
                                }
                                return !0
                            }
                            return !1
                        }
                        findRowSkip() {
                            if (this.possibleCenters.length <= 1) return 0;
                            let t = null;
                            for (const e of this.possibleCenters)
                                if (e.getCount() >= Ne.CENTER_QUORUM) {
                                    if (null != t) return this.hasSkipped = !0, Math.floor((Math.abs(t.getX() - e.getX()) - Math.abs(t.getY() - e.getY())) / 2);
                                    t = e
                                } return 0
                        }
                        haveMultiplyConfirmedCenters() {
                            let t = 0,
                                e = 0;
                            const r = this.possibleCenters.length;
                            for (const r of this.possibleCenters) r.getCount() >= Ne.CENTER_QUORUM && (t++, e += r.getEstimatedModuleSize());
                            if (t < 3) return !1;
                            const n = e / r;
                            let i = 0;
                            for (const t of this.possibleCenters) i += Math.abs(t.getEstimatedModuleSize() - n);
                            return i <= .05 * e
                        }
                        selectBestPatterns() {
                            const t = this.possibleCenters.length;
                            if (t < 3) throw new M;
                            const e = this.possibleCenters;
                            let r;
                            if (t > 3) {
                                let n = 0,
                                    i = 0;
                                for (const t of this.possibleCenters) {
                                    const e = t.getEstimatedModuleSize();
                                    n += e, i += e * e
                                }
                                r = n / t;
                                let o = Math.sqrt(i / t - r * r);
                                e.sort(((t, e) => {
                                    const n = Math.abs(e.getEstimatedModuleSize() - r),
                                        i = Math.abs(t.getEstimatedModuleSize() - r);
                                    return n < i ? -1 : n > i ? 1 : 0
                                }));
                                const s = Math.max(.2 * r, o);
                                for (let t = 0; t < e.length && e.length > 3; t++) {
                                    const n = e[t];
                                    Math.abs(n.getEstimatedModuleSize() - r) > s && (e.splice(t, 1), t--)
                                }
                            }
                            if (e.length > 3) {
                                let t = 0;
                                for (const r of e) t += r.getEstimatedModuleSize();
                                r = t / e.length, e.sort(((t, e) => {
                                    if (e.getCount() === t.getCount()) {
                                        const n = Math.abs(e.getEstimatedModuleSize() - r),
                                            i = Math.abs(t.getEstimatedModuleSize() - r);
                                        return n < i ? 1 : n > i ? -1 : 0
                                    }
                                    return e.getCount() - t.getCount()
                                })), e.splice(3)
                            }
                            return [e[0], e[1], e[2]]
                        }
                    }
                    Ne.CENTER_QUORUM = 2, Ne.MIN_SKIP = 3, Ne.MAX_MODULES = 57;
                    class ye {
                        constructor(t) {
                            this.image = t
                        }
                        getImage() {
                            return this.image
                        }
                        getResultPointCallback() {
                            return this.resultPointCallback
                        }
                        detect(t) {
                            this.resultPointCallback = null == t ? null : t.get(w.NEED_RESULT_POINT_CALLBACK);
                            const e = new Ne(this.image, this.resultPointCallback).find(t);
                            return this.processFinderPatternInfo(e)
                        }
                        processFinderPatternInfo(t) {
                            const e = t.getTopLeft(),
                                r = t.getTopRight(),
                                n = t.getBottomLeft(),
                                i = this.calculateModuleSize(e, r, n);
                            if (i < 1) throw new M("No pattern found in proccess finder.");
                            const o = ye.computeDimension(e, r, n, i),
                                s = Ie.getProvisionalVersionForDimension(o),
                                a = s.getDimensionForVersion() - 7;
                            let A = null;
                            if (s.getAlignmentPatternCenters().length > 0) {
                                const t = r.getX() - e.getX() + n.getX(),
                                    o = r.getY() - e.getY() + n.getY(),
                                    s = 1 - 3 / a,
                                    l = Math.floor(e.getX() + s * (t - e.getX())),
                                    c = Math.floor(e.getY() + s * (o - e.getY()));
                                for (let t = 4; t <= 16; t <<= 1) try {
                                    A = this.findAlignmentInRegion(i, l, c, t);
                                    break
                                } catch (t) {
                                    if (!(t instanceof M)) throw t
                                }
                            }
                            const l = ye.createTransform(e, r, n, A, o),
                                c = ye.sampleGrid(this.image, l, o);
                            let h;
                            return h = null === A ? [n, e, r] : [n, e, r, A], new it(c, h)
                        }
                        static createTransform(t, e, r, n, i) {
                            const o = i - 3.5;
                            let s, a, A, l;
                            return null !== n ? (s = n.getX(), a = n.getY(), A = o - 3, l = A) : (s = e.getX() - t.getX() + r.getX(), a = e.getY() - t.getY() + r.getY(), A = o, l = o), At.quadrilateralToQuadrilateral(3.5, 3.5, o, 3.5, A, l, 3.5, o, t.getX(), t.getY(), e.getX(), e.getY(), s, a, r.getX(), r.getY())
                        }
                        static sampleGrid(t, e, r) {
                            return ct.getInstance().sampleGridWithTransform(t, r, r, e)
                        }
                        static computeDimension(t, e, r, n) {
                            const i = et.round(nt.distance(t, e) / n),
                                o = et.round(nt.distance(t, r) / n);
                            let s = Math.floor((i + o) / 2) + 7;
                            switch (3 & s) {
                                case 0:
                                    s++;
                                    break;
                                case 2:
                                    s--;
                                    break;
                                case 3:
                                    throw new M("Dimensions could be not found.")
                            }
                            return s
                        }
                        calculateModuleSize(t, e, r) {
                            return (this.calculateModuleSizeOneWay(t, e) + this.calculateModuleSizeOneWay(t, r)) / 2
                        }
                        calculateModuleSizeOneWay(t, e) {
                            const r = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t.getX()), Math.floor(t.getY()), Math.floor(e.getX()), Math.floor(e.getY())),
                                n = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e.getX()), Math.floor(e.getY()), Math.floor(t.getX()), Math.floor(t.getY()));
                            return isNaN(r) ? n / 7 : isNaN(n) ? r / 7 : (r + n) / 14
                        }
                        sizeOfBlackWhiteBlackRunBothWays(t, e, r, n) {
                            let i = this.sizeOfBlackWhiteBlackRun(t, e, r, n),
                                o = 1,
                                s = t - (r - t);
                            s < 0 ? (o = t / (t - s), s = 0) : s >= this.image.getWidth() && (o = (this.image.getWidth() - 1 - t) / (s - t), s = this.image.getWidth() - 1);
                            let a = Math.floor(e - (n - e) * o);
                            return o = 1, a < 0 ? (o = e / (e - a), a = 0) : a >= this.image.getHeight() && (o = (this.image.getHeight() - 1 - e) / (a - e), a = this.image.getHeight() - 1), s = Math.floor(t + (s - t) * o), i += this.sizeOfBlackWhiteBlackRun(t, e, s, a), i - 1
                        }
                        sizeOfBlackWhiteBlackRun(t, e, r, n) {
                            const i = Math.abs(n - e) > Math.abs(r - t);
                            if (i) {
                                let i = t;
                                t = e, e = i, i = r, r = n, n = i
                            }
                            const o = Math.abs(r - t),
                                s = Math.abs(n - e);
                            let a = -o / 2;
                            const A = t < r ? 1 : -1,
                                l = e < n ? 1 : -1;
                            let c = 0;
                            const h = r + A;
                            for (let r = t, g = e; r !== h; r += A) {
                                const A = i ? g : r,
                                    h = i ? r : g;
                                if (1 === c === this.image.get(A, h)) {
                                    if (2 === c) return et.distance(r, g, t, e);
                                    c++
                                }
                                if (a += s, a > 0) {
                                    if (g === n) break;
                                    g += l, a -= o
                                }
                            }
                            return 2 === c ? et.distance(r + A, n, t, e) : NaN
                        }
                        findAlignmentInRegion(t, e, r, n) {
                            const i = Math.floor(n * t),
                                o = Math.max(0, e - i),
                                s = Math.min(this.image.getWidth() - 1, e + i);
                            if (s - o < 3 * t) throw new M("Alignment top exceeds estimated module size.");
                            const a = Math.max(0, r - i),
                                A = Math.min(this.image.getHeight() - 1, r + i);
                            if (A - a < 3 * t) throw new M("Alignment bottom exceeds estimated module size.");
                            return new Be(this.image, o, a, s - o, A - a, t, this.resultPointCallback).find()
                        }
                    }
                    class _e {
                        constructor() {
                            this.decoder = new Re
                        }
                        getDecoder() {
                            return this.decoder
                        }
                        decode(t, e) {
                            let r, n;
                            if (null != e && void 0 !== e.get(w.PURE_BARCODE)) {
                                const i = _e.extractPureBits(t.getBlackMatrix());
                                r = this.decoder.decodeBitMatrix(i, e), n = _e.NO_POINTS
                            } else {
                                const i = new ye(t.getBlackMatrix()).detect(e);
                                r = this.decoder.decodeBitMatrix(i.getBits(), e), n = i.getPoints()
                            }
                            r.getOther() instanceof Se && r.getOther().applyMirroredCorrection(n);
                            const i = new L(r.getText(), r.getRawBytes(), void 0, n, Q.QR_CODE, void 0),
                                o = r.getByteSegments();
                            null !== o && i.putMetadata(H.BYTE_SEGMENTS, o);
                            const s = r.getECLevel();
                            return null !== s && i.putMetadata(H.ERROR_CORRECTION_LEVEL, s), r.hasStructuredAppend() && (i.putMetadata(H.STRUCTURED_APPEND_SEQUENCE, r.getStructuredAppendSequenceNumber()), i.putMetadata(H.STRUCTURED_APPEND_PARITY, r.getStructuredAppendParity())), i
                        }
                        reset() {}
                        static extractPureBits(t) {
                            const e = t.getTopLeftOnBit(),
                                r = t.getBottomRightOnBit();
                            if (null === e || null === r) throw new M;
                            const n = this.moduleSize(e, t);
                            let i = e[1],
                                o = r[1],
                                s = e[0],
                                a = r[0];
                            if (s >= a || i >= o) throw new M;
                            if (o - i != a - s && (a = s + (o - i), a >= t.getWidth())) throw new M;
                            const A = Math.round((a - s + 1) / n),
                                l = Math.round((o - i + 1) / n);
                            if (A <= 0 || l <= 0) throw new M;
                            if (l !== A) throw new M;
                            const c = Math.floor(n / 2);
                            i += c, s += c;
                            const h = s + Math.floor((A - 1) * n) - a;
                            if (h > 0) {
                                if (h > c) throw new M;
                                s -= h
                            }
                            const g = i + Math.floor((l - 1) * n) - o;
                            if (g > 0) {
                                if (g > c) throw new M;
                                i -= g
                            }
                            const d = new B(A, l);
                            for (let e = 0; e < l; e++) {
                                const r = i + Math.floor(e * n);
                                for (let i = 0; i < A; i++) t.get(s + Math.floor(i * n), r) && d.set(i, e)
                            }
                            return d
                        }
                        static moduleSize(t, e) {
                            const r = e.getHeight(),
                                n = e.getWidth();
                            let i = t[0],
                                o = t[1],
                                s = !0,
                                a = 0;
                            for (; i < n && o < r;) {
                                if (s !== e.get(i, o)) {
                                    if (5 == ++a) break;
                                    s = !s
                                }
                                i++, o++
                            }
                            if (i === n || o === r) throw new M;
                            return (i - t[0]) / 7
                        }
                    }
                    _e.NO_POINTS = new Array;
                    class Oe {
                        PDF417Common() {}
                        static getBitCountSum(t) {
                            return et.sum(t)
                        }
                        static toIntArray(t) {
                            if (null == t || !t.length) return Oe.EMPTY_INT_ARRAY;
                            const e = new Int32Array(t.length);
                            let r = 0;
                            for (const n of t) e[r++] = n;
                            return e
                        }
                        static getCodeword(t) {
                            const e = u.binarySearch(Oe.SYMBOL_TABLE, 262143 & t);
                            return e < 0 ? -1 : (Oe.CODEWORD_TABLE[e] - 1) % Oe.NUMBER_OF_CODEWORDS
                        }
                    }
                    Oe.NUMBER_OF_CODEWORDS = 929, Oe.MAX_CODEWORDS_IN_BARCODE = Oe.NUMBER_OF_CODEWORDS - 1, Oe.MIN_ROWS_IN_BARCODE = 3, Oe.MAX_ROWS_IN_BARCODE = 90, Oe.MODULES_IN_CODEWORD = 17, Oe.MODULES_IN_STOP_PATTERN = 18, Oe.BARS_IN_MODULE = 8, Oe.EMPTY_INT_ARRAY = new Int32Array([]), Oe.SYMBOL_TABLE = Int32Array.from([66142, 66170, 66206, 66236, 66290, 66292, 66350, 66382, 66396, 66454, 66470, 66476, 66594, 66600, 66614, 66626, 66628, 66632, 66640, 66654, 66662, 66668, 66682, 66690, 66718, 66720, 66748, 66758, 66776, 66798, 66802, 66804, 66820, 66824, 66832, 66846, 66848, 66876, 66880, 66936, 66950, 66956, 66968, 66992, 67006, 67022, 67036, 67042, 67044, 67048, 67062, 67118, 67150, 67164, 67214, 67228, 67256, 67294, 67322, 67350, 67366, 67372, 67398, 67404, 67416, 67438, 67474, 67476, 67490, 67492, 67496, 67510, 67618, 67624, 67650, 67656, 67664, 67678, 67686, 67692, 67706, 67714, 67716, 67728, 67742, 67744, 67772, 67782, 67788, 67800, 67822, 67826, 67828, 67842, 67848, 67870, 67872, 67900, 67904, 67960, 67974, 67992, 68016, 68030, 68046, 68060, 68066, 68068, 68072, 68086, 68104, 68112, 68126, 68128, 68156, 68160, 68216, 68336, 68358, 68364, 68376, 68400, 68414, 68448, 68476, 68494, 68508, 68536, 68546, 68548, 68552, 68560, 68574, 68582, 68588, 68654, 68686, 68700, 68706, 68708, 68712, 68726, 68750, 68764, 68792, 68802, 68804, 68808, 68816, 68830, 68838, 68844, 68858, 68878, 68892, 68920, 68976, 68990, 68994, 68996, 69e3, 69008, 69022, 69024, 69052, 69062, 69068, 69080, 69102, 69106, 69108, 69142, 69158, 69164, 69190, 69208, 69230, 69254, 69260, 69272, 69296, 69310, 69326, 69340, 69386, 69394, 69396, 69410, 69416, 69430, 69442, 69444, 69448, 69456, 69470, 69478, 69484, 69554, 69556, 69666, 69672, 69698, 69704, 69712, 69726, 69754, 69762, 69764, 69776, 69790, 69792, 69820, 69830, 69836, 69848, 69870, 69874, 69876, 69890, 69918, 69920, 69948, 69952, 70008, 70022, 70040, 70064, 70078, 70094, 70108, 70114, 70116, 70120, 70134, 70152, 70174, 70176, 70264, 70384, 70412, 70448, 70462, 70496, 70524, 70542, 70556, 70584, 70594, 70600, 70608, 70622, 70630, 70636, 70664, 70672, 70686, 70688, 70716, 70720, 70776, 70896, 71136, 71180, 71192, 71216, 71230, 71264, 71292, 71360, 71416, 71452, 71480, 71536, 71550, 71554, 71556, 71560, 71568, 71582, 71584, 71612, 71622, 71628, 71640, 71662, 71726, 71732, 71758, 71772, 71778, 71780, 71784, 71798, 71822, 71836, 71864, 71874, 71880, 71888, 71902, 71910, 71916, 71930, 71950, 71964, 71992, 72048, 72062, 72066, 72068, 72080, 72094, 72096, 72124, 72134, 72140, 72152, 72174, 72178, 72180, 72206, 72220, 72248, 72304, 72318, 72416, 72444, 72456, 72464, 72478, 72480, 72508, 72512, 72568, 72588, 72600, 72624, 72638, 72654, 72668, 72674, 72676, 72680, 72694, 72726, 72742, 72748, 72774, 72780, 72792, 72814, 72838, 72856, 72880, 72894, 72910, 72924, 72930, 72932, 72936, 72950, 72966, 72972, 72984, 73008, 73022, 73056, 73084, 73102, 73116, 73144, 73156, 73160, 73168, 73182, 73190, 73196, 73210, 73226, 73234, 73236, 73250, 73252, 73256, 73270, 73282, 73284, 73296, 73310, 73318, 73324, 73346, 73348, 73352, 73360, 73374, 73376, 73404, 73414, 73420, 73432, 73454, 73498, 73518, 73522, 73524, 73550, 73564, 73570, 73572, 73576, 73590, 73800, 73822, 73858, 73860, 73872, 73886, 73888, 73916, 73944, 73970, 73972, 73992, 74014, 74016, 74044, 74048, 74104, 74118, 74136, 74160, 74174, 74210, 74212, 74216, 74230, 74244, 74256, 74270, 74272, 74360, 74480, 74502, 74508, 74544, 74558, 74592, 74620, 74638, 74652, 74680, 74690, 74696, 74704, 74726, 74732, 74782, 74784, 74812, 74992, 75232, 75288, 75326, 75360, 75388, 75456, 75512, 75576, 75632, 75646, 75650, 75652, 75664, 75678, 75680, 75708, 75718, 75724, 75736, 75758, 75808, 75836, 75840, 75896, 76016, 76256, 76736, 76824, 76848, 76862, 76896, 76924, 76992, 77048, 77296, 77340, 77368, 77424, 77438, 77536, 77564, 77572, 77576, 77584, 77600, 77628, 77632, 77688, 77702, 77708, 77720, 77744, 77758, 77774, 77788, 77870, 77902, 77916, 77922, 77928, 77966, 77980, 78008, 78018, 78024, 78032, 78046, 78060, 78074, 78094, 78136, 78192, 78206, 78210, 78212, 78224, 78238, 78240, 78268, 78278, 78284, 78296, 78322, 78324, 78350, 78364, 78448, 78462, 78560, 78588, 78600, 78622, 78624, 78652, 78656, 78712, 78726, 78744, 78768, 78782, 78798, 78812, 78818, 78820, 78824, 78838, 78862, 78876, 78904, 78960, 78974, 79072, 79100, 79296, 79352, 79368, 79376, 79390, 79392, 79420, 79424, 79480, 79600, 79628, 79640, 79664, 79678, 79712, 79740, 79772, 79800, 79810, 79812, 79816, 79824, 79838, 79846, 79852, 79894, 79910, 79916, 79942, 79948, 79960, 79982, 79988, 80006, 80024, 80048, 80062, 80078, 80092, 80098, 80100, 80104, 80134, 80140, 80176, 80190, 80224, 80252, 80270, 80284, 80312, 80328, 80336, 80350, 80358, 80364, 80378, 80390, 80396, 80408, 80432, 80446, 80480, 80508, 80576, 80632, 80654, 80668, 80696, 80752, 80766, 80776, 80784, 80798, 80800, 80828, 80844, 80856, 80878, 80882, 80884, 80914, 80916, 80930, 80932, 80936, 80950, 80962, 80968, 80976, 80990, 80998, 81004, 81026, 81028, 81040, 81054, 81056, 81084, 81094, 81100, 81112, 81134, 81154, 81156, 81160, 81168, 81182, 81184, 81212, 81216, 81272, 81286, 81292, 81304, 81328, 81342, 81358, 81372, 81380, 81384, 81398, 81434, 81454, 81458, 81460, 81486, 81500, 81506, 81508, 81512, 81526, 81550, 81564, 81592, 81602, 81604, 81608, 81616, 81630, 81638, 81644, 81702, 81708, 81722, 81734, 81740, 81752, 81774, 81778, 81780, 82050, 82078, 82080, 82108, 82180, 82184, 82192, 82206, 82208, 82236, 82240, 82296, 82316, 82328, 82352, 82366, 82402, 82404, 82408, 82440, 82448, 82462, 82464, 82492, 82496, 82552, 82672, 82694, 82700, 82712, 82736, 82750, 82784, 82812, 82830, 82882, 82884, 82888, 82896, 82918, 82924, 82952, 82960, 82974, 82976, 83004, 83008, 83064, 83184, 83424, 83468, 83480, 83504, 83518, 83552, 83580, 83648, 83704, 83740, 83768, 83824, 83838, 83842, 83844, 83848, 83856, 83872, 83900, 83910, 83916, 83928, 83950, 83984, 84e3, 84028, 84032, 84088, 84208, 84448, 84928, 85040, 85054, 85088, 85116, 85184, 85240, 85488, 85560, 85616, 85630, 85728, 85756, 85764, 85768, 85776, 85790, 85792, 85820, 85824, 85880, 85894, 85900, 85912, 85936, 85966, 85980, 86048, 86080, 86136, 86256, 86496, 86976, 88160, 88188, 88256, 88312, 88560, 89056, 89200, 89214, 89312, 89340, 89536, 89592, 89608, 89616, 89632, 89664, 89720, 89840, 89868, 89880, 89904, 89952, 89980, 89998, 90012, 90040, 90190, 90204, 90254, 90268, 90296, 90306, 90308, 90312, 90334, 90382, 90396, 90424, 90480, 90494, 90500, 90504, 90512, 90526, 90528, 90556, 90566, 90572, 90584, 90610, 90612, 90638, 90652, 90680, 90736, 90750, 90848, 90876, 90884, 90888, 90896, 90910, 90912, 90940, 90944, 91e3, 91014, 91020, 91032, 91056, 91070, 91086, 91100, 91106, 91108, 91112, 91126, 91150, 91164, 91192, 91248, 91262, 91360, 91388, 91584, 91640, 91664, 91678, 91680, 91708, 91712, 91768, 91888, 91928, 91952, 91966, 92e3, 92028, 92046, 92060, 92088, 92098, 92100, 92104, 92112, 92126, 92134, 92140, 92188, 92216, 92272, 92384, 92412, 92608, 92664, 93168, 93200, 93214, 93216, 93244, 93248, 93304, 93424, 93664, 93720, 93744, 93758, 93792, 93820, 93888, 93944, 93980, 94008, 94064, 94078, 94084, 94088, 94096, 94110, 94112, 94140, 94150, 94156, 94168, 94246, 94252, 94278, 94284, 94296, 94318, 94342, 94348, 94360, 94384, 94398, 94414, 94428, 94440, 94470, 94476, 94488, 94512, 94526, 94560, 94588, 94606, 94620, 94648, 94658, 94660, 94664, 94672, 94686, 94694, 94700, 94714, 94726, 94732, 94744, 94768, 94782, 94816, 94844, 94912, 94968, 94990, 95004, 95032, 95088, 95102, 95112, 95120, 95134, 95136, 95164, 95180, 95192, 95214, 95218, 95220, 95244, 95256, 95280, 95294, 95328, 95356, 95424, 95480, 95728, 95758, 95772, 95800, 95856, 95870, 95968, 95996, 96008, 96016, 96030, 96032, 96060, 96064, 96120, 96152, 96176, 96190, 96220, 96226, 96228, 96232, 96290, 96292, 96296, 96310, 96322, 96324, 96328, 96336, 96350, 96358, 96364, 96386, 96388, 96392, 96400, 96414, 96416, 96444, 96454, 96460, 96472, 96494, 96498, 96500, 96514, 96516, 96520, 96528, 96542, 96544, 96572, 96576, 96632, 96646, 96652, 96664, 96688, 96702, 96718, 96732, 96738, 96740, 96744, 96758, 96772, 96776, 96784, 96798, 96800, 96828, 96832, 96888, 97008, 97030, 97036, 97048, 97072, 97086, 97120, 97148, 97166, 97180, 97208, 97220, 97224, 97232, 97246, 97254, 97260, 97326, 97330, 97332, 97358, 97372, 97378, 97380, 97384, 97398, 97422, 97436, 97464, 97474, 97476, 97480, 97488, 97502, 97510, 97516, 97550, 97564, 97592, 97648, 97666, 97668, 97672, 97680, 97694, 97696, 97724, 97734, 97740, 97752, 97774, 97830, 97836, 97850, 97862, 97868, 97880, 97902, 97906, 97908, 97926, 97932, 97944, 97968, 97998, 98012, 98018, 98020, 98024, 98038, 98618, 98674, 98676, 98838, 98854, 98874, 98892, 98904, 98926, 98930, 98932, 98968, 99006, 99042, 99044, 99048, 99062, 99166, 99194, 99246, 99286, 99350, 99366, 99372, 99386, 99398, 99416, 99438, 99442, 99444, 99462, 99504, 99518, 99534, 99548, 99554, 99556, 99560, 99574, 99590, 99596, 99608, 99632, 99646, 99680, 99708, 99726, 99740, 99768, 99778, 99780, 99784, 99792, 99806, 99814, 99820, 99834, 99858, 99860, 99874, 99880, 99894, 99906, 99920, 99934, 99962, 99970, 99972, 99976, 99984, 99998, 1e5, 100028, 100038, 100044, 100056, 100078, 100082, 100084, 100142, 100174, 100188, 100246, 100262, 100268, 100306, 100308, 100390, 100396, 100410, 100422, 100428, 100440, 100462, 100466, 100468, 100486, 100504, 100528, 100542, 100558, 100572, 100578, 100580, 100584, 100598, 100620, 100656, 100670, 100704, 100732, 100750, 100792, 100802, 100808, 100816, 100830, 100838, 100844, 100858, 100888, 100912, 100926, 100960, 100988, 101056, 101112, 101148, 101176, 101232, 101246, 101250, 101252, 101256, 101264, 101278, 101280, 101308, 101318, 101324, 101336, 101358, 101362, 101364, 101410, 101412, 101416, 101430, 101442, 101448, 101456, 101470, 101478, 101498, 101506, 101508, 101520, 101534, 101536, 101564, 101580, 101618, 101620, 101636, 101640, 101648, 101662, 101664, 101692, 101696, 101752, 101766, 101784, 101838, 101858, 101860, 101864, 101934, 101938, 101940, 101966, 101980, 101986, 101988, 101992, 102030, 102044, 102072, 102082, 102084, 102088, 102096, 102138, 102166, 102182, 102188, 102214, 102220, 102232, 102254, 102282, 102290, 102292, 102306, 102308, 102312, 102326, 102444, 102458, 102470, 102476, 102488, 102514, 102516, 102534, 102552, 102576, 102590, 102606, 102620, 102626, 102632, 102646, 102662, 102668, 102704, 102718, 102752, 102780, 102798, 102812, 102840, 102850, 102856, 102864, 102878, 102886, 102892, 102906, 102936, 102974, 103008, 103036, 103104, 103160, 103224, 103280, 103294, 103298, 103300, 103312, 103326, 103328, 103356, 103366, 103372, 103384, 103406, 103410, 103412, 103472, 103486, 103520, 103548, 103616, 103672, 103920, 103992, 104048, 104062, 104160, 104188, 104194, 104196, 104200, 104208, 104224, 104252, 104256, 104312, 104326, 104332, 104344, 104368, 104382, 104398, 104412, 104418, 104420, 104424, 104482, 104484, 104514, 104520, 104528, 104542, 104550, 104570, 104578, 104580, 104592, 104606, 104608, 104636, 104652, 104690, 104692, 104706, 104712, 104734, 104736, 104764, 104768, 104824, 104838, 104856, 104910, 104930, 104932, 104936, 104968, 104976, 104990, 104992, 105020, 105024, 105080, 105200, 105240, 105278, 105312, 105372, 105410, 105412, 105416, 105424, 105446, 105518, 105524, 105550, 105564, 105570, 105572, 105576, 105614, 105628, 105656, 105666, 105672, 105680, 105702, 105722, 105742, 105756, 105784, 105840, 105854, 105858, 105860, 105864, 105872, 105888, 105932, 105970, 105972, 106006, 106022, 106028, 106054, 106060, 106072, 106100, 106118, 106124, 106136, 106160, 106174, 106190, 106210, 106212, 106216, 106250, 106258, 106260, 106274, 106276, 106280, 106306, 106308, 106312, 106320, 106334, 106348, 106394, 106414, 106418, 106420, 106566, 106572, 106610, 106612, 106630, 106636, 106648, 106672, 106686, 106722, 106724, 106728, 106742, 106758, 106764, 106776, 106800, 106814, 106848, 106876, 106894, 106908, 106936, 106946, 106948, 106952, 106960, 106974, 106982, 106988, 107032, 107056, 107070, 107104, 107132, 107200, 107256, 107292, 107320, 107376, 107390, 107394, 107396, 107400, 107408, 107422, 107424, 107452, 107462, 107468, 107480, 107502, 107506, 107508, 107544, 107568, 107582, 107616, 107644, 107712, 107768, 108016, 108060, 108088, 108144, 108158, 108256, 108284, 108290, 108292, 108296, 108304, 108318, 108320, 108348, 108352, 108408, 108422, 108428, 108440, 108464, 108478, 108494, 108508, 108514, 108516, 108520, 108592, 108640, 108668, 108736, 108792, 109040, 109536, 109680, 109694, 109792, 109820, 110016, 110072, 110084, 110088, 110096, 110112, 110140, 110144, 110200, 110320, 110342, 110348, 110360, 110384, 110398, 110432, 110460, 110478, 110492, 110520, 110532, 110536, 110544, 110558, 110658, 110686, 110714, 110722, 110724, 110728, 110736, 110750, 110752, 110780, 110796, 110834, 110836, 110850, 110852, 110856, 110864, 110878, 110880, 110908, 110912, 110968, 110982, 111e3, 111054, 111074, 111076, 111080, 111108, 111112, 111120, 111134, 111136, 111164, 111168, 111224, 111344, 111372, 111422, 111456, 111516, 111554, 111556, 111560, 111568, 111590, 111632, 111646, 111648, 111676, 111680, 111736, 111856, 112096, 112152, 112224, 112252, 112320, 112440, 112514, 112516, 112520, 112528, 112542, 112544, 112588, 112686, 112718, 112732, 112782, 112796, 112824, 112834, 112836, 112840, 112848, 112870, 112890, 112910, 112924, 112952, 113008, 113022, 113026, 113028, 113032, 113040, 113054, 113056, 113100, 113138, 113140, 113166, 113180, 113208, 113264, 113278, 113376, 113404, 113416, 113424, 113440, 113468, 113472, 113560, 113614, 113634, 113636, 113640, 113686, 113702, 113708, 113734, 113740, 113752, 113778, 113780, 113798, 113804, 113816, 113840, 113854, 113870, 113890, 113892, 113896, 113926, 113932, 113944, 113968, 113982, 114016, 114044, 114076, 114114, 114116, 114120, 114128, 114150, 114170, 114194, 114196, 114210, 114212, 114216, 114242, 114244, 114248, 114256, 114270, 114278, 114306, 114308, 114312, 114320, 114334, 114336, 114364, 114380, 114420, 114458, 114478, 114482, 114484, 114510, 114524, 114530, 114532, 114536, 114842, 114866, 114868, 114970, 114994, 114996, 115042, 115044, 115048, 115062, 115130, 115226, 115250, 115252, 115278, 115292, 115298, 115300, 115304, 115318, 115342, 115394, 115396, 115400, 115408, 115422, 115430, 115436, 115450, 115478, 115494, 115514, 115526, 115532, 115570, 115572, 115738, 115758, 115762, 115764, 115790, 115804, 115810, 115812, 115816, 115830, 115854, 115868, 115896, 115906, 115912, 115920, 115934, 115942, 115948, 115962, 115996, 116024, 116080, 116094, 116098, 116100, 116104, 116112, 116126, 116128, 116156, 116166, 116172, 116184, 116206, 116210, 116212, 116246, 116262, 116268, 116282, 116294, 116300, 116312, 116334, 116338, 116340, 116358, 116364, 116376, 116400, 116414, 116430, 116444, 116450, 116452, 116456, 116498, 116500, 116514, 116520, 116534, 116546, 116548, 116552, 116560, 116574, 116582, 116588, 116602, 116654, 116694, 116714, 116762, 116782, 116786, 116788, 116814, 116828, 116834, 116836, 116840, 116854, 116878, 116892, 116920, 116930, 116936, 116944, 116958, 116966, 116972, 116986, 117006, 117048, 117104, 117118, 117122, 117124, 117136, 117150, 117152, 117180, 117190, 117196, 117208, 117230, 117234, 117236, 117304, 117360, 117374, 117472, 117500, 117506, 117508, 117512, 117520, 117536, 117564, 117568, 117624, 117638, 117644, 117656, 117680, 117694, 117710, 117724, 117730, 117732, 117736, 117750, 117782, 117798, 117804, 117818, 117830, 117848, 117874, 117876, 117894, 117936, 117950, 117966, 117986, 117988, 117992, 118022, 118028, 118040, 118064, 118078, 118112, 118140, 118172, 118210, 118212, 118216, 118224, 118238, 118246, 118266, 118306, 118312, 118338, 118352, 118366, 118374, 118394, 118402, 118404, 118408, 118416, 118430, 118432, 118460, 118476, 118514, 118516, 118574, 118578, 118580, 118606, 118620, 118626, 118628, 118632, 118678, 118694, 118700, 118730, 118738, 118740, 118830, 118834, 118836, 118862, 118876, 118882, 118884, 118888, 118902, 118926, 118940, 118968, 118978, 118980, 118984, 118992, 119006, 119014, 119020, 119034, 119068, 119096, 119152, 119166, 119170, 119172, 119176, 119184, 119198, 119200, 119228, 119238, 119244, 119256, 119278, 119282, 119284, 119324, 119352, 119408, 119422, 119520, 119548, 119554, 119556, 119560, 119568, 119582, 119584, 119612, 119616, 119672, 119686, 119692, 119704, 119728, 119742, 119758, 119772, 119778, 119780, 119784, 119798, 119920, 119934, 120032, 120060, 120256, 120312, 120324, 120328, 120336, 120352, 120384, 120440, 120560, 120582, 120588, 120600, 120624, 120638, 120672, 120700, 120718, 120732, 120760, 120770, 120772, 120776, 120784, 120798, 120806, 120812, 120870, 120876, 120890, 120902, 120908, 120920, 120946, 120948, 120966, 120972, 120984, 121008, 121022, 121038, 121058, 121060, 121064, 121078, 121100, 121112, 121136, 121150, 121184, 121212, 121244, 121282, 121284, 121288, 121296, 121318, 121338, 121356, 121368, 121392, 121406, 121440, 121468, 121536, 121592, 121656, 121730, 121732, 121736, 121744, 121758, 121760, 121804, 121842, 121844, 121890, 121922, 121924, 121928, 121936, 121950, 121958, 121978, 121986, 121988, 121992, 122e3, 122014, 122016, 122044, 122060, 122098, 122100, 122116, 122120, 122128, 122142, 122144, 122172, 122176, 122232, 122246, 122264, 122318, 122338, 122340, 122344, 122414, 122418, 122420, 122446, 122460, 122466, 122468, 122472, 122510, 122524, 122552, 122562, 122564, 122568, 122576, 122598, 122618, 122646, 122662, 122668, 122694, 122700, 122712, 122738, 122740, 122762, 122770, 122772, 122786, 122788, 122792, 123018, 123026, 123028, 123042, 123044, 123048, 123062, 123098, 123146, 123154, 123156, 123170, 123172, 123176, 123190, 123202, 123204, 123208, 123216, 123238, 123244, 123258, 123290, 123314, 123316, 123402, 123410, 123412, 123426, 123428, 123432, 123446, 123458, 123464, 123472, 123486, 123494, 123500, 123514, 123522, 123524, 123528, 123536, 123552, 123580, 123590, 123596, 123608, 123630, 123634, 123636, 123674, 123698, 123700, 123740, 123746, 123748, 123752, 123834, 123914, 123922, 123924, 123938, 123944, 123958, 123970, 123976, 123984, 123998, 124006, 124012, 124026, 124034, 124036, 124048, 124062, 124064, 124092, 124102, 124108, 124120, 124142, 124146, 124148, 124162, 124164, 124168, 124176, 124190, 124192, 124220, 124224, 124280, 124294, 124300, 124312, 124336, 124350, 124366, 124380, 124386, 124388, 124392, 124406, 124442, 124462, 124466, 124468, 124494, 124508, 124514, 124520, 124558, 124572, 124600, 124610, 124612, 124616, 124624, 124646, 124666, 124694, 124710, 124716, 124730, 124742, 124748, 124760, 124786, 124788, 124818, 124820, 124834, 124836, 124840, 124854, 124946, 124948, 124962, 124964, 124968, 124982, 124994, 124996, 125e3, 125008, 125022, 125030, 125036, 125050, 125058, 125060, 125064, 125072, 125086, 125088, 125116, 125126, 125132, 125144, 125166, 125170, 125172, 125186, 125188, 125192, 125200, 125216, 125244, 125248, 125304, 125318, 125324, 125336, 125360, 125374, 125390, 125404, 125410, 125412, 125416, 125430, 125444, 125448, 125456, 125472, 125504, 125560, 125680, 125702, 125708, 125720, 125744, 125758, 125792, 125820, 125838, 125852, 125880, 125890, 125892, 125896, 125904, 125918, 125926, 125932, 125978, 125998, 126002, 126004, 126030, 126044, 126050, 126052, 126056, 126094, 126108, 126136, 126146, 126148, 126152, 126160, 126182, 126202, 126222, 126236, 126264, 126320, 126334, 126338, 126340, 126344, 126352, 126366, 126368, 126412, 126450, 126452, 126486, 126502, 126508, 126522, 126534, 126540, 126552, 126574, 126578, 126580, 126598, 126604, 126616, 126640, 126654, 126670, 126684, 126690, 126692, 126696, 126738, 126754, 126756, 126760, 126774, 126786, 126788, 126792, 126800, 126814, 126822, 126828, 126842, 126894, 126898, 126900, 126934, 127126, 127142, 127148, 127162, 127178, 127186, 127188, 127254, 127270, 127276, 127290, 127302, 127308, 127320, 127342, 127346, 127348, 127370, 127378, 127380, 127394, 127396, 127400, 127450, 127510, 127526, 127532, 127546, 127558, 127576, 127598, 127602, 127604, 127622, 127628, 127640, 127664, 127678, 127694, 127708, 127714, 127716, 127720, 127734, 127754, 127762, 127764, 127778, 127784, 127810, 127812, 127816, 127824, 127838, 127846, 127866, 127898, 127918, 127922, 127924, 128022, 128038, 128044, 128058, 128070, 128076, 128088, 128110, 128114, 128116, 128134, 128140, 128152, 128176, 128190, 128206, 128220, 128226, 128228, 128232, 128246, 128262, 128268, 128280, 128304, 128318, 128352, 128380, 128398, 128412, 128440, 128450, 128452, 128456, 128464, 128478, 128486, 128492, 128506, 128522, 128530, 128532, 128546, 128548, 128552, 128566, 128578, 128580, 128584, 128592, 128606, 128614, 128634, 128642, 128644, 128648, 128656, 128670, 128672, 128700, 128716, 128754, 128756, 128794, 128814, 128818, 128820, 128846, 128860, 128866, 128868, 128872, 128886, 128918, 128934, 128940, 128954, 128978, 128980, 129178, 129198, 129202, 129204, 129238, 129258, 129306, 129326, 129330, 129332, 129358, 129372, 129378, 129380, 129384, 129398, 129430, 129446, 129452, 129466, 129482, 129490, 129492, 129562, 129582, 129586, 129588, 129614, 129628, 129634, 129636, 129640, 129654, 129678, 129692, 129720, 129730, 129732, 129736, 129744, 129758, 129766, 129772, 129814, 129830, 129836, 129850, 129862, 129868, 129880, 129902, 129906, 129908, 129930, 129938, 129940, 129954, 129956, 129960, 129974, 130010]), Oe.CODEWORD_TABLE = Int32Array.from([2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779, 2774, 2773, 902, 896, 908, 868, 865, 861, 859, 2511, 873, 871, 1780, 835, 2493, 825, 2491, 842, 837, 844, 1764, 1762, 811, 810, 809, 2483, 807, 2482, 806, 2480, 815, 814, 813, 812, 2484, 817, 816, 1745, 1744, 1742, 1746, 2655, 2637, 2635, 2626, 2625, 2623, 2628, 1820, 2752, 2739, 2737, 2728, 2727, 2725, 2730, 2785, 2783, 2778, 2777, 2775, 2780, 787, 781, 747, 739, 736, 2413, 754, 752, 1719, 692, 689, 681, 2371, 678, 2369, 700, 697, 694, 703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651, 646, 643, 2345, 654, 652, 1652, 1650, 1647, 1654, 601, 599, 2322, 596, 2321, 594, 2319, 2317, 611, 610, 608, 606, 2324, 603, 2323, 615, 614, 612, 1617, 1616, 1614, 1612, 616, 1619, 1618, 2575, 2538, 2536, 905, 901, 898, 909, 2509, 2507, 2504, 870, 867, 864, 860, 2512, 875, 872, 1781, 2490, 2489, 2487, 2485, 1748, 836, 834, 832, 830, 2494, 827, 2492, 843, 841, 839, 845, 1765, 1763, 2701, 2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631, 2629, 1821, 2638, 2636, 2770, 2763, 2761, 2750, 2745, 2753, 2736, 2735, 2733, 2731, 1848, 2740, 2738, 2786, 2784, 591, 588, 576, 569, 566, 2296, 1590, 537, 534, 526, 2276, 522, 2274, 545, 542, 539, 548, 1572, 1570, 481, 2245, 466, 2242, 462, 2239, 492, 485, 482, 2249, 496, 494, 1534, 1531, 1528, 1538, 413, 2196, 406, 2191, 2188, 425, 419, 2202, 415, 2199, 432, 430, 427, 1472, 1467, 1464, 433, 1476, 1474, 368, 367, 2160, 365, 2159, 362, 2157, 2155, 2152, 378, 377, 375, 2166, 372, 2165, 369, 2162, 383, 381, 379, 2168, 1419, 1418, 1416, 1414, 385, 1411, 384, 1423, 1422, 1420, 1424, 2461, 802, 2441, 2439, 790, 786, 783, 794, 2409, 2406, 2403, 750, 742, 738, 2414, 756, 753, 1720, 2367, 2365, 2362, 2359, 1663, 693, 691, 684, 2373, 680, 2370, 702, 699, 696, 704, 1690, 1687, 2337, 2336, 2334, 2332, 1624, 2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650, 648, 645, 2346, 655, 653, 1653, 1651, 1649, 1655, 2612, 2597, 2595, 2571, 2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907, 904, 900, 910, 2503, 2502, 2500, 2498, 1768, 2495, 1767, 2510, 2508, 2506, 869, 866, 863, 2513, 876, 874, 1782, 2720, 2713, 2711, 2697, 2694, 2691, 2702, 2672, 2670, 2664, 1828, 2678, 2675, 2647, 2646, 2644, 2642, 1823, 2639, 1822, 2654, 2652, 2650, 2657, 2771, 1855, 2765, 2762, 1850, 1849, 2751, 2749, 2747, 2754, 353, 2148, 344, 342, 336, 2142, 332, 2140, 345, 1375, 1373, 306, 2130, 299, 2128, 295, 2125, 319, 314, 311, 2132, 1354, 1352, 1349, 1356, 262, 257, 2101, 253, 2096, 2093, 274, 273, 267, 2107, 263, 2104, 280, 278, 275, 1316, 1311, 1308, 1320, 1318, 2052, 202, 2050, 2044, 2040, 219, 2063, 212, 2060, 208, 2055, 224, 221, 2066, 1260, 1258, 1252, 231, 1248, 229, 1266, 1264, 1261, 1268, 155, 1998, 153, 1996, 1994, 1991, 1988, 165, 164, 2007, 162, 2006, 159, 2003, 2e3, 172, 171, 169, 2012, 166, 2010, 1186, 1184, 1182, 1179, 175, 1176, 173, 1192, 1191, 1189, 1187, 176, 1194, 1193, 2313, 2307, 2305, 592, 589, 2294, 2292, 2289, 578, 572, 568, 2297, 580, 1591, 2272, 2267, 2264, 1547, 538, 536, 529, 2278, 525, 2275, 547, 544, 541, 1574, 1571, 2237, 2235, 2229, 1493, 2225, 1489, 478, 2247, 470, 2244, 465, 2241, 493, 488, 484, 2250, 498, 495, 1536, 1533, 1530, 1539, 2187, 2186, 2184, 2182, 1432, 2179, 1430, 2176, 1427, 414, 412, 2197, 409, 2195, 405, 2193, 2190, 426, 424, 421, 2203, 418, 2201, 431, 429, 1473, 1471, 1469, 1466, 434, 1477, 1475, 2478, 2472, 2470, 2459, 2457, 2454, 2462, 803, 2437, 2432, 2429, 1726, 2443, 2440, 792, 789, 785, 2401, 2399, 2393, 1702, 2389, 1699, 2411, 2408, 2405, 745, 741, 2415, 758, 755, 1721, 2358, 2357, 2355, 2353, 1661, 2350, 1660, 2347, 1657, 2368, 2366, 2364, 2361, 1666, 690, 687, 2374, 683, 2372, 701, 698, 705, 1691, 1689, 2619, 2617, 2610, 2608, 2605, 2613, 2593, 2588, 2585, 1803, 2599, 2596, 2563, 2561, 2555, 1797, 2551, 1795, 2573, 2570, 2567, 2577, 2525, 2524, 2522, 2520, 1786, 2517, 1785, 2514, 1783, 2535, 2533, 2531, 2528, 1788, 2541, 2539, 906, 903, 911, 2721, 1844, 2715, 2712, 1838, 1836, 2699, 2696, 2693, 2703, 1827, 1826, 1824, 2673, 2671, 2669, 2666, 1829, 2679, 2677, 1858, 1857, 2772, 1854, 1853, 1851, 1856, 2766, 2764, 143, 1987, 139, 1986, 135, 133, 131, 1984, 128, 1983, 125, 1981, 138, 137, 136, 1985, 1133, 1132, 1130, 112, 110, 1974, 107, 1973, 104, 1971, 1969, 122, 121, 119, 117, 1977, 114, 1976, 124, 1115, 1114, 1112, 1110, 1117, 1116, 84, 83, 1953, 81, 1952, 78, 1950, 1948, 1945, 94, 93, 91, 1959, 88, 1958, 85, 1955, 99, 97, 95, 1961, 1086, 1085, 1083, 1081, 1078, 100, 1090, 1089, 1087, 1091, 49, 47, 1917, 44, 1915, 1913, 1910, 1907, 59, 1926, 56, 1925, 53, 1922, 1919, 66, 64, 1931, 61, 1929, 1042, 1040, 1038, 71, 1035, 70, 1032, 68, 1048, 1047, 1045, 1043, 1050, 1049, 12, 10, 1869, 1867, 1864, 1861, 21, 1880, 19, 1877, 1874, 1871, 28, 1888, 25, 1886, 22, 1883, 982, 980, 977, 974, 32, 30, 991, 989, 987, 984, 34, 995, 994, 992, 2151, 2150, 2147, 2146, 2144, 356, 355, 354, 2149, 2139, 2138, 2136, 2134, 1359, 343, 341, 338, 2143, 335, 2141, 348, 347, 346, 1376, 1374, 2124, 2123, 2121, 2119, 1326, 2116, 1324, 310, 308, 305, 2131, 302, 2129, 298, 2127, 320, 318, 316, 313, 2133, 322, 321, 1355, 1353, 1351, 1357, 2092, 2091, 2089, 2087, 1276, 2084, 1274, 2081, 1271, 259, 2102, 256, 2100, 252, 2098, 2095, 272, 269, 2108, 266, 2106, 281, 279, 277, 1317, 1315, 1313, 1310, 282, 1321, 1319, 2039, 2037, 2035, 2032, 1203, 2029, 1200, 1197, 207, 2053, 205, 2051, 201, 2049, 2046, 2043, 220, 218, 2064, 215, 2062, 211, 2059, 228, 226, 223, 2069, 1259, 1257, 1254, 232, 1251, 230, 1267, 1265, 1263, 2316, 2315, 2312, 2311, 2309, 2314, 2304, 2303, 2301, 2299, 1593, 2308, 2306, 590, 2288, 2287, 2285, 2283, 1578, 2280, 1577, 2295, 2293, 2291, 579, 577, 574, 571, 2298, 582, 581, 1592, 2263, 2262, 2260, 2258, 1545, 2255, 1544, 2252, 1541, 2273, 2271, 2269, 2266, 1550, 535, 532, 2279, 528, 2277, 546, 543, 549, 1575, 1573, 2224, 2222, 2220, 1486, 2217, 1485, 2214, 1482, 1479, 2238, 2236, 2234, 2231, 1496, 2228, 1492, 480, 477, 2248, 473, 2246, 469, 2243, 490, 487, 2251, 497, 1537, 1535, 1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466, 2464, 1730, 2473, 2471, 2453, 2452, 2450, 2448, 1729, 2445, 1728, 2460, 2458, 2456, 2463, 805, 804, 2428, 2427, 2425, 2423, 1725, 2420, 1724, 2417, 1722, 2438, 2436, 2434, 2431, 1727, 2444, 2442, 793, 791, 788, 795, 2388, 2386, 2384, 1697, 2381, 1696, 2378, 1694, 1692, 2402, 2400, 2398, 2395, 1703, 2392, 1701, 2412, 2410, 2407, 751, 748, 744, 2416, 759, 757, 1807, 2620, 2618, 1806, 1805, 2611, 2609, 2607, 2614, 1802, 1801, 1799, 2594, 2592, 2590, 2587, 1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564, 2562, 2560, 2557, 1798, 2554, 1796, 2574, 2572, 2569, 2578, 1847, 1846, 2722, 1843, 1842, 1840, 1845, 2716, 2714, 1835, 1834, 1832, 1830, 1839, 1837, 2700, 2698, 2695, 2704, 1817, 1811, 1810, 897, 862, 1777, 829, 826, 838, 1760, 1758, 808, 2481, 1741, 1740, 1738, 1743, 2624, 1818, 2726, 2776, 782, 740, 737, 1715, 686, 679, 695, 1682, 1680, 639, 628, 2339, 647, 644, 1645, 1643, 1640, 1648, 602, 600, 597, 595, 2320, 593, 2318, 609, 607, 604, 1611, 1610, 1608, 1606, 613, 1615, 1613, 2328, 926, 924, 892, 886, 899, 857, 850, 2505, 1778, 824, 823, 821, 819, 2488, 818, 2486, 833, 831, 828, 840, 1761, 1759, 2649, 2632, 2630, 2746, 2734, 2732, 2782, 2781, 570, 567, 1587, 531, 527, 523, 540, 1566, 1564, 476, 467, 463, 2240, 486, 483, 1524, 1521, 1518, 1529, 411, 403, 2192, 399, 2189, 423, 416, 1462, 1457, 1454, 428, 1468, 1465, 2210, 366, 363, 2158, 360, 2156, 357, 2153, 376, 373, 370, 2163, 1410, 1409, 1407, 1405, 382, 1402, 380, 1417, 1415, 1412, 1421, 2175, 2174, 777, 774, 771, 784, 732, 725, 722, 2404, 743, 1716, 676, 674, 668, 2363, 665, 2360, 685, 1684, 1681, 626, 624, 622, 2335, 620, 2333, 617, 2330, 641, 635, 649, 1646, 1644, 1642, 2566, 928, 925, 2530, 2527, 894, 891, 888, 2501, 2499, 2496, 858, 856, 854, 851, 1779, 2692, 2668, 2665, 2645, 2643, 2640, 2651, 2768, 2759, 2757, 2744, 2743, 2741, 2748, 352, 1382, 340, 337, 333, 1371, 1369, 307, 300, 296, 2126, 315, 312, 1347, 1342, 1350, 261, 258, 250, 2097, 246, 2094, 271, 268, 264, 1306, 1301, 1298, 276, 1312, 1309, 2115, 203, 2048, 195, 2045, 191, 2041, 213, 209, 2056, 1246, 1244, 1238, 225, 1234, 222, 1256, 1253, 1249, 1262, 2080, 2079, 154, 1997, 150, 1995, 147, 1992, 1989, 163, 160, 2004, 156, 2001, 1175, 1174, 1172, 1170, 1167, 170, 1164, 167, 1185, 1183, 1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586, 564, 559, 556, 2290, 573, 1588, 520, 518, 512, 2268, 508, 2265, 530, 1568, 1565, 461, 457, 2233, 450, 2230, 446, 2226, 479, 471, 489, 1526, 1523, 1520, 397, 395, 2185, 392, 2183, 389, 2180, 2177, 410, 2194, 402, 422, 1463, 1461, 1459, 1456, 1470, 2455, 799, 2433, 2430, 779, 776, 773, 2397, 2394, 2390, 734, 728, 724, 746, 1717, 2356, 2354, 2351, 2348, 1658, 677, 675, 673, 670, 667, 688, 1685, 1683, 2606, 2589, 2586, 2559, 2556, 2552, 927, 2523, 2521, 2518, 2515, 1784, 2532, 895, 893, 890, 2718, 2709, 2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667, 2769, 1852, 2760, 2758, 142, 141, 1139, 1138, 134, 132, 129, 126, 1982, 1129, 1128, 1126, 1131, 113, 111, 108, 105, 1972, 101, 1970, 120, 118, 115, 1109, 1108, 1106, 1104, 123, 1113, 1111, 82, 79, 1951, 75, 1949, 72, 1946, 92, 89, 86, 1956, 1077, 1076, 1074, 1072, 98, 1069, 96, 1084, 1082, 1079, 1088, 1968, 1967, 48, 45, 1916, 42, 1914, 39, 1911, 1908, 60, 57, 54, 1923, 50, 1920, 1031, 1030, 1028, 1026, 67, 1023, 65, 1020, 62, 1041, 1039, 1036, 1033, 69, 1046, 1044, 1944, 1943, 1941, 11, 9, 1868, 7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13, 1872, 970, 968, 966, 963, 29, 960, 26, 23, 983, 981, 978, 975, 33, 971, 31, 990, 988, 985, 1906, 1904, 1902, 993, 351, 2145, 1383, 331, 330, 328, 326, 2137, 323, 2135, 339, 1372, 1370, 294, 293, 291, 289, 2122, 286, 2120, 283, 2117, 309, 303, 317, 1348, 1346, 1344, 245, 244, 242, 2090, 239, 2088, 236, 2085, 2082, 260, 2099, 249, 270, 1307, 1305, 1303, 1300, 1314, 189, 2038, 186, 2036, 183, 2033, 2030, 2026, 206, 198, 2047, 194, 216, 1247, 1245, 1243, 1240, 227, 1237, 1255, 2310, 2302, 2300, 2286, 2284, 2281, 565, 563, 561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519, 517, 514, 2270, 511, 533, 1569, 1567, 2223, 2221, 2218, 2215, 1483, 2211, 1480, 459, 456, 453, 2232, 449, 474, 491, 1527, 1525, 1522, 2475, 2467, 2465, 2451, 2449, 2446, 801, 800, 2426, 2424, 2421, 2418, 1723, 2435, 780, 778, 775, 2387, 2385, 2382, 2379, 1695, 2375, 1693, 2396, 735, 733, 730, 727, 749, 1718, 2616, 2615, 2604, 2603, 2601, 2584, 2583, 2581, 2579, 1800, 2591, 2550, 2549, 2547, 2545, 1792, 2542, 1790, 2558, 929, 2719, 1841, 2710, 2708, 1833, 1831, 2690, 2688, 2686, 1815, 1809, 1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711, 1676, 1674, 633, 629, 1638, 1636, 1633, 1641, 598, 1605, 1604, 1602, 1600, 605, 1609, 1607, 2327, 887, 853, 1775, 822, 820, 1757, 1755, 1584, 524, 1560, 1558, 468, 464, 1514, 1511, 1508, 1519, 408, 404, 400, 1452, 1447, 1444, 417, 1458, 1455, 2208, 364, 361, 358, 2154, 1401, 1400, 1398, 1396, 374, 1393, 371, 1408, 1406, 1403, 1413, 2173, 2172, 772, 726, 723, 1712, 672, 669, 666, 682, 1678, 1675, 625, 623, 621, 618, 2331, 636, 632, 1639, 1637, 1635, 920, 918, 884, 880, 889, 849, 848, 847, 846, 2497, 855, 852, 1776, 2641, 2742, 2787, 1380, 334, 1367, 1365, 301, 297, 1340, 1338, 1335, 1343, 255, 251, 247, 1296, 1291, 1288, 265, 1302, 1299, 2113, 204, 196, 192, 2042, 1232, 1230, 1224, 214, 1220, 210, 1242, 1239, 1235, 1250, 2077, 2075, 151, 148, 1993, 144, 1990, 1163, 1162, 1160, 1158, 1155, 161, 1152, 157, 1173, 1171, 1168, 1165, 168, 1181, 1178, 2021, 2020, 2018, 2023, 585, 560, 557, 1585, 516, 509, 1562, 1559, 458, 447, 2227, 472, 1516, 1513, 1510, 398, 396, 393, 390, 2181, 386, 2178, 407, 1453, 1451, 1449, 1446, 420, 1460, 2209, 769, 764, 720, 712, 2391, 729, 1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679, 1677, 2553, 922, 919, 2519, 2516, 885, 883, 881, 2685, 2661, 2659, 2767, 2756, 2755, 140, 1137, 1136, 130, 127, 1125, 1124, 1122, 1127, 109, 106, 102, 1103, 1102, 1100, 1098, 116, 1107, 1105, 1980, 80, 76, 73, 1947, 1068, 1067, 1065, 1063, 90, 1060, 87, 1075, 1073, 1070, 1080, 1966, 1965, 46, 43, 40, 1912, 36, 1909, 1019, 1018, 1016, 1014, 58, 1011, 55, 1008, 51, 1029, 1027, 1024, 1021, 63, 1037, 1034, 1940, 1939, 1937, 1942, 8, 1866, 4, 1863, 1, 1860, 956, 954, 952, 949, 946, 17, 14, 969, 967, 964, 961, 27, 957, 24, 979, 976, 972, 1901, 1900, 1898, 1896, 986, 1905, 1903, 350, 349, 1381, 329, 327, 324, 1368, 1366, 292, 290, 287, 284, 2118, 304, 1341, 1339, 1337, 1345, 243, 240, 237, 2086, 233, 2083, 254, 1297, 1295, 1293, 1290, 1304, 2114, 190, 187, 184, 2034, 180, 2031, 177, 2027, 199, 1233, 1231, 1229, 1226, 217, 1223, 1241, 2078, 2076, 584, 555, 554, 552, 550, 2282, 562, 1586, 507, 506, 504, 502, 2257, 499, 2254, 515, 1563, 1561, 445, 443, 441, 2219, 438, 2216, 435, 2212, 460, 454, 475, 1517, 1515, 1512, 2447, 798, 797, 2422, 2419, 770, 768, 766, 2383, 2380, 2376, 721, 719, 717, 714, 731, 1714, 2602, 2582, 2580, 2548, 2546, 2543, 923, 921, 2717, 2706, 2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732, 1731, 1735, 1814, 1707, 1670, 1668, 1631, 1629, 1626, 1634, 1599, 1598, 1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581, 1554, 1552, 1504, 1501, 1498, 1509, 1442, 1437, 1434, 401, 1448, 1445, 2206, 1392, 1391, 1389, 1387, 1384, 359, 1399, 1397, 1394, 1404, 2171, 2170, 1708, 1672, 1669, 619, 1632, 1630, 1628, 1773, 1378, 1363, 1361, 1333, 1328, 1336, 1286, 1281, 1278, 248, 1292, 1289, 2111, 1218, 1216, 1210, 197, 1206, 193, 1228, 1225, 1221, 1236, 2073, 2071, 1151, 1150, 1148, 1146, 152, 1143, 149, 1140, 145, 1161, 1159, 1156, 1153, 158, 1169, 1166, 2017, 2016, 2014, 2019, 1582, 510, 1556, 1553, 452, 448, 1506, 1500, 394, 391, 387, 1443, 1441, 1439, 1436, 1450, 2207, 765, 716, 713, 1709, 662, 660, 657, 1673, 1671, 916, 914, 879, 878, 877, 882, 1135, 1134, 1121, 1120, 1118, 1123, 1097, 1096, 1094, 1092, 103, 1101, 1099, 1979, 1059, 1058, 1056, 1054, 77, 1051, 74, 1066, 1064, 1061, 1071, 1964, 1963, 1007, 1006, 1004, 1002, 999, 41, 996, 37, 1017, 1015, 1012, 1009, 52, 1025, 1022, 1936, 1935, 1933, 1938, 942, 940, 938, 935, 932, 5, 2, 955, 953, 950, 947, 18, 943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899, 1897, 1379, 325, 1364, 1362, 288, 285, 1334, 1332, 1330, 241, 238, 234, 1287, 1285, 1283, 1280, 1294, 2112, 188, 185, 181, 178, 2028, 1219, 1217, 1215, 1212, 200, 1209, 1227, 2074, 2072, 583, 553, 551, 1583, 505, 503, 500, 513, 1557, 1555, 444, 442, 439, 436, 2213, 455, 451, 1507, 1505, 1502, 796, 763, 762, 760, 767, 711, 710, 708, 706, 2377, 718, 715, 1710, 2544, 917, 915, 2681, 1627, 1597, 1595, 2325, 1769, 1749, 1747, 1499, 1438, 1435, 2204, 1390, 1388, 1385, 1395, 2169, 2167, 1704, 1665, 1662, 1625, 1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207, 1222, 2068, 2065, 1149, 1147, 1144, 1141, 146, 1157, 1154, 2013, 2011, 2008, 2015, 1579, 1549, 1546, 1495, 1487, 1433, 1431, 1428, 1425, 388, 1440, 2205, 1705, 658, 1667, 1664, 1119, 1095, 1093, 1978, 1057, 1055, 1052, 1062, 1962, 1960, 1005, 1003, 1e3, 997, 38, 1013, 1010, 1932, 1930, 1927, 1934, 941, 939, 936, 933, 6, 930, 3, 951, 948, 944, 1889, 1887, 1884, 1881, 959, 1893, 1891, 35, 1377, 1360, 1358, 1327, 1325, 1322, 1331, 1277, 1275, 1272, 1269, 235, 1284, 2110, 1205, 1204, 1201, 1198, 182, 1195, 179, 1213, 2070, 2067, 1580, 501, 1551, 1548, 440, 437, 1497, 1494, 1490, 1503, 761, 709, 707, 1706, 913, 912, 2198, 1386, 2164, 2161, 1621, 1766, 2103, 1208, 2058, 2054, 1145, 1142, 2005, 2002, 1999, 2009, 1488, 1429, 1426, 2200, 1698, 1659, 1656, 1975, 1053, 1957, 1954, 1001, 998, 1924, 1921, 1918, 1928, 937, 934, 931, 1879, 1876, 1873, 1870, 945, 1885, 1882, 1323, 1273, 1270, 2105, 1202, 1199, 1196, 1211, 2061, 2057, 1576, 1543, 1540, 1484, 1481, 1478, 1491, 1700]);
                    class be {
                        constructor(t, e) {
                            this.bits = t, this.points = e
                        }
                        getBits() {
                            return this.bits
                        }
                        getPoints() {
                            return this.points
                        }
                    }
                    class Fe {
                        static detectMultiple(t, e, r) {
                            let n = t.getBlackMatrix(),
                                i = Fe.detect(r, n);
                            return i.length || (n = n.clone(), n.rotate180(), i = Fe.detect(r, n)), new be(n, i)
                        }
                        static detect(t, e) {
                            const r = new Array;
                            let n = 0,
                                i = 0,
                                o = !1;
                            for (; n < e.getHeight();) {
                                const s = Fe.findVertices(e, n, i);
                                if (null != s[0] || null != s[3]) {
                                    if (o = !0, r.push(s), !t) break;
                                    null != s[2] ? (i = Math.trunc(s[2].getX()), n = Math.trunc(s[2].getY())) : (i = Math.trunc(s[4].getX()), n = Math.trunc(s[4].getY()))
                                } else {
                                    if (!o) break;
                                    o = !1, i = 0;
                                    for (const t of r) null != t[1] && (n = Math.trunc(Math.max(n, t[1].getY()))), null != t[3] && (n = Math.max(n, Math.trunc(t[3].getY())));
                                    n += Fe.ROW_STEP
                                }
                            }
                            return r
                        }
                        static findVertices(t, e, r) {
                            const n = t.getHeight(),
                                i = t.getWidth(),
                                o = new Array(8);
                            return Fe.copyToResult(o, Fe.findRowsWithPattern(t, n, i, e, r, Fe.START_PATTERN), Fe.INDEXES_START_PATTERN), null != o[4] && (r = Math.trunc(o[4].getX()), e = Math.trunc(o[4].getY())), Fe.copyToResult(o, Fe.findRowsWithPattern(t, n, i, e, r, Fe.STOP_PATTERN), Fe.INDEXES_STOP_PATTERN), o
                        }
                        static copyToResult(t, e, r) {
                            for (let n = 0; n < r.length; n++) t[r[n]] = e[n]
                        }
                        static findRowsWithPattern(t, e, r, n, i, o) {
                            const s = new Array(4);
                            let a = !1;
                            const A = new Int32Array(o.length);
                            for (; n < e; n += Fe.ROW_STEP) {
                                let e = Fe.findGuardPattern(t, i, n, r, !1, o, A);
                                if (null != e) {
                                    for (; n > 0;) {
                                        const s = Fe.findGuardPattern(t, i, --n, r, !1, o, A);
                                        if (null == s) {
                                            n++;
                                            break
                                        }
                                        e = s
                                    }
                                    s[0] = new nt(e[0], n), s[1] = new nt(e[1], n), a = !0;
                                    break
                                }
                            }
                            let l = n + 1;
                            if (a) {
                                let n = 0,
                                    i = Int32Array.from([Math.trunc(s[0].getX()), Math.trunc(s[1].getX())]);
                                for (; l < e; l++) {
                                    const e = Fe.findGuardPattern(t, i[0], l, r, !1, o, A);
                                    if (null != e && Math.abs(i[0] - e[0]) < Fe.MAX_PATTERN_DRIFT && Math.abs(i[1] - e[1]) < Fe.MAX_PATTERN_DRIFT) i = e, n = 0;
                                    else {
                                        if (n > Fe.SKIPPED_ROW_COUNT_MAX) break;
                                        n++
                                    }
                                }
                                l -= n + 1, s[2] = new nt(i[0], l), s[3] = new nt(i[1], l)
                            }
                            return l - n < Fe.BARCODE_MIN_HEIGHT && u.fill(s, null), s
                        }
                        static findGuardPattern(t, e, r, n, i, o, s) {
                            u.fillWithin(s, 0, s.length, 0);
                            let a = e,
                                A = 0;
                            for (; t.get(a, r) && a > 0 && A++ < Fe.MAX_PIXEL_DRIFT;) a--;
                            let l = a,
                                c = 0,
                                g = o.length;
                            for (let e = i; l < n; l++)
                                if (t.get(l, r) !== e) s[c]++;
                                else {
                                    if (c === g - 1) {
                                        if (Fe.patternMatchVariance(s, o, Fe.MAX_INDIVIDUAL_VARIANCE) < Fe.MAX_AVG_VARIANCE) return new Int32Array([a, l]);
                                        a += s[0] + s[1], h.arraycopy(s, 2, s, 0, c - 1), s[c - 1] = 0, s[c] = 0, c--
                                    } else c++;
                                    s[c] = 1, e = !e
                                } return c === g - 1 && Fe.patternMatchVariance(s, o, Fe.MAX_INDIVIDUAL_VARIANCE) < Fe.MAX_AVG_VARIANCE ? new Int32Array([a, l - 1]) : null
                        }
                        static patternMatchVariance(t, e, r) {
                            let n = t.length,
                                i = 0,
                                o = 0;
                            for (let r = 0; r < n; r++) i += t[r], o += e[r];
                            if (i < o) return 1 / 0;
                            let s = i / o;
                            r *= s;
                            let a = 0;
                            for (let i = 0; i < n; i++) {
                                let n = t[i],
                                    o = e[i] * s,
                                    A = n > o ? n - o : o - n;
                                if (A > r) return 1 / 0;
                                a += A
                            }
                            return a / i
                        }
                    }
                    Fe.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5]), Fe.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3]), Fe.MAX_AVG_VARIANCE = .42, Fe.MAX_INDIVIDUAL_VARIANCE = .8, Fe.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3]), Fe.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1]), Fe.MAX_PIXEL_DRIFT = 3, Fe.MAX_PATTERN_DRIFT = 5, Fe.SKIPPED_ROW_COUNT_MAX = 25, Fe.ROW_STEP = 5, Fe.BARCODE_MIN_HEIGHT = 10;
                    class Pe {
                        constructor(t, e) {
                            if (0 === e.length) throw new a;
                            this.field = t;
                            let r = e.length;
                            if (r > 1 && 0 === e[0]) {
                                let t = 1;
                                for (; t < r && 0 === e[t];) t++;
                                t === r ? this.coefficients = new Int32Array([0]) : (this.coefficients = new Int32Array(r - t), h.arraycopy(e, t, this.coefficients, 0, this.coefficients.length))
                            } else this.coefficients = e
                        }
                        getCoefficients() {
                            return this.coefficients
                        }
                        getDegree() {
                            return this.coefficients.length - 1
                        }
                        isZero() {
                            return 0 === this.coefficients[0]
                        }
                        getCoefficient(t) {
                            return this.coefficients[this.coefficients.length - 1 - t]
                        }
                        evaluateAt(t) {
                            if (0 === t) return this.getCoefficient(0);
                            if (1 === t) {
                                let t = 0;
                                for (let e of this.coefficients) t = this.field.add(t, e);
                                return t
                            }
                            let e = this.coefficients[0],
                                r = this.coefficients.length;
                            for (let n = 1; n < r; n++) e = this.field.add(this.field.multiply(t, e), this.coefficients[n]);
                            return e
                        }
                        add(t) {
                            if (!this.field.equals(t.field)) throw new a("ModulusPolys do not have same ModulusGF field");
                            if (this.isZero()) return t;
                            if (t.isZero()) return this;
                            let e = this.coefficients,
                                r = t.coefficients;
                            if (e.length > r.length) {
                                let t = e;
                                e = r, r = t
                            }
                            let n = new Int32Array(r.length),
                                i = r.length - e.length;
                            h.arraycopy(r, 0, n, 0, i);
                            for (let t = i; t < r.length; t++) n[t] = this.field.add(e[t - i], r[t]);
                            return new Pe(this.field, n)
                        }
                        subtract(t) {
                            if (!this.field.equals(t.field)) throw new a("ModulusPolys do not have same ModulusGF field");
                            return t.isZero() ? this : this.add(t.negative())
                        }
                        multiply(t) {
                            return t instanceof Pe ? this.multiplyOther(t) : this.multiplyScalar(t)
                        }
                        multiplyOther(t) {
                            if (!this.field.equals(t.field)) throw new a("ModulusPolys do not have same ModulusGF field");
                            if (this.isZero() || t.isZero()) return new Pe(this.field, new Int32Array([0]));
                            let e = this.coefficients,
                                r = e.length,
                                n = t.coefficients,
                                i = n.length,
                                o = new Int32Array(r + i - 1);
                            for (let t = 0; t < r; t++) {
                                let r = e[t];
                                for (let e = 0; e < i; e++) o[t + e] = this.field.add(o[t + e], this.field.multiply(r, n[e]))
                            }
                            return new Pe(this.field, o)
                        }
                        negative() {
                            let t = this.coefficients.length,
                                e = new Int32Array(t);
                            for (let r = 0; r < t; r++) e[r] = this.field.subtract(0, this.coefficients[r]);
                            return new Pe(this.field, e)
                        }
                        multiplyScalar(t) {
                            if (0 === t) return new Pe(this.field, new Int32Array([0]));
                            if (1 === t) return this;
                            let e = this.coefficients.length,
                                r = new Int32Array(e);
                            for (let n = 0; n < e; n++) r[n] = this.field.multiply(this.coefficients[n], t);
                            return new Pe(this.field, r)
                        }
                        multiplyByMonomial(t, e) {
                            if (t < 0) throw new a;
                            if (0 === e) return new Pe(this.field, new Int32Array([0]));
                            let r = this.coefficients.length,
                                n = new Int32Array(r + t);
                            for (let t = 0; t < r; t++) n[t] = this.field.multiply(this.coefficients[t], e);
                            return new Pe(this.field, n)
                        }
                        toString() {
                            let t = new D;
                            for (let e = this.getDegree(); e >= 0; e--) {
                                let r = this.getCoefficient(e);
                                0 !== r && (r < 0 ? (t.append(" - "), r = -r) : t.length() > 0 && t.append(" + "), 0 !== e && 1 === r || t.append(r), 0 !== e && (1 === e ? t.append("x") : (t.append("x^"), t.append(e))))
                            }
                            return t.toString()
                        }
                    }
                    class ke extends class {
                        add(t, e) {
                            return (t + e) % this.modulus
                        }
                        subtract(t, e) {
                            return (this.modulus + t - e) % this.modulus
                        }
                        exp(t) {
                            return this.expTable[t]
                        }
                        log(t) {
                            if (0 === t) throw new a;
                            return this.logTable[t]
                        }
                        inverse(t) {
                            if (0 === t) throw new z;
                            return this.expTable[this.modulus - this.logTable[t] - 1]
                        }
                        multiply(t, e) {
                            return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.modulus - 1)]
                        }
                        getSize() {
                            return this.modulus
                        }
                        equals(t) {
                            return t === this
                        }
                    } {
                        constructor(t, e) {
                            super(), this.modulus = t, this.expTable = new Int32Array(t), this.logTable = new Int32Array(t);
                            let r = 1;
                            for (let n = 0; n < t; n++) this.expTable[n] = r, r = r * e % t;
                            for (let e = 0; e < t - 1; e++) this.logTable[this.expTable[e]] = e;
                            this.zero = new Pe(this, new Int32Array([0])), this.one = new Pe(this, new Int32Array([1]))
                        }
                        getZero() {
                            return this.zero
                        }
                        getOne() {
                            return this.one
                        }
                        buildMonomial(t, e) {
                            if (t < 0) throw new a;
                            if (0 === e) return this.zero;
                            let r = new Int32Array(t + 1);
                            return r[0] = e, new Pe(this, r)
                        }
                    }
                    ke.PDF417_GF = new ke(Oe.NUMBER_OF_CODEWORDS, 3);
                    class Le {
                        constructor() {
                            this.field = ke.PDF417_GF
                        }
                        decode(t, e, r) {
                            let n = new Pe(this.field, t),
                                i = new Int32Array(e),
                                o = !1;
                            for (let t = e; t > 0; t--) {
                                let r = n.evaluateAt(this.field.exp(t));
                                i[e - t] = r, 0 !== r && (o = !0)
                            }
                            if (!o) return 0;
                            let s = this.field.getOne();
                            if (null != r)
                                for (const e of r) {
                                    let r = this.field.exp(t.length - 1 - e),
                                        n = new Pe(this.field, new Int32Array([this.field.subtract(0, r), 1]));
                                    s = s.multiply(n)
                                }
                            let a = new Pe(this.field, i),
                                A = this.runEuclideanAlgorithm(this.field.buildMonomial(e, 1), a, e),
                                c = A[0],
                                h = A[1],
                                g = this.findErrorLocations(c),
                                d = this.findErrorMagnitudes(h, c, g);
                            for (let e = 0; e < g.length; e++) {
                                let r = t.length - 1 - this.field.log(g[e]);
                                if (r < 0) throw l.getChecksumInstance();
                                t[r] = this.field.subtract(t[r], d[e])
                            }
                            return g.length
                        }
                        runEuclideanAlgorithm(t, e, r) {
                            if (t.getDegree() < e.getDegree()) {
                                let r = t;
                                t = e, e = r
                            }
                            let n = t,
                                i = e,
                                o = this.field.getZero(),
                                s = this.field.getOne();
                            for (; i.getDegree() >= Math.round(r / 2);) {
                                let t = n,
                                    e = o;
                                if (n = i, o = s, n.isZero()) throw l.getChecksumInstance();
                                i = t;
                                let r = this.field.getZero(),
                                    a = n.getCoefficient(n.getDegree()),
                                    A = this.field.inverse(a);
                                for (; i.getDegree() >= n.getDegree() && !i.isZero();) {
                                    let t = i.getDegree() - n.getDegree(),
                                        e = this.field.multiply(i.getCoefficient(i.getDegree()), A);
                                    r = r.add(this.field.buildMonomial(t, e)), i = i.subtract(n.multiplyByMonomial(t, e))
                                }
                                s = r.multiply(o).subtract(e).negative()
                            }
                            let a = s.getCoefficient(0);
                            if (0 === a) throw l.getChecksumInstance();
                            let A = this.field.inverse(a);
                            return [s.multiply(A), i.multiply(A)]
                        }
                        findErrorLocations(t) {
                            let e = t.getDegree(),
                                r = new Int32Array(e),
                                n = 0;
                            for (let i = 1; i < this.field.getSize() && n < e; i++) 0 === t.evaluateAt(i) && (r[n] = this.field.inverse(i), n++);
                            if (n !== e) throw l.getChecksumInstance();
                            return r
                        }
                        findErrorMagnitudes(t, e, r) {
                            let n = e.getDegree(),
                                i = new Int32Array(n);
                            for (let t = 1; t <= n; t++) i[n - t] = this.field.multiply(t, e.getCoefficient(t));
                            let o = new Pe(this.field, i),
                                s = r.length,
                                a = new Int32Array(s);
                            for (let e = 0; e < s; e++) {
                                let n = this.field.inverse(r[e]),
                                    i = this.field.subtract(0, t.evaluateAt(n)),
                                    s = this.field.inverse(o.evaluateAt(n));
                                a[e] = this.field.multiply(i, s)
                            }
                            return a
                        }
                    }
                    class Ge {
                        constructor(t, e, r, n, i) {
                            t instanceof Ge ? this.constructor_2(t) : this.constructor_1(t, e, r, n, i)
                        }
                        constructor_1(t, e, r, n, i) {
                            const o = null == e || null == r,
                                s = null == n || null == i;
                            if (o && s) throw new M;
                            o ? (e = new nt(0, n.getY()), r = new nt(0, i.getY())) : s && (n = new nt(t.getWidth() - 1, e.getY()), i = new nt(t.getWidth() - 1, r.getY())), this.image = t, this.topLeft = e, this.bottomLeft = r, this.topRight = n, this.bottomRight = i, this.minX = Math.trunc(Math.min(e.getX(), r.getX())), this.maxX = Math.trunc(Math.max(n.getX(), i.getX())), this.minY = Math.trunc(Math.min(e.getY(), n.getY())), this.maxY = Math.trunc(Math.max(r.getY(), i.getY()))
                        }
                        constructor_2(t) {
                            this.image = t.image, this.topLeft = t.getTopLeft(), this.bottomLeft = t.getBottomLeft(), this.topRight = t.getTopRight(), this.bottomRight = t.getBottomRight(), this.minX = t.getMinX(), this.maxX = t.getMaxX(), this.minY = t.getMinY(), this.maxY = t.getMaxY()
                        }
                        static merge(t, e) {
                            return null == t ? e : null == e ? t : new Ge(t.image, t.topLeft, t.bottomLeft, e.topRight, e.bottomRight)
                        }
                        addMissingRows(t, e, r) {
                            let n = this.topLeft,
                                i = this.bottomLeft,
                                o = this.topRight,
                                s = this.bottomRight;
                            if (t > 0) {
                                let e = r ? this.topLeft : this.topRight,
                                    i = Math.trunc(e.getY() - t);
                                i < 0 && (i = 0);
                                let s = new nt(e.getX(), i);
                                r ? n = s : o = s
                            }
                            if (e > 0) {
                                let t = r ? this.bottomLeft : this.bottomRight,
                                    n = Math.trunc(t.getY() + e);
                                n >= this.image.getHeight() && (n = this.image.getHeight() - 1);
                                let o = new nt(t.getX(), n);
                                r ? i = o : s = o
                            }
                            return new Ge(this.image, n, i, o, s)
                        }
                        getMinX() {
                            return this.minX
                        }
                        getMaxX() {
                            return this.maxX
                        }
                        getMinY() {
                            return this.minY
                        }
                        getMaxY() {
                            return this.maxY
                        }
                        getTopLeft() {
                            return this.topLeft
                        }
                        getTopRight() {
                            return this.topRight
                        }
                        getBottomLeft() {
                            return this.bottomLeft
                        }
                        getBottomRight() {
                            return this.bottomRight
                        }
                    }
                    class Qe {
                        constructor(t, e, r, n) {
                            this.columnCount = t, this.errorCorrectionLevel = n, this.rowCountUpperPart = e, this.rowCountLowerPart = r, this.rowCount = e + r
                        }
                        getColumnCount() {
                            return this.columnCount
                        }
                        getErrorCorrectionLevel() {
                            return this.errorCorrectionLevel
                        }
                        getRowCount() {
                            return this.rowCount
                        }
                        getRowCountUpperPart() {
                            return this.rowCountUpperPart
                        }
                        getRowCountLowerPart() {
                            return this.rowCountLowerPart
                        }
                    }
                    class Ze {
                        constructor() {
                            this.buffer = ""
                        }
                        static form(t, e) {
                            let r = -1;
                            return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, (function(t, n, i, o, s, a) {
                                if ("%%" === t) return "%";
                                if (void 0 === e[++r]) return;
                                t = o ? parseInt(o.substr(1)) : void 0;
                                let A, l = s ? parseInt(s.substr(1)) : void 0;
                                switch (a) {
                                    case "s":
                                        A = e[r];
                                        break;
                                    case "c":
                                        A = e[r][0];
                                        break;
                                    case "f":
                                        A = parseFloat(e[r]).toFixed(t);
                                        break;
                                    case "p":
                                        A = parseFloat(e[r]).toPrecision(t);
                                        break;
                                    case "e":
                                        A = parseFloat(e[r]).toExponential(t);
                                        break;
                                    case "x":
                                        A = parseInt(e[r]).toString(l || 16);
                                        break;
                                    case "d":
                                        A = parseFloat(parseInt(e[r], l || 10).toPrecision(t)).toFixed(0)
                                }
                                A = "object" == typeof A ? JSON.stringify(A) : (+A).toString(l);
                                let c = parseInt(i),
                                    h = i && i[0] + "" == "0" ? "0" : " ";
                                for (; A.length < c;) A = void 0 !== n ? A + h : h + A;
                                return A
                            }))
                        }
                        format(t, ...e) {
                            this.buffer += Ze.form(t, e)
                        }
                        toString() {
                            return this.buffer
                        }
                    }
                    class Ue {
                        constructor(t) {
                            this.boundingBox = new Ge(t), this.codewords = new Array(t.getMaxY() - t.getMinY() + 1)
                        }
                        getCodewordNearby(t) {
                            let e = this.getCodeword(t);
                            if (null != e) return e;
                            for (let r = 1; r < Ue.MAX_NEARBY_DISTANCE; r++) {
                                let n = this.imageRowToCodewordIndex(t) - r;
                                if (n >= 0 && (e = this.codewords[n], null != e)) return e;
                                if (n = this.imageRowToCodewordIndex(t) + r, n < this.codewords.length && (e = this.codewords[n], null != e)) return e
                            }
                            return null
                        }
                        imageRowToCodewordIndex(t) {
                            return t - this.boundingBox.getMinY()
                        }
                        setCodeword(t, e) {
                            this.codewords[this.imageRowToCodewordIndex(t)] = e
                        }
                        getCodeword(t) {
                            return this.codewords[this.imageRowToCodewordIndex(t)]
                        }
                        getBoundingBox() {
                            return this.boundingBox
                        }
                        getCodewords() {
                            return this.codewords
                        }
                        toString() {
                            const t = new Ze;
                            let e = 0;
                            for (const r of this.codewords) null != r ? t.format("%3d: %3d|%3d%n", e++, r.getRowNumber(), r.getValue()) : t.format("%3d:    |   %n", e++);
                            return t.toString()
                        }
                    }
                    Ue.MAX_NEARBY_DISTANCE = 5;
                    class Ye {
                        constructor() {
                            this.values = new Map
                        }
                        setValue(t) {
                            t = Math.trunc(t);
                            let e = this.values.get(t);
                            null == e && (e = 0), e++, this.values.set(t, e)
                        }
                        getValue() {
                            let t = -1,
                                e = new Array;
                            for (const [r, n] of this.values.entries()) {
                                const i = {
                                    getKey: () => r,
                                    getValue: () => n
                                };
                                i.getValue() > t ? (t = i.getValue(), e = [], e.push(i.getKey())) : i.getValue() === t && e.push(i.getKey())
                            }
                            return Oe.toIntArray(e)
                        }
                        getConfidence(t) {
                            return this.values.get(t)
                        }
                    }
                    class ve extends Ue {
                        constructor(t, e) {
                            super(t), this._isLeft = e
                        }
                        setRowNumbers() {
                            for (let t of this.getCodewords()) null != t && t.setRowNumberAsRowIndicatorColumn()
                        }
                        adjustCompleteIndicatorColumnRowNumbers(t) {
                            let e = this.getCodewords();
                            this.setRowNumbers(), this.removeIncorrectCodewords(e, t);
                            let r = this.getBoundingBox(),
                                n = this._isLeft ? r.getTopLeft() : r.getTopRight(),
                                i = this._isLeft ? r.getBottomLeft() : r.getBottomRight(),
                                o = this.imageRowToCodewordIndex(Math.trunc(n.getY())),
                                s = this.imageRowToCodewordIndex(Math.trunc(i.getY())),
                                a = -1,
                                A = 1,
                                l = 0;
                            for (let r = o; r < s; r++) {
                                if (null == e[r]) continue;
                                let n = e[r],
                                    i = n.getRowNumber() - a;
                                if (0 === i) l++;
                                else if (1 === i) A = Math.max(A, l), l = 1, a = n.getRowNumber();
                                else if (i < 0 || n.getRowNumber() >= t.getRowCount() || i > r) e[r] = null;
                                else {
                                    let t;
                                    t = A > 2 ? (A - 2) * i : i;
                                    let o = t >= r;
                                    for (let n = 1; n <= t && !o; n++) o = null != e[r - n];
                                    o ? e[r] = null : (a = n.getRowNumber(), l = 1)
                                }
                            }
                        }
                        getRowHeights() {
                            let t = this.getBarcodeMetadata();
                            if (null == t) return null;
                            this.adjustIncompleteIndicatorColumnRowNumbers(t);
                            let e = new Int32Array(t.getRowCount());
                            for (let t of this.getCodewords())
                                if (null != t) {
                                    let r = t.getRowNumber();
                                    if (r >= e.length) continue;
                                    e[r]++
                                } return e
                        }
                        adjustIncompleteIndicatorColumnRowNumbers(t) {
                            let e = this.getBoundingBox(),
                                r = this._isLeft ? e.getTopLeft() : e.getTopRight(),
                                n = this._isLeft ? e.getBottomLeft() : e.getBottomRight(),
                                i = this.imageRowToCodewordIndex(Math.trunc(r.getY())),
                                o = this.imageRowToCodewordIndex(Math.trunc(n.getY())),
                                s = this.getCodewords(),
                                a = -1;
                            for (let e = i; e < o; e++) {
                                if (null == s[e]) continue;
                                let r = s[e];
                                r.setRowNumberAsRowIndicatorColumn();
                                let n = r.getRowNumber() - a;
                                0 === n || (1 === n ? a = r.getRowNumber() : r.getRowNumber() >= t.getRowCount() ? s[e] = null : a = r.getRowNumber())
                            }
                        }
                        getBarcodeMetadata() {
                            let t = this.getCodewords(),
                                e = new Ye,
                                r = new Ye,
                                n = new Ye,
                                i = new Ye;
                            for (let o of t) {
                                if (null == o) continue;
                                o.setRowNumberAsRowIndicatorColumn();
                                let t = o.getValue() % 30,
                                    s = o.getRowNumber();
                                switch (this._isLeft || (s += 2), s % 3) {
                                    case 0:
                                        r.setValue(3 * t + 1);
                                        break;
                                    case 1:
                                        i.setValue(t / 3), n.setValue(t % 3);
                                        break;
                                    case 2:
                                        e.setValue(t + 1)
                                }
                            }
                            if (0 === e.getValue().length || 0 === r.getValue().length || 0 === n.getValue().length || 0 === i.getValue().length || e.getValue()[0] < 1 || r.getValue()[0] + n.getValue()[0] < Oe.MIN_ROWS_IN_BARCODE || r.getValue()[0] + n.getValue()[0] > Oe.MAX_ROWS_IN_BARCODE) return null;
                            let o = new Qe(e.getValue()[0], r.getValue()[0], n.getValue()[0], i.getValue()[0]);
                            return this.removeIncorrectCodewords(t, o), o
                        }
                        removeIncorrectCodewords(t, e) {
                            for (let r = 0; r < t.length; r++) {
                                let n = t[r];
                                if (null == t[r]) continue;
                                let i = n.getValue() % 30,
                                    o = n.getRowNumber();
                                if (o > e.getRowCount()) t[r] = null;
                                else switch (this._isLeft || (o += 2), o % 3) {
                                    case 0:
                                        3 * i + 1 !== e.getRowCountUpperPart() && (t[r] = null);
                                        break;
                                    case 1:
                                        Math.trunc(i / 3) === e.getErrorCorrectionLevel() && i % 3 === e.getRowCountLowerPart() || (t[r] = null);
                                        break;
                                    case 2:
                                        i + 1 !== e.getColumnCount() && (t[r] = null)
                                }
                            }
                        }
                        isLeft() {
                            return this._isLeft
                        }
                        toString() {
                            return "IsLeft: " + this._isLeft + "\n" + super.toString()
                        }
                    }
                    class xe {
                        constructor(t, e) {
                            this.ADJUST_ROW_NUMBER_SKIP = 2, this.barcodeMetadata = t, this.barcodeColumnCount = t.getColumnCount(), this.boundingBox = e, this.detectionResultColumns = new Array(this.barcodeColumnCount + 2)
                        }
                        getDetectionResultColumns() {
                            this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]), this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
                            let t, e = Oe.MAX_CODEWORDS_IN_BARCODE;
                            do {
                                t = e, e = this.adjustRowNumbersAndGetCount()
                            } while (e > 0 && e < t);
                            return this.detectionResultColumns
                        }
                        adjustIndicatorColumnRowNumbers(t) {
                            null != t && t.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata)
                        }
                        adjustRowNumbersAndGetCount() {
                            let t = this.adjustRowNumbersByRow();
                            if (0 === t) return 0;
                            for (let t = 1; t < this.barcodeColumnCount + 1; t++) {
                                let e = this.detectionResultColumns[t].getCodewords();
                                for (let r = 0; r < e.length; r++) null != e[r] && (e[r].hasValidRowNumber() || this.adjustRowNumbers(t, r, e))
                            }
                            return t
                        }
                        adjustRowNumbersByRow() {
                            return this.adjustRowNumbersFromBothRI(), this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI()
                        }
                        adjustRowNumbersFromBothRI() {
                            if (null == this.detectionResultColumns[0] || null == this.detectionResultColumns[this.barcodeColumnCount + 1]) return;
                            let t = this.detectionResultColumns[0].getCodewords(),
                                e = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
                            for (let r = 0; r < t.length; r++)
                                if (null != t[r] && null != e[r] && t[r].getRowNumber() === e[r].getRowNumber())
                                    for (let e = 1; e <= this.barcodeColumnCount; e++) {
                                        let n = this.detectionResultColumns[e].getCodewords()[r];
                                        null != n && (n.setRowNumber(t[r].getRowNumber()), n.hasValidRowNumber() || (this.detectionResultColumns[e].getCodewords()[r] = null))
                                    }
                        }
                        adjustRowNumbersFromRRI() {
                            if (null == this.detectionResultColumns[this.barcodeColumnCount + 1]) return 0;
                            let t = 0,
                                e = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
                            for (let r = 0; r < e.length; r++) {
                                if (null == e[r]) continue;
                                let n = e[r].getRowNumber(),
                                    i = 0;
                                for (let e = this.barcodeColumnCount + 1; e > 0 && i < this.ADJUST_ROW_NUMBER_SKIP; e--) {
                                    let o = this.detectionResultColumns[e].getCodewords()[r];
                                    null != o && (i = xe.adjustRowNumberIfValid(n, i, o), o.hasValidRowNumber() || t++)
                                }
                            }
                            return t
                        }
                        adjustRowNumbersFromLRI() {
                            if (null == this.detectionResultColumns[0]) return 0;
                            let t = 0,
                                e = this.detectionResultColumns[0].getCodewords();
                            for (let r = 0; r < e.length; r++) {
                                if (null == e[r]) continue;
                                let n = e[r].getRowNumber(),
                                    i = 0;
                                for (let e = 1; e < this.barcodeColumnCount + 1 && i < this.ADJUST_ROW_NUMBER_SKIP; e++) {
                                    let o = this.detectionResultColumns[e].getCodewords()[r];
                                    null != o && (i = xe.adjustRowNumberIfValid(n, i, o), o.hasValidRowNumber() || t++)
                                }
                            }
                            return t
                        }
                        static adjustRowNumberIfValid(t, e, r) {
                            return null == r || r.hasValidRowNumber() || (r.isValidRowNumber(t) ? (r.setRowNumber(t), e = 0) : ++e), e
                        }
                        adjustRowNumbers(t, e, r) {
                            let n = r[e],
                                i = this.detectionResultColumns[t - 1].getCodewords(),
                                o = i;
                            null != this.detectionResultColumns[t + 1] && (o = this.detectionResultColumns[t + 1].getCodewords());
                            let s = new Array(14);
                            s[2] = i[e], s[3] = o[e], e > 0 && (s[0] = r[e - 1], s[4] = i[e - 1], s[5] = o[e - 1]), e > 1 && (s[8] = r[e - 2], s[10] = i[e - 2], s[11] = o[e - 2]), e < r.length - 1 && (s[1] = r[e + 1], s[6] = i[e + 1], s[7] = o[e + 1]), e < r.length - 2 && (s[9] = r[e + 2], s[12] = i[e + 2], s[13] = o[e + 2]);
                            for (let t of s)
                                if (xe.adjustRowNumber(n, t)) return
                        }
                        static adjustRowNumber(t, e) {
                            return !(null == e || !e.hasValidRowNumber() || e.getBucket() !== t.getBucket() || (t.setRowNumber(e.getRowNumber()), 0))
                        }
                        getBarcodeColumnCount() {
                            return this.barcodeColumnCount
                        }
                        getBarcodeRowCount() {
                            return this.barcodeMetadata.getRowCount()
                        }
                        getBarcodeECLevel() {
                            return this.barcodeMetadata.getErrorCorrectionLevel()
                        }
                        setBoundingBox(t) {
                            this.boundingBox = t
                        }
                        getBoundingBox() {
                            return this.boundingBox
                        }
                        setDetectionResultColumn(t, e) {
                            this.detectionResultColumns[t] = e
                        }
                        getDetectionResultColumn(t) {
                            return this.detectionResultColumns[t]
                        }
                        toString() {
                            let t = this.detectionResultColumns[0];
                            null == t && (t = this.detectionResultColumns[this.barcodeColumnCount + 1]);
                            let e = new Ze;
                            for (let r = 0; r < t.getCodewords().length; r++) {
                                e.format("CW %3d:", r);
                                for (let t = 0; t < this.barcodeColumnCount + 2; t++) {
                                    if (null == this.detectionResultColumns[t]) {
                                        e.format("    |   ");
                                        continue
                                    }
                                    let n = this.detectionResultColumns[t].getCodewords()[r];
                                    null != n ? e.format(" %3d|%3d", n.getRowNumber(), n.getValue()) : e.format("    |   ")
                                }
                                e.format("%n")
                            }
                            return e.toString()
                        }
                    }
                    class We {
                        constructor(t, e, r, n) {
                            this.rowNumber = We.BARCODE_ROW_UNKNOWN, this.startX = Math.trunc(t), this.endX = Math.trunc(e), this.bucket = Math.trunc(r), this.value = Math.trunc(n)
                        }
                        hasValidRowNumber() {
                            return this.isValidRowNumber(this.rowNumber)
                        }
                        isValidRowNumber(t) {
                            return t !== We.BARCODE_ROW_UNKNOWN && this.bucket === t % 3 * 3
                        }
                        setRowNumberAsRowIndicatorColumn() {
                            this.rowNumber = Math.trunc(3 * Math.trunc(this.value / 30) + Math.trunc(this.bucket / 3))
                        }
                        getWidth() {
                            return this.endX - this.startX
                        }
                        getStartX() {
                            return this.startX
                        }
                        getEndX() {
                            return this.endX
                        }
                        getBucket() {
                            return this.bucket
                        }
                        getValue() {
                            return this.value
                        }
                        getRowNumber() {
                            return this.rowNumber
                        }
                        setRowNumber(t) {
                            this.rowNumber = t
                        }
                        toString() {
                            return this.rowNumber + "|" + this.value
                        }
                    }
                    We.BARCODE_ROW_UNKNOWN = -1;
                    class He {
                        static initialize() {
                            for (let t = 0; t < Oe.SYMBOL_TABLE.length; t++) {
                                let e = Oe.SYMBOL_TABLE[t],
                                    r = 1 & e;
                                for (let n = 0; n < Oe.BARS_IN_MODULE; n++) {
                                    let i = 0;
                                    for (;
                                        (1 & e) === r;) i += 1, e >>= 1;
                                    r = 1 & e, He.RATIOS_TABLE[t] || (He.RATIOS_TABLE[t] = new Array(Oe.BARS_IN_MODULE)), He.RATIOS_TABLE[t][Oe.BARS_IN_MODULE - n - 1] = Math.fround(i / Oe.MODULES_IN_CODEWORD)
                                }
                            }
                            this.bSymbolTableReady = !0
                        }
                        static getDecodedValue(t) {
                            let e = He.getDecodedCodewordValue(He.sampleBitCounts(t));
                            return -1 !== e ? e : He.getClosestDecodedValue(t)
                        }
                        static sampleBitCounts(t) {
                            let e = et.sum(t),
                                r = new Int32Array(Oe.BARS_IN_MODULE),
                                n = 0,
                                i = 0;
                            for (let o = 0; o < Oe.MODULES_IN_CODEWORD; o++) {
                                let s = e / (2 * Oe.MODULES_IN_CODEWORD) + o * e / Oe.MODULES_IN_CODEWORD;
                                i + t[n] <= s && (i += t[n], n++), r[n]++
                            }
                            return r
                        }
                        static getDecodedCodewordValue(t) {
                            let e = He.getBitValue(t);
                            return -1 === Oe.getCodeword(e) ? -1 : e
                        }
                        static getBitValue(t) {
                            let e = 0;
                            for (let r = 0; r < t.length; r++)
                                for (let n = 0; n < t[r]; n++) e = e << 1 | (r % 2 == 0 ? 1 : 0);
                            return Math.trunc(e)
                        }
                        static getClosestDecodedValue(t) {
                            let e = et.sum(t),
                                r = new Array(Oe.BARS_IN_MODULE);
                            if (e > 1)
                                for (let n = 0; n < r.length; n++) r[n] = Math.fround(t[n] / e);
                            let n = rt.MAX_VALUE,
                                i = -1;
                            this.bSymbolTableReady || He.initialize();
                            for (let t = 0; t < He.RATIOS_TABLE.length; t++) {
                                let e = 0,
                                    o = He.RATIOS_TABLE[t];
                                for (let t = 0; t < Oe.BARS_IN_MODULE; t++) {
                                    let i = Math.fround(o[t] - r[t]);
                                    if (e += Math.fround(i * i), e >= n) break
                                }
                                e < n && (n = e, i = Oe.SYMBOL_TABLE[t])
                            }
                            return i
                        }
                    }
                    He.bSymbolTableReady = !1, He.RATIOS_TABLE = new Array(Oe.SYMBOL_TABLE.length).map((t => new Array(Oe.BARS_IN_MODULE)));
                    class Ve {
                        constructor() {
                            this.segmentCount = -1, this.fileSize = -1, this.timestamp = -1, this.checksum = -1
                        }
                        getSegmentIndex() {
                            return this.segmentIndex
                        }
                        setSegmentIndex(t) {
                            this.segmentIndex = t
                        }
                        getFileId() {
                            return this.fileId
                        }
                        setFileId(t) {
                            this.fileId = t
                        }
                        getOptionalData() {
                            return this.optionalData
                        }
                        setOptionalData(t) {
                            this.optionalData = t
                        }
                        isLastSegment() {
                            return this.lastSegment
                        }
                        setLastSegment(t) {
                            this.lastSegment = t
                        }
                        getSegmentCount() {
                            return this.segmentCount
                        }
                        setSegmentCount(t) {
                            this.segmentCount = t
                        }
                        getSender() {
                            return this.sender || null
                        }
                        setSender(t) {
                            this.sender = t
                        }
                        getAddressee() {
                            return this.addressee || null
                        }
                        setAddressee(t) {
                            this.addressee = t
                        }
                        getFileName() {
                            return this.fileName
                        }
                        setFileName(t) {
                            this.fileName = t
                        }
                        getFileSize() {
                            return this.fileSize
                        }
                        setFileSize(t) {
                            this.fileSize = t
                        }
                        getChecksum() {
                            return this.checksum
                        }
                        setChecksum(t) {
                            this.checksum = t
                        }
                        getTimestamp() {
                            return this.timestamp
                        }
                        setTimestamp(t) {
                            this.timestamp = t
                        }
                    }
                    class je {
                        static parseLong(t, e) {
                            return parseInt(t, e)
                        }
                    }
                    class Xe extends o {}
                    Xe.kind = "NullPointerException";
                    class ze extends o {}
                    class Je extends class {
                        writeBytes(t) {
                            this.writeBytesOffset(t, 0, t.length)
                        }
                        writeBytesOffset(t, e, r) {
                            if (null == t) throw new Xe;
                            if (e < 0 || e > t.length || r < 0 || e + r > t.length || e + r < 0) throw new g;
                            if (0 !== r)
                                for (let n = 0; n < r; n++) this.write(t[e + n])
                        }
                        flush() {}
                        close() {}
                    } {
                        constructor(t = 32) {
                            if (super(), this.count = 0, t < 0) throw new a("Negative initial size: " + t);
                            this.buf = new Uint8Array(t)
                        }
                        ensureCapacity(t) {
                            t - this.buf.length > 0 && this.grow(t)
                        }
                        grow(t) {
                            let e = this.buf.length << 1;
                            if (e - t < 0 && (e = t), e < 0) {
                                if (t < 0) throw new ze;
                                e = C.MAX_VALUE
                            }
                            this.buf = u.copyOfUint8Array(this.buf, e)
                        }
                        write(t) {
                            this.ensureCapacity(this.count + 1), this.buf[this.count] = t, this.count += 1
                        }
                        writeBytesOffset(t, e, r) {
                            if (e < 0 || e > t.length || r < 0 || e + r - t.length > 0) throw new g;
                            this.ensureCapacity(this.count + r), h.arraycopy(t, e, this.buf, this.count, r), this.count += r
                        }
                        writeTo(t) {
                            t.writeBytesOffset(this.buf, 0, this.count)
                        }
                        reset() {
                            this.count = 0
                        }
                        toByteArray() {
                            return u.copyOfUint8Array(this.buf, this.count)
                        }
                        size() {
                            return this.count
                        }
                        toString(t) {
                            return t ? "string" == typeof t ? this.toString_string(t) : this.toString_number(t) : this.toString_void()
                        }
                        toString_void() {
                            return new String(this.buf).toString()
                        }
                        toString_string(t) {
                            return new String(this.buf).toString()
                        }
                        toString_number(t) {
                            return new String(this.buf).toString()
                        }
                        close() {}
                    }

                    function Ke() {
                        if ("undefined" != typeof window) return window.BigInt || null;
                        if (void 0 !== r.g) return r.g.BigInt || null;
                        if ("undefined" != typeof self) return self.BigInt || null;
                        throw new Error("Can't search globals for BigInt!")
                    }
                    let qe;

                    function $e(t) {
                        if (void 0 === qe && (qe = Ke()), null === qe) throw new Error("BigInt is not supported!");
                        return qe(t)
                    }! function(t) {
                        t[t.ALPHA = 0] = "ALPHA", t[t.LOWER = 1] = "LOWER", t[t.MIXED = 2] = "MIXED", t[t.PUNCT = 3] = "PUNCT", t[t.ALPHA_SHIFT = 4] = "ALPHA_SHIFT", t[t.PUNCT_SHIFT = 5] = "PUNCT_SHIFT"
                    }(W || (W = {}));
                    class tr {
                        static decode(t, e) {
                            let r = new D(""),
                                n = m.ISO8859_1;
                            r.enableDecoding(n);
                            let i = 1,
                                o = t[i++],
                                s = new Ve;
                            for (; i < t[0];) {
                                switch (o) {
                                    case tr.TEXT_COMPACTION_MODE_LATCH:
                                        i = tr.textCompaction(t, i, r);
                                        break;
                                    case tr.BYTE_COMPACTION_MODE_LATCH:
                                    case tr.BYTE_COMPACTION_MODE_LATCH_6:
                                        i = tr.byteCompaction(o, t, n, i, r);
                                        break;
                                    case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                        r.append(t[i++]);
                                        break;
                                    case tr.NUMERIC_COMPACTION_MODE_LATCH:
                                        i = tr.numericCompaction(t, i, r);
                                        break;
                                    case tr.ECI_CHARSET:
                                        m.getCharacterSetECIByValue(t[i++]);
                                        break;
                                    case tr.ECI_GENERAL_PURPOSE:
                                        i += 2;
                                        break;
                                    case tr.ECI_USER_DEFINED:
                                        i++;
                                        break;
                                    case tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                        i = tr.decodeMacroBlock(t, i, s);
                                        break;
                                    case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                    case tr.MACRO_PDF417_TERMINATOR:
                                        throw new E;
                                    default:
                                        i--, i = tr.textCompaction(t, i, r)
                                }
                                if (!(i < t.length)) throw E.getFormatInstance();
                                o = t[i++]
                            }
                            if (0 === r.length()) throw E.getFormatInstance();
                            let a = new V(null, r.toString(), null, e);
                            return a.setOther(s), a
                        }
                        static decodeMacroBlock(t, e, r) {
                            if (e + tr.NUMBER_OF_SEQUENCE_CODEWORDS > t[0]) throw E.getFormatInstance();
                            let n = new Int32Array(tr.NUMBER_OF_SEQUENCE_CODEWORDS);
                            for (let r = 0; r < tr.NUMBER_OF_SEQUENCE_CODEWORDS; r++, e++) n[r] = t[e];
                            r.setSegmentIndex(C.parseInt(tr.decodeBase900toBase10(n, tr.NUMBER_OF_SEQUENCE_CODEWORDS)));
                            let i = new D;
                            e = tr.textCompaction(t, e, i), r.setFileId(i.toString());
                            let o = -1;
                            for (t[e] === tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (o = e + 1); e < t[0];) switch (t[e]) {
                                case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                    switch (t[++e]) {
                                        case tr.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                                            let n = new D;
                                            e = tr.textCompaction(t, e + 1, n), r.setFileName(n.toString());
                                            break;
                                        case tr.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                                            let i = new D;
                                            e = tr.textCompaction(t, e + 1, i), r.setSender(i.toString());
                                            break;
                                        case tr.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                                            let o = new D;
                                            e = tr.textCompaction(t, e + 1, o), r.setAddressee(o.toString());
                                            break;
                                        case tr.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                                            let s = new D;
                                            e = tr.numericCompaction(t, e + 1, s), r.setSegmentCount(C.parseInt(s.toString()));
                                            break;
                                        case tr.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                                            let a = new D;
                                            e = tr.numericCompaction(t, e + 1, a), r.setTimestamp(je.parseLong(a.toString()));
                                            break;
                                        case tr.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                                            let A = new D;
                                            e = tr.numericCompaction(t, e + 1, A), r.setChecksum(C.parseInt(A.toString()));
                                            break;
                                        case tr.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                                            let l = new D;
                                            e = tr.numericCompaction(t, e + 1, l), r.setFileSize(je.parseLong(l.toString()));
                                            break;
                                        default:
                                            throw E.getFormatInstance()
                                    }
                                    break;
                                case tr.MACRO_PDF417_TERMINATOR:
                                    e++, r.setLastSegment(!0);
                                    break;
                                default:
                                    throw E.getFormatInstance()
                            }
                            if (-1 !== o) {
                                let n = e - o;
                                r.isLastSegment() && n--, r.setOptionalData(u.copyOfRange(t, o, o + n))
                            }
                            return e
                        }
                        static textCompaction(t, e, r) {
                            let n = new Int32Array(2 * (t[0] - e)),
                                i = new Int32Array(2 * (t[0] - e)),
                                o = 0,
                                s = !1;
                            for (; e < t[0] && !s;) {
                                let r = t[e++];
                                if (r < tr.TEXT_COMPACTION_MODE_LATCH) n[o] = r / 30, n[o + 1] = r % 30, o += 2;
                                else switch (r) {
                                    case tr.TEXT_COMPACTION_MODE_LATCH:
                                        n[o++] = tr.TEXT_COMPACTION_MODE_LATCH;
                                        break;
                                    case tr.BYTE_COMPACTION_MODE_LATCH:
                                    case tr.BYTE_COMPACTION_MODE_LATCH_6:
                                    case tr.NUMERIC_COMPACTION_MODE_LATCH:
                                    case tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                    case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                    case tr.MACRO_PDF417_TERMINATOR:
                                        e--, s = !0;
                                        break;
                                    case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                        n[o] = tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE, r = t[e++], i[o] = r, o++
                                }
                            }
                            return tr.decodeTextCompaction(n, i, o, r), e
                        }
                        static decodeTextCompaction(t, e, r, n) {
                            let i = W.ALPHA,
                                o = W.ALPHA,
                                s = 0;
                            for (; s < r;) {
                                let r = t[s],
                                    a = "";
                                switch (i) {
                                    case W.ALPHA:
                                        if (r < 26) a = String.fromCharCode(65 + r);
                                        else switch (r) {
                                            case 26:
                                                a = " ";
                                                break;
                                            case tr.LL:
                                                i = W.LOWER;
                                                break;
                                            case tr.ML:
                                                i = W.MIXED;
                                                break;
                                            case tr.PS:
                                                o = i, i = W.PUNCT_SHIFT;
                                                break;
                                            case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                                n.append(e[s]);
                                                break;
                                            case tr.TEXT_COMPACTION_MODE_LATCH:
                                                i = W.ALPHA
                                        }
                                        break;
                                    case W.LOWER:
                                        if (r < 26) a = String.fromCharCode(97 + r);
                                        else switch (r) {
                                            case 26:
                                                a = " ";
                                                break;
                                            case tr.AS:
                                                o = i, i = W.ALPHA_SHIFT;
                                                break;
                                            case tr.ML:
                                                i = W.MIXED;
                                                break;
                                            case tr.PS:
                                                o = i, i = W.PUNCT_SHIFT;
                                                break;
                                            case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                                n.append(e[s]);
                                                break;
                                            case tr.TEXT_COMPACTION_MODE_LATCH:
                                                i = W.ALPHA
                                        }
                                        break;
                                    case W.MIXED:
                                        if (r < tr.PL) a = tr.MIXED_CHARS[r];
                                        else switch (r) {
                                            case tr.PL:
                                                i = W.PUNCT;
                                                break;
                                            case 26:
                                                a = " ";
                                                break;
                                            case tr.LL:
                                                i = W.LOWER;
                                                break;
                                            case tr.AL:
                                                i = W.ALPHA;
                                                break;
                                            case tr.PS:
                                                o = i, i = W.PUNCT_SHIFT;
                                                break;
                                            case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                                n.append(e[s]);
                                                break;
                                            case tr.TEXT_COMPACTION_MODE_LATCH:
                                                i = W.ALPHA
                                        }
                                        break;
                                    case W.PUNCT:
                                        if (r < tr.PAL) a = tr.PUNCT_CHARS[r];
                                        else switch (r) {
                                            case tr.PAL:
                                                i = W.ALPHA;
                                                break;
                                            case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                                n.append(e[s]);
                                                break;
                                            case tr.TEXT_COMPACTION_MODE_LATCH:
                                                i = W.ALPHA
                                        }
                                        break;
                                    case W.ALPHA_SHIFT:
                                        if (i = o, r < 26) a = String.fromCharCode(65 + r);
                                        else switch (r) {
                                            case 26:
                                                a = " ";
                                                break;
                                            case tr.TEXT_COMPACTION_MODE_LATCH:
                                                i = W.ALPHA
                                        }
                                        break;
                                    case W.PUNCT_SHIFT:
                                        if (i = o, r < tr.PAL) a = tr.PUNCT_CHARS[r];
                                        else switch (r) {
                                            case tr.PAL:
                                                i = W.ALPHA;
                                                break;
                                            case tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                                n.append(e[s]);
                                                break;
                                            case tr.TEXT_COMPACTION_MODE_LATCH:
                                                i = W.ALPHA
                                        }
                                }
                                "" !== a && n.append(a), s++
                            }
                        }
                        static byteCompaction(t, e, r, n, i) {
                            let o = new Je,
                                s = 0,
                                a = 0,
                                A = !1;
                            switch (t) {
                                case tr.BYTE_COMPACTION_MODE_LATCH:
                                    let t = new Int32Array(6),
                                        r = e[n++];
                                    for (; n < e[0] && !A;) switch (t[s++] = r, a = 900 * a + r, r = e[n++], r) {
                                        case tr.TEXT_COMPACTION_MODE_LATCH:
                                        case tr.BYTE_COMPACTION_MODE_LATCH:
                                        case tr.NUMERIC_COMPACTION_MODE_LATCH:
                                        case tr.BYTE_COMPACTION_MODE_LATCH_6:
                                        case tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                        case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                        case tr.MACRO_PDF417_TERMINATOR:
                                            n--, A = !0;
                                            break;
                                        default:
                                            if (s % 5 == 0 && s > 0) {
                                                for (let t = 0; t < 6; ++t) o.write(Number($e(a) >> $e(8 * (5 - t))));
                                                a = 0, s = 0
                                            }
                                    }
                                    n === e[0] && r < tr.TEXT_COMPACTION_MODE_LATCH && (t[s++] = r);
                                    for (let e = 0; e < s; e++) o.write(t[e]);
                                    break;
                                case tr.BYTE_COMPACTION_MODE_LATCH_6:
                                    for (; n < e[0] && !A;) {
                                        let t = e[n++];
                                        if (t < tr.TEXT_COMPACTION_MODE_LATCH) s++, a = 900 * a + t;
                                        else switch (t) {
                                            case tr.TEXT_COMPACTION_MODE_LATCH:
                                            case tr.BYTE_COMPACTION_MODE_LATCH:
                                            case tr.NUMERIC_COMPACTION_MODE_LATCH:
                                            case tr.BYTE_COMPACTION_MODE_LATCH_6:
                                            case tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                            case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                            case tr.MACRO_PDF417_TERMINATOR:
                                                n--, A = !0
                                        }
                                        if (s % 5 == 0 && s > 0) {
                                            for (let t = 0; t < 6; ++t) o.write(Number($e(a) >> $e(8 * (5 - t))));
                                            a = 0, s = 0
                                        }
                                    }
                            }
                            return i.append(S.decode(o.toByteArray(), r)), n
                        }
                        static numericCompaction(t, e, r) {
                            let n = 0,
                                i = !1,
                                o = new Int32Array(tr.MAX_NUMERIC_CODEWORDS);
                            for (; e < t[0] && !i;) {
                                let s = t[e++];
                                if (e === t[0] && (i = !0), s < tr.TEXT_COMPACTION_MODE_LATCH) o[n] = s, n++;
                                else switch (s) {
                                    case tr.TEXT_COMPACTION_MODE_LATCH:
                                    case tr.BYTE_COMPACTION_MODE_LATCH:
                                    case tr.BYTE_COMPACTION_MODE_LATCH_6:
                                    case tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                    case tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                    case tr.MACRO_PDF417_TERMINATOR:
                                        e--, i = !0
                                }(n % tr.MAX_NUMERIC_CODEWORDS == 0 || s === tr.NUMERIC_COMPACTION_MODE_LATCH || i) && n > 0 && (r.append(tr.decodeBase900toBase10(o, n)), n = 0)
                            }
                            return e
                        }
                        static decodeBase900toBase10(t, e) {
                            let r = $e(0);
                            for (let n = 0; n < e; n++) r += tr.EXP900[e - n - 1] * $e(t[n]);
                            let n = r.toString();
                            if ("1" !== n.charAt(0)) throw new E;
                            return n.substring(1)
                        }
                    }
                    tr.TEXT_COMPACTION_MODE_LATCH = 900, tr.BYTE_COMPACTION_MODE_LATCH = 901, tr.NUMERIC_COMPACTION_MODE_LATCH = 902, tr.BYTE_COMPACTION_MODE_LATCH_6 = 924, tr.ECI_USER_DEFINED = 925, tr.ECI_GENERAL_PURPOSE = 926, tr.ECI_CHARSET = 927, tr.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928, tr.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923, tr.MACRO_PDF417_TERMINATOR = 922, tr.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913, tr.MAX_NUMERIC_CODEWORDS = 15, tr.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0, tr.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1, tr.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2, tr.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3, tr.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4, tr.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5, tr.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6, tr.PL = 25, tr.LL = 27, tr.AS = 27, tr.ML = 28, tr.AL = 28, tr.PS = 29, tr.PAL = 29, tr.PUNCT_CHARS = ";<>@[\\]_`~!\r\t,:\n-.$/\"|*()?{}'", tr.MIXED_CHARS = "0123456789&\r\t,:#-.$/+%*=^", tr.EXP900 = Ke() ? function() {
                        let t = [];
                        t[0] = $e(1);
                        let e = $e(900);
                        t[1] = e;
                        for (let r = 2; r < 16; r++) t[r] = t[r - 1] * e;
                        return t
                    }() : [], tr.NUMBER_OF_SEQUENCE_CODEWORDS = 2;
                    class er {
                        constructor() {}
                        static decode(t, e, r, n, i, o, s) {
                            let a, A = new Ge(t, e, r, n, i),
                                l = null,
                                c = null;
                            for (let r = !0;; r = !1) {
                                if (null != e && (l = er.getRowIndicatorColumn(t, A, e, !0, o, s)), null != n && (c = er.getRowIndicatorColumn(t, A, n, !1, o, s)), a = er.merge(l, c), null == a) throw M.getNotFoundInstance();
                                let i = a.getBoundingBox();
                                if (!r || null == i || !(i.getMinY() < A.getMinY() || i.getMaxY() > A.getMaxY())) break;
                                A = i
                            }
                            a.setBoundingBox(A);
                            let h = a.getBarcodeColumnCount() + 1;
                            a.setDetectionResultColumn(0, l), a.setDetectionResultColumn(h, c);
                            let g = null != l;
                            for (let e = 1; e <= h; e++) {
                                let r, n = g ? e : h - e;
                                if (void 0 !== a.getDetectionResultColumn(n)) continue;
                                r = 0 === n || n === h ? new ve(A, 0 === n) : new Ue(A), a.setDetectionResultColumn(n, r);
                                let i = -1,
                                    l = i;
                                for (let e = A.getMinY(); e <= A.getMaxY(); e++) {
                                    if (i = er.getStartColumn(a, n, e, g), i < 0 || i > A.getMaxX()) {
                                        if (-1 === l) continue;
                                        i = l
                                    }
                                    let c = er.detectCodeword(t, A.getMinX(), A.getMaxX(), g, i, e, o, s);
                                    null != c && (r.setCodeword(e, c), l = i, o = Math.min(o, c.getWidth()), s = Math.max(s, c.getWidth()))
                                }
                            }
                            return er.createDecoderResult(a)
                        }
                        static merge(t, e) {
                            if (null == t && null == e) return null;
                            let r = er.getBarcodeMetadata(t, e);
                            if (null == r) return null;
                            let n = Ge.merge(er.adjustBoundingBox(t), er.adjustBoundingBox(e));
                            return new xe(r, n)
                        }
                        static adjustBoundingBox(t) {
                            if (null == t) return null;
                            let e = t.getRowHeights();
                            if (null == e) return null;
                            let r = er.getMax(e),
                                n = 0;
                            for (let t of e)
                                if (n += r - t, t > 0) break;
                            let i = t.getCodewords();
                            for (let t = 0; n > 0 && null == i[t]; t++) n--;
                            let o = 0;
                            for (let t = e.length - 1; t >= 0 && (o += r - e[t], !(e[t] > 0)); t--);
                            for (let t = i.length - 1; o > 0 && null == i[t]; t--) o--;
                            return t.getBoundingBox().addMissingRows(n, o, t.isLeft())
                        }
                        static getMax(t) {
                            let e = -1;
                            for (let r of t) e = Math.max(e, r);
                            return e
                        }
                        static getBarcodeMetadata(t, e) {
                            let r, n;
                            return null == t || null == (r = t.getBarcodeMetadata()) ? null == e ? null : e.getBarcodeMetadata() : null == e || null == (n = e.getBarcodeMetadata()) ? r : r.getColumnCount() !== n.getColumnCount() && r.getErrorCorrectionLevel() !== n.getErrorCorrectionLevel() && r.getRowCount() !== n.getRowCount() ? null : r
                        }
                        static getRowIndicatorColumn(t, e, r, n, i, o) {
                            let s = new ve(e, n);
                            for (let a = 0; a < 2; a++) {
                                let A = 0 === a ? 1 : -1,
                                    l = Math.trunc(Math.trunc(r.getX()));
                                for (let a = Math.trunc(Math.trunc(r.getY())); a <= e.getMaxY() && a >= e.getMinY(); a += A) {
                                    let e = er.detectCodeword(t, 0, t.getWidth(), n, l, a, i, o);
                                    null != e && (s.setCodeword(a, e), l = n ? e.getStartX() : e.getEndX())
                                }
                            }
                            return s
                        }
                        static adjustCodewordCount(t, e) {
                            let r = e[0][1],
                                n = r.getValue(),
                                i = t.getBarcodeColumnCount() * t.getBarcodeRowCount() - er.getNumberOfECCodeWords(t.getBarcodeECLevel());
                            if (0 === n.length) {
                                if (i < 1 || i > Oe.MAX_CODEWORDS_IN_BARCODE) throw M.getNotFoundInstance();
                                r.setValue(i)
                            } else n[0] !== i && r.setValue(i)
                        }
                        static createDecoderResult(t) {
                            let e = er.createBarcodeMatrix(t);
                            er.adjustCodewordCount(t, e);
                            let r = new Array,
                                n = new Int32Array(t.getBarcodeRowCount() * t.getBarcodeColumnCount()),
                                i = [],
                                o = new Array;
                            for (let s = 0; s < t.getBarcodeRowCount(); s++)
                                for (let a = 0; a < t.getBarcodeColumnCount(); a++) {
                                    let A = e[s][a + 1].getValue(),
                                        l = s * t.getBarcodeColumnCount() + a;
                                    0 === A.length ? r.push(l) : 1 === A.length ? n[l] = A[0] : (o.push(l), i.push(A))
                                }
                            let s = new Array(i.length);
                            for (let t = 0; t < s.length; t++) s[t] = i[t];
                            return er.createDecoderResultFromAmbiguousValues(t.getBarcodeECLevel(), n, Oe.toIntArray(r), Oe.toIntArray(o), s)
                        }
                        static createDecoderResultFromAmbiguousValues(t, e, r, n, i) {
                            let o = new Int32Array(n.length),
                                s = 100;
                            for (; s-- > 0;) {
                                for (let t = 0; t < o.length; t++) e[n[t]] = i[t][o[t]];
                                try {
                                    return er.decodeCodewords(e, t, r)
                                } catch (t) {
                                    if (!(t instanceof l)) throw t
                                }
                                if (0 === o.length) throw l.getChecksumInstance();
                                for (let t = 0; t < o.length; t++) {
                                    if (o[t] < i[t].length - 1) {
                                        o[t]++;
                                        break
                                    }
                                    if (o[t] = 0, t === o.length - 1) throw l.getChecksumInstance()
                                }
                            }
                            throw l.getChecksumInstance()
                        }
                        static createBarcodeMatrix(t) {
                            let e = Array.from({
                                length: t.getBarcodeRowCount()
                            }, (() => new Array(t.getBarcodeColumnCount() + 2)));
                            for (let t = 0; t < e.length; t++)
                                for (let r = 0; r < e[t].length; r++) e[t][r] = new Ye;
                            let r = 0;
                            for (let n of t.getDetectionResultColumns()) {
                                if (null != n)
                                    for (let t of n.getCodewords())
                                        if (null != t) {
                                            let n = t.getRowNumber();
                                            if (n >= 0) {
                                                if (n >= e.length) continue;
                                                e[n][r].setValue(t.getValue())
                                            }
                                        } r++
                            }
                            return e
                        }
                        static isValidBarcodeColumn(t, e) {
                            return e >= 0 && e <= t.getBarcodeColumnCount() + 1
                        }
                        static getStartColumn(t, e, r, n) {
                            let i = n ? 1 : -1,
                                o = null;
                            if (er.isValidBarcodeColumn(t, e - i) && (o = t.getDetectionResultColumn(e - i).getCodeword(r)), null != o) return n ? o.getEndX() : o.getStartX();
                            if (o = t.getDetectionResultColumn(e).getCodewordNearby(r), null != o) return n ? o.getStartX() : o.getEndX();
                            if (er.isValidBarcodeColumn(t, e - i) && (o = t.getDetectionResultColumn(e - i).getCodewordNearby(r)), null != o) return n ? o.getEndX() : o.getStartX();
                            let s = 0;
                            for (; er.isValidBarcodeColumn(t, e - i);) {
                                e -= i;
                                for (let r of t.getDetectionResultColumn(e).getCodewords())
                                    if (null != r) return (n ? r.getEndX() : r.getStartX()) + i * s * (r.getEndX() - r.getStartX());
                                s++
                            }
                            return n ? t.getBoundingBox().getMinX() : t.getBoundingBox().getMaxX()
                        }
                        static detectCodeword(t, e, r, n, i, o, s, a) {
                            i = er.adjustCodewordStartColumn(t, e, r, n, i, o);
                            let A, l = er.getModuleBitCount(t, e, r, n, i, o);
                            if (null == l) return null;
                            let c = et.sum(l);
                            if (n) A = i + c;
                            else {
                                for (let t = 0; t < l.length / 2; t++) {
                                    let e = l[t];
                                    l[t] = l[l.length - 1 - t], l[l.length - 1 - t] = e
                                }
                                A = i, i = A - c
                            }
                            if (!er.checkCodewordSkew(c, s, a)) return null;
                            let h = He.getDecodedValue(l),
                                g = Oe.getCodeword(h);
                            return -1 === g ? null : new We(i, A, er.getCodewordBucketNumber(h), g)
                        }
                        static getModuleBitCount(t, e, r, n, i, o) {
                            let s = i,
                                a = new Int32Array(8),
                                A = 0,
                                l = n ? 1 : -1,
                                c = n;
                            for (;
                                (n ? s < r : s >= e) && A < a.length;) t.get(s, o) === c ? (a[A]++, s += l) : (A++, c = !c);
                            return A === a.length || s === (n ? r : e) && A === a.length - 1 ? a : null
                        }
                        static getNumberOfECCodeWords(t) {
                            return 2 << t
                        }
                        static adjustCodewordStartColumn(t, e, r, n, i, o) {
                            let s = i,
                                a = n ? -1 : 1;
                            for (let A = 0; A < 2; A++) {
                                for (;
                                    (n ? s >= e : s < r) && n === t.get(s, o);) {
                                    if (Math.abs(i - s) > er.CODEWORD_SKEW_SIZE) return i;
                                    s += a
                                }
                                a = -a, n = !n
                            }
                            return s
                        }
                        static checkCodewordSkew(t, e, r) {
                            return e - er.CODEWORD_SKEW_SIZE <= t && t <= r + er.CODEWORD_SKEW_SIZE
                        }
                        static decodeCodewords(t, e, r) {
                            if (0 === t.length) throw E.getFormatInstance();
                            let n = 1 << e + 1,
                                i = er.correctErrors(t, r, n);
                            er.verifyCodewordCount(t, n);
                            let o = tr.decode(t, "" + e);
                            return o.setErrorsCorrected(i), o.setErasures(r.length), o
                        }
                        static correctErrors(t, e, r) {
                            if (null != e && e.length > r / 2 + er.MAX_ERRORS || r < 0 || r > er.MAX_EC_CODEWORDS) throw l.getChecksumInstance();
                            return er.errorCorrection.decode(t, r, e)
                        }
                        static verifyCodewordCount(t, e) {
                            if (t.length < 4) throw E.getFormatInstance();
                            let r = t[0];
                            if (r > t.length) throw E.getFormatInstance();
                            if (0 === r) {
                                if (!(e < t.length)) throw E.getFormatInstance();
                                t[0] = t.length - e
                            }
                        }
                        static getBitCountForCodeword(t) {
                            let e = new Int32Array(8),
                                r = 0,
                                n = e.length - 1;
                            for (; !((1 & t) !== r && (r = 1 & t, n--, n < 0));) e[n]++, t >>= 1;
                            return e
                        }
                        static getCodewordBucketNumber(t) {
                            return t instanceof Int32Array ? this.getCodewordBucketNumber_Int32Array(t) : this.getCodewordBucketNumber_number(t)
                        }
                        static getCodewordBucketNumber_number(t) {
                            return er.getCodewordBucketNumber(er.getBitCountForCodeword(t))
                        }
                        static getCodewordBucketNumber_Int32Array(t) {
                            return (t[0] - t[2] + t[4] - t[6] + 9) % 9
                        }
                        static toString(t) {
                            let e = new Ze;
                            for (let r = 0; r < t.length; r++) {
                                e.format("Row %2d: ", r);
                                for (let n = 0; n < t[r].length; n++) {
                                    let i = t[r][n];
                                    0 === i.getValue().length ? e.format("        ", null) : e.format("%4d(%2d)", i.getValue()[0], i.getConfidence(i.getValue()[0]))
                                }
                                e.format("%n")
                            }
                            return e.toString()
                        }
                    }
                    er.CODEWORD_SKEW_SIZE = 2, er.MAX_ERRORS = 3, er.MAX_EC_CODEWORDS = 512, er.errorCorrection = new Le;
                    class rr {
                        decode(t, e = null) {
                            let r = rr.decode(t, e, !1);
                            if (null == r || 0 === r.length || null == r[0]) throw M.getNotFoundInstance();
                            return r[0]
                        }
                        decodeMultiple(t, e = null) {
                            try {
                                return rr.decode(t, e, !0)
                            } catch (t) {
                                if (t instanceof E || t instanceof l) throw M.getNotFoundInstance();
                                throw t
                            }
                        }
                        static decode(t, e, r) {
                            const n = new Array,
                                i = Fe.detectMultiple(t, e, r);
                            for (const t of i.getPoints()) {
                                const e = er.decode(i.getBits(), t[4], t[5], t[6], t[7], rr.getMinCodewordWidth(t), rr.getMaxCodewordWidth(t)),
                                    r = new L(e.getText(), e.getRawBytes(), void 0, t, Q.PDF_417);
                                r.putMetadata(H.ERROR_CORRECTION_LEVEL, e.getECLevel());
                                const o = e.getOther();
                                null != o && r.putMetadata(H.PDF417_EXTRA_METADATA, o), n.push(r)
                            }
                            return n.map((t => t))
                        }
                        static getMaxWidth(t, e) {
                            return null == t || null == e ? 0 : Math.trunc(Math.abs(t.getX() - e.getX()))
                        }
                        static getMinWidth(t, e) {
                            return null == t || null == e ? C.MAX_VALUE : Math.trunc(Math.abs(t.getX() - e.getX()))
                        }
                        static getMaxCodewordWidth(t) {
                            return Math.floor(Math.max(Math.max(rr.getMaxWidth(t[0], t[4]), rr.getMaxWidth(t[6], t[2]) * Oe.MODULES_IN_CODEWORD / Oe.MODULES_IN_STOP_PATTERN), Math.max(rr.getMaxWidth(t[1], t[5]), rr.getMaxWidth(t[7], t[3]) * Oe.MODULES_IN_CODEWORD / Oe.MODULES_IN_STOP_PATTERN)))
                        }
                        static getMinCodewordWidth(t) {
                            return Math.floor(Math.min(Math.min(rr.getMinWidth(t[0], t[4]), rr.getMinWidth(t[6], t[2]) * Oe.MODULES_IN_CODEWORD / Oe.MODULES_IN_STOP_PATTERN), Math.min(rr.getMinWidth(t[1], t[5]), rr.getMinWidth(t[7], t[3]) * Oe.MODULES_IN_CODEWORD / Oe.MODULES_IN_STOP_PATTERN)))
                        }
                        reset() {}
                    }
                    class nr extends o {}
                    nr.kind = "ReaderException";
                    class ir {
                        constructor(t, e) {
                            this.verbose = !0 === t, e && this.setHints(e)
                        }
                        decode(t, e) {
                            return e && this.setHints(e), this.decodeInternal(t)
                        }
                        decodeWithState(t) {
                            return null !== this.readers && void 0 !== this.readers || this.setHints(null), this.decodeInternal(t)
                        }
                        setHints(t) {
                            this.hints = t;
                            const e = null != t && void 0 !== t.get(w.TRY_HARDER),
                                r = null == t ? null : t.get(w.POSSIBLE_FORMATS),
                                n = new Array;
                            if (null != r) {
                                const i = r.some((t => t === Q.UPC_A || t === Q.UPC_E || t === Q.EAN_13 || t === Q.EAN_8 || t === Q.CODABAR || t === Q.CODE_39 || t === Q.CODE_93 || t === Q.CODE_128 || t === Q.ITF || t === Q.RSS_14 || t === Q.RSS_EXPANDED));
                                i && !e && n.push(new ee(t, this.verbose)), r.includes(Q.QR_CODE) && n.push(new _e), r.includes(Q.DATA_MATRIX) && n.push(new he), r.includes(Q.AZTEC) && n.push(new dt), r.includes(Q.PDF_417) && n.push(new rr), i && e && n.push(new ee(t, this.verbose))
                            }
                            0 === n.length && (e || n.push(new ee(t, this.verbose)), n.push(new _e), n.push(new he), n.push(new dt), n.push(new rr), e && n.push(new ee(t, this.verbose))), this.readers = n
                        }
                        reset() {
                            if (null !== this.readers)
                                for (const t of this.readers) t.reset()
                        }
                        decodeInternal(t) {
                            if (null === this.readers) throw new nr("No readers where selected, nothing can be read.");
                            for (const e of this.readers) try {
                                return e.decode(t, this.hints)
                            } catch (t) {
                                if (t instanceof nr) continue
                            }
                            throw new M("No MultiFormat Readers were able to detect the code.")
                        }
                    }
                    var or;
                    ! function(t) {
                        t[t.ERROR_CORRECTION = 0] = "ERROR_CORRECTION", t[t.CHARACTER_SET = 1] = "CHARACTER_SET", t[t.DATA_MATRIX_SHAPE = 2] = "DATA_MATRIX_SHAPE", t[t.MIN_SIZE = 3] = "MIN_SIZE", t[t.MAX_SIZE = 4] = "MAX_SIZE", t[t.MARGIN = 5] = "MARGIN", t[t.PDF417_COMPACT = 6] = "PDF417_COMPACT", t[t.PDF417_COMPACTION = 7] = "PDF417_COMPACTION", t[t.PDF417_DIMENSIONS = 8] = "PDF417_DIMENSIONS", t[t.AZTEC_LAYERS = 9] = "AZTEC_LAYERS", t[t.QR_VERSION = 10] = "QR_VERSION"
                    }(or || (or = {}));
                    var sr = or;
                    class ar {
                        constructor(t) {
                            this.field = t, this.cachedGenerators = [], this.cachedGenerators.push(new X(t, Int32Array.from([1])))
                        }
                        buildGenerator(t) {
                            const e = this.cachedGenerators;
                            if (t >= e.length) {
                                let r = e[e.length - 1];
                                const n = this.field;
                                for (let i = e.length; i <= t; i++) {
                                    const t = r.multiply(new X(n, Int32Array.from([1, n.exp(i - 1 + n.getGeneratorBase())])));
                                    e.push(t), r = t
                                }
                            }
                            return e[t]
                        }
                        encode(t, e) {
                            if (0 === e) throw new a("No error correction bytes");
                            const r = t.length - e;
                            if (r <= 0) throw new a("No data bytes provided");
                            const n = this.buildGenerator(e),
                                i = new Int32Array(r);
                            h.arraycopy(t, 0, i, 0, r);
                            let o = new X(this.field, i);
                            o = o.multiplyByMonomial(e, 1);
                            const s = o.divide(n)[1].getCoefficients(),
                                A = e - s.length;
                            for (let e = 0; e < A; e++) t[r + e] = 0;
                            h.arraycopy(s, 0, t, r + A, s.length)
                        }
                    }
                    class Ar {
                        constructor() {}
                        static applyMaskPenaltyRule1(t) {
                            return Ar.applyMaskPenaltyRule1Internal(t, !0) + Ar.applyMaskPenaltyRule1Internal(t, !1)
                        }
                        static applyMaskPenaltyRule2(t) {
                            let e = 0;
                            const r = t.getArray(),
                                n = t.getWidth(),
                                i = t.getHeight();
                            for (let t = 0; t < i - 1; t++) {
                                const i = r[t];
                                for (let o = 0; o < n - 1; o++) {
                                    const n = i[o];
                                    n === i[o + 1] && n === r[t + 1][o] && n === r[t + 1][o + 1] && e++
                                }
                            }
                            return Ar.N2 * e
                        }
                        static applyMaskPenaltyRule3(t) {
                            let e = 0;
                            const r = t.getArray(),
                                n = t.getWidth(),
                                i = t.getHeight();
                            for (let t = 0; t < i; t++)
                                for (let o = 0; o < n; o++) {
                                    const s = r[t];
                                    o + 6 < n && 1 === s[o] && 0 === s[o + 1] && 1 === s[o + 2] && 1 === s[o + 3] && 1 === s[o + 4] && 0 === s[o + 5] && 1 === s[o + 6] && (Ar.isWhiteHorizontal(s, o - 4, o) || Ar.isWhiteHorizontal(s, o + 7, o + 11)) && e++, t + 6 < i && 1 === r[t][o] && 0 === r[t + 1][o] && 1 === r[t + 2][o] && 1 === r[t + 3][o] && 1 === r[t + 4][o] && 0 === r[t + 5][o] && 1 === r[t + 6][o] && (Ar.isWhiteVertical(r, o, t - 4, t) || Ar.isWhiteVertical(r, o, t + 7, t + 11)) && e++
                                }
                            return e * Ar.N3
                        }
                        static isWhiteHorizontal(t, e, r) {
                            e = Math.max(e, 0), r = Math.min(r, t.length);
                            for (let n = e; n < r; n++)
                                if (1 === t[n]) return !1;
                            return !0
                        }
                        static isWhiteVertical(t, e, r, n) {
                            r = Math.max(r, 0), n = Math.min(n, t.length);
                            for (let i = r; i < n; i++)
                                if (1 === t[i][e]) return !1;
                            return !0
                        }
                        static applyMaskPenaltyRule4(t) {
                            let e = 0;
                            const r = t.getArray(),
                                n = t.getWidth(),
                                i = t.getHeight();
                            for (let t = 0; t < i; t++) {
                                const i = r[t];
                                for (let t = 0; t < n; t++) 1 === i[t] && e++
                            }
                            const o = t.getHeight() * t.getWidth();
                            return Math.floor(10 * Math.abs(2 * e - o) / o) * Ar.N4
                        }
                        static getDataMaskBit(t, e, r) {
                            let n, i;
                            switch (t) {
                                case 0:
                                    n = r + e & 1;
                                    break;
                                case 1:
                                    n = 1 & r;
                                    break;
                                case 2:
                                    n = e % 3;
                                    break;
                                case 3:
                                    n = (r + e) % 3;
                                    break;
                                case 4:
                                    n = Math.floor(r / 2) + Math.floor(e / 3) & 1;
                                    break;
                                case 5:
                                    i = r * e, n = (1 & i) + i % 3;
                                    break;
                                case 6:
                                    i = r * e, n = (1 & i) + i % 3 & 1;
                                    break;
                                case 7:
                                    i = r * e, n = i % 3 + (r + e & 1) & 1;
                                    break;
                                default:
                                    throw new a("Invalid mask pattern: " + t)
                            }
                            return 0 === n
                        }
                        static applyMaskPenaltyRule1Internal(t, e) {
                            let r = 0;
                            const n = e ? t.getHeight() : t.getWidth(),
                                i = e ? t.getWidth() : t.getHeight(),
                                o = t.getArray();
                            for (let t = 0; t < n; t++) {
                                let n = 0,
                                    s = -1;
                                for (let a = 0; a < i; a++) {
                                    const i = e ? o[t][a] : o[a][t];
                                    i === s ? n++ : (n >= 5 && (r += Ar.N1 + (n - 5)), n = 1, s = i)
                                }
                                n >= 5 && (r += Ar.N1 + (n - 5))
                            }
                            return r
                        }
                    }
                    Ar.N1 = 3, Ar.N2 = 3, Ar.N3 = 40, Ar.N4 = 10;
                    class lr {
                        constructor(t, e) {
                            this.width = t, this.height = e;
                            const r = new Array(e);
                            for (let n = 0; n !== e; n++) r[n] = new Uint8Array(t);
                            this.bytes = r
                        }
                        getHeight() {
                            return this.height
                        }
                        getWidth() {
                            return this.width
                        }
                        get(t, e) {
                            return this.bytes[e][t]
                        }
                        getArray() {
                            return this.bytes
                        }
                        setNumber(t, e, r) {
                            this.bytes[e][t] = r
                        }
                        setBoolean(t, e, r) {
                            this.bytes[e][t] = r ? 1 : 0
                        }
                        clear(t) {
                            for (const e of this.bytes) u.fill(e, t)
                        }
                        equals(t) {
                            if (!(t instanceof lr)) return !1;
                            const e = t;
                            if (this.width !== e.width) return !1;
                            if (this.height !== e.height) return !1;
                            for (let t = 0, r = this.height; t < r; ++t) {
                                const r = this.bytes[t],
                                    n = e.bytes[t];
                                for (let t = 0, e = this.width; t < e; ++t)
                                    if (r[t] !== n[t]) return !1
                            }
                            return !0
                        }
                        toString() {
                            const t = new D;
                            for (let e = 0, r = this.height; e < r; ++e) {
                                const r = this.bytes[e];
                                for (let e = 0, n = this.width; e < n; ++e) switch (r[e]) {
                                    case 0:
                                        t.append(" 0");
                                        break;
                                    case 1:
                                        t.append(" 1");
                                        break;
                                    default:
                                        t.append("  ")
                                }
                                t.append("\n")
                            }
                            return t.toString()
                        }
                    }
                    class cr {
                        constructor() {
                            this.maskPattern = -1
                        }
                        getMode() {
                            return this.mode
                        }
                        getECLevel() {
                            return this.ecLevel
                        }
                        getVersion() {
                            return this.version
                        }
                        getMaskPattern() {
                            return this.maskPattern
                        }
                        getMatrix() {
                            return this.matrix
                        }
                        toString() {
                            const t = new D;
                            return t.append("<<\n"), t.append(" mode: "), t.append(this.mode ? this.mode.toString() : "null"), t.append("\n ecLevel: "), t.append(this.ecLevel ? this.ecLevel.toString() : "null"), t.append("\n version: "), t.append(this.version ? this.version.toString() : "null"), t.append("\n maskPattern: "), t.append(this.maskPattern.toString()), this.matrix ? (t.append("\n matrix:\n"), t.append(this.matrix.toString())) : t.append("\n matrix: null\n"), t.append(">>\n"), t.toString()
                        }
                        setMode(t) {
                            this.mode = t
                        }
                        setECLevel(t) {
                            this.ecLevel = t
                        }
                        setVersion(t) {
                            this.version = t
                        }
                        setMaskPattern(t) {
                            this.maskPattern = t
                        }
                        setMatrix(t) {
                            this.matrix = t
                        }
                        static isValidMaskPattern(t) {
                            return t >= 0 && t < cr.NUM_MASK_PATTERNS
                        }
                    }
                    cr.NUM_MASK_PATTERNS = 8;
                    class hr extends o {}
                    hr.kind = "WriterException";
                    class gr {
                        constructor() {}
                        static clearMatrix(t) {
                            t.clear(255)
                        }
                        static buildMatrix(t, e, r, n, i) {
                            gr.clearMatrix(i), gr.embedBasicPatterns(r, i), gr.embedTypeInfo(e, n, i), gr.maybeEmbedVersionInfo(r, i), gr.embedDataBits(t, n, i)
                        }
                        static embedBasicPatterns(t, e) {
                            gr.embedPositionDetectionPatternsAndSeparators(e), gr.embedDarkDotAtLeftBottomCorner(e), gr.maybeEmbedPositionAdjustmentPatterns(t, e), gr.embedTimingPatterns(e)
                        }
                        static embedTypeInfo(t, e, r) {
                            const n = new I;
                            gr.makeTypeInfoBits(t, e, n);
                            for (let t = 0, e = n.getSize(); t < e; ++t) {
                                const e = n.get(n.getSize() - 1 - t),
                                    i = gr.TYPE_INFO_COORDINATES[t],
                                    o = i[0],
                                    s = i[1];
                                if (r.setBoolean(o, s, e), t < 8) {
                                    const n = r.getWidth() - t - 1,
                                        i = 8;
                                    r.setBoolean(n, i, e)
                                } else {
                                    const n = 8,
                                        i = r.getHeight() - 7 + (t - 8);
                                    r.setBoolean(n, i, e)
                                }
                            }
                        }
                        static maybeEmbedVersionInfo(t, e) {
                            if (t.getVersionNumber() < 7) return;
                            const r = new I;
                            gr.makeVersionInfoBits(t, r);
                            let n = 17;
                            for (let t = 0; t < 6; ++t)
                                for (let i = 0; i < 3; ++i) {
                                    const o = r.get(n);
                                    n--, e.setBoolean(t, e.getHeight() - 11 + i, o), e.setBoolean(e.getHeight() - 11 + i, t, o)
                                }
                        }
                        static embedDataBits(t, e, r) {
                            let n = 0,
                                i = -1,
                                o = r.getWidth() - 1,
                                s = r.getHeight() - 1;
                            for (; o > 0;) {
                                for (6 === o && (o -= 1); s >= 0 && s < r.getHeight();) {
                                    for (let i = 0; i < 2; ++i) {
                                        const a = o - i;
                                        if (!gr.isEmpty(r.get(a, s))) continue;
                                        let A;
                                        n < t.getSize() ? (A = t.get(n), ++n) : A = !1, 255 !== e && Ar.getDataMaskBit(e, a, s) && (A = !A), r.setBoolean(a, s, A)
                                    }
                                    s += i
                                }
                                i = -i, s += i, o -= 2
                            }
                            if (n !== t.getSize()) throw new hr("Not all bits consumed: " + n + "/" + t.getSize())
                        }
                        static findMSBSet(t) {
                            return 32 - C.numberOfLeadingZeros(t)
                        }
                        static calculateBCHCode(t, e) {
                            if (0 === e) throw new a("0 polynomial");
                            const r = gr.findMSBSet(e);
                            for (t <<= r - 1; gr.findMSBSet(t) >= r;) t ^= e << gr.findMSBSet(t) - r;
                            return t
                        }
                        static makeTypeInfoBits(t, e, r) {
                            if (!cr.isValidMaskPattern(e)) throw new hr("Invalid mask pattern");
                            const n = t.getBits() << 3 | e;
                            r.appendBits(n, 5);
                            const i = gr.calculateBCHCode(n, gr.TYPE_INFO_POLY);
                            r.appendBits(i, 10);
                            const o = new I;
                            if (o.appendBits(gr.TYPE_INFO_MASK_PATTERN, 15), r.xor(o), 15 !== r.getSize()) throw new hr("should not happen but we got: " + r.getSize())
                        }
                        static makeVersionInfoBits(t, e) {
                            e.appendBits(t.getVersionNumber(), 6);
                            const r = gr.calculateBCHCode(t.getVersionNumber(), gr.VERSION_INFO_POLY);
                            if (e.appendBits(r, 12), 18 !== e.getSize()) throw new hr("should not happen but we got: " + e.getSize())
                        }
                        static isEmpty(t) {
                            return 255 === t
                        }
                        static embedTimingPatterns(t) {
                            for (let e = 8; e < t.getWidth() - 8; ++e) {
                                const r = (e + 1) % 2;
                                gr.isEmpty(t.get(e, 6)) && t.setNumber(e, 6, r), gr.isEmpty(t.get(6, e)) && t.setNumber(6, e, r)
                            }
                        }
                        static embedDarkDotAtLeftBottomCorner(t) {
                            if (0 === t.get(8, t.getHeight() - 8)) throw new hr;
                            t.setNumber(8, t.getHeight() - 8, 1)
                        }
                        static embedHorizontalSeparationPattern(t, e, r) {
                            for (let n = 0; n < 8; ++n) {
                                if (!gr.isEmpty(r.get(t + n, e))) throw new hr;
                                r.setNumber(t + n, e, 0)
                            }
                        }
                        static embedVerticalSeparationPattern(t, e, r) {
                            for (let n = 0; n < 7; ++n) {
                                if (!gr.isEmpty(r.get(t, e + n))) throw new hr;
                                r.setNumber(t, e + n, 0)
                            }
                        }
                        static embedPositionAdjustmentPattern(t, e, r) {
                            for (let n = 0; n < 5; ++n) {
                                const i = gr.POSITION_ADJUSTMENT_PATTERN[n];
                                for (let o = 0; o < 5; ++o) r.setNumber(t + o, e + n, i[o])
                            }
                        }
                        static embedPositionDetectionPattern(t, e, r) {
                            for (let n = 0; n < 7; ++n) {
                                const i = gr.POSITION_DETECTION_PATTERN[n];
                                for (let o = 0; o < 7; ++o) r.setNumber(t + o, e + n, i[o])
                            }
                        }
                        static embedPositionDetectionPatternsAndSeparators(t) {
                            const e = gr.POSITION_DETECTION_PATTERN[0].length;
                            gr.embedPositionDetectionPattern(0, 0, t), gr.embedPositionDetectionPattern(t.getWidth() - e, 0, t), gr.embedPositionDetectionPattern(0, t.getWidth() - e, t);
                            gr.embedHorizontalSeparationPattern(0, 7, t), gr.embedHorizontalSeparationPattern(t.getWidth() - 8, 7, t), gr.embedHorizontalSeparationPattern(0, t.getWidth() - 8, t);
                            gr.embedVerticalSeparationPattern(7, 0, t), gr.embedVerticalSeparationPattern(t.getHeight() - 7 - 1, 0, t), gr.embedVerticalSeparationPattern(7, t.getHeight() - 7, t)
                        }
                        static maybeEmbedPositionAdjustmentPatterns(t, e) {
                            if (t.getVersionNumber() < 2) return;
                            const r = t.getVersionNumber() - 1,
                                n = gr.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[r];
                            for (let t = 0, r = n.length; t !== r; t++) {
                                const i = n[t];
                                if (i >= 0)
                                    for (let t = 0; t !== r; t++) {
                                        const r = n[t];
                                        r >= 0 && gr.isEmpty(e.get(r, i)) && gr.embedPositionAdjustmentPattern(r - 2, i - 2, e)
                                    }
                            }
                        }
                    }
                    gr.POSITION_DETECTION_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1, 1, 1])]), gr.POSITION_ADJUSTMENT_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1])]), gr.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([Int32Array.from([-1, -1, -1, -1, -1, -1, -1]), Int32Array.from([6, 18, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, -1, -1, -1, -1, -1]), Int32Array.from([6, 26, -1, -1, -1, -1, -1]), Int32Array.from([6, 30, -1, -1, -1, -1, -1]), Int32Array.from([6, 34, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, 38, -1, -1, -1, -1]), Int32Array.from([6, 24, 42, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, -1, -1, -1, -1]), Int32Array.from([6, 28, 50, -1, -1, -1, -1]), Int32Array.from([6, 30, 54, -1, -1, -1, -1]), Int32Array.from([6, 32, 58, -1, -1, -1, -1]), Int32Array.from([6, 34, 62, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, 66, -1, -1, -1]), Int32Array.from([6, 26, 48, 70, -1, -1, -1]), Int32Array.from([6, 26, 50, 74, -1, -1, -1]), Int32Array.from([6, 30, 54, 78, -1, -1, -1]), Int32Array.from([6, 30, 56, 82, -1, -1, -1]), Int32Array.from([6, 30, 58, 86, -1, -1, -1]), Int32Array.from([6, 34, 62, 90, -1, -1, -1]), Int32Array.from([6, 28, 50, 72, 94, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, -1, -1]), Int32Array.from([6, 30, 54, 78, 102, -1, -1]), Int32Array.from([6, 28, 54, 80, 106, -1, -1]), Int32Array.from([6, 32, 58, 84, 110, -1, -1]), Int32Array.from([6, 30, 58, 86, 114, -1, -1]), Int32Array.from([6, 34, 62, 90, 118, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, 122, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, -1]), Int32Array.from([6, 26, 52, 78, 104, 130, -1]), Int32Array.from([6, 30, 56, 82, 108, 134, -1]), Int32Array.from([6, 34, 60, 86, 112, 138, -1]), Int32Array.from([6, 30, 58, 86, 114, 142, -1]), Int32Array.from([6, 34, 62, 90, 118, 146, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, 150]), Int32Array.from([6, 24, 50, 76, 102, 128, 154]), Int32Array.from([6, 28, 54, 80, 106, 132, 158]), Int32Array.from([6, 32, 58, 84, 110, 136, 162]), Int32Array.from([6, 26, 54, 82, 110, 138, 166]), Int32Array.from([6, 30, 58, 86, 114, 142, 170])]), gr.TYPE_INFO_COORDINATES = Array.from([Int32Array.from([8, 0]), Int32Array.from([8, 1]), Int32Array.from([8, 2]), Int32Array.from([8, 3]), Int32Array.from([8, 4]), Int32Array.from([8, 5]), Int32Array.from([8, 7]), Int32Array.from([8, 8]), Int32Array.from([7, 8]), Int32Array.from([5, 8]), Int32Array.from([4, 8]), Int32Array.from([3, 8]), Int32Array.from([2, 8]), Int32Array.from([1, 8]), Int32Array.from([0, 8])]), gr.VERSION_INFO_POLY = 7973, gr.TYPE_INFO_POLY = 1335, gr.TYPE_INFO_MASK_PATTERN = 21522;
                    class dr {
                        constructor(t, e) {
                            this.dataBytes = t, this.errorCorrectionBytes = e
                        }
                        getDataBytes() {
                            return this.dataBytes
                        }
                        getErrorCorrectionBytes() {
                            return this.errorCorrectionBytes
                        }
                    }
                    class ur {
                        constructor() {}
                        static calculateMaskPenalty(t) {
                            return Ar.applyMaskPenaltyRule1(t) + Ar.applyMaskPenaltyRule2(t) + Ar.applyMaskPenaltyRule3(t) + Ar.applyMaskPenaltyRule4(t)
                        }
                        static encode(t, e, r = null) {
                            let n = ur.DEFAULT_BYTE_MODE_ENCODING;
                            const i = null !== r && void 0 !== r.get(sr.CHARACTER_SET);
                            i && (n = r.get(sr.CHARACTER_SET).toString());
                            const o = this.chooseMode(t, n),
                                s = new I;
                            if (o === me.BYTE && (i || ur.DEFAULT_BYTE_MODE_ENCODING !== n)) {
                                const t = m.getCharacterSetECIByName(n);
                                void 0 !== t && this.appendECI(t, s)
                            }
                            this.appendModeInfo(o, s);
                            const a = new I;
                            let A;
                            if (this.appendBytes(t, o, a, n), null !== r && void 0 !== r.get(sr.QR_VERSION)) {
                                const t = Number.parseInt(r.get(sr.QR_VERSION).toString(), 10);
                                A = Ie.getVersionForNumber(t);
                                const n = this.calculateBitsNeeded(o, s, a, A);
                                if (!this.willFit(n, A, e)) throw new hr("Data too big for requested version")
                            } else A = this.recommendVersion(e, o, s, a);
                            const l = new I;
                            l.appendBitArray(s);
                            const c = o === me.BYTE ? a.getSizeInBytes() : t.length;
                            this.appendLengthInfo(c, A, o, l), l.appendBitArray(a);
                            const h = A.getECBlocksForLevel(e),
                                g = A.getTotalCodewords() - h.getTotalECCodewords();
                            this.terminateBits(g, l);
                            const d = this.interleaveWithECBytes(l, A.getTotalCodewords(), g, h.getNumBlocks()),
                                u = new cr;
                            u.setECLevel(e), u.setMode(o), u.setVersion(A);
                            const C = A.getDimensionForVersion(),
                                f = new lr(C, C),
                                w = this.chooseMaskPattern(d, e, A, f);
                            return u.setMaskPattern(w), gr.buildMatrix(d, e, A, w, f), u.setMatrix(f), u
                        }
                        static recommendVersion(t, e, r, n) {
                            const i = this.calculateBitsNeeded(e, r, n, Ie.getVersionForNumber(1)),
                                o = this.chooseVersion(i, t),
                                s = this.calculateBitsNeeded(e, r, n, o);
                            return this.chooseVersion(s, t)
                        }
                        static calculateBitsNeeded(t, e, r, n) {
                            return e.getSize() + t.getCharacterCountBits(n) + r.getSize()
                        }
                        static getAlphanumericCode(t) {
                            return t < ur.ALPHANUMERIC_TABLE.length ? ur.ALPHANUMERIC_TABLE[t] : -1
                        }
                        static chooseMode(t, e = null) {
                            if (m.SJIS.getName() === e && this.isOnlyDoubleByteKanji(t)) return me.KANJI;
                            let r = !1,
                                n = !1;
                            for (let e = 0, i = t.length; e < i; ++e) {
                                const i = t.charAt(e);
                                if (ur.isDigit(i)) r = !0;
                                else {
                                    if (-1 === this.getAlphanumericCode(i.charCodeAt(0))) return me.BYTE;
                                    n = !0
                                }
                            }
                            return n ? me.ALPHANUMERIC : r ? me.NUMERIC : me.BYTE
                        }
                        static isOnlyDoubleByteKanji(t) {
                            let e;
                            try {
                                e = S.encode(t, m.SJIS)
                            } catch (t) {
                                return !1
                            }
                            const r = e.length;
                            if (r % 2 != 0) return !1;
                            for (let t = 0; t < r; t += 2) {
                                const r = 255 & e[t];
                                if ((r < 129 || r > 159) && (r < 224 || r > 235)) return !1
                            }
                            return !0
                        }
                        static chooseMaskPattern(t, e, r, n) {
                            let i = Number.MAX_SAFE_INTEGER,
                                o = -1;
                            for (let s = 0; s < cr.NUM_MASK_PATTERNS; s++) {
                                gr.buildMatrix(t, e, r, s, n);
                                let a = this.calculateMaskPenalty(n);
                                a < i && (i = a, o = s)
                            }
                            return o
                        }
                        static chooseVersion(t, e) {
                            for (let r = 1; r <= 40; r++) {
                                const n = Ie.getVersionForNumber(r);
                                if (ur.willFit(t, n, e)) return n
                            }
                            throw new hr("Data too big")
                        }
                        static willFit(t, e, r) {
                            return e.getTotalCodewords() - e.getECBlocksForLevel(r).getTotalECCodewords() >= (t + 7) / 8
                        }
                        static terminateBits(t, e) {
                            const r = 8 * t;
                            if (e.getSize() > r) throw new hr("data bits cannot fit in the QR Code" + e.getSize() + " > " + r);
                            for (let t = 0; t < 4 && e.getSize() < r; ++t) e.appendBit(!1);
                            const n = 7 & e.getSize();
                            if (n > 0)
                                for (let t = n; t < 8; t++) e.appendBit(!1);
                            const i = t - e.getSizeInBytes();
                            for (let t = 0; t < i; ++t) e.appendBits(0 == (1 & t) ? 236 : 17, 8);
                            if (e.getSize() !== r) throw new hr("Bits size does not equal capacity")
                        }
                        static getNumDataBytesAndNumECBytesForBlockID(t, e, r, n, i, o) {
                            if (n >= r) throw new hr("Block ID too large");
                            const s = t % r,
                                a = r - s,
                                A = Math.floor(t / r),
                                l = A + 1,
                                c = Math.floor(e / r),
                                h = c + 1,
                                g = A - c,
                                d = l - h;
                            if (g !== d) throw new hr("EC bytes mismatch");
                            if (r !== a + s) throw new hr("RS blocks mismatch");
                            if (t !== (c + g) * a + (h + d) * s) throw new hr("Total bytes mismatch");
                            n < a ? (i[0] = c, o[0] = g) : (i[0] = h, o[0] = d)
                        }
                        static interleaveWithECBytes(t, e, r, n) {
                            if (t.getSizeInBytes() !== r) throw new hr("Number of bits and data bytes does not match");
                            let i = 0,
                                o = 0,
                                s = 0;
                            const a = new Array;
                            for (let A = 0; A < n; ++A) {
                                const l = new Int32Array(1),
                                    c = new Int32Array(1);
                                ur.getNumDataBytesAndNumECBytesForBlockID(e, r, n, A, l, c);
                                const h = l[0],
                                    g = new Uint8Array(h);
                                t.toBytes(8 * i, g, 0, h);
                                const d = ur.generateECBytes(g, c[0]);
                                a.push(new dr(g, d)), o = Math.max(o, h), s = Math.max(s, d.length), i += l[0]
                            }
                            if (r !== i) throw new hr("Data bytes does not match offset");
                            const A = new I;
                            for (let t = 0; t < o; ++t)
                                for (const e of a) {
                                    const r = e.getDataBytes();
                                    t < r.length && A.appendBits(r[t], 8)
                                }
                            for (let t = 0; t < s; ++t)
                                for (const e of a) {
                                    const r = e.getErrorCorrectionBytes();
                                    t < r.length && A.appendBits(r[t], 8)
                                }
                            if (e !== A.getSizeInBytes()) throw new hr("Interleaving error: " + e + " and " + A.getSizeInBytes() + " differ.");
                            return A
                        }
                        static generateECBytes(t, e) {
                            const r = t.length,
                                n = new Int32Array(r + e);
                            for (let e = 0; e < r; e++) n[e] = 255 & t[e];
                            new ar(J.QR_CODE_FIELD_256).encode(n, e);
                            const i = new Uint8Array(e);
                            for (let t = 0; t < e; t++) i[t] = n[r + t];
                            return i
                        }
                        static appendModeInfo(t, e) {
                            e.appendBits(t.getBits(), 4)
                        }
                        static appendLengthInfo(t, e, r, n) {
                            const i = r.getCharacterCountBits(e);
                            if (t >= 1 << i) throw new hr(t + " is bigger than " + ((1 << i) - 1));
                            n.appendBits(t, i)
                        }
                        static appendBytes(t, e, r, n) {
                            switch (e) {
                                case me.NUMERIC:
                                    ur.appendNumericBytes(t, r);
                                    break;
                                case me.ALPHANUMERIC:
                                    ur.appendAlphanumericBytes(t, r);
                                    break;
                                case me.BYTE:
                                    ur.append8BitBytes(t, r, n);
                                    break;
                                case me.KANJI:
                                    ur.appendKanjiBytes(t, r);
                                    break;
                                default:
                                    throw new hr("Invalid mode: " + e)
                            }
                        }
                        static getDigit(t) {
                            return t.charCodeAt(0) - 48
                        }
                        static isDigit(t) {
                            const e = ur.getDigit(t);
                            return e >= 0 && e <= 9
                        }
                        static appendNumericBytes(t, e) {
                            const r = t.length;
                            let n = 0;
                            for (; n < r;) {
                                const i = ur.getDigit(t.charAt(n));
                                if (n + 2 < r) {
                                    const r = ur.getDigit(t.charAt(n + 1)),
                                        o = ur.getDigit(t.charAt(n + 2));
                                    e.appendBits(100 * i + 10 * r + o, 10), n += 3
                                } else if (n + 1 < r) {
                                    const r = ur.getDigit(t.charAt(n + 1));
                                    e.appendBits(10 * i + r, 7), n += 2
                                } else e.appendBits(i, 4), n++
                            }
                        }
                        static appendAlphanumericBytes(t, e) {
                            const r = t.length;
                            let n = 0;
                            for (; n < r;) {
                                const i = ur.getAlphanumericCode(t.charCodeAt(n));
                                if (-1 === i) throw new hr;
                                if (n + 1 < r) {
                                    const r = ur.getAlphanumericCode(t.charCodeAt(n + 1));
                                    if (-1 === r) throw new hr;
                                    e.appendBits(45 * i + r, 11), n += 2
                                } else e.appendBits(i, 6), n++
                            }
                        }
                        static append8BitBytes(t, e, r) {
                            let n;
                            try {
                                n = S.encode(t, r)
                            } catch (t) {
                                throw new hr(t)
                            }
                            for (let t = 0, r = n.length; t !== r; t++) {
                                const r = n[t];
                                e.appendBits(r, 8)
                            }
                        }
                        static appendKanjiBytes(t, e) {
                            let r;
                            try {
                                r = S.encode(t, m.SJIS)
                            } catch (t) {
                                throw new hr(t)
                            }
                            const n = r.length;
                            for (let t = 0; t < n; t += 2) {
                                const n = (255 & r[t]) << 8 & 4294967295 | 255 & r[t + 1];
                                let i = -1;
                                if (n >= 33088 && n <= 40956 ? i = n - 33088 : n >= 57408 && n <= 60351 && (i = n - 49472), -1 === i) throw new hr("Invalid byte sequence");
                                const o = 192 * (i >> 8) + (255 & i);
                                e.appendBits(o, 13)
                            }
                        }
                        static appendECI(t, e) {
                            e.appendBits(me.ECI.getBits(), 4), e.appendBits(t.getValue(), 8)
                        }
                    }
                    ur.ALPHANUMERIC_TABLE = Int32Array.from([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1]), ur.DEFAULT_BYTE_MODE_ENCODING = m.UTF8.getName();
                    class Cr {
                        write(t, e, r, n = null) {
                            if (0 === t.length) throw new a("Found empty contents");
                            if (e < 0 || r < 0) throw new a("Requested dimensions are too small: " + e + "x" + r);
                            let i = ge.L,
                                o = Cr.QUIET_ZONE_SIZE;
                            null !== n && (void 0 !== n.get(sr.ERROR_CORRECTION) && (i = ge.fromString(n.get(sr.ERROR_CORRECTION).toString())), void 0 !== n.get(sr.MARGIN) && (o = Number.parseInt(n.get(sr.MARGIN).toString(), 10)));
                            const s = ur.encode(t, i, n);
                            return this.renderResult(s, e, r, o)
                        }
                        writeToDom(t, e, r, n, i = null) {
                            "string" == typeof t && (t = document.querySelector(t));
                            const o = this.write(e, r, n, i);
                            t && t.appendChild(o)
                        }
                        renderResult(t, e, r, n) {
                            const i = t.getMatrix();
                            if (null === i) throw new q;
                            const o = i.getWidth(),
                                s = i.getHeight(),
                                a = o + 2 * n,
                                A = s + 2 * n,
                                l = Math.max(e, a),
                                c = Math.max(r, A),
                                h = Math.min(Math.floor(l / a), Math.floor(c / A)),
                                g = Math.floor((l - o * h) / 2),
                                d = Math.floor((c - s * h) / 2),
                                u = this.createSVGElement(l, c);
                            for (let t = 0, e = d; t < s; t++, e += h)
                                for (let r = 0, n = g; r < o; r++, n += h)
                                    if (1 === i.get(r, t)) {
                                        const t = this.createSvgRectElement(n, e, h, h);
                                        u.appendChild(t)
                                    } return u
                        }
                        createSVGElement(t, e) {
                            const r = document.createElementNS(Cr.SVG_NS, "svg");
                            return r.setAttributeNS(null, "height", t.toString()), r.setAttributeNS(null, "width", e.toString()), r
                        }
                        createSvgRectElement(t, e, r, n) {
                            const i = document.createElementNS(Cr.SVG_NS, "rect");
                            return i.setAttributeNS(null, "x", t.toString()), i.setAttributeNS(null, "y", e.toString()), i.setAttributeNS(null, "height", r.toString()), i.setAttributeNS(null, "width", n.toString()), i.setAttributeNS(null, "fill", "#000000"), i
                        }
                    }
                    Cr.QUIET_ZONE_SIZE = 4, Cr.SVG_NS = "http://www.w3.org/2000/svg";
                    class Ir {
                        encode(t, e, r, n, i) {
                            if (0 === t.length) throw new a("Found empty contents");
                            if (e !== Q.QR_CODE) throw new a("Can only encode QR_CODE, but got " + e);
                            if (r < 0 || n < 0) throw new a(`Requested dimensions are too small: ${r}x${n}`);
                            let o = ge.L,
                                s = Ir.QUIET_ZONE_SIZE;
                            null !== i && (void 0 !== i.get(sr.ERROR_CORRECTION) && (o = ge.fromString(i.get(sr.ERROR_CORRECTION).toString())), void 0 !== i.get(sr.MARGIN) && (s = Number.parseInt(i.get(sr.MARGIN).toString(), 10)));
                            const A = ur.encode(t, o, i);
                            return Ir.renderResult(A, r, n, s)
                        }
                        static renderResult(t, e, r, n) {
                            const i = t.getMatrix();
                            if (null === i) throw new q;
                            const o = i.getWidth(),
                                s = i.getHeight(),
                                a = o + 2 * n,
                                A = s + 2 * n,
                                l = Math.max(e, a),
                                c = Math.max(r, A),
                                h = Math.min(Math.floor(l / a), Math.floor(c / A)),
                                g = Math.floor((l - o * h) / 2),
                                d = Math.floor((c - s * h) / 2),
                                u = new B(l, c);
                            for (let t = 0, e = d; t < s; t++, e += h)
                                for (let r = 0, n = g; r < o; r++, n += h) 1 === i.get(r, t) && u.setRegion(n, e, h, h);
                            return u
                        }
                    }
                    Ir.QUIET_ZONE_SIZE = 4;
                    class fr extends y {
                        constructor(t, e, r, n, i, o, s, A) {
                            if (super(o, s), this.yuvData = t, this.dataWidth = e, this.dataHeight = r, this.left = n, this.top = i, n + o > e || i + s > r) throw new a("Crop rectangle does not fit within image data.");
                            A && this.reverseHorizontal(o, s)
                        }
                        getRow(t, e) {
                            if (t < 0 || t >= this.getHeight()) throw new a("Requested row is outside the image: " + t);
                            const r = this.getWidth();
                            (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
                            const n = (t + this.top) * this.dataWidth + this.left;
                            return h.arraycopy(this.yuvData, n, e, 0, r), e
                        }
                        getMatrix() {
                            const t = this.getWidth(),
                                e = this.getHeight();
                            if (t === this.dataWidth && e === this.dataHeight) return this.yuvData;
                            const r = t * e,
                                n = new Uint8ClampedArray(r);
                            let i = this.top * this.dataWidth + this.left;
                            if (t === this.dataWidth) return h.arraycopy(this.yuvData, i, n, 0, r), n;
                            for (let r = 0; r < e; r++) {
                                const e = r * t;
                                h.arraycopy(this.yuvData, i, n, e, t), i += this.dataWidth
                            }
                            return n
                        }
                        isCropSupported() {
                            return !0
                        }
                        crop(t, e, r, n) {
                            return new fr(this.yuvData, this.dataWidth, this.dataHeight, this.left + t, this.top + e, r, n, !1)
                        }
                        renderThumbnail() {
                            const t = this.getWidth() / fr.THUMBNAIL_SCALE_FACTOR,
                                e = this.getHeight() / fr.THUMBNAIL_SCALE_FACTOR,
                                r = new Int32Array(t * e),
                                n = this.yuvData;
                            let i = this.top * this.dataWidth + this.left;
                            for (let o = 0; o < e; o++) {
                                const e = o * t;
                                for (let o = 0; o < t; o++) {
                                    const t = 255 & n[i + o * fr.THUMBNAIL_SCALE_FACTOR];
                                    r[e + o] = 4278190080 | 65793 * t
                                }
                                i += this.dataWidth * fr.THUMBNAIL_SCALE_FACTOR
                            }
                            return r
                        }
                        getThumbnailWidth() {
                            return this.getWidth() / fr.THUMBNAIL_SCALE_FACTOR
                        }
                        getThumbnailHeight() {
                            return this.getHeight() / fr.THUMBNAIL_SCALE_FACTOR
                        }
                        reverseHorizontal(t, e) {
                            const r = this.yuvData;
                            for (let n = 0, i = this.top * this.dataWidth + this.left; n < e; n++, i += this.dataWidth) {
                                const e = i + t / 2;
                                for (let n = i, o = i + t - 1; n < e; n++, o--) {
                                    const t = r[n];
                                    r[n] = r[o], r[o] = t
                                }
                            }
                        }
                        invert() {
                            return new _(this)
                        }
                    }
                    fr.THUMBNAIL_SCALE_FACTOR = 2;
                    class wr extends y {
                        constructor(t, e, r, n, i, o, s) {
                            if (super(e, r), this.dataWidth = n, this.dataHeight = i, this.left = o, this.top = s, 4 === t.BYTES_PER_ELEMENT) {
                                const n = e * r,
                                    i = new Uint8ClampedArray(n);
                                for (let e = 0; e < n; e++) {
                                    const r = t[e],
                                        n = r >> 16 & 255,
                                        o = r >> 7 & 510,
                                        s = 255 & r;
                                    i[e] = (n + o + s) / 4 & 255
                                }
                                this.luminances = i
                            } else this.luminances = t;
                            if (void 0 === n && (this.dataWidth = e), void 0 === i && (this.dataHeight = r), void 0 === o && (this.left = 0), void 0 === s && (this.top = 0), this.left + e > this.dataWidth || this.top + r > this.dataHeight) throw new a("Crop rectangle does not fit within image data.")
                        }
                        getRow(t, e) {
                            if (t < 0 || t >= this.getHeight()) throw new a("Requested row is outside the image: " + t);
                            const r = this.getWidth();
                            (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
                            const n = (t + this.top) * this.dataWidth + this.left;
                            return h.arraycopy(this.luminances, n, e, 0, r), e
                        }
                        getMatrix() {
                            const t = this.getWidth(),
                                e = this.getHeight();
                            if (t === this.dataWidth && e === this.dataHeight) return this.luminances;
                            const r = t * e,
                                n = new Uint8ClampedArray(r);
                            let i = this.top * this.dataWidth + this.left;
                            if (t === this.dataWidth) return h.arraycopy(this.luminances, i, n, 0, r), n;
                            for (let r = 0; r < e; r++) {
                                const e = r * t;
                                h.arraycopy(this.luminances, i, n, e, t), i += this.dataWidth
                            }
                            return n
                        }
                        isCropSupported() {
                            return !0
                        }
                        crop(t, e, r, n) {
                            return new wr(this.luminances, r, n, this.dataWidth, this.dataHeight, this.left + t, this.top + e)
                        }
                        invert() {
                            return new _(this)
                        }
                    }
                    class Er extends m {
                        static forName(t) {
                            return this.getCharacterSetECIByName(t)
                        }
                    }
                    class mr {}
                    mr.ISO_8859_1 = m.ISO8859_1;
                    class pr {
                        isCompact() {
                            return this.compact
                        }
                        setCompact(t) {
                            this.compact = t
                        }
                        getSize() {
                            return this.size
                        }
                        setSize(t) {
                            this.size = t
                        }
                        getLayers() {
                            return this.layers
                        }
                        setLayers(t) {
                            this.layers = t
                        }
                        getCodeWords() {
                            return this.codeWords
                        }
                        setCodeWords(t) {
                            this.codeWords = t
                        }
                        getMatrix() {
                            return this.matrix
                        }
                        setMatrix(t) {
                            this.matrix = t
                        }
                    }
                    class Sr {
                        static singletonList(t) {
                            return [t]
                        }
                        static min(t, e) {
                            return t.sort(e)[0]
                        }
                    }
                    class Rr extends class {
                        constructor(t) {
                            this.previous = t
                        }
                        getPrevious() {
                            return this.previous
                        }
                    } {
                        constructor(t, e, r) {
                            super(t), this.value = e, this.bitCount = r
                        }
                        appendTo(t, e) {
                            t.appendBits(this.value, this.bitCount)
                        }
                        add(t, e) {
                            return new Rr(this, t, e)
                        }
                        addBinaryShift(t, e) {
                            return console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token"), new Rr(this, t, e)
                        }
                        toString() {
                            let t = this.value & (1 << this.bitCount) - 1;
                            return t |= 1 << this.bitCount, "<" + C.toBinaryString(t | 1 << this.bitCount).substring(1) + ">"
                        }
                    }
                    class Dr extends Rr {
                        constructor(t, e, r) {
                            super(t, 0, 0), this.binaryShiftStart = e, this.binaryShiftByteCount = r
                        }
                        appendTo(t, e) {
                            for (let r = 0; r < this.binaryShiftByteCount; r++)(0 === r || 31 === r && this.binaryShiftByteCount <= 62) && (t.appendBits(31, 5), this.binaryShiftByteCount > 62 ? t.appendBits(this.binaryShiftByteCount - 31, 16) : 0 === r ? t.appendBits(Math.min(this.binaryShiftByteCount, 31), 5) : t.appendBits(this.binaryShiftByteCount - 31, 5)), t.appendBits(e[this.binaryShiftStart + r], 8)
                        }
                        addBinaryShift(t, e) {
                            return new Dr(this, t, e)
                        }
                        toString() {
                            return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + ">"
                        }
                    }

                    function Br(t, e, r) {
                        return new Rr(t, e, r)
                    }
                    const Mr = ["UPPER", "LOWER", "DIGIT", "MIXED", "PUNCT"],
                        Tr = new Rr(null, 0, 0),
                        Nr = [Int32Array.from([0, 327708, 327710, 327709, 656318]), Int32Array.from([590318, 0, 327710, 327709, 656318]), Int32Array.from([262158, 590300, 0, 590301, 932798]), Int32Array.from([327709, 327708, 656318, 0, 327710]), Int32Array.from([327711, 656380, 656382, 656381, 0])];
                    const yr = function(t) {
                        for (let e of t) u.fill(e, -1);
                        return t[0][4] = 0, t[1][4] = 0, t[1][0] = 28, t[3][4] = 0, t[2][4] = 0, t[2][0] = 15, t
                    }(u.createInt32Array(6, 6));
                    class _r {
                        constructor(t, e, r, n) {
                            this.token = t, this.mode = e, this.binaryShiftByteCount = r, this.bitCount = n
                        }
                        getMode() {
                            return this.mode
                        }
                        getToken() {
                            return this.token
                        }
                        getBinaryShiftByteCount() {
                            return this.binaryShiftByteCount
                        }
                        getBitCount() {
                            return this.bitCount
                        }
                        latchAndAppend(t, e) {
                            let r = this.bitCount,
                                n = this.token;
                            if (t !== this.mode) {
                                let e = Nr[this.mode][t];
                                n = Br(n, 65535 & e, e >> 16), r += e >> 16
                            }
                            let i = 2 === t ? 4 : 5;
                            return n = Br(n, e, i), new _r(n, t, 0, r + i)
                        }
                        shiftAndAppend(t, e) {
                            let r = this.token,
                                n = 2 === this.mode ? 4 : 5;
                            return r = Br(r, yr[this.mode][t], n), r = Br(r, e, 5), new _r(r, this.mode, 0, this.bitCount + n + 5)
                        }
                        addBinaryShiftChar(t) {
                            let e = this.token,
                                r = this.mode,
                                n = this.bitCount;
                            if (4 === this.mode || 2 === this.mode) {
                                let t = Nr[r][0];
                                e = Br(e, 65535 & t, t >> 16), n += t >> 16, r = 0
                            }
                            let i = 0 === this.binaryShiftByteCount || 31 === this.binaryShiftByteCount ? 18 : 62 === this.binaryShiftByteCount ? 9 : 8,
                                o = new _r(e, r, this.binaryShiftByteCount + 1, n + i);
                            return 2078 === o.binaryShiftByteCount && (o = o.endBinaryShift(t + 1)), o
                        }
                        endBinaryShift(t) {
                            if (0 === this.binaryShiftByteCount) return this;
                            let e = this.token;
                            return e = function(t, e, r) {
                                return new Dr(t, e, r)
                            }(e, t - this.binaryShiftByteCount, this.binaryShiftByteCount), new _r(e, this.mode, 0, this.bitCount)
                        }
                        isBetterThanOrEqualTo(t) {
                            let e = this.bitCount + (Nr[this.mode][t.mode] >> 16);
                            return this.binaryShiftByteCount < t.binaryShiftByteCount ? e += _r.calculateBinaryShiftCost(t) - _r.calculateBinaryShiftCost(this) : this.binaryShiftByteCount > t.binaryShiftByteCount && t.binaryShiftByteCount > 0 && (e += 10), e <= t.bitCount
                        }
                        toBitArray(t) {
                            let e = [];
                            for (let r = this.endBinaryShift(t.length).token; null !== r; r = r.getPrevious()) e.unshift(r);
                            let r = new I;
                            for (const n of e) n.appendTo(r, t);
                            return r
                        }
                        toString() {
                            return R.format("%s bits=%d bytes=%d", Mr[this.mode], this.bitCount, this.binaryShiftByteCount)
                        }
                        static calculateBinaryShiftCost(t) {
                            return t.binaryShiftByteCount > 62 ? 21 : t.binaryShiftByteCount > 31 ? 20 : t.binaryShiftByteCount > 0 ? 10 : 0
                        }
                    }
                    _r.INITIAL_STATE = new _r(Tr, 0, 0, 0);
                    const Or = function(t) {
                        const e = R.getCharCode(" "),
                            r = R.getCharCode("."),
                            n = R.getCharCode(",");
                        t[0][e] = 1;
                        const i = R.getCharCode("Z"),
                            o = R.getCharCode("A");
                        for (let e = o; e <= i; e++) t[0][e] = e - o + 2;
                        t[1][e] = 1;
                        const s = R.getCharCode("z"),
                            a = R.getCharCode("a");
                        for (let e = a; e <= s; e++) t[1][e] = e - a + 2;
                        t[2][e] = 1;
                        const A = R.getCharCode("9"),
                            l = R.getCharCode("0");
                        for (let e = l; e <= A; e++) t[2][e] = e - l + 2;
                        t[2][n] = 12, t[2][r] = 13;
                        const c = ["\0", " ", "", "", "", "", "", "", "", "\b", "\t", "\n", "\v", "\f", "\r", "", "", "", "", "", "@", "\\", "^", "_", "`", "|", "~", ""];
                        for (let e = 0; e < c.length; e++) t[3][R.getCharCode(c[e])] = e;
                        const h = ["\0", "\r", "\0", "\0", "\0", "\0", "!", "'", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}"];
                        for (let e = 0; e < h.length; e++) R.getCharCode(h[e]) > 0 && (t[4][R.getCharCode(h[e])] = e);
                        return t
                    }(u.createInt32Array(5, 256));
                    class br {
                        constructor(t) {
                            this.text = t
                        }
                        encode() {
                            const t = R.getCharCode(" "),
                                e = R.getCharCode("\n");
                            let r = Sr.singletonList(_r.INITIAL_STATE);
                            for (let n = 0; n < this.text.length; n++) {
                                let i, o = n + 1 < this.text.length ? this.text[n + 1] : 0;
                                switch (this.text[n]) {
                                    case R.getCharCode("\r"):
                                        i = o === e ? 2 : 0;
                                        break;
                                    case R.getCharCode("."):
                                        i = o === t ? 3 : 0;
                                        break;
                                    case R.getCharCode(","):
                                        i = o === t ? 4 : 0;
                                        break;
                                    case R.getCharCode(":"):
                                        i = o === t ? 5 : 0;
                                        break;
                                    default:
                                        i = 0
                                }
                                i > 0 ? (r = br.updateStateListForPair(r, n, i), n++) : r = this.updateStateListForChar(r, n)
                            }
                            return Sr.min(r, ((t, e) => t.getBitCount() - e.getBitCount())).toBitArray(this.text)
                        }
                        updateStateListForChar(t, e) {
                            const r = [];
                            for (let n of t) this.updateStateForChar(n, e, r);
                            return br.simplifyStates(r)
                        }
                        updateStateForChar(t, e, r) {
                            let n = 255 & this.text[e],
                                i = Or[t.getMode()][n] > 0,
                                o = null;
                            for (let s = 0; s <= 4; s++) {
                                let a = Or[s][n];
                                if (a > 0) {
                                    if (null == o && (o = t.endBinaryShift(e)), !i || s === t.getMode() || 2 === s) {
                                        const t = o.latchAndAppend(s, a);
                                        r.push(t)
                                    }
                                    if (!i && yr[t.getMode()][s] >= 0) {
                                        const t = o.shiftAndAppend(s, a);
                                        r.push(t)
                                    }
                                }
                            }
                            if (t.getBinaryShiftByteCount() > 0 || 0 === Or[t.getMode()][n]) {
                                let n = t.addBinaryShiftChar(e);
                                r.push(n)
                            }
                        }
                        static updateStateListForPair(t, e, r) {
                            const n = [];
                            for (let i of t) this.updateStateForPair(i, e, r, n);
                            return this.simplifyStates(n)
                        }
                        static updateStateForPair(t, e, r, n) {
                            let i = t.endBinaryShift(e);
                            if (n.push(i.latchAndAppend(4, r)), 4 !== t.getMode() && n.push(i.shiftAndAppend(4, r)), 3 === r || 4 === r) {
                                let t = i.latchAndAppend(2, 16 - r).latchAndAppend(2, 1);
                                n.push(t)
                            }
                            if (t.getBinaryShiftByteCount() > 0) {
                                let r = t.addBinaryShiftChar(e).addBinaryShiftChar(e + 1);
                                n.push(r)
                            }
                        }
                        static simplifyStates(t) {
                            let e = [];
                            for (const r of t) {
                                let t = !0;
                                for (const n of e) {
                                    if (n.isBetterThanOrEqualTo(r)) {
                                        t = !1;
                                        break
                                    }
                                    r.isBetterThanOrEqualTo(n) && (e = e.filter((t => t !== n)))
                                }
                                t && e.push(r)
                            }
                            return e
                        }
                    }
                    class Fr {
                        constructor() {}
                        static encodeBytes(t) {
                            return Fr.encode(t, Fr.DEFAULT_EC_PERCENT, Fr.DEFAULT_AZTEC_LAYERS)
                        }
                        static encode(t, e, r) {
                            let n, i, o, s, A, l = new br(t).encode(),
                                c = C.truncDivision(l.getSize() * e, 100) + 11,
                                h = l.getSize() + c;
                            if (r !== Fr.DEFAULT_AZTEC_LAYERS) {
                                if (n = r < 0, i = Math.abs(r), i > (n ? Fr.MAX_NB_BITS_COMPACT : Fr.MAX_NB_BITS)) throw new a(R.format("Illegal value %s for layers", r));
                                o = Fr.totalBitsInLayer(i, n), s = Fr.WORD_SIZE[i];
                                let t = o - o % s;
                                if (A = Fr.stuffBits(l, s), A.getSize() + c > t) throw new a("Data to large for user specified layer");
                                if (n && A.getSize() > 64 * s) throw new a("Data to large for user specified layer")
                            } else {
                                s = 0, A = null;
                                for (let t = 0;; t++) {
                                    if (t > Fr.MAX_NB_BITS) throw new a("Data too large for an Aztec code");
                                    if (n = t <= 3, i = n ? t + 1 : t, o = Fr.totalBitsInLayer(i, n), h > o) continue;
                                    null != A && s === Fr.WORD_SIZE[i] || (s = Fr.WORD_SIZE[i], A = Fr.stuffBits(l, s));
                                    let e = o - o % s;
                                    if (!(n && A.getSize() > 64 * s) && A.getSize() + c <= e) break
                                }
                            }
                            let g, d = Fr.generateCheckWords(A, o, s),
                                u = A.getSize() / s,
                                I = Fr.generateModeMessage(n, i, u),
                                f = (n ? 11 : 14) + 4 * i,
                                w = new Int32Array(f);
                            if (n) {
                                g = f;
                                for (let t = 0; t < w.length; t++) w[t] = t
                            } else {
                                g = f + 1 + 2 * C.truncDivision(C.truncDivision(f, 2) - 1, 15);
                                let t = C.truncDivision(f, 2),
                                    e = C.truncDivision(g, 2);
                                for (let r = 0; r < t; r++) {
                                    let n = r + C.truncDivision(r, 15);
                                    w[t - r - 1] = e - n - 1, w[t + r] = e + n + 1
                                }
                            }
                            let E = new B(g);
                            for (let t = 0, e = 0; t < i; t++) {
                                let r = 4 * (i - t) + (n ? 9 : 12);
                                for (let n = 0; n < r; n++) {
                                    let i = 2 * n;
                                    for (let o = 0; o < 2; o++) d.get(e + i + o) && E.set(w[2 * t + o], w[2 * t + n]), d.get(e + 2 * r + i + o) && E.set(w[2 * t + n], w[f - 1 - 2 * t - o]), d.get(e + 4 * r + i + o) && E.set(w[f - 1 - 2 * t - o], w[f - 1 - 2 * t - n]), d.get(e + 6 * r + i + o) && E.set(w[f - 1 - 2 * t - n], w[2 * t + o])
                                }
                                e += 8 * r
                            }
                            if (Fr.drawModeMessage(E, n, g, I), n) Fr.drawBullsEye(E, C.truncDivision(g, 2), 5);
                            else {
                                Fr.drawBullsEye(E, C.truncDivision(g, 2), 7);
                                for (let t = 0, e = 0; t < C.truncDivision(f, 2) - 1; t += 15, e += 16)
                                    for (let t = 1 & C.truncDivision(g, 2); t < g; t += 2) E.set(C.truncDivision(g, 2) - e, t), E.set(C.truncDivision(g, 2) + e, t), E.set(t, C.truncDivision(g, 2) - e), E.set(t, C.truncDivision(g, 2) + e)
                            }
                            let m = new pr;
                            return m.setCompact(n), m.setSize(g), m.setLayers(i), m.setCodeWords(u), m.setMatrix(E), m
                        }
                        static drawBullsEye(t, e, r) {
                            for (let n = 0; n < r; n += 2)
                                for (let r = e - n; r <= e + n; r++) t.set(r, e - n), t.set(r, e + n), t.set(e - n, r), t.set(e + n, r);
                            t.set(e - r, e - r), t.set(e - r + 1, e - r), t.set(e - r, e - r + 1), t.set(e + r, e - r), t.set(e + r, e - r + 1), t.set(e + r, e + r - 1)
                        }
                        static generateModeMessage(t, e, r) {
                            let n = new I;
                            return t ? (n.appendBits(e - 1, 2), n.appendBits(r - 1, 6), n = Fr.generateCheckWords(n, 28, 4)) : (n.appendBits(e - 1, 5), n.appendBits(r - 1, 11), n = Fr.generateCheckWords(n, 40, 4)), n
                        }
                        static drawModeMessage(t, e, r, n) {
                            let i = C.truncDivision(r, 2);
                            if (e)
                                for (let e = 0; e < 7; e++) {
                                    let r = i - 3 + e;
                                    n.get(e) && t.set(r, i - 5), n.get(e + 7) && t.set(i + 5, r), n.get(20 - e) && t.set(r, i + 5), n.get(27 - e) && t.set(i - 5, r)
                                } else
                                    for (let e = 0; e < 10; e++) {
                                        let r = i - 5 + e + C.truncDivision(e, 5);
                                        n.get(e) && t.set(r, i - 7), n.get(e + 10) && t.set(i + 7, r), n.get(29 - e) && t.set(r, i + 7), n.get(39 - e) && t.set(i - 7, r)
                                    }
                        }
                        static generateCheckWords(t, e, r) {
                            let n = t.getSize() / r,
                                i = new ar(Fr.getGF(r)),
                                o = C.truncDivision(e, r),
                                s = Fr.bitsToWords(t, r, o);
                            i.encode(s, o - n);
                            let a = e % r,
                                A = new I;
                            A.appendBits(0, a);
                            for (const t of Array.from(s)) A.appendBits(t, r);
                            return A
                        }
                        static bitsToWords(t, e, r) {
                            let n, i, o = new Int32Array(r);
                            for (n = 0, i = t.getSize() / e; n < i; n++) {
                                let r = 0;
                                for (let i = 0; i < e; i++) r |= t.get(n * e + i) ? 1 << e - i - 1 : 0;
                                o[n] = r
                            }
                            return o
                        }
                        static getGF(t) {
                            switch (t) {
                                case 4:
                                    return J.AZTEC_PARAM;
                                case 6:
                                    return J.AZTEC_DATA_6;
                                case 8:
                                    return J.AZTEC_DATA_8;
                                case 10:
                                    return J.AZTEC_DATA_10;
                                case 12:
                                    return J.AZTEC_DATA_12;
                                default:
                                    throw new a("Unsupported word size " + t)
                            }
                        }
                        static stuffBits(t, e) {
                            let r = new I,
                                n = t.getSize(),
                                i = (1 << e) - 2;
                            for (let o = 0; o < n; o += e) {
                                let s = 0;
                                for (let r = 0; r < e; r++)(o + r >= n || t.get(o + r)) && (s |= 1 << e - 1 - r);
                                (s & i) === i ? (r.appendBits(s & i, e), o--) : 0 == (s & i) ? (r.appendBits(1 | s, e), o--) : r.appendBits(s, e)
                            }
                            return r
                        }
                        static totalBitsInLayer(t, e) {
                            return ((e ? 88 : 112) + 16 * t) * t
                        }
                    }
                    Fr.DEFAULT_EC_PERCENT = 33, Fr.DEFAULT_AZTEC_LAYERS = 0, Fr.MAX_NB_BITS = 32, Fr.MAX_NB_BITS_COMPACT = 4, Fr.WORD_SIZE = Int32Array.from([4, 6, 6, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]);
                    class Pr {
                        encode(t, e, r, n) {
                            return this.encodeWithHints(t, e, r, n, null)
                        }
                        encodeWithHints(t, e, r, n, i) {
                            let o = mr.ISO_8859_1,
                                s = Fr.DEFAULT_EC_PERCENT,
                                a = Fr.DEFAULT_AZTEC_LAYERS;
                            return null != i && (i.has(sr.CHARACTER_SET) && (o = Er.forName(i.get(sr.CHARACTER_SET).toString())), i.has(sr.ERROR_CORRECTION) && (s = C.parseInt(i.get(sr.ERROR_CORRECTION).toString())), i.has(sr.AZTEC_LAYERS) && (a = C.parseInt(i.get(sr.AZTEC_LAYERS).toString()))), Pr.encodeLayers(t, e, r, n, o, s, a)
                        }
                        static encodeLayers(t, e, r, n, i, o, s) {
                            if (e !== Q.AZTEC) throw new a("Can only encode AZTEC, but got " + e);
                            let A = Fr.encode(R.getBytes(t, i), o, s);
                            return Pr.renderResult(A, r, n)
                        }
                        static renderResult(t, e, r) {
                            let n = t.getMatrix();
                            if (null == n) throw new q;
                            let i = n.getWidth(),
                                o = n.getHeight(),
                                s = Math.max(e, i),
                                a = Math.max(r, o),
                                A = Math.min(s / i, a / o),
                                l = (s - i * A) / 2,
                                c = (a - o * A) / 2,
                                h = new B(s, a);
                            for (let t = 0, e = c; t < o; t++, e += A)
                                for (let r = 0, o = l; r < i; r++, o += A) n.get(r, t) && h.setRegion(o, e, A, A);
                            return h
                        }
                    }
                    t.ArgumentException = s, t.ArithmeticException = z, t.AztecCode = pr, t.AztecCodeReader = dt, t.AztecCodeWriter = Pr, t.AztecDecoder = tt, t.AztecDetector = gt, t.AztecDetectorResult = ot, t.AztecEncoder = Fr, t.AztecHighLevelEncoder = br, t.AztecPoint = ht, t.BarcodeFormat = Q, t.Binarizer = c, t.BinaryBitmap = A, t.BitArray = I, t.BitMatrix = B, t.BitSource = ae, t.BrowserAztecCodeReader = class extends k {
                        constructor(t = 500) {
                            super(new dt, t)
                        }
                    }, t.BrowserBarcodeReader = class extends k {
                        constructor(t = 500, e) {
                            super(new ee(e), t, e)
                        }
                    }, t.BrowserCodeReader = k, t.BrowserDatamatrixCodeReader = class extends k {
                        constructor(t = 500) {
                            super(new he, t)
                        }
                    }, t.BrowserMultiFormatReader = class extends k {
                        constructor(t = null, e = 500) {
                            const r = new ir;
                            r.setHints(t), super(r, e)
                        }
                        decodeBitmap(t) {
                            return this.reader.decodeWithState(t)
                        }
                    }, t.BrowserPDF417Reader = class extends k {
                        constructor(t = 500) {
                            super(new rr, t)
                        }
                    }, t.BrowserQRCodeReader = class extends k {
                        constructor(t = 500) {
                            super(new _e, t)
                        }
                    }, t.BrowserQRCodeSvgWriter = Cr, t.CharacterSetECI = m, t.ChecksumException = l, t.Code128Reader = Ct, t.Code39Reader = It, t.DataMatrixDecodedBitStreamParser = Ae, t.DataMatrixReader = he, t.DecodeHintType = w, t.DecoderResult = V, t.DefaultGridSampler = lt, t.DetectorResult = it, t.EAN13Reader = Rt, t.EncodeHintType = sr, t.Exception = o, t.FormatException = E, t.GenericGF = J, t.GenericGFPoly = X, t.GlobalHistogramBinarizer = T, t.GridSampler = at, t.GridSamplerInstance = ct, t.HTMLCanvasElementLuminanceSource = O, t.HybridBinarizer = N, t.ITFReader = ft, t.IllegalArgumentException = a, t.IllegalStateException = q, t.InvertedLuminanceSource = _, t.LuminanceSource = y, t.MathUtils = et, t.MultiFormatOneDReader = ee, t.MultiFormatReader = ir, t.MultiFormatWriter = class {
                        encode(t, e, r, n, i) {
                            let o;
                            switch (e) {
                                case Q.QR_CODE:
                                    o = new Ir;
                                    break;
                                default:
                                    throw new a("No encoder available for format " + e)
                            }
                            return o.encode(t, e, r, n, i)
                        }
                    }, t.NotFoundException = M, t.OneDReader = ut, t.PDF417DecodedBitStreamParser = tr, t.PDF417DecoderErrorCorrection = Le, t.PDF417Reader = rr, t.PDF417ResultMetadata = Ve, t.PerspectiveTransform = At, t.PlanarYUVLuminanceSource = fr, t.QRCodeByteMatrix = lr, t.QRCodeDataMask = fe, t.QRCodeDecodedBitStreamParser = pe, t.QRCodeDecoderErrorCorrectionLevel = ge, t.QRCodeDecoderFormatInformation = de, t.QRCodeEncoder = ur, t.QRCodeEncoderQRCode = cr, t.QRCodeMaskUtil = Ar, t.QRCodeMatrixUtil = gr, t.QRCodeMode = me, t.QRCodeReader = _e, t.QRCodeVersion = Ie, t.QRCodeWriter = Ir, t.RGBLuminanceSource = wr, t.RSS14Reader = te, t.RSSExpandedReader = qt, t.ReaderException = nr, t.ReedSolomonDecoder = $, t.ReedSolomonEncoder = ar, t.ReedSolomonException = K, t.Result = L, t.ResultMetadataType = H, t.ResultPoint = nt, t.StringUtils = R, t.UnsupportedOperationException = p, t.VideoInputDevice = b, t.WhiteRectangleDetector = st, t.WriterException = hr, t.ZXingArrays = u, t.ZXingCharset = Er, t.ZXingInteger = C, t.ZXingStandardCharsets = mr, t.ZXingStringBuilder = D, t.ZXingStringEncoding = S, t.ZXingSystem = h, Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }(e)
            }
        },
        e = {};

    function r(n) {
        var i = e[n];
        if (void 0 !== i) return i.exports;
        var o = e[n] = {
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r), o.exports
    }
    r.d = (t, e) => {
        for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), r.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    };
    var n = {};
    (() => {
        "use strict";
        var t;
        r.r(n), r.d(n, {
                Html5Qrcode: () => b,
                Html5QrcodeScanner: () => U,
                Html5QrcodeScannerState: () => u,
                Html5QrcodeSupportedFormats: () => t
            }),
            function(t) {
                t[t.QR_CODE = 0] = "QR_CODE", t[t.AZTEC = 1] = "AZTEC", t[t.CODABAR = 2] = "CODABAR", t[t.CODE_39 = 3] = "CODE_39", t[t.CODE_93 = 4] = "CODE_93", t[t.CODE_128 = 5] = "CODE_128", t[t.DATA_MATRIX = 6] = "DATA_MATRIX", t[t.MAXICODE = 7] = "MAXICODE", t[t.ITF = 8] = "ITF", t[t.EAN_13 = 9] = "EAN_13", t[t.EAN_8 = 10] = "EAN_8", t[t.PDF_417 = 11] = "PDF_417", t[t.RSS_14 = 12] = "RSS_14", t[t.RSS_EXPANDED = 13] = "RSS_EXPANDED", t[t.UPC_A = 14] = "UPC_A", t[t.UPC_E = 15] = "UPC_E", t[t.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION"
            }(t || (t = {}));
        var e, i, o = new Map([
            [t.QR_CODE, "QR_CODE"],
            [t.AZTEC, "AZTEC"],
            [t.CODABAR, "CODABAR"],
            [t.CODE_39, "CODE_39"],
            [t.CODE_93, "CODE_93"],
            [t.CODE_128, "CODE_128"],
            [t.DATA_MATRIX, "DATA_MATRIX"],
            [t.MAXICODE, "MAXICODE"],
            [t.ITF, "ITF"],
            [t.EAN_13, "EAN_13"],
            [t.EAN_8, "EAN_8"],
            [t.PDF_417, "PDF_417"],
            [t.RSS_14, "RSS_14"],
            [t.RSS_EXPANDED, "RSS_EXPANDED"],
            [t.UPC_A, "UPC_A"],
            [t.UPC_E, "UPC_E"],
            [t.UPC_EAN_EXTENSION, "UPC_EAN_EXTENSION"]
        ]);

        function s(e) {
            return Object.values(t).includes(e)
        }! function(t) {
            t[t.UNKNOWN = 0] = "UNKNOWN", t[t.URL = 1] = "URL"
        }(e || (e = {})),
        function(t) {
            t[t.SCAN_TYPE_CAMERA = 0] = "SCAN_TYPE_CAMERA", t[t.SCAN_TYPE_FILE = 1] = "SCAN_TYPE_FILE"
        }(i || (i = {}));
        var a, A = function() {
                function t() {}
                return t.GITHUB_PROJECT_URL = "https://github.com/mebjas/html5-qrcode", t.SCAN_DEFAULT_FPS = 2, t.DEFAULT_DISABLE_FLIP = !1, t.DEFAULT_REMEMBER_LAST_CAMERA_USED = !0, t
            }(),
            l = function() {
                function t(t, e) {
                    this.format = t, this.formatName = e
                }
                return t.prototype.toString = function() {
                    return this.formatName
                }, t.create = function(e) {
                    if (!o.has(e)) throw e + " not in html5QrcodeSupportedFormatsTextMap";
                    return new t(e, o.get(e))
                }, t
            }(),
            c = function() {
                function t() {}
                return t.createFromText = function(t) {
                    return {
                        decodedText: t,
                        result: {
                            text: t
                        }
                    }
                }, t.createFromQrcodeResult = function(t) {
                    return {
                        decodedText: t.text,
                        result: t
                    }
                }, t
            }();
        ! function(t) {
            t[t.UNKWOWN_ERROR = 0] = "UNKWOWN_ERROR", t[t.IMPLEMENTATION_ERROR = 1] = "IMPLEMENTATION_ERROR", t[t.NO_CODE_FOUND_ERROR = 2] = "NO_CODE_FOUND_ERROR"
        }(a || (a = {}));
        var h = function() {
                function t() {}
                return t.createFrom = function(t) {
                    return {
                        errorMessage: t,
                        type: a.UNKWOWN_ERROR
                    }
                }, t
            }(),
            g = function() {
                function t(t) {
                    this.verbose = t
                }
                return t.prototype.log = function(t) {
                    this.verbose && console.log(t)
                }, t.prototype.warn = function(t) {
                    this.verbose && console.warn(t)
                }, t.prototype.logError = function(t, e) {
                    (this.verbose || !0 === e) && console.error(t)
                }, t.prototype.logErrors = function(t) {
                    if (0 === t.length) throw "Logger#logError called without arguments";
                    this.verbose && console.error(t)
                }, t
            }();

        function d(t) {
            return null == t
        }
        var u, C = function() {
                function t() {}
                return t.codeParseError = function(t) {
                    return "QR code parse error, error = " + t
                }, t.errorGettingUserMedia = function(t) {
                    return "Error getting userMedia, error = " + t
                }, t.onlyDeviceSupportedError = function() {
                    return "The device doesn't support navigator.mediaDevices , only supported cameraIdOrConfig in this case is deviceId parameter (string)."
                }, t.cameraStreamingNotSupported = function() {
                    return "Camera streaming not supported by the browser."
                }, t.unableToQuerySupportedDevices = function() {
                    return "Unable to query supported devices, unknown error."
                }, t.insecureContextCameraQueryError = function() {
                    return "Camera access is only supported in secure context like https or localhost."
                }, t
            }(),
            I = function() {
                function t() {}
                return t.scanningStatus = function() {
                    return "Scanning"
                }, t.idleStatus = function() {
                    return "Idle"
                }, t.errorStatus = function() {
                    return "Error"
                }, t.permissionStatus = function() {
                    return "Permission"
                }, t.noCameraFoundErrorStatus = function() {
                    return "No Cameras"
                }, t.lastMatch = function(t) {
                    return "Last Match: " + t
                }, t.codeScannerTitle = function() {
                    return "Code Scanner"
                }, t.cameraPermissionTitle = function() {
                    return "Request Camera Permissions"
                }, t.cameraPermissionRequesting = function() {
                    return "Requesting camera permissions..."
                }, t.noCameraFound = function() {
                    return "No camera found"
                }, t.scanButtonStopScanningText = function() {
                    return "Stop Scanning"
                }, t.scanButtonStartScanningText = function() {
                    return "Start Scanning"
                }, t.scanButtonScanningStarting = function() {
                    return "Launching Camera..."
                }, t.textIfCameraScanSelected = function() {
                    return "Scan an Image File"
                }, t.textIfFileScanSelected = function() {
                    return "Scan using camera directly"
                }, t.selectCamera = function() {
                    return "Select Camera"
                }, t
            }(),
            f = function() {
                function t() {}
                return t.builtUsing = function() {
                    return "Built using "
                }, t.reportIssues = function() {
                    return "Report issues"
                }, t
            }(),
            w = function() {
                function t() {}
                return t.isMediaStreamConstraintsValid = function(t, e) {
                    if ("object" != typeof t) {
                        var r = typeof t;
                        return e.logError("videoConstraints should be of type object, the object passed is of type " + r + ".", !0), !1
                    }
                    for (var n = new Set(["autoGainControl", "channelCount", "echoCancellation", "latency", "noiseSuppression", "sampleRate", "sampleSize", "volume"]), i = 0, o = Object.keys(t); i < o.length; i++) {
                        var s = o[i];
                        if (n.has(s)) return e.logError(s + " is not supported videoConstaints.", !0), !1
                    }
                    return !0
                }, t
            }(),
            E = r(449),
            m = function() {
                function e(e, r, n) {
                    if (this.formatMap = new Map([
                            [t.QR_CODE, E.BarcodeFormat.QR_CODE],
                            [t.AZTEC, E.BarcodeFormat.AZTEC],
                            [t.CODABAR, E.BarcodeFormat.CODABAR],
                            [t.CODE_39, E.BarcodeFormat.CODE_39],
                            [t.CODE_93, E.BarcodeFormat.CODE_93],
                            [t.CODE_128, E.BarcodeFormat.CODE_128],
                            [t.DATA_MATRIX, E.BarcodeFormat.DATA_MATRIX],
                            [t.MAXICODE, E.BarcodeFormat.MAXICODE],
                            [t.ITF, E.BarcodeFormat.ITF],
                            [t.EAN_13, E.BarcodeFormat.EAN_13],
                            [t.EAN_8, E.BarcodeFormat.EAN_8],
                            [t.PDF_417, E.BarcodeFormat.PDF_417],
                            [t.RSS_14, E.BarcodeFormat.RSS_14],
                            [t.RSS_EXPANDED, E.BarcodeFormat.RSS_EXPANDED],
                            [t.UPC_A, E.BarcodeFormat.UPC_A],
                            [t.UPC_E, E.BarcodeFormat.UPC_E],
                            [t.UPC_EAN_EXTENSION, E.BarcodeFormat.UPC_EAN_EXTENSION]
                        ]), this.reverseFormatMap = this.createReverseFormatMap(), !E) throw "Use html5qrcode.min.js without edit, ZXing not found.";
                    this.verbose = r, this.logger = n;
                    var i = this.createZXingFormats(e),
                        o = new Map;
                    o.set(E.DecodeHintType.POSSIBLE_FORMATS, i), this.hints = o
                }
                return e.prototype.decodeAsync = function(t) {
                    var e = this;
                    return new Promise((function(r, n) {
                        try {
                            r(e.decode(t))
                        } catch (t) {
                            n(t)
                        }
                    }))
                }, e.prototype.decode = function(t) {
                    var e = new E.MultiFormatReader(this.verbose, this.hints),
                        r = new E.HTMLCanvasElementLuminanceSource(t),
                        n = new E.BinaryBitmap(new E.HybridBinarizer(r)),
                        i = e.decode(n);
                    return {
                        text: i.text,
                        format: l.create(this.toHtml5QrcodeSupportedFormats(i.format))
                    }
                }, e.prototype.createReverseFormatMap = function() {
                    var t = new Map;
                    return this.formatMap.forEach((function(e, r, n) {
                        t.set(e, r)
                    })), t
                }, e.prototype.toHtml5QrcodeSupportedFormats = function(t) {
                    if (!this.reverseFormatMap.has(t)) throw "reverseFormatMap doesn't have " + t;
                    return this.reverseFormatMap.get(t)
                }, e.prototype.createZXingFormats = function(t) {
                    for (var e = [], r = 0, n = t; r < n.length; r++) {
                        var i = n[r];
                        this.formatMap.has(i) ? e.push(this.formatMap.get(i)) : this.logger.logError(i + " is not supported byZXingHtml5QrcodeShim")
                    }
                    return e
                }, e
            }(),
            p = function() {
                function e(r, n, i) {
                    if (this.formatMap = new Map([
                            [t.QR_CODE, "qr_code"],
                            [t.AZTEC, "aztec"],
                            [t.CODABAR, "codabar"],
                            [t.CODE_39, "code_39"],
                            [t.CODE_93, "code_93"],
                            [t.CODE_128, "code_128"],
                            [t.DATA_MATRIX, "data_matrix"],
                            [t.ITF, "itf"],
                            [t.EAN_13, "ean_13"],
                            [t.EAN_8, "ean_8"],
                            [t.PDF_417, "pdf417"],
                            [t.UPC_A, "upc_a"],
                            [t.UPC_E, "upc_e"]
                        ]), this.reverseFormatMap = this.createReverseFormatMap(), !e.isSupported()) throw "Use html5qrcode.min.js without edit, Use BarcodeDetectorDelegate only if it isSupported();";
                    this.verbose = n, this.logger = i;
                    var o = this.createBarcodeDetectorFormats(r);
                    if (this.detector = new BarcodeDetector(o), !this.detector) throw "BarcodeDetector detector not supported"
                }
                return e.isSupported = function() {
                    return "BarcodeDetector" in window && void 0 !== new BarcodeDetector({
                        formats: ["qr_code"]
                    })
                }, e.prototype.decodeAsync = function(t) {
                    return e = this, r = void 0, i = function() {
                        var e, r;
                        return function(t, e) {
                            var r, n, i, o, s = {
                                label: 0,
                                sent: function() {
                                    if (1 & i[0]) throw i[1];
                                    return i[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return o = {
                                next: a(0),
                                throw: a(1),
                                return: a(2)
                            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                return this
                            }), o;

                            function a(o) {
                                return function(a) {
                                    return function(o) {
                                        if (r) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                            switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, {
                                                        value: o[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    s.label++, n = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                        s = 0;
                                                        continue
                                                    }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                        s.label = o[1];
                                                        break
                                                    }
                                                    if (6 === o[0] && s.label < i[1]) {
                                                        s.label = i[1], i = o;
                                                        break
                                                    }
                                                    if (i && s.label < i[2]) {
                                                        s.label = i[2], s.ops.push(o);
                                                        break
                                                    }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = e.call(t, s)
                                        } catch (t) {
                                            o = [6, t], n = 0
                                        } finally {
                                            r = i = 0
                                        }
                                        if (5 & o[0]) throw o[1];
                                        return {
                                            value: o[0] ? o[1] : void 0,
                                            done: !0
                                        }
                                    }([o, a])
                                }
                            }
                        }(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.detector.detect(t)];
                                case 1:
                                    if (!(e = n.sent()) || 0 === e.length) throw "No barcode or QR code detected.";
                                    return [2, {
                                        text: (r = this.selectLargestBarcode(e)).rawValue,
                                        format: l.create(this.toHtml5QrcodeSupportedFormats(r.format))
                                    }]
                            }
                        }))
                    }, new((n = void 0) || (n = Promise))((function(t, o) {
                        function s(t) {
                            try {
                                A(i.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                A(i.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function A(e) {
                            var r;
                            e.done ? t(e.value) : (r = e.value, r instanceof n ? r : new n((function(t) {
                                t(r)
                            }))).then(s, a)
                        }
                        A((i = i.apply(e, r || [])).next())
                    }));
                    var e, r, n, i
                }, e.prototype.selectLargestBarcode = function(t) {
                    for (var e = null, r = 0, n = 0, i = t; n < i.length; n++) {
                        var o = i[n],
                            s = o.boundingBox.width * o.boundingBox.height;
                        s > r && (r = s, e = o)
                    }
                    if (!e) throw "No largest barcode found";
                    return e
                }, e.prototype.createBarcodeDetectorFormats = function(t) {
                    for (var e = [], r = 0, n = t; r < n.length; r++) {
                        var i = n[r];
                        this.formatMap.has(i) ? e.push(this.formatMap.get(i)) : this.logger.warn(i + " is not supported byBarcodeDetectorDelegate")
                    }
                    return {
                        formats: e
                    }
                }, e.prototype.toHtml5QrcodeSupportedFormats = function(t) {
                    if (!this.reverseFormatMap.has(t)) throw "reverseFormatMap doesn't have " + t;
                    return this.reverseFormatMap.get(t)
                }, e.prototype.createReverseFormatMap = function() {
                    var t = new Map;
                    return this.formatMap.forEach((function(e, r, n) {
                        t.set(e, r)
                    })), t
                }, e
            }(),
            S = function() {
                function t(t, e, r, n) {
                    this.EXECUTIONS_TO_REPORT_PERFORMANCE = 100, this.executions = 0, this.executionResults = [], this.verbose = e, !0 === n.useBarCodeDetectorIfSupported && p.isSupported() ? this.decoder = new p(t, e, r) : this.decoder = new m(t, e, r)
                }
                return t.prototype.decodeAsync = function(t) {
                    var e = this,
                        r = performance.now();
                    return this.decoder.decodeAsync(t).finally((function() {
                        if (e.verbose) {
                            var t = performance.now() - r;
                            e.executionResults.push(t), e.executions++, e.possiblyFlushPerformanceReport()
                        }
                    }))
                }, t.prototype.possiblyFlushPerformanceReport = function() {
                    if (!(this.executions < this.EXECUTIONS_TO_REPORT_PERFORMANCE)) {
                        for (var t = 0, e = 0, r = this.executionResults; e < r.length; e++) t += r[e];
                        var n = t / this.executionResults.length;
                        console.log(n + " ms for " + this.executionResults.length + " last runs."), this.executions = 0, this.executionResults = []
                    }
                }, t
            }(),
            R = function() {
                function t() {}
                return t.createExperimentalFeaturesConfig = function(t) {
                    return t ? (!0 !== t.useBarCodeDetectorIfSupported && (t.useBarCodeDetectorIfSupported = !1), t) : {
                        useBarCodeDetectorIfSupported: !1
                    }
                }, t
            }();
        ! function(t) {
            t[t.UNKNOWN = 0] = "UNKNOWN", t[t.NOT_STARTED = 1] = "NOT_STARTED", t[t.SCANNING = 2] = "SCANNING", t[t.PAUSED = 3] = "PAUSED"
        }(u || (u = {}));
        var D, B, M = function() {
                function t() {
                    this.state = u.NOT_STARTED, this.onGoingTransactionNewState = u.UNKNOWN
                }
                return t.prototype.directTransition = function(t) {
                    this.failIfTransitionOngoing(), this.validateTransition(t), this.state = t
                }, t.prototype.startTransition = function(t) {
                    return this.failIfTransitionOngoing(), this.validateTransition(t), this.onGoingTransactionNewState = t, this
                }, t.prototype.execute = function() {
                    if (this.onGoingTransactionNewState === u.UNKNOWN) throw "Transaction is already cancelled, cannot execute().";
                    var t = this.onGoingTransactionNewState;
                    this.onGoingTransactionNewState = u.UNKNOWN, this.directTransition(t)
                }, t.prototype.cancel = function() {
                    if (this.onGoingTransactionNewState === u.UNKNOWN) throw "Transaction is already cancelled, cannot cancel().";
                    this.onGoingTransactionNewState = u.UNKNOWN
                }, t.prototype.getState = function() {
                    return this.state
                }, t.prototype.failIfTransitionOngoing = function() {
                    if (this.onGoingTransactionNewState !== u.UNKNOWN) throw "Cannnot transition to a new state, already under transition"
                }, t.prototype.validateTransition = function(t) {
                    switch (this.state) {
                        case u.UNKNOWN:
                            throw "Transition from unknown is not allowed";
                        case u.NOT_STARTED:
                            this.failIfNewStateIs(t, [u.PAUSED]);
                            break;
                        case u.SCANNING:
                        case u.PAUSED:
                    }
                }, t.prototype.failIfNewStateIs = function(t, e) {
                    for (var r = 0, n = e; r < n.length; r++)
                        if (t === n[r]) throw "Cannot transition from " + this.state + " to " + t
                }, t
            }(),
            T = function() {
                function t(t) {
                    this.stateManager = t
                }
                return t.prototype.startTransition = function(t) {
                    return this.stateManager.startTransition(t)
                }, t.prototype.directTransition = function(t) {
                    this.stateManager.directTransition(t)
                }, t.prototype.getState = function() {
                    return this.stateManager.getState()
                }, t.prototype.canScanFile = function() {
                    return this.stateManager.getState() === u.NOT_STARTED
                }, t.prototype.isScanning = function() {
                    return this.stateManager.getState() !== u.NOT_STARTED
                }, t.prototype.isStrictlyScanning = function() {
                    return this.stateManager.getState() === u.SCANNING
                }, t.prototype.isPaused = function() {
                    return this.stateManager.getState() === u.PAUSED
                }, t
            }(),
            N = function() {
                function t() {}
                return t.create = function() {
                    return new T(new M)
                }, t
            }(),
            y = (D = function(t, e) {
                return (D = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                    })(t, e)
            }, function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function r() {
                    this.constructor = t
                }
                D(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }),
            _ = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return y(e, t), e.DEFAULT_WIDTH = 300, e.DEFAULT_WIDTH_OFFSET = 2, e.FILE_SCAN_MIN_HEIGHT = 300, e.MIN_QR_BOX_SIZE = 50, e.SHADED_LEFT = 1, e.SHADED_RIGHT = 2, e.SHADED_TOP = 3, e.SHADED_BOTTOM = 4, e.SHADED_REGION_CLASSNAME = "qr-shaded-region", e.VERBOSE = !1, e.BORDER_SHADER_DEFAULT_COLOR = "#ffffff", e.BORDER_SHADER_MATCH_COLOR = "rgb(90, 193, 56)", e
            }(A),
            O = function() {
                function t(t, e) {
                    this.logger = e, this.fps = _.SCAN_DEFAULT_FPS, t ? (t.fps && (this.fps = t.fps), this.disableFlip = !0 === t.disableFlip, this.qrbox = t.qrbox, this.aspectRatio = t.aspectRatio, this.videoConstraints = t.videoConstraints) : this.disableFlip = _.DEFAULT_DISABLE_FLIP
                }
                return t.prototype.isMediaStreamConstraintsValid = function() {
                    return this.videoConstraints ? w.isMediaStreamConstraintsValid(this.videoConstraints, this.logger) : (this.logger.logError("Empty videoConstraints", !0), !1)
                }, t.prototype.isShadedBoxEnabled = function() {
                    return !d(this.qrbox)
                }, t.create = function(e, r) {
                    return new t(e, r)
                }, t
            }(),
            b = function() {
                function e(t, e) {
                    if (this.element = null, this.canvasElement = null, this.scannerPausedUiElement = null, this.hasBorderShaders = null, this.borderShaders = null, this.qrMatch = null, this.videoElement = null, this.localMediaStream = null, this.qrRegion = null, this.context = null, this.lastScanImageFile = null, this.isScanning = !1, !document.getElementById(t)) throw "HTML Element with id=" + t + " not found";
                    var r;
                    this.elementId = t, this.verbose = !1, "boolean" == typeof e ? this.verbose = !0 === e : e && (this.verbose = !0 === e.verbose, r = e.experimentalFeatures), this.logger = new g(this.verbose), this.qrcode = new S(this.getSupportedFormats(e), this.verbose, this.logger, R.createExperimentalFeaturesConfig(r)), this.foreverScanTimeout, this.localMediaStream, this.shouldScan = !0, this.stateManagerProxy = N.create()
                }
                return e.prototype.start = function(t, e, r, n) {
                    if (!t) throw "cameraIdOrConfig is required";
                    if (!r || "function" != typeof r) throw "qrCodeSuccessCallback is required and should be a function.";
                    n || (n = this.verbose ? this.logger.log : function() {});
                    var i = O.create(e, this.logger);
                    this.clearElement();
                    var o = !1;
                    i.videoConstraints && (i.isMediaStreamConstraintsValid() ? o = !0 : this.logger.logError("'videoConstraints' is not valid 'MediaStreamConstraints, it will be ignored.'", !0));
                    var s = o,
                        a = i.isShadedBoxEnabled(),
                        A = document.getElementById(this.elementId),
                        l = A.clientWidth ? A.clientWidth : _.DEFAULT_WIDTH;
                    A.style.position = "relative", this.shouldScan = !0, this.element = A, a && this.validateQrboxSize(i, l);
                    var c = this,
                        h = this.stateManagerProxy.startTransition(u.SCANNING);
                    return new Promise((function(e, o) {
                        var a = s ? i.videoConstraints : c.createVideoConstraints(t);
                        if (!a) return h.cancel(), void o("videoConstraints should be defined");
                        navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
                            audio: !1,
                            video: a
                        }).then((function(t) {
                            c.onMediaStreamReceived(t, i, s, l, r, n).then((function(t) {
                                h.execute(), c.isScanning = !0, e(null)
                            })).catch((function(t) {
                                h.cancel(), o(t)
                            }))
                        })).catch((function(t) {
                            h.cancel(), o(C.errorGettingUserMedia(t))
                        })) : (h.cancel(), o(C.cameraStreamingNotSupported()))
                    }))
                }, e.prototype.pause = function() {
                    if (!this.stateManagerProxy.isStrictlyScanning()) throw "Cannot pause, scanner is not scanning.";
                    this.stateManagerProxy.directTransition(u.PAUSED), this.showPausedState()
                }, e.prototype.resume = function() {
                    if (!this.stateManagerProxy.isPaused()) throw "Cannot result, scanner is not paused.";
                    this.stateManagerProxy.directTransition(u.SCANNING), this.hidePausedState()
                }, e.prototype.getState = function() {
                    return this.stateManagerProxy.getState()
                }, e.prototype.stop = function() {
                    var t = this;
                    if (!this.stateManagerProxy.isScanning()) throw "Cannot stop, scanner is not running or paused.";
                    var e = this.stateManagerProxy.startTransition(u.NOT_STARTED);
                    return this.shouldScan = !1, this.foreverScanTimeout && clearTimeout(this.foreverScanTimeout), new Promise((function(r, n) {
                        var i = function() {
                            t.localMediaStream = null, t.element && (t.element.removeChild(t.videoElement), t.element.removeChild(t.canvasElement)),
                                function() {
                                    if (t.element)
                                        for (; t.element.getElementsByClassName(_.SHADED_REGION_CLASSNAME).length;) {
                                            var e = t.element.getElementsByClassName(_.SHADED_REGION_CLASSNAME)[0];
                                            t.element.removeChild(e)
                                        }
                                }(), t.qrRegion && (t.qrRegion = null), t.context && (t.context = null), e.execute(), t.hidePausedState(), t.isScanning = !1, r()
                        };
                        t.localMediaStream || i();
                        var o = t.localMediaStream.getVideoTracks().length,
                            s = 0;
                        t.localMediaStream.getVideoTracks().forEach((function(e) {
                            t.localMediaStream.removeTrack(e), e.stop(), ++s >= o && i()
                        }))
                    }))
                }, e.prototype.scanFile = function(t, e) {
                    return this.scanFileV2(t, e).then((function(t) {
                        return t.decodedText
                    }))
                }, e.prototype.scanFileV2 = function(t, e) {
                    var r = this;
                    if (!(t && t instanceof File)) throw "imageFile argument is mandatory and should be instance of File. Use 'event.target.files[0]'.";
                    if (d(e) && (e = !0), !this.stateManagerProxy.canScanFile()) throw "Cannot start file scan - ongoing camera scan";
                    return new Promise((function(n, i) {
                        r.possiblyCloseLastScanImageFile(), r.clearElement(), r.lastScanImageFile = URL.createObjectURL(t);
                        var o = new Image;
                        o.onload = function() {
                            var t = o.width,
                                s = o.height,
                                a = document.getElementById(r.elementId),
                                A = a.clientWidth ? a.clientWidth : _.DEFAULT_WIDTH,
                                l = Math.max(a.clientHeight ? a.clientHeight : s, _.FILE_SCAN_MIN_HEIGHT),
                                h = r.computeCanvasDrawConfig(t, s, A, l);
                            if (e) {
                                var g = r.createCanvasElement(A, l, "qr-canvas-visible");
                                g.style.display = "inline-block", a.appendChild(g);
                                var d = g.getContext("2d");
                                if (!d) throw "Unable to get 2d context from canvas";
                                d.canvas.width = A, d.canvas.height = l, d.drawImage(o, 0, 0, t, s, h.x, h.y, h.width, h.height)
                            }
                            var u = r.createCanvasElement(h.width, h.height);
                            a.appendChild(u);
                            var C = u.getContext("2d");
                            if (!C) throw "Unable to get 2d context from canvas";
                            C.canvas.width = h.width, C.canvas.height = h.height, C.drawImage(o, 0, 0, t, s, 0, 0, h.width, h.height);
                            try {
                                r.qrcode.decodeAsync(u).then((function(t) {
                                    n(c.createFromQrcodeResult(t))
                                })).catch(i)
                            } catch (t) {
                                i("QR code parse error, error = " + t)
                            }
                        }, o.onerror = i, o.onabort = i, o.onstalled = i, o.onsuspend = i, o.src = URL.createObjectURL(t)
                    }))
                }, e.prototype.clear = function() {
                    this.clearElement()
                }, e.getCameras = function() {
                    if (navigator.mediaDevices) return e.getCamerasFromMediaDevices();
                    var t = MediaStreamTrack;
                    if (MediaStreamTrack && t.getSources) return e.getCamerasFromMediaStreamTrack();
                    var r = C.unableToQuerySupportedDevices();
                    return function() {
                        if ("https:" === location.protocol) return !0;
                        var t = location.host.split(":")[0];
                        return "127.0.0.1" === t || "localhost" === t
                    }() || (r = C.insecureContextCameraQueryError()), Promise.reject(r)
                }, e.prototype.getRunningTrackCapabilities = function() {
                    if (null == this.localMediaStream) throw "Scanning is not in running state, call this API only when QR code scanning using camera is in running state.";
                    if (0 === this.localMediaStream.getVideoTracks().length) throw "No video tracks found";
                    return this.localMediaStream.getVideoTracks()[0].getCapabilities()
                }, e.prototype.applyVideoConstraints = function(t) {
                    var e = this;
                    if (!t) throw "videoConstaints is required argument.";
                    if (!w.isMediaStreamConstraintsValid(t, this.logger)) throw "invalid videoConstaints passed, check logs for more details";
                    if (null === this.localMediaStream) throw "Scanning is not in running state, call this API only when QR code scanning using camera is in running state.";
                    if (0 === this.localMediaStream.getVideoTracks().length) throw "No video tracks found";
                    return new Promise((function(r, n) {
                        "aspectRatio" in t ? n("Chaning 'aspectRatio' in run-time is not yet supported.") : e.localMediaStream.getVideoTracks()[0].applyConstraints(t).then((function(t) {
                            r(t)
                        })).catch((function(t) {
                            n(t)
                        }))
                    }))
                }, e.getCamerasFromMediaDevices = function() {
                    return new Promise((function(t, e) {
                        navigator.mediaDevices.getUserMedia({
                            audio: !1,
                            video: !0
                        }).then((function(r) {
                            navigator.mediaDevices.enumerateDevices().then((function(e) {
                                for (var n = [], i = 0, o = e; i < o.length; i++) {
                                    var s = o[i];
                                    "videoinput" === s.kind && n.push({
                                        id: s.deviceId,
                                        label: s.label
                                    })
                                }! function(t) {
                                    for (var e = 0, r = t.getVideoTracks(); e < r.length; e++) {
                                        var n = r[e];
                                        n.enabled = !1, n.stop(), t.removeTrack(n)
                                    }
                                }(r), t(n)
                            })).catch((function(t) {
                                e(t.name + " : " + t.message)
                            }))
                        })).catch((function(t) {
                            e(t.name + " : " + t.message)
                        }))
                    }))
                }, e.getCamerasFromMediaStreamTrack = function() {
                    return new Promise((function(t, e) {
                        MediaStreamTrack.getSources((function(e) {
                            for (var r = [], n = 0, i = e; n < i.length; n++) {
                                var o = i[n];
                                "video" === o.kind && r.push({
                                    id: o.id,
                                    label: o.label
                                })
                            }
                            t(r)
                        }))
                    }))
                }, e.prototype.getSupportedFormats = function(e) {
                    var r = [t.QR_CODE, t.AZTEC, t.CODABAR, t.CODE_39, t.CODE_93, t.CODE_128, t.DATA_MATRIX, t.MAXICODE, t.ITF, t.EAN_13, t.EAN_8, t.PDF_417, t.RSS_14, t.RSS_EXPANDED, t.UPC_A, t.UPC_E, t.UPC_EAN_EXTENSION];
                    if (!e || "boolean" == typeof e) return r;
                    if (!e.formatsToSupport) return r;
                    if (!Array.isArray(e.formatsToSupport)) throw "configOrVerbosityFlag.formatsToSupport should be undefined or an array.";
                    if (0 === e.formatsToSupport.length) throw "Atleast 1 formatsToSupport is needed.";
                    for (var n = [], i = 0, o = e.formatsToSupport; i < o.length; i++) {
                        var a = o[i];
                        s(a) ? n.push(a) : this.logger.warn("Invalid format: " + a + " passed in config, ignoring.")
                    }
                    if (0 === n.length) throw "None of formatsToSupport match supported values.";
                    return n
                }, e.prototype.validateQrboxSize = function(t, e) {
                    var r = t.qrbox;
                    this.validateQrboxConfig(r);
                    var n = this.toQrdimensions(r),
                        i = function(t) {
                            if (t < _.MIN_QR_BOX_SIZE) throw "minimum size of 'config.qrbox' dimension value is " + _.MIN_QR_BOX_SIZE + "px."
                        };
                    i(n.width), i(n.height),
                        function(t) {
                            if (t > e) throw "'config.qrbox' dimensions values should not be greater than the width of the HTML element."
                        }(n.width)
                }, e.prototype.validateQrboxConfig = function(t) {
                    if ("number" != typeof t && (void 0 === t.width || void 0 === t.height)) throw "Invalid instance of QrDimensions passed for 'config.qrbox'."
                }, e.prototype.toQrdimensions = function(t) {
                    return "number" == typeof t ? {
                        width: t,
                        height: t
                    } : t
                }, e.prototype.setupUi = function(t, e, r) {
                    var n = r.qrbox;
                    this.validateQrboxConfig(n);
                    var i = this.toQrdimensions(n);
                    i.height > e && this.logger.warn("[Html5Qrcode] config.qrbox has height that isgreater than the height of the video stream. Shading will be ignored");
                    var o = r.isShadedBoxEnabled() && i.height <= e,
                        s = {
                            x: 0,
                            y: 0,
                            width: t,
                            height: e
                        },
                        a = o ? this.getShadedRegionBounds(t, e, i) : s,
                        A = this.createCanvasElement(a.width, a.height),
                        l = A.getContext("2d");
                    l.canvas.width = a.width, l.canvas.height = a.height, this.element.append(A), o && this.possiblyInsertShadingElement(this.element, t, e, i), this.createScannerPausedUiElement(this.element), this.qrRegion = a, this.context = l, this.canvasElement = A
                }, e.prototype.createScannerPausedUiElement = function(t) {
                    var e = document.createElement("div");
                    e.innerText = "Scanner paused", e.style.display = "none", e.style.position = "absolute", e.style.top = "0px", e.style.zIndex = "1", e.style.background = "yellow", e.style.textAlign = "center", e.style.width = "100%", t.appendChild(e), this.scannerPausedUiElement = e
                }, e.prototype.scanContext = function(t, e) {
                    var r = this;
                    return this.stateManagerProxy.isPaused() ? Promise.resolve(!1) : this.qrcode.decodeAsync(this.canvasElement).then((function(e) {
                        return t(e.text, c.createFromQrcodeResult(e)), r.possiblyUpdateShaders(!0), !0
                    })).catch((function(t) {
                        r.possiblyUpdateShaders(!1);
                        var n = C.codeParseError(t);
                        return e(n, h.createFrom(n)), !1
                    }))
                }, e.prototype.foreverScan = function(t, e, r) {
                    var n = this;
                    if (this.shouldScan && this.localMediaStream) {
                        var i = this.videoElement,
                            o = i.videoWidth / i.clientWidth,
                            s = i.videoHeight / i.clientHeight;
                        if (!this.qrRegion) throw "qrRegion undefined when localMediaStream is ready.";
                        var a = this.qrRegion.width * o,
                            A = this.qrRegion.height * s,
                            l = this.qrRegion.x * o,
                            c = this.qrRegion.y * s;
                        this.context.drawImage(i, l, c, a, A, 0, 0, this.qrRegion.width, this.qrRegion.height);
                        var h = function() {
                            n.foreverScanTimeout = setTimeout((function() {
                                n.foreverScan(t, e, r)
                            }), n.getTimeoutFps(t.fps))
                        };
                        this.scanContext(e, r).then((function(i) {
                            i || !0 === t.disableFlip ? h() : (n.context.translate(n.context.canvas.width, 0), n.context.scale(-1, 1), n.scanContext(e, r).finally((function() {
                                h()
                            })))
                        })).catch((function(t) {
                            n.logger.logError("Error happend while scanning context", t), h()
                        }))
                    }
                }, e.prototype.onMediaStreamReceived = function(t, e, r, n, i, o) {
                    var s = this,
                        a = this;
                    return new Promise((function(A, l) {
                        var c = function() {
                            var r = s.createVideoElement(n);
                            a.element.append(r), r.onabort = l, r.onerror = l, r.onplaying = function() {
                                var t = r.clientWidth,
                                    n = r.clientHeight;
                                a.setupUi(t, n, e), a.foreverScan(e, i, o), A(null)
                            }, r.srcObject = t, r.play(), a.videoElement = r
                        };
                        if (a.localMediaStream = t, r || !e.aspectRatio) c();
                        else {
                            var h = {
                                aspectRatio: e.aspectRatio
                            };
                            t.getVideoTracks()[0].applyConstraints(h).then((function(t) {
                                return c()
                            })).catch((function(t) {
                                a.logger.logErrors(["[Html5Qrcode] Constriants could not be satisfied, ignoring constraints", t]), c()
                            }))
                        }
                    }))
                }, e.prototype.createVideoConstraints = function(t) {
                    if ("string" == typeof t) return {
                        deviceId: {
                            exact: t
                        }
                    };
                    if ("object" == typeof t) {
                        var e = "facingMode",
                            r = {
                                user: !0,
                                environment: !0
                            },
                            n = "exact",
                            i = function(t) {
                                if (t in r) return !0;
                                throw "config has invalid 'facingMode' value = '" + t + "'"
                            },
                            o = Object.keys(t);
                        if (1 !== o.length) throw "'cameraIdOrConfig' object should have exactly 1 key, if passed as an object, found " + o.length + " keys";
                        var s = Object.keys(t)[0];
                        if (s !== e && "deviceId" !== s) throw "Only 'facingMode' and 'deviceId'  are supported for 'cameraIdOrConfig'";
                        if (s !== e) {
                            var a = t.deviceId;
                            if ("string" == typeof a) return {
                                deviceId: a
                            };
                            if ("object" == typeof a) {
                                if (n in a) return {
                                    deviceId: {
                                        exact: a.exact
                                    }
                                };
                                throw "'deviceId' should be string or object with exact as key."
                            }
                            throw "Invalid type of 'deviceId' = " + typeof a
                        }
                        var A = t.facingMode;
                        if ("string" == typeof A) {
                            if (i(A)) return {
                                facingMode: A
                            }
                        } else {
                            if ("object" != typeof A) throw "Invalid type of 'facingMode' = " + typeof A;
                            if (!(n in A)) throw "'facingMode' should be string or object with exact as key.";
                            if (i(A.exact)) return {
                                facingMode: {
                                    exact: A.exact
                                }
                            }
                        }
                    }
                    throw "Invalid type of 'cameraIdOrConfig' = " + typeof t
                }, e.prototype.computeCanvasDrawConfig = function(t, e, r, n) {
                    if (t <= r && e <= n) return {
                        x: (r - t) / 2,
                        y: (n - e) / 2,
                        width: t,
                        height: e
                    };
                    var i = t,
                        o = e;
                    return t > r && (e *= r / t, t = r), e > n && (t *= n / e, e = n), this.logger.log("Image downsampled from " + i + "X" + o + " to " + t + "X" + e + "."), this.computeCanvasDrawConfig(t, e, r, n)
                }, e.prototype.clearElement = function() {
                    if (this.stateManagerProxy.isScanning()) throw "Cannot clear while scan is ongoing, close it first.";
                    var t = document.getElementById(this.elementId);
                    t && (t.innerHTML = "")
                }, e.prototype.createVideoElement = function(t) {
                    var e = document.createElement("video");
                    return e.style.width = t + "px", e.muted = !0, e.setAttribute("muted", "true"), e.playsInline = !0, e
                }, e.prototype.possiblyUpdateShaders = function(t) {
                    this.qrMatch !== t && (this.hasBorderShaders && this.borderShaders && this.borderShaders.length && this.borderShaders.forEach((function(e) {
                        e.style.backgroundColor = t ? _.BORDER_SHADER_MATCH_COLOR : _.BORDER_SHADER_DEFAULT_COLOR
                    })), this.qrMatch = t)
                }, e.prototype.possiblyCloseLastScanImageFile = function() {
                    this.lastScanImageFile && (URL.revokeObjectURL(this.lastScanImageFile), this.lastScanImageFile = null)
                }, e.prototype.createCanvasElement = function(t, e, r) {
                    var n = t,
                        i = e,
                        o = document.createElement("canvas");
                    return o.style.width = n + "px", o.style.height = i + "px", o.style.display = "none", o.id = d(r) ? "qr-canvas" : r, o
                }, e.prototype.getShadedRegionBounds = function(t, e, r) {
                    if (r.width > t || r.height > e) throw "'config.qrbox' dimensions should not be greater than the dimensions of the root HTML element.";
                    return {
                        x: (t - r.width) / 2,
                        y: (e - r.height) / 2,
                        width: r.width,
                        height: r.height
                    }
                }, e.prototype.possiblyInsertShadingElement = function(t, e, r, n) {
                    if (!(e - n.width < 1 || r - n.height < 1)) {
                        var i = document.createElement("div");
                        i.style.position = "absolute";
                        var o = (e - n.width) / 2,
                            s = (r - n.height) / 2;
                        if (i.style.borderLeft = o + "px solid #0000007a", i.style.borderRight = o + "px solid #0000007a", i.style.borderTop = s + "px solid #0000007a", i.style.borderBottom = s + "px solid #0000007a", i.style.boxSizing = "border-box", i.style.top = "0px", i.style.bottom = "0px", i.style.left = "0px", i.style.right = "0px", i.id = "" + _.SHADED_REGION_CLASSNAME, e - n.width < 11 || r - n.height < 11) this.hasBorderShaders = !1;
                        else {
                            var a = 40;
                            this.insertShaderBorders(i, a, 5, -5, 0, !0), this.insertShaderBorders(i, a, 5, -5, 0, !1), this.insertShaderBorders(i, a, 5, n.height + 5, 0, !0), this.insertShaderBorders(i, a, 5, n.height + 5, 0, !1), this.insertShaderBorders(i, 5, 45, -5, -5, !0), this.insertShaderBorders(i, 5, 45, n.height + 5 - a, -5, !0), this.insertShaderBorders(i, 5, 45, -5, -5, !1), this.insertShaderBorders(i, 5, 45, n.height + 5 - a, -5, !1), this.hasBorderShaders = !0
                        }
                        t.append(i)
                    }
                }, e.prototype.insertShaderBorders = function(t, e, r, n, i, o) {
                    var s = document.createElement("div");
                    s.style.position = "absolute", s.style.backgroundColor = _.BORDER_SHADER_DEFAULT_COLOR, s.style.width = e + "px", s.style.height = r + "px", s.style.top = n + "px", o ? s.style.left = i + "px" : s.style.right = i + "px", this.borderShaders || (this.borderShaders = []), this.borderShaders.push(s), t.appendChild(s)
                }, e.prototype.showPausedState = function() {
                    if (!this.scannerPausedUiElement) throw "[internal error] scanner paused UI element not found";
                    this.scannerPausedUiElement.style.display = "block"
                }, e.prototype.hidePausedState = function() {
                    if (!this.scannerPausedUiElement) throw "[internal error] scanner paused UI element not found";
                    this.scannerPausedUiElement.style.display = "none"
                }, e.prototype.getTimeoutFps = function(t) {
                    return 1e3 / t
                }, e
            }(),
            F = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAELSURBVDiNldNLSkNBEAXQkwgR4iYkZpLfVoxuxAU4ENyAaDA68QNuw88CNMFB4sBpNiAYyVQHXWpI+gW9UNCv+t6q7ur7WEYHJxjjI2KMY7Qz/B+s4wwzXGAbTbRifRl7fVRy4gc8YnNFkxqecL9Y5DzE1VVHDFQxwOl3ohNHy3U+xEEmvxWa1hr28YqbDLGBKYYL+bco0oQXaUg5tCJy6GIkOjQKSEM8ryj+Xo6PUgGpHJFDCZ9lTFAvIK1CHZMybqX7/Bfd0GpLT1LLkPYict1n5gbclxz2FyNtSMPtzScrkj0H0vsWoR7iO5n/oSLZc4Yr7Pj1wS6uY6+XE8+jhSPJJNOIUeSWTPUFgVI4ubR2UYIAAAAASUVORK5CYII=",
            P = function() {
                function t() {}
                return t.createDefault = function() {
                    return {
                        hasPermission: !1,
                        lastUsedCameraId: null
                    }
                }, t
            }(),
            k = function() {
                function t() {
                    this.data = P.createDefault();
                    var e = localStorage.getItem(t.LOCAL_STORAGE_KEY);
                    e ? this.data = JSON.parse(e) : this.reset()
                }
                return t.prototype.hasCameraPermissions = function() {
                    return this.data.hasPermission
                }, t.prototype.getLastUsedCameraId = function() {
                    return this.data.lastUsedCameraId
                }, t.prototype.setHasPermission = function(t) {
                    this.data.hasPermission = t, this.flush()
                }, t.prototype.setLastUsedCameraId = function(t) {
                    this.data.lastUsedCameraId = t, this.flush()
                }, t.prototype.resetLastUsedCameraId = function() {
                    this.data.lastUsedCameraId = null, this.flush()
                }, t.prototype.reset = function() {
                    this.data = P.createDefault(), this.flush()
                }, t.prototype.flush = function() {
                    localStorage.setItem(t.LOCAL_STORAGE_KEY, JSON.stringify(this.data))
                }, t.LOCAL_STORAGE_KEY = "HTML5_QRCODE_DATA", t
            }(),
            L = function() {
                function t() {
                    this.infoDiv = document.createElement("div")
                }
                return t.prototype.renderInto = function(t) {
                    this.infoDiv.style.position = "absolute", this.infoDiv.style.top = "10px", this.infoDiv.style.right = "10px", this.infoDiv.style.zIndex = "2", this.infoDiv.style.display = "none", this.infoDiv.style.padding = "5pt", this.infoDiv.style.border = "1px solid silver", this.infoDiv.style.fontSize = "10pt", this.infoDiv.style.background = "rgb(248 248 248)", this.infoDiv.innerText = f.builtUsing();
                    var e = document.createElement("a");
                    e.innerText = "html5-qrcode", e.href = "https://github.com/mebjas/html5-qrcode", e.target = "new", this.infoDiv.appendChild(e);
                    var r = document.createElement("br"),
                        n = document.createElement("br");
                    this.infoDiv.appendChild(r), this.infoDiv.appendChild(n);
                    var i = document.createElement("a");
                    i.innerText = f.reportIssues(), i.href = "https://github.com/mebjas/html5-qrcode/issues", i.target = "new", this.infoDiv.appendChild(i), t.appendChild(this.infoDiv)
                }, t.prototype.show = function() {
                    this.infoDiv.style.display = "block"
                }, t.prototype.hide = function() {
                    this.infoDiv.style.display = "none"
                }, t
            }(),
            G = function() {
                function t(t, e) {
                    this.isShowingInfoIcon = !0, this.onTapIn = t, this.onTapOut = e, this.infoIcon = document.createElement("img")
                }
                return t.prototype.renderInto = function(t) {
                    var e = this;
                    this.infoIcon.src = F, this.infoIcon.style.position = "absolute", this.infoIcon.style.top = "4px", this.infoIcon.style.right = "4px", this.infoIcon.style.opacity = "0.6", this.infoIcon.style.cursor = "pointer", this.infoIcon.style.zIndex = "2", this.infoIcon.onmouseover = function(t) {
                        return e.onHoverIn()
                    }, this.infoIcon.onmouseout = function(t) {
                        return e.onHoverOut()
                    }, this.infoIcon.onclick = function(t) {
                        return e.onClick()
                    }, t.appendChild(this.infoIcon)
                }, t.prototype.onHoverIn = function() {
                    this.isShowingInfoIcon && (this.infoIcon.style.opacity = "1")
                }, t.prototype.onHoverOut = function() {
                    this.isShowingInfoIcon && (this.infoIcon.style.opacity = "0.6")
                }, t.prototype.onClick = function() {
                    this.isShowingInfoIcon ? (this.isShowingInfoIcon = !1, this.onTapIn(), this.infoIcon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAQgAAAEIBarqQRAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAE1SURBVDiNfdI7S0NBEAXgLya1otFgpbYSbISAgpXYi6CmiH9KCAiChaVga6OiWPgfRDQ+0itaGVNosXtluWwcuMzePfM4M3sq8lbHBubwg1dc4m1E/J/N4ghDPOIsfk/4xiEao5KX0McFljN4C9d4QTPXuY99jP3DsIoDPGM6BY5i5yI5R7O4q+ImFkJY2DCh3cAH2klyB+9J1xUMMAG7eCh1a+Mr+k48b5diXrFVwwLuS+BJ9MfR7+G0FHOHhTHhnXNWS87VDF4pcnfQK4Ep7XScNLmPTZgURNKKYENYWDpzW1BhscS1WHS8CDgURFJQrWcoF3c13KKbgg1BYQfy8xZWEzTTw1QZbAoKu8FqJnktdu5hcVSHmchiILzzuaDQvjBzV2m8yohCE1jHfPx/xhU+y4G/D75ELlRJsSYAAAAASUVORK5CYII=", this.infoIcon.style.opacity = "1") : (this.isShowingInfoIcon = !0, this.onTapOut(), this.infoIcon.src = F, this.infoIcon.style.opacity = "0.6")
                }, t
            }(),
            Q = function() {
                function t() {
                    var t = this;
                    this.infoDiv = new L, this.infoIcon = new G((function() {
                        t.infoDiv.show()
                    }), (function() {
                        t.infoDiv.hide()
                    }))
                }
                return t.prototype.renderInto = function(t) {
                    this.infoDiv.renderInto(t), this.infoIcon.renderInto(t)
                }, t
            }(),
            Z = function() {
                function t() {}
                return t.hasCameraPermissions = function() {
                    return new Promise((function(t, e) {
                        navigator.mediaDevices.enumerateDevices().then((function(e) {
                            e.forEach((function(e) {
                                "videoinput" === e.kind && e.label && t(!0)
                            })), t(!1)
                        }))
                    }))
                }, t
            }();
        ! function(t) {
            t[t.STATUS_DEFAULT = 0] = "STATUS_DEFAULT", t[t.STATUS_SUCCESS = 1] = "STATUS_SUCCESS", t[t.STATUS_WARNING = 2] = "STATUS_WARNING", t[t.STATUS_REQUESTING_PERMISSION = 3] = "STATUS_REQUESTING_PERMISSION"
        }(B || (B = {}));
        var U = function() {
            function t(t, e, r) {
                if (this.lastMatchFound = null, this.cameraScanImage = null, this.fileScanImage = null, this.elementId = t, this.config = this.createConfig(e), this.verbose = !0 === r, !document.getElementById(t)) throw "HTML Element with id=" + t + " not found";
                this.currentScanType = i.SCAN_TYPE_CAMERA, this.sectionSwapAllowed = !0, this.logger = new g(this.verbose), this.persistedDataManager = new k, !0 !== e.rememberLastUsedCamera && this.persistedDataManager.reset()
            }
            return t.prototype.render = function(t, e) {
                var r = this;
                this.lastMatchFound = null, this.qrCodeSuccessCallback = function(e, n) {
                    if (t) t(e, n);
                    else {
                        if (r.lastMatchFound === e) return;
                        r.lastMatchFound = e, r.setHeaderMessage(I.lastMatch(e), B.STATUS_SUCCESS)
                    }
                }, this.qrCodeErrorCallback = function(t, r) {
                    e && e(t, r)
                };
                var n, i, o = document.getElementById(this.elementId);
                if (!o) throw "HTML Element with id=" + this.elementId + " not found";
                o.innerHTML = "", this.createBasicLayout(o), this.html5Qrcode = new b(this.getScanRegionId(), (n = this.config, i = this.verbose, {
                    formatsToSupport: n.formatsToSupport,
                    experimentalFeatures: n.experimentalFeatures,
                    verbose: i
                }))
            }, t.prototype.pause = function() {
                if (!this.html5Qrcode) throw "Code scanner not initialized.";
                this.html5Qrcode.pause()
            }, t.prototype.resume = function() {
                if (!this.html5Qrcode) throw "Code scanner not initialized.";
                this.html5Qrcode.resume()
            }, t.prototype.getState = function() {
                if (!this.html5Qrcode) throw "Code scanner not initialized.";
                return this.html5Qrcode.getState()
            }, t.prototype.clear = function() {
                var t = this;
                return this.html5Qrcode ? new Promise((function(e, r) {
                    t.html5Qrcode ? t.html5Qrcode.isScanning && t.html5Qrcode.stop().then((function(r) {
                        var n;
                        t.html5Qrcode ? (t.html5Qrcode.clear(), (n = document.getElementById(t.elementId)) && (n.innerHTML = "", t.resetBasicLayout(n)), e()) : e()
                    })).catch((function(e) {
                        t.verbose && t.logger.logError("Unable to stop qrcode scanner", e), r(e)
                    })) : e()
                })) : Promise.resolve()
            }, t.prototype.getRunningTrackCapabilities = function() {
                if (!this.html5Qrcode) throw "Code scanner not initialized.";
                return this.html5Qrcode.getRunningTrackCapabilities()
            }, t.prototype.applyVideoConstraints = function(t) {
                if (!this.html5Qrcode) throw "Code scanner not initialized.";
                return this.html5Qrcode.applyVideoConstraints(t)
            }, t.prototype.createConfig = function(t) {
                return t ? (t.fps || (t.fps = A.SCAN_DEFAULT_FPS), t.rememberLastUsedCamera !== !A.DEFAULT_REMEMBER_LAST_CAMERA_USED && (t.rememberLastUsedCamera = A.DEFAULT_REMEMBER_LAST_CAMERA_USED), t) : {
                    fps: A.SCAN_DEFAULT_FPS,
                    rememberLastUsedCamera: A.DEFAULT_REMEMBER_LAST_CAMERA_USED
                }
            }, t.prototype.createBasicLayout = function(t) {
                t.style.position = "relative", t.style.padding = "0px", t.style.border = "1px solid silver", this.createHeader(t);
                var e = document.createElement("div"),
                    r = this.getScanRegionId();
                e.id = r, e.style.width = "100%", e.style.minHeight = "100px", e.style.textAlign = "center", t.appendChild(e), this.insertCameraScanImageToScanRegion();
                var n = document.createElement("div"),
                    i = this.getDashboardId();
                n.id = i, n.style.width = "100%", t.appendChild(n), this.setupInitialDashboard(n)
            }, t.prototype.resetBasicLayout = function(t) {
                t.style.border = "none"
            }, t.prototype.setupInitialDashboard = function(t) {
                this.createSection(t), this.createSectionControlPanel(), this.createSectionSwap()
            }, t.prototype.createHeader = function(t) {
                var e = document.createElement("div");
                e.style.textAlign = "left", e.style.margin = "0px", t.appendChild(e), (new Q).renderInto(e);
                var r = document.createElement("div");
                r.id = this.getHeaderMessageContainerId(), r.style.display = "none", r.style.textAlign = "center", r.style.fontSize = "14px", r.style.padding = "2px 10px", r.style.margin = "4px", r.style.borderTop = "1px solid #f6f6f6", e.appendChild(r)
            }, t.prototype.createSection = function(t) {
                var e = document.createElement("div");
                e.id = this.getDashboardSectionId(), e.style.width = "100%", e.style.padding = "10px 0px 10px 0px", e.style.textAlign = "left", t.appendChild(e)
            }, t.prototype.createCameraListUi = function(t, e, r) {
                var n = this;
                n.setHeaderMessage(I.cameraPermissionRequesting());
                var i = function() {
                    r || n.createPermissionButton(t, e)
                };
                b.getCameras().then((function(r) {
                    n.persistedDataManager.setHasPermission(!0), n.resetHeaderMessage(), r && r.length > 0 ? (t.removeChild(e), n.renderCameraSelection(r)) : (n.setHeaderMessage(I.noCameraFound(), B.STATUS_WARNING), i())
                })).catch((function(t) {
                    n.persistedDataManager.setHasPermission(!1), r ? r.disabled = !1 : i(), n.setHeaderMessage(t, B.STATUS_WARNING)
                }))
            }, t.prototype.createPermissionButton = function(t, e) {
                var r = this,
                    n = document.createElement("button");
                n.innerText = I.cameraPermissionTitle(), n.addEventListener("click", (function() {
                    n.disabled = !0, r.createCameraListUi(t, e, n)
                })), e.appendChild(n)
            }, t.prototype.createPermissionsUi = function(t, e) {
                var r = this;
                this.persistedDataManager.hasCameraPermissions() ? Z.hasCameraPermissions().then((function(n) {
                    n ? r.createCameraListUi(t, e) : (r.persistedDataManager.setHasPermission(!1), r.createPermissionButton(t, e))
                })).catch((function(n) {
                    r.persistedDataManager.setHasPermission(!1), r.createPermissionButton(t, e)
                })) : this.createPermissionButton(t, e)
            }, t.prototype.createSectionControlPanel = function() {
                var t = this,
                    e = document.getElementById(this.getDashboardSectionId()),
                    r = document.createElement("div");
                e.appendChild(r);
                var n = document.createElement("div");
                n.id = this.getDashboardSectionCameraScanRegionId(), n.style.display = this.currentScanType === i.SCAN_TYPE_CAMERA ? "block" : "none", r.appendChild(n);
                var o = document.createElement("div");
                o.style.textAlign = "center", n.appendChild(o), this.createPermissionsUi(n, o);
                var s = document.createElement("div");
                s.id = this.getDashboardSectionFileScanRegionId(), s.style.textAlign = "center", s.style.display = this.currentScanType === i.SCAN_TYPE_CAMERA ? "none" : "block", r.appendChild(s);
                var a = document.createElement("input");
                a.id = this.getFileScanInputId(), a.accept = "image/*", a.type = "file", a.style.width = "200px", a.disabled = this.currentScanType === i.SCAN_TYPE_CAMERA;
                var A = document.createElement("span");
                A.innerText = " Select Image", s.appendChild(a), s.appendChild(A), a.addEventListener("change", (function(e) {
                    if (!t.html5Qrcode) throw "html5Qrcode not defined";
                    if (null != e && null != e.target && t.currentScanType === i.SCAN_TYPE_FILE && 0 !== e.target.files.length) {
                        var r = e.target.files[0];
                        t.html5Qrcode.scanFileV2(r, !0).then((function(e) {
                            t.resetHeaderMessage(), t.qrCodeSuccessCallback(e.decodedText, e)
                        })).catch((function(e) {
                            t.setHeaderMessage(e, B.STATUS_WARNING), t.qrCodeErrorCallback(e, h.createFrom(e))
                        }))
                    }
                }))
            }, t.prototype.renderCameraSelection = function(t) {
                var e = this,
                    r = document.getElementById(this.getDashboardSectionCameraScanRegionId());
                r.style.textAlign = "center";
                var n = document.createElement("span");
                n.style.marginRight = "10px";
                var i = t.length,
                    o = document.createElement("select");
                if (1 === i) o.style.display = "none";
                else {
                    var s = I.selectCamera();
                    n.innerText = s + " (" + t.length + ")  "
                }
                o.id = this.getCameraSelectionId();
                for (var a = [], A = 0, l = t; A < l.length; A++) {
                    if (A == l.length - 1 ){
                    var c = l[A],
                        h = c.id,
                        g = null == c.label ? h : c.label;
                    (S = document.createElement("option")).value = h,
                    S.innerText = g, a.push(S),
                    o.appendChild(S)
                    }
                }
                n.appendChild(o), r.appendChild(n);
                var d = document.createElement("span"),
                    u = document.createElement("button");
                u.innerText = I.scanButtonStartScanningText(), d.appendChild(u);
                var C = document.createElement("button");
                C.innerText = I.scanButtonStopScanningText(), C.style.display = "none", C.disabled = !0, d.appendChild(C), r.appendChild(d);
                var f = function(t) {
                    t || (u.style.display = "none"), u.innerText = I.scanButtonStartScanningText(), u.style.opacity = "1", u.disabled = !1, t && (u.style.display = "inline-block")
                };
                if (u.addEventListener("click", (function(t) {
                        u.innerText = I.scanButtonScanningStarting(), o.disabled = !0, u.disabled = !0, u.style.opacity = "0.5", e.showHideScanTypeSwapLink(!1);
                        var r, n = o.value;
                        e.persistedDataManager.setLastUsedCameraId(n), e.html5Qrcode.start(n, (r = e.config, {
                            fps: r.fps,
                            qrbox: r.qrbox,
                            aspectRatio: r.aspectRatio,
                            disableFlip: r.disableFlip,
                            videoConstraints: r.videoConstraints
                        }), e.qrCodeSuccessCallback, e.qrCodeErrorCallback).then((function(t) {
                            C.disabled = !1, C.style.display = "inline-block", f(!1)
                        })).catch((function(t) {
                            e.showHideScanTypeSwapLink(!0), o.disabled = !1, f(!0), e.setHeaderMessage(t, B.STATUS_WARNING)
                        }))
                    })), 1 === i && u.click(), C.addEventListener("click", (function(t) {
                        if (!e.html5Qrcode) throw "html5Qrcode not defined";
                        C.disabled = !0, e.html5Qrcode.stop().then((function(t) {
                            e.showHideScanTypeSwapLink(!0), o.disabled = !1, u.disabled = !1, C.style.display = "none", u.style.display = "inline-block", e.insertCameraScanImageToScanRegion()
                        })).catch((function(t) {
                            C.disabled = !1, e.setHeaderMessage(t, B.STATUS_WARNING)
                        }))
                    })), e.persistedDataManager.getLastUsedCameraId()) {
                    for (var w = e.persistedDataManager.getLastUsedCameraId(), E = !1, m = 0, p = a; m < p.length; m++) {
                        var S;
                        if ((S = p[m]).value === w) {
                            E = !0;
                            break
                        }
                    }
                    E ? (o.value = w, u.click()) : e.persistedDataManager.resetLastUsedCameraId()
                }
            }, t.prototype.createSectionSwap = function() {
                var t = this,
                    e = I.textIfCameraScanSelected(),
                    r = I.textIfFileScanSelected(),
                    n = document.getElementById(this.getDashboardSectionId()),
                    o = document.createElement("div");
                o.style.textAlign = "center";
                var s = document.createElement("a");
                s.style.textDecoration = "underline", s.id = this.getDashboardSectionSwapLinkId(), s.innerText = this.currentScanType === i.SCAN_TYPE_CAMERA ? e : r, s.href = "#scan-using-file", s.addEventListener("click", (function() {
                    t.sectionSwapAllowed ? (t.resetHeaderMessage(), t.getFileScanInput().value = "", t.sectionSwapAllowed = !1, t.currentScanType === i.SCAN_TYPE_CAMERA ? (t.clearScanRegion(), t.getFileScanInput().disabled = !1, t.getCameraScanRegion().style.display = "none", t.getFileScanRegion().style.display = "block", s.innerText = r, t.currentScanType = i.SCAN_TYPE_FILE, t.insertFileScanImageToScanRegion()) : (t.clearScanRegion(), t.getFileScanInput().disabled = !0, t.getCameraScanRegion().style.display = "block", t.getFileScanRegion().style.display = "none", s.innerText = e, t.currentScanType = i.SCAN_TYPE_CAMERA, t.insertCameraScanImageToScanRegion()), t.sectionSwapAllowed = !0) : t.verbose && t.logger.logError("Section swap called when not allowed")
                })), o.appendChild(s), n.appendChild(o)
            }, t.prototype.resetHeaderMessage = function() {
                document.getElementById(this.getHeaderMessageContainerId()).style.display = "none"
            }, t.prototype.setHeaderMessage = function(t, e) {
                e || (e = B.STATUS_DEFAULT);
                var r = this.getHeaderMessageDiv();
                switch (r.innerText = t, r.style.display = "block", e) {
                    case B.STATUS_SUCCESS:
                        r.style.background = "#6aaf5042", r.style.color = "#477735";
                        break;
                    case B.STATUS_WARNING:
                        r.style.background = "#cb243124", r.style.color = "#cb2431";
                        break;
                    case B.STATUS_DEFAULT:
                    default:
                        r.style.background = "#00000000", r.style.color = "rgb(17, 17, 17)"
                }
            }, t.prototype.showHideScanTypeSwapLink = function(t) {
                !0 !== t && (t = !1), this.sectionSwapAllowed = t, this.getDashboardSectionSwapLink().style.display = t ? "inline-block" : "none"
            }, t.prototype.insertCameraScanImageToScanRegion = function() {
                var t = this,
                    e = document.getElementById(this.getScanRegionId());
                if (this.cameraScanImage) return e.innerHTML = "<br>", void e.appendChild(this.cameraScanImage);
                this.cameraScanImage = new Image, this.cameraScanImage.onload = function(r) {
                    e.innerHTML = "<br>", e.appendChild(t.cameraScanImage)
                }, this.cameraScanImage.width = 64, this.cameraScanImage.style.opacity = "0.3", this.cameraScanImage.src = "data:image/gif;base64,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L25zLmFkb2JlLmNvbS94bXAvMS4wL0R5bmFtaWNNZWRpYS8iCiAgICB4bWxuczpzdERpbT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL0RpbWVuc2lvbnMjIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFkNzgwZGNmLWVkZTctZWU0My04N2E0LTdlMTg3YThlYTI3NSIKICAgeG1wTU06RG9jdW1lbnRJRD0iZDMxNDk3ZmItM2Y1Zi0yMzkwLTFlZDEtYjU3NDAwMDAwMDVmIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NTdiYmYyOTgtY2M5Ny02MzRlLWE4MjAtODFiMjAxY2RmZjllIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTEyLTA1VDA5OjEzOjIyKzA1OjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0xMi0wNVQwOToxMzoyMiswNTowMCIKICAgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBBZnRlciBFZmZlY3RzIENDIDIwMTggKFdpbmRvd3MpIgogICB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0xMi0wNVQwOToxMjo1MCswNTowMCIKICAgZGM6Zm9ybWF0PSLQkNC90LjQvNC40YDQvtCy0LDQvdC90YvQuSBHSUYiCiAgIGJvZHltb3Zpbjpwcm9qZWN0X2lkPSJvZWU3ZTRyM2gwaGtjZTdiODgzMyIKICAgeG1wRE06dmlkZW9GcmFtZVJhdGU9IjI1LjAwMDAwMCIKICAgeG1wRE06dmlkZW9GaWVsZE9yZGVyPSJQcm9ncmVzc2l2ZSIKICAgeG1wRE06dmlkZW9QaXhlbEFzcGVjdFJhdGlvPSIxLzEiCiAgIHhtcERNOnN0YXJ0VGltZVNjYWxlPSIyNSIKICAgeG1wRE06c3RhcnRUaW1lU2FtcGxlU2l6ZT0iMSI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSI5YWE0NzI4ZC1iYWU1LTAyMDEtMjM4MC0zZTlhMDAwMDAwOGMiCiAgICAgIHN0RXZ0OndoZW49IjIwMTktMTItMDVUMDk6MTM6MjIrMDU6MDAiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYTA2OGRlZi1hY2NhLTM5NDgtODM1Yi02MWQ1MmU2NWI3NDIiCiAgICAgIHN0RXZ0OndoZW49IjIwMTktMDgtMzBUMDE6Mzg6MTErMDM6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEFmdGVyIEVmZmVjdHMgQ0MgMjAxOCAoV2luZG93cykiLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZThjY2QxNzEtNWFkZC01MzRmLWIyZjgtODc0NzNhOGMxYWJmIgogICAgICBzdEV2dDp3aGVuPSIyMDE5LTA4LTMwVDAxOjM4OjMxKzAzOjAwIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBBZnRlciBFZmZlY3RzIENDIDIwMTggKFdpbmRvd3MpIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvY29udGVudCIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2ZmVmYzVhNC00YWY3LTVhNGYtYjJiYS1hMWRkYTM1YWRkMTQiCiAgICAgIHN0RXZ0OndoZW49IjIwMTktMDgtMzBUMDI6MDY6MjcrMDM6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEFmdGVyIEVmZmVjdHMgQ0MgMjAxOCAoV2luZG93cykiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii9jb250ZW50Ii8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249ImRlcml2ZWQiCiAgICAgIHN0RXZ0OnBhcmFtZXRlcnM9InNhdmVkIHRvIG5ldyBsb2NhdGlvbiIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmYjg3ZmQwYS00Njc2LTQ2NDMtOWZlYS03Mjk2NzllYmVhY2YiCiAgICAgIHN0RXZ0OndoZW49IjIwMTktMDgtMzBUMDI6MDY6NTYrMDM6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEFmdGVyIEVmZmVjdHMgQ0MgMjAxOCAoV2luZG93cykiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTBmZDdiYzMtNDllMy1hNzRjLWI0Y2UtNzI5NjYxM2NjMmYwIgogICAgICBzdEV2dDp3aGVuPSIyMDE5LTA4LTMwVDAyOjA3OjA3KzAzOjAwIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBBZnRlciBFZmZlY3RzIENDIDIwMTggKFdpbmRvd3MpIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvY29udGVudCIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMWZlOTE3MC1lYTQ1LTcyNDItOGVmNy1mMzQyNTU0ZWEwN2UiCiAgICAgIHN0RXZ0OndoZW49IjIwMTktMDgtMzBUMDI6MDc6MDcrMDM6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEFmdGVyIEVmZmVjdHMgQ0MgMjAxOCAoV2luZG93cykiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjJjN2ViNzEtMGJhZC03OTRiLWI4ZTAtMWVhZTkzOTM3Njk2IgogICAgICBzdEV2dDp3aGVuPSIyMDE5LTA4LTMwVDAyOjI2OjIzKzAzOjAwIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBBZnRlciBFZmZlY3RzIENDIDIwMTggKFdpbmRvd3MpIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvY29udGVudCIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ZDFlN2UzNi1kZWVjLWJmNDYtOGE0Mi1kODE4YzBlMjc5YjIiCiAgICAgIHN0RXZ0OndoZW49IjIwMTktMTItMDRUMTM6NDk6MDIrMDU6MDAiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii9jb250ZW50Ii8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA1Y2RkNWI3LTM0MGMtOGM0ZC1hMWUyLTlkYWJlMjg0OTA0MyIKICAgICAgc3RFdnQ6d2hlbj0iMjAxOS0xMi0wNFQxMzo0OTowMiswNTowMCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozYmY3YjIzNi1kNTI3LTA0NGUtYTlkMS00MjUzY2FlZGM0N2MiCiAgICAgIHN0RXZ0OndoZW49IjIwMTktMTItMDRUMTM6NDk6MjMrMDU6MDAiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii9jb250ZW50Ii8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAxYTc1YTU2LTMyZGMtYmU0OS1hZWFkLWFjMmQ5YjNkZjJiMiIKICAgICAgc3RFdnQ6d2hlbj0iMjAxOS0xMi0wNFQxMzo0OToyMyswNTowMCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4OTJiYmEyYy1iMjljLWNjNDgtOTI1My0wOGE0ODYwZTY5ZDAiCiAgICAgIHN0RXZ0OndoZW49IjIwMTktMTItMDVUMDk6MDE6MzArMDU6MDAiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii9jb250ZW50Ii8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmYwZTI3MTZlLWU5ZTAtYWE0ZS05ZjcwLTQxNTdjNmNlMGZlYSIKICAgICAgc3RFdnQ6d2hlbj0iMjAxOS0xMi0wNVQwOToxMzoxMSswNTowMCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iL2NvbnRlbnQiLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Y2I2NjE4ZDItOTcwMC01NTRjLWI5ZTktNmEzYWUxM2Q5NGYyIgogICAgICBzdEV2dDp3aGVuPSIyMDE5LTEyLTA1VDA5OjEzOjExKzA1OjAwIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlkZWU2YWY2LWQ1ZWYtMzg0My04MjY5LTQyMGY1ODFlMjdlZiIKICAgICAgc3RFdnQ6d2hlbj0iMjAxOS0xMi0wNVQwOToxMzoyMiswNTowMCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxZDc4MGRjZi1lZGU3LWVlNDMtODdhNC03ZTE4N2E4ZWEyNzUiCiAgICAgIHN0RXZ0OndoZW49IjIwMTktMTItMDVUMDk6MTM6MjIrMDU6MDAiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii9tZXRhZGF0YSIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgIDx4bXBNTTpEZXJpdmVkRnJvbQogICAgc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MzNkMjZhMi1iN2I4LTA3NGItODhkNy1iOGE1OGM5ZmQwYzUiCiAgICBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjczM2QyNmEyLWI3YjgtMDc0Yi04OGQ3LWI4YTU4YzlmZDBjNSIKICAgIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphYTA2OGRlZi1hY2NhLTM5NDgtODM1Yi02MWQ1MmU2NWI3NDIiLz4KICAgPHhtcE1NOkluZ3JlZGllbnRzPgogICAgPHJkZjpCYWc+CiAgICAgPHJkZjpsaQogICAgICBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRkOTdmOTNlLWIwZjEtZjU0NC1iZmMxLWFmZThhMzEyNjkzZCIKICAgICAgc3RSZWY6ZnJvbVBhcnQ9InRpbWU6MGQyOTYzNTIwMDAwMDBmMjU0MDE2MDAwMDAwIgogICAgICBzdFJlZjp0b1BhcnQ9InRpbWU6MGQyOTYzNTIwMDAwMDBmMjU0MDE2MDAwMDAwIgogICAgICBzdFJlZjptYXNrTWFya2Vycz0iTm9uZSIvPgogICAgPC9yZGY6QmFnPgogICA8L3htcE1NOkluZ3JlZGllbnRzPgogICA8eG1wTU06UGFudHJ5PgogICAgPHJkZjpCYWc+CiAgICAgPHJkZjpsaT4KICAgICAgPHJkZjpEZXNjcmlwdGlvbgogICAgICAgZGM6Zm9ybWF0PSJhcHBsaWNhdGlvbi92bmQuYWRvYmUuYWZ0ZXJlZmZlY3RzLmNvbXAiCiAgICAgICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRkOTdmOTNlLWIwZjEtZjU0NC1iZmMxLWFmZThhMzEyNjkzZCI+CiAgICAgIDxkYzp0aXRsZT4KICAgICAgIDxyZGY6QWx0PgogICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+cG9ydHJhaXQtbW9kZS1zY2FubmluZzwvcmRmOmxpPgogICAgICAgPC9yZGY6QWx0PgogICAgICA8L2RjOnRpdGxlPgogICAgICA8eG1wTU06SW5ncmVkaWVudHM+CiAgICAgICA8cmRmOkJhZz4KICAgICAgICA8cmRmOmxpCiAgICAgICAgIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjBlNWU0MmUtM2U1NS0zYTQ1LTlkZDYtZjY1YzFlNzAxMDRhIgogICAgICAgICBzdFJlZjpmcm9tUGFydD0idGltZTowZDI5NjM1MjAwMDAwMGYyNTQwMTYwMDAwMDAiCiAgICAgICAgIHN0UmVmOnRvUGFydD0idGltZTowZDI5NjM1MjAwMDAwMGYyNTQwMTYwMDAwMDAiCiAgICAgICAgIHN0UmVmOm1hc2tNYXJrZXJzPSJOb25lIi8+CiAgICAgICAgPHJkZjpsaQogICAgICAgICBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmFjZDllMjg3LWZjMzEtMWQ0Ni1hNzdmLTQ1NjQ1ZmFhNWUwYyIKICAgICAgICAgc3RSZWY6ZnJvbVBhcnQ9InRpbWU6MGQyODU3NjgwMDAwMDBmMjU0MDE2MDAwMDAwIgogICAgICAgICBzdFJlZjp0b1BhcnQ9InRpbWU6MTA1ODQwMDAwMDBmMjU0MDE2MDAwMDAwZDI4NTc2ODAwMDAwMGYyNTQwMTYwMDAwMDAiCiAgICAgICAgIHN0UmVmOm1hc2tNYXJrZXJzPSJOb25lIi8+CiAgICAgICAgPHJkZjpsaQogICAgICAgICBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmQwMDE4YzVkLWU2MDEtZWM0NS1hZWQ5LTdhZTNjZTViNmIzZCIKICAgICAgICAgc3RSZWY6ZnJvbVBhcnQ9InRpbWU6MGQyOTYzNTIwMDAwMDBmMjU0MDE2MDAwMDAwIgogICAgICAgICBzdFJlZjp0b1BhcnQ9InRpbWU6MGQyOTYzNTIwMDAwMDBmMjU0MDE2MDAwMDAwIgogICAgICAgICBzdFJlZjptYXNrTWFya2Vycz0iTm9uZSIvPgogICAgICAgIDxyZGY6bGkKICAgICAgICAgc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplODdiN2UyOC02NTQ5LTM5NGEtODNjOS05ZjdkOTUyNDJjNmUiCiAgICAgICAgIHN0UmVmOmZyb21QYXJ0PSJ0aW1lOjBkMjk2MzUyMDAwMDAwZjI1NDAxNjAwMDAwMCIKICAgICAgICAgc3RSZWY6dG9QYXJ0PSJ0aW1lOjBkMjk2MzUyMDAwMDAwZjI1NDAxNjAwMDAwMCIKICAgICAgICAgc3RSZWY6bWFza01hcmtlcnM9Ik5vbmUiLz4KICAgICAgICA8cmRmOmxpCiAgICAgICAgIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZThlY2VkNGMtNWVjZi0xNTQ1LWI3ZGYtNmViNmMwNjQxNGZiIgogICAgICAgICBzdFJlZjpmcm9tUGFydD0idGltZTowZDI5NjM1MjAwMDAwMGYyNTQwMTYwMDAwMDAiCiAgICAgICAgIHN0UmVmOnRvUGFydD0idGltZTowZDI5NjM1MjAwMDAwMGYyNTQwMTYwMDAwMDAiCiAgICAgICAgIHN0UmVmOm1hc2tNYXJrZXJzPSJOb25lIi8+CiAgICAgICA8L3JkZjpCYWc+CiAgICAgIDwveG1wTU06SW5ncmVkaWVudHM+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgIDwvcmRmOmxpPgogICAgIDxyZGY6bGk+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24KICAgICAgIGRjOmZvcm1hdD0iYXBwbGljYXRpb24vdm5kLmFkb2JlLmFmdGVyZWZmZWN0cy5sYXllciIKICAgICAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjBlNWU0MmUtM2U1NS0zYTQ1LTlkZDYtZjY1YzFlNzAxMDRhIj4KICAgICAgPGRjOnRpdGxlPgogICAgICAgPHJkZjpBbHQ+CiAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5wYXBlcjwvcmRmOmxpPgogICAgICAgPC9yZGY6QWx0PgogICAgICA8L2RjOnRpdGxlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICA8L3JkZjpsaT4KICAgICA8cmRmOmxpPgogICAgICA8cmRmOkRlc2NyaXB0aW9uCiAgICAgICBkYzpmb3JtYXQ9ImFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5hZnRlcmVmZmVjdHMubGF5ZXIiCiAgICAgICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmFjZDllMjg3LWZjMzEtMWQ0Ni1hNzdmLTQ1NjQ1ZmFhNWUwYyI+CiAgICAgIDxkYzp0aXRsZT4KICAgICAgIDxyZGY6QWx0PgogICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+bGluZS1zY2FubmluZzwvcmRmOmxpPgogICAgICAgPC9yZGY6QWx0PgogICAgICA8L2RjOnRpdGxlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICA8L3JkZjpsaT4KICAgICA8cmRmOmxpPgogICAgICA8cmRmOkRlc2NyaXB0aW9uCiAgICAgICBkYzpmb3JtYXQ9ImFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5hZnRlcmVmZmVjdHMubGF5ZXIiCiAgICAgICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmQwMDE4YzVkLWU2MDEtZWM0NS1hZWQ5LTdhZTNjZTViNmIzZCI+CiAgICAgIDxkYzp0aXRsZT4KICAgICAgIDxyZGY6QWx0PgogICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+bWFzazwvcmRmOmxpPgogICAgICAgPC9yZGY6QWx0PgogICAgICA8L2RjOnRpdGxlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICA8L3JkZjpsaT4KICAgICA8cmRmOmxpPgogICAgICA8cmRmOkRlc2NyaXB0aW9uCiAgICAgICBkYzpmb3JtYXQ9ImFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5hZnRlcmVmZmVjdHMubGF5ZXIiCiAgICAgICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmU4N2I3ZTI4LTY1NDktMzk0YS04M2M5LTlmN2Q5NTI0MmM2ZSI+CiAgICAgIDxkYzp0aXRsZT4KICAgICAgIDxyZGY6QWx0PgogICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+ZnJhbWU8L3JkZjpsaT4KICAgICAgIDwvcmRmOkFsdD4KICAgICAgPC9kYzp0aXRsZT4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgICAgPC9yZGY6bGk+CiAgICAgPHJkZjpsaT4KICAgICAgPHJkZjpEZXNjcmlwdGlvbgogICAgICAgZGM6Zm9ybWF0PSJhcHBsaWNhdGlvbi92bmQuYWRvYmUuYWZ0ZXJlZmZlY3RzLmxheWVyIgogICAgICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplOGVjZWQ0Yy01ZWNmLTE1NDUtYjdkZi02ZWI2YzA2NDE0ZmIiPgogICAgICA8ZGM6dGl0bGU+CiAgICAgICA8cmRmOkFsdD4KICAgICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPkJhY2tncm91bmQ8L3JkZjpsaT4KICAgICAgIDwvcmRmOkFsdD4KICAgICAgPC9kYzp0aXRsZT4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgICAgPC9yZGY6bGk+CiAgICA8L3JkZjpCYWc+CiAgIDwveG1wTU06UGFudHJ5PgogICA8eG1wRE06dmlkZW9GcmFtZVNpemUKICAgIHN0RGltOnc9IjUwIgogICAgc3REaW06aD0iNTAiCiAgICBzdERpbTp1bml0PSJwaXhlbCIvPgogICA8eG1wRE06ZHVyYXRpb24KICAgIHhtcERNOnZhbHVlPSIyOSIKICAgIHhtcERNOnNjYWxlPSIxLzI1Ii8+CiAgIDx4bXBETTpzdGFydFRpbWVjb2RlCiAgICB4bXBETTp0aW1lRm9ybWF0PSIyNVRpbWVjb2RlIgogICAgeG1wRE06dGltZVZhbHVlPSIwMDowMDowMDowMCIvPgogICA8eG1wRE06YWx0VGltZWNvZGUKICAgIHhtcERNOnRpbWVWYWx1ZT0iMDA6MDA6MDA6MDAiCiAgICB4bXBETTp0aW1lRm9ybWF0PSIyNVRpbWVjb2RlIi8+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAOw=="
            }, t.prototype.insertFileScanImageToScanRegion = function() {
                var t = this,
                    e = document.getElementById(this.getScanRegionId());
                if (this.fileScanImage) return e.innerHTML = "<br>", void e.appendChild(this.fileScanImage);
                this.fileScanImage = new Image, this.fileScanImage.onload = function(r) {
                    e.innerHTML = "<br>", e.appendChild(t.fileScanImage)
                }, this.fileScanImage.width = 64, this.fileScanImage.style.opacity = "0.3", this.fileScanImage.src = "data:image/gif;base64,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MS8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICB4bWxuczpib2R5bW92aW49ImJvZHltb3ZpbiIKICAgIHhtbG5zOnhtcERNPSJodHRwOi8vbnMuYWRvYmUuY29tL3htcC8xLjAvRHluYW1pY01lZGlhLyIKICAgIHhtbG5zOnN0RGltPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvRGltZW5zaW9ucyMiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZjZmYzc4ODQtZWYxMy1iNTRkLTk0ZGMtMDI5OTYxYWE2ZDBkIgogICB4bXBNTTpEb2N1bWVudElEPSI2MzU4ZTE5Yi1mOTQxLTA3MzMtNTEzNy03YTg0MDAwMDAwNTEiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZTk2YzgxNS1jNGVlLTQzNDUtYjMzZi0yYjFiN2NlMWE5NzciCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTItMDRUMTE6Mjk6MDcrMDM6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTEyLTA0VDExOjI5OjA3KzAzOjAwIgogICB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0xMi0wNFQxMToyODozNiswMzowMCIKICAgZGM6Zm9ybWF0PSLQkNC90LjQvNC40YDQvtCy0LDQvdC90YvQuSBHSUYiCiAgIGJvZHltb3Zpbjpwcm9qZWN0X2lkPSI5ZHhpaGxxMXQzbjN1N2hjdXZjOCIKICAgeG1wRE06dmlkZW9GcmFtZVJhdGU9IjI0LjAwMDAwMCIKICAgeG1wRE06dmlkZW9GaWVsZE9yZGVyPSJQcm9ncmVzc2l2ZSIKICAgeG1wRE06dmlkZW9QaXhlbEFzcGVjdFJhdGlvPSIxLzEiCiAgIHhtcERNOnN0YXJ0VGltZVNjYWxlPSIyNCIKICAgeG1wRE06c3RhcnRUaW1lU2FtcGxlU2l6ZT0iMSI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJmZDVkNzVlYi1iN2RlLWZjYjUtYzRlZC04OTJjMDAwMDAwN2UiCiAgICAgIHN0RXZ0OndoZW49IjIwMTktMTItMDRUMTE6Mjk6MDcrMDM6MDAiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ZGVkNDY0NC00OThmLTFkNGUtOTUyNy0xYTFmM2ViMjY3MzUiCiAgICAgIHN0RXZ0OndoZW49IjIwMTktMTItMDRUMDg6Mjc6MTArMDM6MDAiLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Mzk4NDEzNTEtNzFjZi0zNzQ3LTkyMGQtMzE2MDkwYjhkMTIxIgogICAgICBzdEV2dDp3aGVuPSIyMDE5LTEyLTA0VDA4OjQyOjM1KzAzOjAwIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvY29udGVudCIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MzQ2MzVmNy02YWQwLTYyNGUtOWUzNi01NjRkZWY3YzZkNTIiCiAgICAgIHN0RXZ0OndoZW49IjIwMTktMTItMDRUMDk6MDQ6NDcrMDM6MDAiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii9jb250ZW50Ii8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249ImRlcml2ZWQiCiAgICAgIHN0RXZ0OnBhcmFtZXRlcnM9InNhdmVkIHRvIG5ldyBsb2NhdGlvbiIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0YjMwMTM3MS0yZjM0LWIzNDEtOGMxYy0xZjZmNjhlMmY0YTkiCiAgICAgIHN0RXZ0OndoZW49IjIwMTktMTItMDRUMDk6MDQ6NDcrMDM6MDAiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTEwOGYwZjQtZDNiMC1lMzQzLWJkMGQtMDMxMWEzMGFkZGNjIgogICAgICBzdEV2dDp3aGVuPSIyMDE5LTEyLTA0VDA5OjE0OjExKzAzOjAwIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvY29udGVudCIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YmQyOGRiYi1jMzI5LTA3NDEtOTk0YS1mMGJkZDIwZmU3MmEiCiAgICAgIHN0RXZ0OndoZW49IjIwMTktMTItMDRUMDk6MTk6MzgrMDM6MDAiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii9jb250ZW50Ii8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJhOTkzY2E2LWU0YzctZjk0Mi05OWMyLTJiZTI2YWJmYjRjMCIKICAgICAgc3RFdnQ6d2hlbj0iMjAxOS0xMi0wNFQxMToyNzo0OSswMzowMCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjYjI2ZjkyNS1jYmY2LWExNDktYTYwNi00YTIxYTIwN2VlY2IiCiAgICAgIHN0RXZ0OndoZW49IjIwMTktMTItMDRUMTE6Mjg6NTYrMDM6MDAiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii9jb250ZW50Ii8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjk5ZWE2MmRhLTQyMDctNjA0Ni1hYmVkLTBjMmEzOWQ0NDgyZSIKICAgICAgc3RFdnQ6d2hlbj0iMjAxOS0xMi0wNFQxMToyODo1NiswMzowMCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplMTg5MTkxMy1mYTQwLTYxNDktYjdmZS03YzI1YjIzNTg5YzEiCiAgICAgIHN0RXZ0OndoZW49IjIwMTktMTItMDRUMTE6Mjk6MDcrMDM6MDAiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjZmYzc4ODQtZWYxMy1iNTRkLTk0ZGMtMDI5OTYxYWE2ZDBkIgogICAgICBzdEV2dDp3aGVuPSIyMDE5LTEyLTA0VDExOjI5OjA3KzAzOjAwIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvbWV0YWRhdGEiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogICA8eG1wTU06RGVyaXZlZEZyb20KICAgIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZTc2ZGE2ZWMtMmUzYy0zMTRkLTkyZjEtNThkNzJjNTJhMzMyIgogICAgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplNzZkYTZlYy0yZTNjLTMxNGQtOTJmMS01OGQ3MmM1MmEzMzIiCiAgICBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NGRlZDQ2NDQtNDk4Zi0xZDRlLTk1MjctMWExZjNlYjI2NzM1Ii8+CiAgIDx4bXBNTTpJbmdyZWRpZW50cz4KICAgIDxyZGY6QmFnPgogICAgIDxyZGY6bGkKICAgICAgc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZWMzNTdhOS05MGJmLWFjNDAtYjk2OS00NDIwMjNiMzI0YjEiCiAgICAgIHN0UmVmOmZyb21QYXJ0PSJ0aW1lOjBkMjk2MzUyMDAwMDAwZjI1NDAxNjAwMDAwMCIKICAgICAgc3RSZWY6dG9QYXJ0PSJ0aW1lOjBkMjk2MzUyMDAwMDAwZjI1NDAxNjAwMDAwMCIKICAgICAgc3RSZWY6bWFza01hcmtlcnM9Ik5vbmUiLz4KICAgIDwvcmRmOkJhZz4KICAgPC94bXBNTTpJbmdyZWRpZW50cz4KICAgPHhtcE1NOlBhbnRyeT4KICAgIDxyZGY6QmFnPgogICAgIDxyZGY6bGk+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24KICAgICAgIGRjOmZvcm1hdD0iYXBwbGljYXRpb24vdm5kLmFkb2JlLmFmdGVyZWZmZWN0cy5sYXllciIKICAgICAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzhhNWE2MmItYzAzYy03YzQxLWIzMGQtMTk0OTFkOTJhZmFlIj4KICAgICAgPGRjOnRpdGxlPgogICAgICAgPHJkZjpBbHQ+CiAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5CYWNrZ3JvdW5kPC9yZGY6bGk+CiAgICAgICA8L3JkZjpBbHQ+CiAgICAgIDwvZGM6dGl0bGU+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgIDwvcmRmOmxpPgogICAgIDxyZGY6bGk+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24KICAgICAgIGRjOmZvcm1hdD0iYXBwbGljYXRpb24vdm5kLmFkb2JlLmFmdGVyZWZmZWN0cy5sYXllciIKICAgICAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODYxOGExZTUtMzY4Yy0wYjQ5LWJkNDctNzI0NmFkOTU3MmZjIj4KICAgICAgPGRjOnRpdGxlPgogICAgICAgPHJkZjpBbHQ+CiAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5tYXNrMzwvcmRmOmxpPgogICAgICAgPC9yZGY6QWx0PgogICAgICA8L2RjOnRpdGxlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICA8L3JkZjpsaT4KICAgICA8cmRmOmxpPgogICAgICA8cmRmOkRlc2NyaXB0aW9uCiAgICAgICBkYzpmb3JtYXQ9ImFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5hZnRlcmVmZmVjdHMubGF5ZXIiCiAgICAgICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk0YjA5MTY2LTVmZWQtNzA0OS04YzQ4LWExODQwNjY3MjJlZiI+CiAgICAgIDxkYzp0aXRsZT4KICAgICAgIDxyZGY6QWx0PgogICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+cGhvdG8yPC9yZGY6bGk+CiAgICAgICA8L3JkZjpBbHQ+CiAgICAgIDwvZGM6dGl0bGU+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgIDwvcmRmOmxpPgogICAgIDxyZGY6bGk+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24KICAgICAgIGRjOmZvcm1hdD0iYXBwbGljYXRpb24vdm5kLmFkb2JlLmFmdGVyZWZmZWN0cy5sYXllciIKICAgICAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YWQ2ZWFiMmYtMWMxNS1jZjQ0LTg5YzgtNWJlZWVmMjUwOTA4Ij4KICAgICAgPGRjOnRpdGxlPgogICAgICAgPHJkZjpBbHQ+CiAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5waG90bzE8L3JkZjpsaT4KICAgICAgIDwvcmRmOkFsdD4KICAgICAgPC9kYzp0aXRsZT4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgICAgPC9yZGY6bGk+CiAgICAgPHJkZjpsaT4KICAgICAgPHJkZjpEZXNjcmlwdGlvbgogICAgICAgZGM6Zm9ybWF0PSJhcHBsaWNhdGlvbi92bmQuYWRvYmUuYWZ0ZXJlZmZlY3RzLmNvbXAiCiAgICAgICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmJlYzM1N2E5LTkwYmYtYWM0MC1iOTY5LTQ0MjAyM2IzMjRiMSI+CiAgICAgIDxkYzp0aXRsZT4KICAgICAgIDxyZGY6QWx0PgogICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+cGhvdG8tZ2FsbGVyeSAyPC9yZGY6bGk+CiAgICAgICA8L3JkZjpBbHQ+CiAgICAgIDwvZGM6dGl0bGU+CiAgICAgIDx4bXBNTTpJbmdyZWRpZW50cz4KICAgICAgIDxyZGY6QmFnPgogICAgICAgIDxyZGY6bGkKICAgICAgICAgc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OGE1YTYyYi1jMDNjLTdjNDEtYjMwZC0xOTQ5MWQ5MmFmYWUiCiAgICAgICAgIHN0UmVmOmZyb21QYXJ0PSJ0aW1lOjBkMjk2MzUyMDAwMDAwZjI1NDAxNjAwMDAwMCIKICAgICAgICAgc3RSZWY6dG9QYXJ0PSJ0aW1lOjBkMjk2MzUyMDAwMDAwZjI1NDAxNjAwMDAwMCIKICAgICAgICAgc3RSZWY6bWFza01hcmtlcnM9Ik5vbmUiLz4KICAgICAgICA8cmRmOmxpCiAgICAgICAgIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODYxOGExZTUtMzY4Yy0wYjQ5LWJkNDctNzI0NmFkOTU3MmZjIgogICAgICAgICBzdFJlZjpmcm9tUGFydD0idGltZTowZDI5NjM1MjAwMDAwMGYyNTQwMTYwMDAwMDAiCiAgICAgICAgIHN0UmVmOnRvUGFydD0idGltZTowZDI5NjM1MjAwMDAwMGYyNTQwMTYwMDAwMDAiCiAgICAgICAgIHN0UmVmOm1hc2tNYXJrZXJzPSJOb25lIi8+CiAgICAgICAgPHJkZjpsaQogICAgICAgICBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk0YjA5MTY2LTVmZWQtNzA0OS04YzQ4LWExODQwNjY3MjJlZiIKICAgICAgICAgc3RSZWY6ZnJvbVBhcnQ9InRpbWU6MGQyOTYzNTIwMDAwMDBmMjU0MDE2MDAwMDAwIgogICAgICAgICBzdFJlZjp0b1BhcnQ9InRpbWU6MGQyOTYzNTIwMDAwMDBmMjU0MDE2MDAwMDAwIgogICAgICAgICBzdFJlZjptYXNrTWFya2Vycz0iTm9uZSIvPgogICAgICAgIDxyZGY6bGkKICAgICAgICAgc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphZDZlYWIyZi0xYzE1LWNmNDQtODljOC01YmVlZWYyNTA5MDgiCiAgICAgICAgIHN0UmVmOmZyb21QYXJ0PSJ0aW1lOjBkMjk2MzUyMDAwMDAwZjI1NDAxNjAwMDAwMCIKICAgICAgICAgc3RSZWY6dG9QYXJ0PSJ0aW1lOjBkMjk2MzUyMDAwMDAwZjI1NDAxNjAwMDAwMCIKICAgICAgICAgc3RSZWY6bWFza01hcmtlcnM9Ik5vbmUiLz4KICAgICAgICA8cmRmOmxpCiAgICAgICAgIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YzkwOWFiOGMtY2IxZC01ZDQxLWJkNDgtMzU2MDQ4NmZkNmE2IgogICAgICAgICBzdFJlZjpmcm9tUGFydD0idGltZTowZDI5NjM1MjAwMDAwMGYyNTQwMTYwMDAwMDAiCiAgICAgICAgIHN0UmVmOnRvUGFydD0idGltZTowZDI5NjM1MjAwMDAwMGYyNTQwMTYwMDAwMDAiCiAgICAgICAgIHN0UmVmOm1hc2tNYXJrZXJzPSJOb25lIi8+CiAgICAgICAgPHJkZjpsaQogICAgICAgICBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmYxY2I0ODQ2LTNmNDItZDk0ZS05MmI4LTVjOTQyNjk4N2JkMyIKICAgICAgICAgc3RSZWY6ZnJvbVBhcnQ9InRpbWU6MGQyOTYzNTIwMDAwMDBmMjU0MDE2MDAwMDAwIgogICAgICAgICBzdFJlZjp0b1BhcnQ9InRpbWU6MGQyOTYzNTIwMDAwMDBmMjU0MDE2MDAwMDAwIgogICAgICAgICBzdFJlZjptYXNrTWFya2Vycz0iTm9uZSIvPgogICAgICAgPC9yZGY6QmFnPgogICAgICA8L3htcE1NOkluZ3JlZGllbnRzPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICA8L3JkZjpsaT4KICAgICA8cmRmOmxpPgogICAgICA8cmRmOkRlc2NyaXB0aW9uCiAgICAgICBkYzpmb3JtYXQ9ImFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5hZnRlcmVmZmVjdHMubGF5ZXIiCiAgICAgICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmM5MDlhYjhjLWNiMWQtNWQ0MS1iZDQ4LTM1NjA0ODZmZDZhNiI+CiAgICAgIDxkYzp0aXRsZT4KICAgICAgIDxyZGY6QWx0PgogICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+bWFzazE8L3JkZjpsaT4KICAgICAgIDwvcmRmOkFsdD4KICAgICAgPC9kYzp0aXRsZT4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgICAgPC9yZGY6bGk+CiAgICAgPHJkZjpsaT4KICAgICAgPHJkZjpEZXNjcmlwdGlvbgogICAgICAgZGM6Zm9ybWF0PSJhcHBsaWNhdGlvbi92bmQuYWRvYmUuYWZ0ZXJlZmZlY3RzLmxheWVyIgogICAgICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmMWNiNDg0Ni0zZjQyLWQ5NGUtOTJiOC01Yzk0MjY5ODdiZDMiPgogICAgICA8ZGM6dGl0bGU+CiAgICAgICA8cmRmOkFsdD4KICAgICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPnBob3RvMzwvcmRmOmxpPgogICAgICAgPC9yZGY6QWx0PgogICAgICA8L2RjOnRpdGxlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICA8L3JkZjpsaT4KICAgIDwvcmRmOkJhZz4KICAgPC94bXBNTTpQYW50cnk+CiAgIDx4bXBETTp2aWRlb0ZyYW1lU2l6ZQogICAgc3REaW06dz0iNTAiCiAgICBzdERpbTpoPSI1MCIKICAgIHN0RGltOnVuaXQ9InBpeGVsIi8+CiAgIDx4bXBETTpkdXJhdGlvbgogICAgeG1wRE06dmFsdWU9IjI4IgogICAgeG1wRE06c2NhbGU9IjEvMjQiLz4KICAgPHhtcERNOnN0YXJ0VGltZWNvZGUKICAgIHhtcERNOnRpbWVGb3JtYXQ9IjI0VGltZWNvZGUiCiAgICB4bXBETTp0aW1lVmFsdWU9IjAwOjAwOjAwOjAwIi8+CiAgIDx4bXBETTphbHRUaW1lY29kZQogICAgeG1wRE06dGltZVZhbHVlPSIwMDowMDowMDowMCIKICAgIHhtcERNOnRpbWVGb3JtYXQ9IjI0VGltZWNvZGUiLz4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAA7"
            }, t.prototype.clearScanRegion = function() {
                document.getElementById(this.getScanRegionId()).innerHTML = ""
            }, t.prototype.getDashboardSectionId = function() {
                return this.elementId + "__dashboard_section"
            }, t.prototype.getDashboardSectionCameraScanRegionId = function() {
                return this.elementId + "__dashboard_section_csr"
            }, t.prototype.getDashboardSectionFileScanRegionId = function() {
                return this.elementId + "__dashboard_section_fsr"
            }, t.prototype.getDashboardSectionSwapLinkId = function() {
                return this.elementId + "__dashboard_section_swaplink"
            }, t.prototype.getScanRegionId = function() {
                return this.elementId + "__scan_region"
            }, t.prototype.getDashboardId = function() {
                return this.elementId + "__dashboard"
            }, t.prototype.getFileScanInputId = function() {
                return this.elementId + "__filescan_input"
            }, t.prototype.getStatusSpanId = function() {
                return this.elementId + "__status_span"
            }, t.prototype.getHeaderMessageContainerId = function() {
                return this.elementId + "__header_message"
            }, t.prototype.getCameraSelectionId = function() {
                return this.elementId + "__camera_selection"
            }, t.prototype.getCameraScanRegion = function() {
                return document.getElementById(this.getDashboardSectionCameraScanRegionId())
            }, t.prototype.getFileScanRegion = function() {
                return document.getElementById(this.getDashboardSectionFileScanRegionId())
            }, t.prototype.getFileScanInput = function() {
                return document.getElementById(this.getFileScanInputId())
            }, t.prototype.getDashboardSectionSwapLink = function() {
                return document.getElementById(this.getDashboardSectionSwapLinkId())
            }, t.prototype.getHeaderMessageDiv = function() {
                return document.getElementById(this.getHeaderMessageContainerId())
            }, t
        }()
    })(), __Html5QrcodeLibrary__ = n
})(); /** Append the libary components to globals for backwards compatibility. */
if (window && !Html5QrcodeScanner) {
    var Html5QrcodeScanner = window.__Html5QrcodeLibrary__.Html5QrcodeScanner;
    var Html5Qrcode = window.__Html5QrcodeLibrary__.Html5Qrcode;
    var Html5QrcodeSupportedFormats = window.__Html5QrcodeLibrary__.Html5QrcodeSupportedFormats
    var Html5QrcodeScannerState = window.__Html5QrcodeLibrary__.Html5QrcodeScannerState;
}