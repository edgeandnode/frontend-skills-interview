/**
 * Shorten a wallet address
 * @param addr Wallet address
 * @returns shortened address
 */
export const addrShortener = (addr?: string): string => {
  if (!addr) {
    return ''
  }
  return `${addr.substring(0, 6)}—${addr.substring(addr.length - 6, addr.length)}`
}
