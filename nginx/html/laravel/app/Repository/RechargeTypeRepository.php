<?php
/*   __________________________________________________
    |  Obfuscated by YAK Pro - Php Obfuscator  2.0.14  |
    |              on 2024-01-07 11:08:56              |
    |    GitHub: https://github.com/pk-fr/yakpro-po    |
    |__________________________________________________|
*/
 namespace App\Repository; use App\Models\Recharge; use App\Models\RechargeType; use Illuminate\Contracts\Pagination\LengthAwarePaginator; use Illuminate\Http\Request; use Illuminate\Support\Facades\Validator; class RechargeTypeRepository extends Repository { public function getList(Request $QiZOc) : LengthAwarePaginator { return RechargeType::where("\x64\x65\x6c\145\x74\x65\144", "\75", 0)->where("\x69\x73\137\146\x69\x72\x73\x74", "\75", $QiZOc->get("\x69\x73\x46\151\162\163\164", 0))->when($QiZOc->get("\x74\151\x74\x6c\145") !== null, function ($SkUGn) use($QiZOc) { return $SkUGn->where("\164\151\x74\154\145", "\154\151\153\x65", $QiZOc->get("\x74\151\x74\x6c\x65")); })->paginate($this->FfaKn, ["\52"]); } public function add(Request $QiZOc) : array { goto ptatC; F0C2q: return ["\x63\157\144\145" => 1, "\x6d\x73\x67" => $UGmxt->errors()->first()]; goto f5y4i; MLnsN: $UGmxt = Validator::make($QiZOc->all(), ["\164\x69\x74\154\x65" => "\x6d\x61\170\72\x31\x32", "\x73\x68\x6f\162\164\x5f\164\151\164\154\145" => "\155\x61\170\x3a\x34", "\160\x72\x69\143\x65" => "\162\x65\161\165\x69\x72\x65\x64\174\x69\156\164\x65\x67\145\x72\174\x6d\x69\156\x3a\x31", "\143\x6f\151\156" => "\x72\145\161\x75\151\162\x65\x64\174\151\x6e\164\145\147\145\x72\x7c\x6d\x69\x6e\x3a\61", "\x67\151\166\x65\x5f\143\157\151\x6e" => "\x72\x65\x71\x75\x69\162\x65\x64\x7c\151\156\x74\145\x67\145\162\174\x6d\x69\x6e\72\60"], ["\164\151\x74\x6c\145\56\155\x61\x78" => "\346\240\x87\351\242\x98\346\x9c\x80\xe5\244\247\xe9\x95\xbf\xe5\272\xa6\xe4\270\215\xe8\266\x85\350\277\207\61\x32\345\255\x97\347\254\xa6", "\163\150\x6f\162\x74\x5f\x74\151\164\154\x65\56\x6d\x61\x78" => "\xe5\220\x8d\xe7\247\xb0\xe6\234\200\345\244\247\xe9\x95\xbf\xe5\272\xa6\344\xb8\215\350\xb6\205\350\277\207\x34\345\xad\227\xe7\254\246"]); goto i9hmB; SHpxG: try { goto jZsAf; DQ2EK: throw new \Exception("\345\x90\x8d\xe7\247\xb0\345\xb7\262\347\273\217\345\xad\230\xe5\234\250"); goto hetfR; jZsAf: if (!RechargeType::where("\x74\x69\164\x6c\145", $QiZOc->post("\164\x69\164\154\x65"))->where("\x64\145\x6c\x65\164\x65\144", 0)->count()) { goto GUJak; } goto DQ2EK; hetfR: GUJak: goto DkPMw; lkLix: return ["\143\157\x64\145" => 0, "\144\x61\164\x61" => [], "\155\x73\x67" => "\346\x88\x90\345\212\x9f"]; goto DHeuB; DkPMw: RechargeType::insert(["\164\x69\164\154\x65" => $QiZOc->post("\x74\x69\x74\x6c\145", '') ?: '', "\163\x68\157\x72\x74\137\164\151\164\x6c\x65" => $QiZOc->post("\163\x68\157\x72\164\137\164\x69\164\x6c\x65", '') ?: '', "\160\162\151\x63\x65" => $QiZOc->post("\160\x72\151\143\x65", 0), "\157\154\x64\137\160\162\x69\x63\x65" => $QiZOc->post("\157\x6c\x64\x5f\x70\162\151\143\x65", 0), "\160\x61\164\x74\145\162\x6e" => $QiZOc->post("\x70\x61\164\x74\x65\x72\x6e", 0), "\143\x6f\151\x6e" => $QiZOc->post("\143\157\151\x6e", 0) ?: 0, "\x67\151\x76\x65\137\x63\x6f\x69\156" => $QiZOc->post("\x67\x69\x76\145\137\x63\157\151\x6e", 0) ?: 0, "\164\x79\160\145" => $QiZOc->post("\x74\171\160\x65", 0), "\156\165\155" => $QiZOc->post("\156\x75\x6d", 0), "\x69\163\x5f\x66\151\x72\163\164" => $QiZOc->post("\x69\163\106\151\x72\163\164", 0), "\x63\x72\x65\141\x74\x65\x64\137\141\164" => time()]); goto lkLix; DHeuB: } catch (\Exception $FBi7X) { return ["\x63\157\144\x65" => 1, "\x6d\x73\147" => $FBi7X->getMessage()]; } goto zgPhG; i9hmB: goto T5ANB; goto U9TSR; aFZF3: $UGmxt = Validator::make($QiZOc->all(), ["\164\x69\x74\x6c\145" => "\x6d\141\170\x3a\x31\x32", "\163\x68\x6f\162\x74\x5f\164\151\x74\154\x65" => "\155\141\170\x3a\64", "\160\162\151\x63\145" => "\162\145\161\165\151\162\145\x64\x7c\151\x6e\x74\145\147\145\x72\174\155\x69\x6e\72\x31", "\157\154\x64\x5f\x70\162\151\143\x65" => "\162\x65\x71\x75\151\162\145\144\174\151\x6e\x74\145\x67\x65\x72\174\x6d\151\156\x3a\x31", "\x6e\165\x6d" => "\162\145\161\x75\151\162\145\144\174\x69\156\x74\x65\x67\x65\162\x7c\x6d\x69\156\72\61", "\x74\x79\160\145" => "\162\x65\x71\165\151\x72\x65\144\x7c\151\x6e\x74\145\147\x65\162", "\x69\x73\106\x69\x72\x73\x74" => "\x72\x65\161\x75\x69\162\145\144\x7c\x69\156\x3a\x30\54\x31"], ["\164\151\164\154\145\x2e\x6d\x61\x78" => "\346\xa0\x87\xe9\242\230\xe6\234\x80\345\244\xa7\xe9\225\xbf\345\xba\xa6\344\270\x8d\xe8\266\x85\350\xbf\207\61\62\345\255\227\347\xac\xa6", "\163\x68\157\x72\x74\x5f\x74\x69\164\154\145\56\155\x61\x78" => "\xe5\x90\215\347\247\260\xe6\234\200\345\xa4\247\351\x95\xbf\xe5\272\246\344\xb8\215\350\xb6\x85\xe8\277\x87\x34\xe5\255\227\347\254\xa6", "\151\x73\x46\x69\162\x73\164\x2e\x72\145\x71\165\151\x72\145\144" => "\347\xb1\273\xe5\x9e\213\xe6\234\211\350\xaf\257"]); goto GlVVa; U9TSR: yD8rx: goto aFZF3; f5y4i: T8A2a: goto SHpxG; ZvCWl: if (!$UGmxt->fails()) { goto T8A2a; } goto F0C2q; GlVVa: T5ANB: goto ZvCWl; ptatC: if ((int) $QiZOc->post("\x70\141\164\164\145\x72\x6e") === 0) { goto yD8rx; } goto MLnsN; zgPhG: } public function update(Request $QiZOc) : array { goto TWy3J; U8mVK: $UGmxt = Validator::make($QiZOc->all(), ["\164\151\164\x6c\x65" => "\155\141\170\x3a\x31\62", "\163\150\x6f\162\x74\x5f\x74\x69\164\x6c\x65" => "\x6d\141\170\x3a\64", "\160\162\151\143\145" => "\x72\x65\161\165\x69\x72\145\x64\174\151\156\164\x65\x67\x65\x72\174\x6d\151\x6e\72\x31", "\143\x6f\x69\156" => "\x72\145\161\x75\x69\162\x65\x64\174\x69\156\164\145\147\145\162\174\x6d\x69\x6e\72\x31", "\x67\x69\x76\145\137\x63\157\x69\x6e" => "\x72\x65\x71\x75\x69\x72\x65\144\174\151\156\164\x65\147\x65\162\174\x6d\x69\156\72\60"], ["\x74\x69\x74\154\x65\x2e\x6d\x61\170" => "\xe6\240\x87\xe9\242\230\346\234\200\345\244\247\xe9\x95\277\xe5\272\246\344\270\215\350\266\x85\350\xbf\207\61\x32\345\255\227\xe7\xac\246", "\x73\x68\x6f\x72\x74\137\164\151\x74\154\145\x2e\x6d\x61\x78" => "\xe5\x90\x8d\347\247\xb0\xe6\x9c\200\xe5\244\247\351\x95\277\xe5\xba\246\344\270\x8d\350\266\x85\350\277\207\x34\345\xad\227\xe7\xac\246"]); goto oupVH; XDaeu: yJB65: goto JAR_l; n9axp: return ["\x63\157\144\x65" => 1, "\x6d\x73\147" => $UGmxt->errors()->first()]; goto XDaeu; JAR_l: try { RechargeType::updateOrCreate(["\151\144" => $QiZOc->post("\151\x64")], ["\x74\151\164\x6c\x65" => $QiZOc->post("\x74\x69\164\x6c\x65", '') ?: '', "\163\x68\x6f\162\x74\x5f\164\151\164\x6c\145" => $QiZOc->post("\x73\150\x6f\x72\x74\137\x74\x69\164\x6c\x65", '') ?: '', "\x70\162\151\143\145" => $QiZOc->post("\160\x72\x69\x63\145", 0), "\157\x6c\x64\137\x70\162\x69\x63\x65" => $QiZOc->post("\x6f\154\x64\x5f\160\x72\x69\143\145", 0), "\x70\x61\164\164\x65\x72\156" => $QiZOc->post("\160\x61\x74\164\145\162\156", 0), "\143\x6f\x69\156" => $QiZOc->post("\x63\157\x69\x6e", 0) ?: 0, "\x67\x69\x76\x65\137\x63\x6f\151\156" => $QiZOc->post("\x67\151\x76\x65\137\143\157\x69\x6e", 0) ?: 0, "\164\171\160\x65" => $QiZOc->post("\164\171\x70\145", 0), "\x6e\165\x6d" => $QiZOc->post("\156\165\155", 0), "\x63\x72\145\141\164\x65\144\x5f\141\x74" => time()]); return ["\x63\157\144\x65" => 0, "\144\141\x74\141" => [], "\x6d\163\x67" => "\xe6\210\x90\xe5\212\237"]; } catch (\Exception $FBi7X) { return ["\143\x6f\x64\145" => 1, "\155\163\147" => $FBi7X->getMessage()]; } goto KJZmr; T651C: $UGmxt = Validator::make($QiZOc->all(), ["\164\151\x74\154\x65" => "\155\141\x78\72\61\x32", "\x73\x68\x6f\x72\164\137\x74\x69\x74\154\x65" => "\x6d\141\x78\72\64", "\160\x72\151\143\145" => "\162\x65\161\165\151\x72\x65\144\174\151\156\164\145\147\x65\162\x7c\155\151\x6e\x3a\61", "\x6f\x6c\144\137\160\162\151\x63\x65" => "\162\145\x71\165\151\162\x65\144\174\x69\156\164\x65\x67\x65\x72\174\155\151\156\x3a\61", "\156\x75\x6d" => "\162\x65\x71\165\151\x72\145\x64\x7c\151\x6e\x74\145\x67\145\x72\174\155\151\156\72\61", "\164\x79\x70\x65" => "\162\x65\x71\165\151\162\x65\x64\x7c\x69\156\164\x65\x67\145\x72"], ["\x74\x69\164\x6c\145\x2e\x6d\141\x78" => "\xe6\240\207\xe9\xa2\230\346\234\200\345\xa4\xa7\351\225\xbf\xe5\xba\246\344\xb8\x8d\xe8\266\x85\350\277\207\61\x32\345\255\x97\xe7\xac\xa6", "\163\x68\x6f\162\164\x5f\164\151\164\x6c\x65\56\x6d\x61\170" => "\xe5\220\215\347\247\260\346\234\x80\xe5\244\247\351\x95\277\345\xba\xa6\344\270\x8d\350\266\x85\xe8\277\x87\x34\xe5\255\227\xe7\254\xa6"]); goto XUzaJ; oupVH: goto A6U6g; goto R6Sln; okQ__: if (!$UGmxt->fails()) { goto yJB65; } goto n9axp; XUzaJ: A6U6g: goto okQ__; TWy3J: if ((int) $QiZOc->post("\160\x61\x74\164\145\162\156") === 0) { goto fMGqR; } goto U8mVK; R6Sln: fMGqR: goto T651C; KJZmr: } public function remove(Request $QiZOc) : array { goto CDYaW; GThwg: Q2nem: goto gv9N0; RzaUS: if (!$UGmxt->fails()) { goto Q2nem; } goto iz_Qy; gv9N0: try { RechargeType::updateOrCreate(["\x69\144" => $QiZOc->post("\151\144")], ["\x64\145\x6c\x65\164\145\x64" => 1]); return ["\143\157\x64\145" => 0, "\x64\x61\x74\141" => [], "\155\163\x67" => "\xe6\210\x90\345\212\237"]; } catch (\Exception $FBi7X) { return ["\143\157\x64\145" => 1, "\155\x73\147" => $FBi7X->getMessage()]; } goto DoqKg; iz_Qy: return ["\x63\157\144\145" => 1, "\155\163\x67" => $UGmxt->errors()->first()]; goto GThwg; CDYaW: $UGmxt = Validator::make($QiZOc->all(), ["\151\144" => "\x72\145\x71\x75\151\162\x65\x64"], ["\151\144\56\x72\145\x71\x75\x69\x72\145\x64" => "\111\x44\xe5\xbf\205\xe9\241\273"]); goto RzaUS; DoqKg: } }
