<?php
/*   __________________________________________________
    |  Obfuscated by YAK Pro - Php Obfuscator  2.0.14  |
    |              on 2024-01-07 11:08:56              |
    |    GitHub: https://github.com/pk-fr/yakpro-po    |
    |__________________________________________________|
*/
 namespace App\Repository; use App\Models\Notice; use Illuminate\Contracts\Pagination\LengthAwarePaginator; use Illuminate\Http\Request; use Illuminate\Support\Facades\Validator; class NoticeRepository extends Repository { public function getList(Request $QiZOc) : LengthAwarePaginator { return Notice::where("\x64\x65\x6c\145\x74\x65\144", "\x3d", 0)->when($QiZOc->get("\164\151\164\x6c\x65"), function ($SkUGn) use($QiZOc) { return $SkUGn->where("\x74\151\164\x6c\145", "\x6c\151\153\x65", $QiZOc->get("\x74\x69\164\x6c\x65") . "\x25"); })->paginate($this->FfaKn, ["\52"]); } public function add(Request $QiZOc) : array { goto x8fsS; yU4I1: JUBg2: goto VLizt; x8fsS: $UGmxt = Validator::make($QiZOc->all(), ["\x74\151\164\154\x65" => "\x72\145\x71\165\151\x72\145\144\174\x6d\141\170\x3a\x36\x34", "\x63\157\x6e\164\x65\156\164" => "\162\x65\161\x75\151\x72\145\x64\174\x6d\x61\x78\x3a\x32\x35\x35"], ["\x74\x69\164\154\x65\56\x72\x65\x71\165\x69\x72\145\x64" => "\xe6\xa0\207\xe9\242\230\345\xbf\x85\351\241\xbb", "\164\151\164\154\145\56\155\141\x78" => "\xe6\xa0\x87\xe9\242\x98\xe6\234\200\xe5\xa4\247\xe9\x95\277\xe5\272\246\344\xb8\215\350\xb6\205\350\xbf\x87\x36\64\xe5\xad\x97\xe7\254\246", "\x63\157\156\164\x65\156\x74\56\x72\145\x71\165\x69\x72\145\144" => "\345\206\205\345\256\xb9\xe5\xbf\205\xe9\241\xbb", "\x63\157\156\x74\x65\156\x74\56\x6d\141\x78" => "\345\206\205\xe5\256\xb9\xe6\234\x80\xe5\244\xa7\xe9\225\277\xe5\272\xa6\xe4\270\x8d\350\266\205\xe8\277\x87\66\x34\345\255\x97\347\254\246"]); goto HHzqz; JAi5m: return ["\143\157\144\145" => 1, "\x6d\163\x67" => $UGmxt->errors()->first()]; goto yU4I1; VLizt: try { goto Nmi3F; pJJFr: return ["\143\x6f\144\x65" => 0, "\144\141\x74\141" => [], "\x6d\163\x67" => "\xe6\210\220\345\212\x9f"]; goto pCY5J; Nmi3F: if (!Notice::where("\x74\x69\164\x6c\145", $QiZOc->post("\x74\x69\x74\154\145"))->where("\x64\x65\x6c\x65\x74\x65\x64", 0)->count()) { goto PMnR_; } goto ej7Uc; egkWJ: Notice::insert(["\x74\151\x74\154\x65" => $QiZOc->post("\164\151\x74\154\145"), "\x63\157\x6e\164\145\156\x74" => $QiZOc->post("\x63\x6f\x6e\x74\x65\156\x74"), "\x63\x72\x65\141\x74\145\x64\x5f\141\164" => time()]); goto pJJFr; ej7Uc: throw new \Exception("\xe6\xa0\x87\xe9\xa2\230\xe5\267\262\347\xbb\217\xe5\255\230\345\x9c\250"); goto kZIPk; kZIPk: PMnR_: goto egkWJ; pCY5J: } catch (\Exception $FBi7X) { return ["\143\157\144\x65" => 1, "\x6d\x73\147" => $FBi7X->getMessage()]; } goto Xpqd0; HHzqz: if (!$UGmxt->fails()) { goto JUBg2; } goto JAi5m; Xpqd0: } public function update(Request $QiZOc) : array { goto bg1RY; moSHE: if (!$UGmxt->fails()) { goto jfLQ3; } goto FrP1g; mNWMV: try { goto U8whQ; d5b35: hPqje: goto fdLRe; Q6t6C: return ["\143\157\x64\x65" => 0, "\144\141\x74\x61" => [], "\155\x73\147" => "\346\210\x90\xe5\x8a\x9f"]; goto EqX9Q; fdLRe: Notice::updateOrCreate(["\x69\144" => $QiZOc->post("\151\144")], ["\164\x69\164\154\x65" => $QiZOc->post("\164\151\164\x6c\x65"), "\x63\x6f\x6e\x74\x65\x6e\x74" => $QiZOc->post("\x63\157\x6e\164\x65\156\x74")]); goto Q6t6C; U8whQ: if (!Notice::where("\164\151\164\x6c\x65", $QiZOc->post("\x74\x69\x74\x6c\145"))->where("\144\145\x6c\145\x74\145\144", 0)->where("\x69\x64", "\x3c\x3e", $QiZOc->get("\x69\x64"))->count()) { goto hPqje; } goto HdQp8; HdQp8: throw new \Exception("\xe6\xa0\207\xe9\xa2\x98\345\267\262\xe7\273\217\345\255\230\345\x9c\250"); goto d5b35; EqX9Q: } catch (\Exception $FBi7X) { return ["\143\x6f\x64\145" => 1, "\155\163\x67" => $FBi7X->getMessage()]; } goto F683h; p5aPK: jfLQ3: goto mNWMV; FrP1g: return ["\143\x6f\144\x65" => 1, "\x6d\x73\x67" => $UGmxt->errors()->first()]; goto p5aPK; bg1RY: $UGmxt = Validator::make($QiZOc->all(), ["\x74\151\164\154\x65" => "\x72\x65\x71\x75\151\x72\145\x64\174\155\141\x78\x3a\66\64", "\143\x6f\156\164\145\x6e\x74" => "\162\145\161\x75\x69\162\145\144\x7c\155\141\170\72\62\x35\x35"], ["\x74\x69\164\154\145\x2e\x72\145\x71\x75\151\x72\145\x64" => "\346\xa0\207\xe9\xa2\x98\xe5\xbf\205\xe9\241\xbb", "\164\151\164\154\145\56\x6d\x61\170" => "\xe6\240\x87\xe9\xa2\230\346\234\200\xe5\xa4\247\xe9\x95\277\xe5\xba\xa6\xe4\xb8\x8d\xe8\xb6\x85\xe8\xbf\x87\66\64\345\255\227\xe7\xac\xa6", "\143\x6f\156\x74\145\156\164\56\x72\145\161\x75\x69\162\145\144" => "\xe5\206\x85\345\xae\xb9\xe5\xbf\x85\xe9\xa1\xbb", "\143\x6f\156\x74\x65\156\164\56\x6d\x61\x78" => "\xe5\206\205\xe5\256\271\xe6\234\x80\xe5\244\xa7\xe9\225\xbf\xe5\272\246\xe4\270\x8d\350\266\x85\350\xbf\207\66\x34\xe5\255\x97\xe7\xac\xa6"]); goto moSHE; F683h: } public function remove(Request $QiZOc) : array { goto GxEJe; wOBaS: I5nQp: goto qZxkJ; GxEJe: $UGmxt = Validator::make($QiZOc->all(), ["\x69\x64" => "\x72\x65\161\x75\151\x72\145\144"], ["\x69\x64\x2e\162\145\x71\x75\151\x72\145\x64" => "\111\104\345\277\x85\351\241\273"]); goto MIczr; qZxkJ: try { Notice::updateOrCreate(["\x69\144" => $QiZOc->post("\x69\x64")], ["\144\x65\x6c\145\164\145\x64" => 1]); return ["\143\157\x64\145" => 0, "\144\141\164\x61" => [], "\x6d\163\147" => "\xe6\x88\220\345\x8a\x9f"]; } catch (\Exception $FBi7X) { return ["\x63\x6f\x64\x65" => 1, "\155\x73\147" => $FBi7X->getMessage()]; } goto IUaYD; vihmH: return ["\x63\157\x64\145" => 1, "\x6d\163\x67" => $UGmxt->errors()->first()]; goto wOBaS; MIczr: if (!$UGmxt->fails()) { goto I5nQp; } goto vihmH; IUaYD: } }
