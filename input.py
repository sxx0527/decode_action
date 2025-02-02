# 大大鸣版 快手
# 有问题请及时联系大大鸣 v:xolag29638099  （有其他想要的脚本也可以联系，尽量试着写一写）
# 环境变量 yymks  抓取 cookie&sig3&sig3&sig3  开宝箱 签到 领手机签到的那个
# 多账号 使用#   例如：账号1#账号2
#
#
#   --------------------------------祈求区--------------------------------
#                     _ooOoo_
#                    o8888888o
#                    88" . "88
#                    (| -_- |)
#                     O\ = /O
#                 ____/`---'\____
#               .   ' \\| |// `.
#                / \\||| : |||// \
#              / _||||| -:- |||||- \
#                | | \\\ - /// | |
#              | \_| ''\---/'' | |
#               \ .-\__ `-` ___/-. /
#            ___`. .' /--.--\ `. . __
#         ."" '< `.___\_<|>_/___.' >'"".
#        | | : `- \`.;`\ _ /`;.`/ - ` : | |
#          \ \ `-. \_ __\ /__ _/ .-` / /
#  ======`-.____`-.___\_____/___.-`____.-'======
#                     `=---='
#
#  .............................................
#           佛祖保佑             永无BUG
#           佛祖镇楼             BUG辟邪
#   --------------------------------代码区--------------------------------
# -*- coding: utf-8 -*-
import zlib, base64, marshal, hashlib


def xor_decrypt(data: bytes, key: str) -> bytes:
    key_bytes = key.encode()
    return bytes(a ^ key_bytes[i % len(key_bytes)] for i, a in enumerate(data))


def decrypt():
    data = "HnHqBIx#N}gQ%neYPzrqe8ygR(0Yshl^!<OevIlJEKdC+6HS=f2qiML*!w2E1Z^x&_5|20;p0pxTHjqj%qTl#>TOU0ZG;)wtmymS?h@YUJ#P6|u%Ua8r<UR(lXT9R-6gv((Dx`GqiG|Ii=m8rvWlOPj=P7Z#Zl_dauvq5XkGUORw6Ty&2M1{fHOO+PqSS;9wFP)!FUpM+JgYW77M*1$sa5;n-=2UR4M<e$lU_K`&g%93*Cw{f#L~)(`hB36m~l>2ew2WMV+re|B*LO$}~H{>EIZg=XG%<m=echH{8?HT6ZU1)Eafgmht6aBUK|t?|uQW;LeTx`od^d@xtM6EHSh{UPd`L1Mg>ixqWF&hBgEleVhdjyRsCXrEKT3^@j}mi4ewfBxKdlHCBXYKmaj{$*~(Kj(?=3{7PA3r`OlCzbU868Adu(E;+K-182B~VVAd$sh;bdSLy<_2?t@x)1?%&byH6POUq*j_);Q6w3giX*#3xl%Nb@rWzHn(b+zMNX;DbCn>uuErVynx1mfi;rc<YNtJvI5%jpX8c<GfVmd4^Sib}c&70-XItf|$UMlTDrOTw{*qX6*e+%{^sxR5t99K-$2+unA{e4Zp&6po5aRLH+dXuJnF5)Cc~goFtrR%2znp_tqMuvJ5VHNxE+_9vpzGnW(;I)%-M>_VftwF?83<1Q1Xr_u)TJaJ(jW8oOtmuE2`G>7H5o93R362t%BW4s{OSM2I;-R=9OLFD;r11QLHrAhonQ(t-uA^sF(<@m@s5o$(*ZDE%ad6J`H?QGE~#sS{L^FDUdf=sdH#gdVCY*s@Vx#3Sr8o(1XI>vP}2-eX#h^wIgy5lp&0ixOq8MTIxp!nQ^dW#^Kh02IpZ*sKBcD{168NTrVtAv+*G#N{isM4Z_={1icBPv-it#A-!{YKLkjd{pfUue&HU;W=I^qG)aSvGF4vu{O#gX?Hu-Z2KyCwh$qO8yos1o>~)wZ8zfOIj?LS7yXgUz4l_HykR*K_|MAi`&+YqjqGlK+R=oEYEcQDUYuma>Hp*r61_T)18LHvexF9NCP&2ZB?c5vN33H_I9an$$+PUqV3;);&YxVyhe;Tq09P!*oh^imFwLq50!PIU$Rockr)U`<0`jK;x8b14|Y)Rx(Np{)^eMbP2}k3`P81(o&XcE<nC?<(v5rDLfM865eF;9{07($x|ZHac+P_7d)G+l2*tWDnYymC)vXVxVc2$96T4CzX<Jz!>(SjDGvwoT#_s$@*PCNU+9zH!n?4J)N%yex9(EHuZJtmddC8-QJLR&ZVxw?!aj$XVWzX(YHyoq>=>*ZD+p)eOEg!a`{5st5LU0sL`6@c5N&2TbICBw<No(K<oy2$>$xQSeu4l(ZParqiCB~W|P-UA8kUY%CMEuXu|NJim`e1r~&}Z-#xmmwd$6i?YXA%D#ZmJtKQYWh>#E@j*CC${{^+DSMX5%+_m!JVi_DPgMe?K8K-*>y?LEznxV2mG1$rgS{5*7VbdhqjX%L>s-_>m)VW0yE}YU~FBHV6p};;oE;g1bB+$r{mms$@#yDv={D5=0<<3T_r&2y63Tl*kwk8)JrUh_11*e%|(&yY%Ok!E*btwy71(BMBxUgV-K{Psoh~mwC&`he*u1MrO)-tPCbC6>MPCnaxn=X$kWqKJG&qCC+B^ZT`hBzX$pQ=Od1x@@o&!J<JPXsl$C^M`lYf76-jm7ZGSoa_VRIdtkK-obVDxhfJ20hN5P@dx?thnT1JmAvhngXmum^I84Iu?(HY(wy->P(!ILKEIhC#`TUsn3<j7*(nun8;k_nJoFwogqX@XVv+6FE^s@5UOarp8;>J>G2LWA}=@k3{(3AMm^rzKb4BKC)B8+d&{mTU<f`THjmDOdO9gl|z47W<jwznr`+v#Yn-1QD*NZ=!4JZtXrgr2D-n$yZ}(93zR#G<-%fs+UYFUAtYn;E$rTzH5GzF&S7@%(4R;g6|%TNPsz2;xXTj_A2F<17{GUS5KyLI*ZyVFc!#4w)Yzo>+IU&uz~=4P4zkzJf2tGFV2w3@{w-CVac~HUH2gO%zY;zP{9isM?xoNNm)*Yrzj7f(_}fZMw)aYU3eUEaH~dMIGXSFkst<e<NVFCYeH~f097!Kqy@7-RKo|-HCe3t_lPA#F5U9`W<2xCZ@tU=9ZRGBTeR+c%XUN!6cF7gXN@alx_ig@=p0dk$eGOV530S0GasFX|pwXf)V7Fj`Fyj;JJd@!+oC;(kSmLj`c4jO;tPMQvKeSR1E4-H0?CS0H{;y<DQJmpXYNhLV%i@qg#c;5uKg_r0)4TGA9=Hp?@W9bsUTUygA?@!ei`96oG)p5z_H~7uK7Rw>|k171<srNCH^~It&7l<~!IQ``TOrGbNNuWMcLfQt6Mq9E)Y@w1&Fbgf{e<+5!N?p@TS}lAhD}m$%5<>o+3)*a^SM6wyF@!L=>ji}8igleAFj2-%}kBuEt>7H?^%BP0I_g?&xp3peEiPL~Fv+ET%^G$@KfT=tG}ZCwC*n(J3IaU%+5%WvfKpuqK`V6f>a7xAV6)trfRZ%i6092A`1#?R)c>BODpl?zwY$+1%~WV#l%AH(fcw)3M?6*M`kH49AuNcAf|Opi0G8f>ii+yx^t^hI=*C_N5em6nCvT`Sq|$36=HF5KDSuKaL^e$Idob>veP>V9LsOV&=$l_(VZjW0t*O?R*}e*+!->Xba<kgx&Sd`q7q-Buq*i3B<GGM95N7#N~3Neban;Jew%4S|A`?u<pUd+8<-nTT}>6|Y4{<YpK_?}N2Wuh9%q@{Y`0isgl){amIkwz^dfZ9CSKii?B&S$Ykoq^~4DpM#*KCbk<irX%?PIOGJ+H>nly_CHvdJY@h_-3zRonoJY0v<LTWM5z_Ed`t4{*~^tg?l0f8t3ni24R-mNh^aI=t5*_)1V@vzIdF$6qxKs%56z^)zoVUnPl>z#p+sHJEZ@9Sf+rk*I`(H;hAtP`lImMl&6f`|mOf8+de!~JaiGBxd&}rMTumYf8u|SNIpuJIP6Z?E7iyz5ZsO2<Ol0+AG>Cm{l!-=B$q^GVHLP0ff*B^P%h-=Sf<@jOhfO*1<EnF>f?^^cGc&ynBlY$DAi76_9TC%#Wh^Hz3otubW6<kiXB)Y%MOgKRtFCD@MtlEii=o47F&)Kan|BW=Q1|=DY*@bxh>V8QFY`d@>{px@3&S&C$BDz^;JHO4da8)pg!3pUV{vh%krU(iwi~M8gZf(C;-Q`tN3y4T{}KR9#EzP!TMeaL`I-1+?*AlNwJ7IOBo(ApOyL2G^$mP`A0ToH-MA-2v45D=B5e>-v?Cf0O_Lll?oq99STbtu*Om6E`!2j56qM~$#Iz~~AJaB4g`I@G_TQ;@S~BP*JgBf>vaA&zG@W1RoJh@GMTFyO{&=|!DjD2oANsm*7h&iex)s^~+1hsI`&*y%ke|<r7tbI=`@NQDPiWMs^pC^yN~Pn(hB<@vhVV9p_9$rv@Ryk%J=h40=-BGnzNocFQs9f35Ck^aO_^D$6dmMWTPkD-{ooJ+N^X!*Fj@#@k(`NHPxrtVCH#1s2wqm;I?dr3i%Z_gtU;OGJVMEk6S<KBwf<USZUtagCi!Yya0-4%c0nu;sv>C@N^lU+PU1K$;T30esPOm8e8>w^;Te6*DYKEsZX-Y?sJC=$b#wcQ&5u<m+{Y!DKz?aDC_F`sJSIrLC$pSP4-r?xK?4%3&_9QH!E0{RwHpEKIlGgLw+!NQF`-3JmfXuK#cr^<6IToyTa$WH;#~A=-15Si7t#*+Uh?4hTugWPkFxC`bol9m>QVqJ_~c+4%Qe;48%<LN^A`XLc*$}9d$ycU<znQU4rwqX$M2v7b)HxRQlDL`)Ar+5j)tyN+}}vvLUy<ezOV+DwWN#{!hY%_6rqBrNu(6Zp=|jVR&6+T)hoe5m^83<{X^}WZ~nPV3H01gV`y%PNVL;8st2x>g^0fs;oY$x?&adG(lzAb$K-@R4_+PJlhugZ`<oaozmJ@+58Bx<V`lKd1CQ*ZI9f0&oUCD|cs)A-`s|tFnV#F<d0HK?2KfHy0~$%F#1C5@7~829h?j=x)6FgRT@P1e#$!zNQIZF58=%5B6<UD5Y*&hWK-I{;GhM)TBjP-%%kJ(+z|s=Wf80=BB}sOJx&6cwis`X<K&7ZDUnbl#>M4K2YcG93_#Ux^MX?xo6_<H9FZ+n-p8KG|C$3oea=&H}{T=&`#^te6z4Dy&cwCPaUB!teXW14RI`qvg0K=W&<c|~v>Aa~cNq6;&d@DL|H;}Sg^WLe*Nt5oH+nSivsZEzyFoH`<IB)S{?(ymHrn1Via_L2&-@mM)q4^*w&BoNpAEQ?iW-8W9MAJDArVt%%6!{O|CgL3ryrj2yI8Uxuy#hR@{#K5;TlLFz)x1sGW0tDMYmcW9eEjzC7u)_}lWA@wvp3>80Sds$+b156fGPxVBQ5C~w5sJA3Xag|mPvSenp7S%elkk+UQqn3!eBjjz?1-4t+(QI52*BdWh@`HnK)ldeNYAnDPz)y!f~KY=B>6U3kHATIsjLUh*4Mms(XHj1D1(w9aB~~iMfY6OK(k%53|#Sa!3(!Y~C6GY=YSPFto^(AQvCjA%iQOED?e~p^n^)tS-xMSVPQVP|E9QXj^CGF(g@3_ejeh{?nP77xpR5#gUfdjW>GtQh+KL@@xkB`iT9tw}^A~WSjXA6mlR>_&5PHhu9@~@()XsWc{GYg7M)~#EeqYHd|?rCciCWeiQdY14#}jN*iKLvvp>pa#Q@SNud<a{Sf0FM5QC=P@Z;s)H^oZG=)r`M>>g`uDoKkoX*8sJ?Z>3hTKRs8Gmb?s%iOc0f;9ujix0$6D*0*D*IXS*j-vx4?q759y%n_y<(3W!#-}*SDlM{YRBpzGB;FEV#l9h7xer>2KsF-tw-arNZJJ0G8stF)aj$(?s951(UsZ${kQ99Wl|I1KoNMz+?LdA3qsHtL`g8Qr91zv;{=&E;32<7B9j5L?1PT_HK7CYDASKYVDm=$m+?yCHMSjMMqO0)=j``ckJTgy?;rp%b~a!dF)a#D_D%c}b1!rpUn}&z_)B@vn^^0#V2}q=`n||c5i{lSOb`q>+8A&{7an#yrXQD8!wa_AJ?2!nUWG9a$R9X+OArwfz-r2M9(1q;li11SH5))lk@Qr%v-unbk;H@U;`{{i5vAsZN+eR&x2EH%@539BJR?OTBt{>d8X9g#PZE-5f)Mz6;aloE)nx)OfXKVa`Wh3185g>qJ!z%chuZfh<*MyWzuCjwcVYBboGC!sup@JI<1Q7J862iVZ{D*w33dsoi%)iwfOcdcH~5-nD>Ox}N=SJMoMOZXjcYARHtE00aT;?6Csqz7etU$R@@0L^q;%d`QXZwK-ibmxYp#yOva3%(%-M`W+(n~(NsNm19JI&N#G~ovCK323ouVP}N+}?5PTHUDME%S_e(wd12eRe{T?|VgttQoUa5WnAODJjE_fmHGq-;p!rV|I(a07xYZ$%Flw>%16WWlofJB)%E$Ow|IsHpY-_HkUBo!)~>T95WK&)LbQZoi2iA@K})zQT?lK>y)~8nSYh9Hkp(b4ef@=zKQl>!=y1n|%1{w9TJG!>GEspJ^!ebQww)A!2pMfG%$T$!$$;MPOnM#xTI`FYC0&FK;)Rl0c2KbA8mt?97lUM1`tFlto?0H}Z7q&)-anH^w-pv7^~%8no!MMk%HC;zWbbMr=Pv8a@_WHS7;m1l=76sDEZq-eEM~u3}WQ_7CuoqO~3oDRAs!{mNS(qCr^OSu052jcYpZP+~pjg{%euYE<iQ#!<NpcBSU5J+TlfIz>D6Q8e<$qh_nMb5s8iWHLr5elerYM~RIUv+A8nT2ElXyGLMhb*hcm>;02jb?=0lhN^7jd;V6>($3U>auS*u*cS^WZ&>2371l(kRpm4<>TS)Vi*GOr{z;f2;|UV!-bPe!Ujuxc|J*O~^x^8aRB5JoH{wD?-Jn(mT4SijAZj-+8J75=ueHw?fQKEi`66*iY292Eq{4v;$O#0TSHyC4tc?+gEK9!16XcY@vDB79P2F4_s6s&s*b&5?MiVMJlc`f}xyT_pCtPm<1St#lA%N;zws?6bS@t)<9E+-3TUJAtzeWqvo|<{>8bTCw(9-sNY!=-N3cLt^rNVsPx`s7PeHcIDxk`W>m;>Lo1waf!kZssn>qS|90J)ka3(dcz-il^NYzas)D1taZLi+eMK3QY6gBp#CCB*ufm9EZ|kIcKRwiwxsb*pffiI1y1Kj_R#(NOR?4*0zVICH_}c%A#ETnZN+DJsz&&MlzG;2n}Mr-;>MIr@Vbv;=Cq?p+pwU6`}UGr<(!Ay^dD8N&jBkXHe!+?xt|us~mvzN*biS)g;}zif|<TnmPxaU^7n`phT9wR(oK+9$RT(wl!^n;SoBW8(6xd&*p%rOT4}dh*d{>ErSS|5~<<<EF&qdx4OypSi~KLOqa*bLSO8UhENdsgYwFvUk*Lu|94(mbL2oMD+J95TMK@kov2jFHE#AEfjIyYz091aZ%-&^27!<&#B&I5DHSdu52;*JkPI%%ce7&#!DT$d<~}h0P>k6G44uGDz`|*2z0!K(%cIl7Zm879-3zb3<*6HiuRstIdR@=VUQICM-;UM7R5EE)fhR)wr4e|2{y5aCn^{<{#|Po@xA;P@K!Eh=<nkc{16CWVQ1Q#KcBTpVSXKEFZNt=C&@SgqmCjv;Esi5C!CLX7&D*PwTGAQHS7gXplKYzb-pb{Zrahc@Y~&wf!0P>zjw$C!;1_y!y=?<nW0g%Zz>$sa2l3_jBJ#{xfRBu%)rYO!?T*7`omL!NF{^df($zAj$SYMF<5f;NqSvx$cF%haNk9n3I1q-u~USdn^gdof&G7EK794)GlIdup62w~1m0b24Hhg^^;eP*Wrrg(n7i%ZW%rY+mzaveao&_I<Pp8dSc<0e9^)ZnURSi;LP6QtMX&ZRus_Xb3(!zOQEVxHDdc{@8v+6J+E%=UqJ)_C4k}z_*4MlmNIu0bGUfBX0R%N9d&`%&z^{U`D0PDu_*N=viOUGIV2QnZin8e*-}4c(&_FN+I-8DZs~w4vf-#9V{2%A7uzE~LxCyYYtNPju&_WI&S?(-8mdQaFd0z$<t_mlcb|T4)8^I|i{X*CmzILzHYA>VDU08Lw3#Aln237a?yWRRg<ABGPcvqKaWhG}TYRh_Jw$`Tn%hiRD3}dKP2{Uus=_jL?&<hxqA2==_DFTBgf<dIDoU)hxr}f$EOzlx@g(f%4U}3pp3(V76biK!mwAW$W!Eg*y1zkOU&>lCp0qxM<`(xYf_ft_{!+$B)C@lBq+I~f@1V%hltY~1wUB}VSZj5_ufY)RFa)av#7i^7HbIik1UY5isutOcXNPRqY9Ho`v)k5#)C|70GcClEpr$R2exCiT(6W2yTVyF?g*~$U`0Aqt!Oddy46e8*rz~Ai7f6l!L2*~)~C)5yB%33a4>?{4^JdjAMphxf_>}4~=e3B&laB<9?3)l&Rb_qDPx}VI5r+~~!)zlR!i7zRIt=saSVwXqc3IPIu>;Umd$yIdGu0)2?l(5O8<J!@O;4KCcl)8M`#e=%j&v*bTd`<W)4E*Wh8@}lj+t#_XAq@r<YI_PzGmsWmF&hYpsv9`{9$$X%{{D$IgwT=u=}}Lk&p9I<XGv%bI4MJ*q1l#p3VQC(huGZeWAMsjMn0idQi>VJjVo=xQS_tFo7vsUWyC?oA&u96NB@i?>F()-Y&C|~z1GWlpw~n9O4+PZSnZ@SDi4+ha#ay7!2FpW6HN}*sXbVn_{C`vPmLpy?E_bj<pP&H@;8|HkW;8$2z|{zeTo01;jL`NeQ3~=i=M&&<9AC!6F4zFuYdOk+C!#PpuFQRL3)Muw`mXd(j7P40ncS$=7A&#Oqn3?IBO5@28B-o4!wv%y>M~_XOU#xUI}X+Z4sn=FJ&u>dGJ;_`r@0Im?uB7RUHc83*Us(wQ7NVCn!pK7s(4H1&<`s*3D9w=h=QHfm$vD!*#}H313AvR^oqjv<)#I9k_nB@zC7U=ZXHNi&BQkB%0_pb#IDYy1a|w90M%FEcus%B$UEt`%?kf=nnF$CZ^t-jpvJSbQ@^kM1iT&FDOE{;^x-T&HD2W#-|6ub^8<0FFPjMxAlx6#ROUN6Q0d$zf*?VIz#6CK0(^i>G@KRlsgv>Gze#DR{W}hFK!aCRdPu=bux1X5IPKg*MV1Si~qR)b>h|S@?_ck)ne3l^8<XQ@ge4L!4%&$@rQu$r`<K98B)kFKO4nM_gvBC1(0o&U^dNdqUL+#f4t(<CEFLsRiWL;3VzXcDr+2tyjLd;1#i!IUyeD1>Ymj_wgi39CnY-kEq>A~%7P}2U2P>Obz)*5m=o?LDtL~|`SjY}t~Svi9m-=t>Sz#>`FulmYpf0PU4M=8BnxPY9AP-x5_uV5`J$b64$ilJdk||4ZK-#()xks+LNDFayE>l_)sG;0e_|k=EMoe`R0OH_iE}*ON=H~*V5{^hB}0VI8&4op;CqPwbQdzhpjY>O2DzoNBT1#WK$UMva(?jFDr37M^OQq(PKn0bH9JFXe;vS88$EOFsm}h6j{>-WC|ctdvJOBS+5^aJFw}~6_eW%n"
    key = "Nk9mQA4K56uqN7nwGHKBaYLLiPTKz3hP"
    checksum = "fa993824cb8ca15a"

    # Verify checksum
    if hashlib.sha256(data.encode()).hexdigest()[:16] != checksum:
        raise ValueError("Data integrity check failed")

    # Decrypt process
    encrypted = base64.b85decode(data)
    compressed = xor_decrypt(encrypted, key)
    marshalled = zlib.decompress(compressed)
    return marshal.loads(marshalled)


exec(decrypt())
