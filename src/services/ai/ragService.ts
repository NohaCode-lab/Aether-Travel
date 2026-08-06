export interface RAGDocument {
  id: string;
  source: string;
  category: 'visa' | 'guide' | 'airport' | 'embassy' | 'hotel';
  content: string;
  score: number;
}

export const ragService = {
  async searchKnowledgeBase(query: string): Promise<{ documents: RAGDocument[]; citations: string[] }> {
    // Simulated semantic vector search over travel knowledge base
    const mockKnowledge: RAGDocument[] = [
      {
        id: 'kb-1',
        source: 'Schengen Border Control Regulations (EU 2024/99)',
        category: 'visa',
        content: 'Travelers holding US/UK/CA passports can enter Schengen area visa-free for up to 90 days in any 180-day period.',
        score: 0.94,
      },
      {
        id: 'kb-2',
        source: 'Munich Airport Authority (MUC Official Guide)',
        category: 'airport',
        content: 'Lufthansa flights operate from Terminal 2. S-Bahn lines S1 and S8 connect Munich Airport to Central Station in 40 minutes.',
        score: 0.89,
      },
      {
        id: 'kb-3',
        source: 'Japan National Tourism Organization (JNTO Guide)',
        category: 'guide',
        content: 'Japan Rail Pass covers Shinkansen bullet trains. Tipping is not customary in Japanese dining.',
        score: 0.86,
      },
    ];

    const lowerQuery = query.toLowerCase();
    const matches = mockKnowledge.filter(
      (doc) =>
        doc.content.toLowerCase().includes(lowerQuery) ||
        doc.category.toLowerCase().includes(lowerQuery) ||
        lowerQuery.includes('visa') ||
        lowerQuery.includes('flight') ||
        lowerQuery.includes('japan') ||
        lowerQuery.includes('trip')
    );

    const citations = matches.map((m) => m.source);

    return {
      documents: matches.length > 0 ? matches : [mockKnowledge[0]],
      citations: citations.length > 0 ? citations : [mockKnowledge[0].source],
    };
  },
};
